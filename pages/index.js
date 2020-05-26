import Head from 'next/head';
import Nav from './Nav.js';
import Content from '../components/content.js';
import Footer from '../components/footer.js';
import Pet from '../components/pet.js';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Nav />

      <Content />
      <Pet />

      <Footer />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
