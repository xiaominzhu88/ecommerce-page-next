import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer.js';
import Nav from '../components/Nav.js';
import Link from 'next/link';
import { getFashionProducts } from '../dbFashion.js';

const fashionProductsList = getFashionProducts();

function Content() {
  return (
    <div className="content">
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />

      <ul>
        {fashionProductsList.map((fashionList) => {
          return (
            <li className={fashionList.className} key={fashionList.id}>
              <div className={fashionList.className}>
                <Link href={fashionList.url}>
                  <a>
                    <img
                      src={fashionList.src}
                      alt={fashionList.className}
                      width="150px"
                      height="300px"
                    />
                  </a>
                </Link>
                <h3>{fashionList.h3}</h3>
                <p>{fashionList.p}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <Footer />
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
          background-color: ghostwhite;
          box-shadow: 0px 3px 5px steelblue;
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

        .dress img {
          width: auto;
          box-shadow: 3px 3px 4px green;
          margin-left: 70%;
          margin-top: 10px;
        }

        .flowerprint img {
          box-shadow: 3px 3px 4px hotpink;
          margin-top: -10%;
          margin-left: 50%;
          width: auto;
        }

        .jumpsuit img {
          box-shadow: 0px 3px 4px blue;
          margin-top: 10px;
          margin-left: -80%;
          width: auto;
        }
        .ways img {
          box-shadow: 3px 3px 4px orange;
          margin-top: -45px;
          margin-left: -90%;
          width: auto;
        }
      `}</style>
    </div>
  );
}
export default Content;
