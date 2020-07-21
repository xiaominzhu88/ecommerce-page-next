import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Cookies from 'js-cookie';
import Router from 'next/router';

function Thanks() {
  function resetCookies() {
    Cookies.remove('cart');
    Cookies.remove('total');
    Router.push('/about');
  }
  return (
    <div>
      <div className="thankPage">
        <Head>
          <title>Ecommerce-Store</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Nav />
        <hr />

        <div className="thanks">
          <h1>THANK YOU!</h1>
          <h4>Your order was completed successfully</h4>

          <button onClick={resetCookies}>To home</button>
        </div>
      </div>

      <Footer />
      <style jsx>{`
        .thanks {
          background-image: linear-gradient(
            -45deg,
            aliceblue,
            lightslategray,
            lemonchiffon,
            cornflowerblue
          );
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        h1,
        h4 {
          font-family: Didot, serif;
          color: goldenrod;
          text-align: center;
          box-shadow: 0px 3px 3px #fff;
          text-shadow: 0px 3px 3px #fff;
          letter-spacing: 0.3em;
        }
        button {
          margin: 1em auto;
          width: 6em;
          height: 3em;
          padding: 5px;
          border-radius: 5px;
          cursor: pointer;
          box-shadow: 0px 3px 3px #fff;
          background-color: lightgray;
          color: goldenrod;
          font-family: cursive;
          font-size: 1em;
          font-weight: bold;
          outline: none;
        }
        button:hover {
          background-color: steelblue;
          color: #fff;
          font-weight: 700;
        }
        button:active {
          transition: transformY(4px);
          background-color: rgb(235, 208, 121);
        }
      `}</style>
    </div>
  );
}

export default Thanks;
