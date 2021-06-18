export const isWeiXin = (userAgent: string) => {
  const ua = userAgent.toLowerCase();
  if (ua.match(/micromessenger/i)) {
    return true;
  }
  return false;
};

export const getCode = (openid?: string) => {
  // const cookies = parseCookies();
  // console.log(`cookies`, cookies);
  // const { openid } = cookies;
  if (!openid) {
    const appid = process.env.NEXT_PUBLIC_APP_ID; // 微信授权的公众号的AppId
    const redirectUrl = encodeURIComponent(
      `${window.location.protocol}//${window.location.host}/api/wechat`,
    );
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_base&state=123#wechat_redirect`;
  }
};
