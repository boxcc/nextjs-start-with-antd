import { GetServerSidePropsContext } from 'next';
import { isServer } from './index';

// import { ClientError } from './gqlError';

export function fetcher<TData, TVariables>(
  query: string,
  variables?: TVariables,
  ctx?: GetServerSidePropsContext,
) {
  return async (): Promise<TData> => {
    const authHeader: { Authorization?: string } = {};
    // let token = ``;
    // if (!isServer) {
    //   token = getToken();
    // } else {
    //   token = getToken(ctx);
    // }

    // if (token) {
    //   authHeader.Authorization = `Bearer ${token}`;
    // }

    const res = await fetch(process.env.NEXT_PUBLIC_GQL_ENDPOINT || `/`, {
      method: `POST`,
      body: JSON.stringify({ query, variables }),
      headers: {
        'content-type': `application/json`,
        ...authHeader,
      },
      credentials: `same-origin`,
    });
    const json = await res.json();

    if (!res.ok || json.errors) {
      const { message, extensions } = json.errors[0];
      if (extensions.code === `UNAUTHENTICATED`) {
        // prompt.show();
      }

      // console.log(`json.errors`, JSON.stringify(json.errors))
      throw new Error(message);
      // return {
      //   error: 500,
      // };
      // const errorResult = typeof json === `string` ? { error: json } : json;
      // throw new ClientError(
      //   { ...errorResult, status: res.status, headers: res.headers },
      //   { query, variables },
      // );
    }

    return json.data;
  };
}
