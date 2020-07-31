import React from 'react';
import Head from 'next/head';
//import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Link from 'next/link';
import { NextPageContext } from 'next';

// using typescript: 	yarn add --dev typescript @types/node

type fashionProduct = {
  id: string;
  className: string;
  src: string;
  url: string;
  headline: string;
  description: string;
  name: string;
};
type Props = { fashionProduct: fashionProduct[] };

function Content(props: Props) {
  return (
    <div className="content">
      <Head>
        <title>fashion</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="fashion" />
      </Head>
      <Nav />

      <ul>
        {props.fashionProduct.map((fashionItem) => {
          return (
            <li className={fashionItem.className} key={fashionItem.id}>
              <div className={fashionItem.className}>
                {/* Use Typescript, for Link error add : yarn upgrade @types/react@latest  */}
                <Link href={fashionItem.url}>
                  <a>
                    <img
                      src={fashionItem.src}
                      alt={fashionItem.className}
                      width="150px"
                      height="300px"
                    />
                  </a>
                </Link>
                <h3>{fashionItem.headline}</h3>
                <p>{fashionItem.description}</p>
              </div>
            </li>
          );
        })}
      </ul>

      {/* <Footer /> */}
      <style jsx>{`
        ul {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;

          margin: 0 auto;
          list-style: none;
          padding: 10px;
          font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
          align-items: center;
        }
        li {
          display: flex;
          justify-content: space-around;
          align-items: center;
          background-color: #e7ecf0;
          margin-left: 10px;
        }
        p {
          font-size: 15px;
          color: darkcyan;
          text-decoration-line: overline;
          text-align: center;
          padding: 5px;
        }
        h3 {
          font-family: 'Lucida Console', Monaco, monospace;
          text-align: center;
          padding: 5px;
        }
        .dress,
        .flowerprint,
        .ways,
        .jumpsuit {
          width: 40%;
        }

        .ways {
          margin-top: ;
        }

        img {
          box-shadow: 3px 11px 18px #7d7d7d7d;
        }
        .dress img {
          width: auto;
          margin-left: 70%;
          margin-top: 10px;
        }

        .flowerprint img {
          margin-top: -20px;
          margin-left: 50%;
          width: auto;
        }

        .jumpsuit img {
          margin-top: 10px;
          margin-left: -80%;
          width: auto;
        }
        .ways img {
          margin-top: -45px;
          margin-left: -90%;
          width: auto;
        }
        @media (max-width: 500px) {
          ul {
            display: flex;
            flex-direction: column;
            padding: 10em;
          }
          li {
            margin: 1em;
          }
        }
      `}</style>
    </div>
  );
}
export default Content;

export async function getServerSideProps(context: NextPageContext) {
  const { getFashionProducts } = await import('../dbFashion.js');

  const fashionProduct = getFashionProducts();

  return {
    props: { fashionProduct },
  };
}
