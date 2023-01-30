import React from 'react';
import { NextSeo } from 'next-seo';

interface Props {
  title: React.ReactNode;
  description?: string;
  keywords?: string;
  disableSiteName?: boolean;
}

const PageTitle: React.FC<Props> = ({
  title,
  description,
  disableSiteName = false,
  keywords,
}) => {
  const newTitle = title || process.env.NEXT_PUBLIC_SITE_NAME;
  const siteName =
    disableSiteName || newTitle === process.env.NEXT_PUBLIC_SITE_NAME
      ? `${process.env.NEXT_PUBLIC_SITE_NAME}`
      : `${newTitle} - ${process.env.NEXT_PUBLIC_SITE_NAME}`;

  return (
    <NextSeo
      title={siteName}
      description={description}
      additionalMetaTags={[
        {
          name: `keywords`,
          content: keywords || ``,
        },
      ]}
    />
  );
};

export default PageTitle;
