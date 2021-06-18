import { NextPage } from 'next';
import { Button } from 'antd';
import styles from '@/styles/Home.module.less';
import PageTitle from '@/components/PageTitle'

interface Props {}

const HomePage: NextPage<Props> = () => {
  return (
    <>
      <PageTitle title="DEMO" />
      <Button>DEMO</Button>
    </>
  );
};

export default HomePage;
