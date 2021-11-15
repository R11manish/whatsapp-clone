import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>WhatsApp Clone</title>
        <meta
          name='description'
          content='whats app clone made this just for learning purposes..'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Sidebar />
    </div>
  );
}
