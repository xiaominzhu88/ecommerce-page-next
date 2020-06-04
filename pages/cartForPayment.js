import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import Link from 'next/link';
import nextCookies from 'next-cookies';

function CartForPayment({ cart }) {
  // Localstorage
  //  function sumCart() {
  //    if (typeof Storage !== 'undefined') {
  //      const retrievedObject = localStorage.getItem//('Product');
  //      return JSON.parse(retrievedObject);
  //    } else {
  //      alert('sorry ! No web support!');
  //    }
  //  }
  // const cartCookie = cart.map((eachCart, i) => {
  //   return eachCart;
  // });
  //console.log(cart);

  function removeCookie(indexToRemove) {
    console.log(itemPrice);
  }

  //get Price from cookies in an Array
  const itemPrice = cart.map((cartEach, i) => {
    return cartEach.price;
  });
  // Map each price, convert them into number, reduce to get total sum price
  const total = itemPrice
    .map((x) => Number(x.replace(/[^0-9.-]+/g, '')))
    .reduce((a, b) => {
      return a + b;
    });

  return (
    <div className="paymentPage">
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />

      <p className="label">Items in Cart: {cart ? cart.length : 'No Cart'} </p>
      <hr />

      <p className="cart label">
        Cart:
        <span aria-label="emoji" className="emoji" role="img">
          🛒
        </span>
      </p>

      <ul>
        {cart.map((cartEach, i) => {
          //console.log(cartEach);

          return (
            <div className="itemCart">
              <img src={cartEach.src} alt="all cart images"></img>
              <li key={`${cartEach}`}> {cartEach.name}</li>
              <li key={`${cartEach}_${i}`}>Qty: {cartEach.piece} </li>
              <li key={`${i}`}> Price: {cartEach.price} </li>
              <button onClick={removeCookie}>remove</button>
            </div>
          );
        })}
      </ul>

      <hr />

      <p className="label">
        Total incl. VAT.:
        <span aria-label="emoji" className="emoji" role="img">
          🎈 €{' '}
        </span>{' '}
        {total}
      </p>
      <hr />

      <div className="payment-shipment">
        <div className="delivery">
          <p>
            Delivery: free
            <span aria-label="emoji" className="emoji" role="img">
              {' '}
              🛫
            </span>
          </p>
          <hr />
        </div>
        <div className="delivery">
          <p>
            Ships Next Business Day
            <span aria-label="emoji" className="emoji" role="img">
              🚀{' '}
            </span>{' '}
            {}
          </p>
          <hr />
        </div>
        <div>
          <Link href="/Thanks">
            <button>Check Out</button>
          </Link>
        </div>
      </div>

      <Footer />
      <style jsx>{`
        img {
          width: 5em;
          height: 5em;
        }
        li {
          list-style: none;
        }
        .payment-shipment {
          width: 50%;
          margin: auto;
          background-color: lightgray;
          padding: 1em;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .payment-shipment p {
          display: flex;
          justify-content: space-between;
          padding: 1em;
          letter-spacing: 0.2em;
        }
        .itemCart {
          display: flex;
          justify-content: space-between;
          margin-left: 1em;
          margin-right: 1em;
          background-image: url('/jumpsuitbgc.jpg');
          padding: 2em;
          font-family: 'Lucida Console', Monaco, monospace;
        }
        .label {
          font-family: 'Lucida Console', Monaco, monospace;
        }

        button {
          width: 4em;
          height: 2em;
          padding: 3px;
          border-radius: 5px;
          cursor: pointer;
          box-shadow: 0px 3px 3px orange;
          background-color: rgb(217, 236, 230);
          font-family: cursive;
          font-size: 1em;
          font-weight: bold;
          outline: none;
        }
        button:hover {
          background-color: steelblue;
          color: #fff;
        }
        button:active {
          transition: transformY(4px);
          background-color: rgb(235, 208, 121);
        }
      `}</style>
    </div>
  );
}

export default CartForPayment;

export function getServerSideProps(context) {
  console.log(nextCookies(context));

  const { cart } = nextCookies(context);

  return {
    props: {
      cart: cart === undefined ? [] : cart,
    },
  };
}
