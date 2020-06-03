import React from 'react';
import Head from 'next/head';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer.js';
import Link from 'next/link';
import { getProducts } from '../../dbFashion';
import Cookies from 'js-cookie';

// page with all user list, which renderd from Nav=>users
//localhost:3000/users  => is this page adress

// works only without 'real database'
// if real database, use getServerSideProps/getStaticProps

const productsList = getProducts();

function Users() {
  return (
    <>
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />

      <main>
        <h1>Products</h1>

        <ul>
          {productsList.map(
            ({ src, p, h2, id, price, className1, className2 }) => {
              return (
                <li key={id} className={className1}>
                  <div className={className2}>
                    <Link href="/users/[id]" as={'/users/' + id}>
                      <a>
                        <img
                          style={{ width: '150px', height: '300px' }}
                          src={src}
                          alt="fashion"
                        />
                      </a>
                    </Link>
                    <h2>{h2}</h2>
                    <p>{p}</p>
                    <p>{price}</p>
                  </div>
                </li>
              );
            },
          )}
        </ul>
      </main>

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
    </>
  );
}
export default Users;
