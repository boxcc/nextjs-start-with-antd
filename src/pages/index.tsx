import { NextPage } from 'next';
import { Button } from 'antd';
import styles from '@/styles/Index.module.css';
import PageTitle from '@/components/PageTitle';

interface Props {}

const HomePage: NextPage<Props> = () => {
  console.log(`1`, 1);

  return (
    <>
      <PageTitle title="Home" description="网站描述" />
      <Button type="primary">Click</Button>

      <div className={styles.demo}>Demo</div>
      <div className="text-xl">tailwindcss</div>
    </>
  );
};

export default HomePage;
