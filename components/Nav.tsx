import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Cookies from 'js-cookie';

type CartItem = {
  piece: Number;
  acc: String;
  cur: Number;
};

function Nav() {
  const linkList = [
    { name: 'HOME', url: '/' },
    { name: 'ABOUT', url: '/about' },
    { name: 'FASHION-STORE', url: '/content' },
    { name: 'PET-STORE', url: '/pet' },
    { name: 'CONTACT', url: '/contact' },
  ];

  const cartItems = Cookies.getJSON('cart');
  console.log('Nav-cartItems', cartItems);

  // JUST FOR FUN :)
  // used api folder in pages, which contains dogs json, here useEffect to get response from /api/dogs using fetchData and return them in the console
  useEffect(() => {
    async function fetchData() {
      const dogsResponse = await fetch('/api/dogs');
      const dogsJson = await dogsResponse.json();

      console.log({ dogsJson });
    }

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <nav className="nav">
        <div className="nav-bar">
          <h1>ZHU</h1>
          <p>FASHION & PET STORE</p>
        </div>

        {/* Navbar links */}
        <div className="header">
          {linkList.map((link) => {
            return (
              <Link href={link.url} key={link.url}>
                <a>{link.name}</a>
              </Link>
            );
          })}

          {/* Cart-Page link */}
          <Link href="/cartForPayment">
            <a>
              <span aria-label="emoji" className="emoji" role="img">
                🛒
              </span>{' '}
              <span className="myCartSpan1">
                My Cart:{' '}
                <span className="myCartSpan2">

                  {cartItems
                    ? `${cartItems.reduce((acc: string, cur: CartItem) => {
                        return acc + Number(cur.piece);
                      }, 0)}`
                    : '0'}
                </span>{' '}
              </span>{' '}
            </a>
          </Link>
        </div>
      </nav>

      <style jsx>{`
        .myCartSpan1 {
          color: red;
          margin-left: 0.5em;
        }
        .myCartSpan2 {
          margin-left: 0.3em;
          font-size: 2em;
          color: blue;
          font-weight: bold;
          background-color: beige;
          padding: 0.5em;
          border-radius: 50%;
        }
        .nav {
          margin-bottom: 2em;
        }
        a {
          text-decoration: none;
          color: mediumblue;
          font-size: 1.2em;
          font-weight: 700;
          line-height: 1em;
        }
        a:hover {
          text-decoration: underline;
          color: hotpink;
          font-weight: 700;
          font-size: 1.2em;
        }

        h1 {
          font-size: 3.5em;
          margin-bottom: 1em;
          padding-top: 0.5em;
          position: relative;
          text-align: center;
          color: rgb(33, 24, 155);
          text-shadow: 1px 3px 4px rgb(218, 147, 17);
          letter-spacing: 4px;
          text-decoration-line: underline;
        }
        .nav-bar p {
          color: gray;
          text-align: center;
          font-size: 1.8em;
          font-family: Georgia, 'Times New Roman', Times, serif;
          padding-bottom: 1em;
          text-shadow: 0px 3px 3px blue;
          font-weight: 700;
        }
        .nav-bar {
          justify-content: space-around;
          align-items: center;
          background-image: url('/cool5.jpeg');
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
          background-attachment: fixed;
          background-size: cover;
        }

        .header {
          display: flex;
          margin: 0 auto;
          width: 750px;
          height: 30px;
          justify-content: space-around;
          font-size: 10px;
          font-family: fantasy;
          font-weight: 800;
          position: relative;
          top: 10px;
        }
      `}</style>
    </>
  );
}
export default Nav;
