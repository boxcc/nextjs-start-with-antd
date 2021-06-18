import { NextApiRequest, NextApiResponse } from 'next';
import { parseCookies } from 'nookies';
import { query } from '@/lib/db';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `POST`) {
    // Process a POST request
    const [page, action, label] = req.body;
    const cookies = parseCookies({ req });
    console.log(`cookies`, cookies);

    try {
      await query(
        `
        INSERT INTO track (open_id, page, actions, label)
        VALUES (?, ?, ?, ?)
        `,
        [cookies.openid, page, action, label],
      );
    } catch (error) {
      console.log(`error`, error);
    }

    res.status(201).end();
  } else {
    // Handle any other HTTP method
    res.status(404).end();
  }
};
