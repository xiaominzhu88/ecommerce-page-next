import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

function Payment() {

  function sumCart() {
    if (typeof Storage !== 'undefined') {
      const retrievedObject = localStorage.getItem('Product');
      return JSON.parse(retrievedObject);
    } else {
      alert('sorry ! No web support!');
    }
  }

  return (
    <div className="payment">
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />

      <ul>
        <form onChange={sumCart}>
          <p className="cart">
            Cart:
            <span aria-label="emoji" className="emoji" role="img">
              🛒
            </span>
            <li>{}</li>
          </p>
        </form>
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
      <div className="payment">
        <div className="payment-shipment">
          <p>
            Delivery:
            <span aria-label="emoji" className="emoji" role="img">
              🛫 free
            </span>
          </p>
          <hr />
          <p>
            Ships Next Business Day
            <span aria-label="emoji" className="emoji" role="img">
              🚀{' '}
            </span>{' '}
            {}
          </p>
          <hr />
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .cart {
          text-decoration-line: underline;
        }
        .payment-shipment {
          width: 40%;
          margin-top: 5em;
          margin-bottom: 5em;
          margin: auto;
          background-color: lightgray;
        }
        .payment {
          margin: 1em auto;
        }
        p {
          display: flex;
          justify-content: space-between;
          padding: 2em;
        }
      `}</style>
    </div>
  );
}

export default Payment;
