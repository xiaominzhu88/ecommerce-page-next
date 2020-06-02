import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import Link from 'next/link';
import nextCookies from 'next-cookies';

//import { getCookies } from '../cookies';
//import {getPrice} from '../cookies';

//const objectCart = getCookies();
//const priceSum = getPrice();

function CartForPayment(props) {
  // Localstorage
  //  function sumCart() {
  //    if (typeof Storage !== 'undefined') {
  //      const retrievedObject = localStorage.getItem//('Product');
  //      return JSON.parse(retrievedObject);
  //    } else {
  //      alert('sorry ! No web support!');
  //    }
  //  }

  return (
    <div className="paymentPage">
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <hr />

      <p>Items in Cart: {props.cart.length} </p>
      <hr />

      <p className="cart">
        Cart:
        <span aria-label="emoji" className="emoji" role="img">
          🛒
        </span>
      </p>

      <ul>
        {console.log(props.cart)}

        {props.cart.map((cart, i) => {
          return (
            <li key={`${cart}_${i}`}>
              {cart.name} {cart.price}
            </li>
          );
        })}
      </ul>

      <hr />

      <p>
        Total incl. VAT.:
        <span aria-label="emoji" className="emoji" role="img">
          🎈 €{' '}
        </span>{' '}
        {}
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

        button {
          width: 6em;
          height: 3em;
          padding: 5px;
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

  const cart = nextCookies(context).cart;

  return {
    props: {
      ...(cart ? { cart: cart } : null),
    },
  };
}
