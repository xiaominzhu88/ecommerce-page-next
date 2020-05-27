import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />

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
        a{
          text-decoration:none;
          color:rgb(33, 24, 155);
        }
        a:hover{
          text-decoration:underline;
          color:hotpink;
          font-size:1.1em;
          font-weight:700;
        }
      `}</style>
    </div>
  );
}
