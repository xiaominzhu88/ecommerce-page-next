import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

function Payment() {
  const trackingNumber = Math.floor(Math.random() * 10000);
  return (
    <div className="payment">
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <div className="payment">
        <div className="payment-shipment">
          <p>
            Tracking Number:
            <span aria-label="emoji" className="emoji" role="img">
              🔑{trackingNumber}
            </span>
          </p>
          <hr />
          <p>
            Card:
            <span aria-label="emoji" className="emoji" role="img">
              ⛱
            </span>
          </p>
          <hr />
          <p>
            Subtotal delivery:
            <span aria-label="emoji" className="emoji" role="img">
              🛫 free
            </span>
          </p>
          <hr />
          <p>
            Total incl. VAT.:
            <span aria-label="emoji" className="emoji" role="img">
              🎈 €{' '}
            </span>{' '}
            {}
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
        .payment-shipment {
          width: 40%;
          margin-top: 5em;
          margin-bottom: 5em;
          margin: auto;
          background-color: lightgray;
        }
        .payment {
          margin: 3em auto;
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
