import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav.js';
import Link from 'next/link';
import Footer from '../components/Footer.js';

// Page that links to each item page

function Dogge({ petLists }) {
  return (
    <div>
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <div className="dogge">
        <div className="dogge-page">
          <ul>
            {petLists.map((list) => {
              return (
                <li key={list.id}>
                  <Link href={list.url}>
                    <a>
                      <img
                        className={list.className}
                        src={list.src}
                        alt={list.className}
                      />
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <Footer />
      </div>

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

        ul {
          display: grid;
          grid-template-areas:
            'firstRow . .'
            '. secondRow .'
            '. . thirdRow';
          grid-gap: 5px;
          background-image: url('/bgcCool.jpg');
          margin-bottom: 2em;
          padding-bottom: 1em;
          list-style: none;
        }
      `}</style>
    </div>
  );
}

export default Dogge;

export async function getServerSideProps(context) {
  const { getPetProducts } = await import('../dbFashion');

  const petLists = getPetProducts(context.params);
  if (petLists === undefined) {
    return { props: {} };
  }
  return {
    props: { petLists },
  };
}
