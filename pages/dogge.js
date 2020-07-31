import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Link from 'next/link';
import Footer from '../components/Footer';

// Page that links to each item page

function Dogge({ petProductList }) {
  return (
    <div>
      <Head>
        <title>dogge</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="dogge" />
      </Head>
      <Nav />
      <div className="dogge">
        <div className="dogge-page">
          <ul>
            {petProductList.map((petProduct) => {
              return (
                <li key={petProduct.id}>
                  <Link href={petProduct.url}>
                    <a>
                      <p>{petProduct.className}</p>
                      <img
                        className={petProduct.className}
                        src={petProduct.src}
                        alt={petProduct.className}
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
          margin-left: 2em;
          box-shadow: 0px 4px 4px hotpink;
          cursor: pointer;
        }
        .Harness {
          grid-area: firstRow;
        }
        .Tag {
          grid-area: secondRow;
        }
        .Tracker {
          grid-area: thirdRow;
        }

        ul {
          display: grid;
          grid-template-areas:
            'firstRow . .'
            '. secondRow .'
            '. . thirdRow';
          grid-gap: 5px;
          margin-bottom: 2em;
          padding-bottom: 1em;
          list-style: none;
        }
        p {
          font-size: 1.5em;
          text-align: center;
          font-family: monospace;
          color: hotpink;
          text-decoration: inherit;
        }
        @media (max-width: 500px) {
          .dogge {
            padding: 10em;
          }
          ul {
            display: block;
            padding: 2em;
          }
        }
      `}</style>
    </div>
  );
}

export default Dogge;

export async function getServerSideProps(context) {
  const { getPetProducts } = await import('../dbFashion');

  const petProductList = getPetProducts();

  return {
    props: { petProductList },
  };
}
