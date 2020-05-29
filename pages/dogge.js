import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav.js';
import Link from 'next/link';
import Footer from '../components/Footer.js';

function Dogge() {
  return (
    <div>
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />

      <div className="dogge-page">
        <Link href="/Harness">
          <a>
            <img className="d1" src="/dogge1.jpeg" alt="dogge" />
          </a>
        </Link>
        <Link href="/Tags">
          <a>
            <img className="d2" src="/dogge2.jpg" alt="dogge" />
          </a>
        </Link>
        <Link href="/Tracker">
          <a>
            <img className="d3" src="/dogge3.jpg" alt="dogge" />
          </a>
        </Link>
      </div>

      <Footer />

      <style jsx>{`
        img {
          width: 250px;
          height: 250px;
          margin-top: 2em;
          margin-left: 2em;
          box-shadow: 0px 4px 4px hotpink;
          cursor: pointer;
        }
        .d1 {
          grid-area: firstRow;
        }
        .d2 {
          grid-area: secondRow;
        }
        .d3 {
          grid-area: thirdRow;
        }

        .dogge-page {
          display: grid;
          grid-template-areas:
            'firstRow . .'
            '. secondRow .'
            '. . thirdRow';
          grid-gap: 5px;
          background-image: url('/bgcCool.jpg');
          margin-bottom: 2em;
          padding-bottom: 1em;
        }
      `}</style>
    </div>
  );
}

export default Dogge;
