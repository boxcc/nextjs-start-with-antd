import { NextPage } from 'next';
import { Button } from 'antd';
// import styles from '@/styles/Home.module.less';
import PageTitle from '@/components/PageTitle';

interface Props {}

const HomePage: NextPage<Props> = () => {
  console.log(`1`, 1);
  return (
    <>
      <PageTitle title="DEMO" />
      <Button type="primary">DEMO</Button>
    </>
  );
};

export default HomePage;
