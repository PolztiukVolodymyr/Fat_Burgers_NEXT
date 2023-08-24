import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css'

const Home = () => {
  return (
    <>
      <Head>
        <title>Жирні бургери | Головна</title>
        <meta name="title" content="Жирні бургери" />
      </Head>

      <div>
        <h1 className={`${styles.title} font-effect-3d`}>Головна сторінка</h1>
        <div className={styles.mainImage}>
          <Image src='/fatburger.png' priority={true} alt='burger' width={400} height={300} />
        </div>
      </div>
    </>
  )
};

export default Home;

