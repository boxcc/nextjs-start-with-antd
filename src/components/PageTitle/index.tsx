import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
  title: React.ReactNode;
  disableSiteName?: boolean;
}

const PageTitle: React.FC<Props> = ({ title, disableSiteName = false }) => {
  const siteName = disableSiteName
    ? ``
    : ` - ${process.env.NEXT_PUBLIC_SITE_NAME}`;

  return (
    <Helmet>
      <title>
        {title}
        {siteName}
      </title>
    </Helmet>
  );
};

export default PageTitle;
