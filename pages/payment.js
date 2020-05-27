import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

function Payment(props) {
  return (
    <div className="payment">
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <div className="payment">
        <div className="total-price">
          <p>
            Total:
            <span aria-label="emoji" className="emoji" role="img">
              ⛱
            
            </span>

          </p>
          <hr />
          <p>
            Subtotal delivery:
            <span aria-label="emoji" className="emoji" role="img">
              🛫
            
            free</span>
          </p>
          <hr />
          <p>
            Total incl. VAT.:
            <span aria-label="emoji" className="emoji" role="img">
              🎈
           
            € </span> {}
          </p>
          <hr />
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .total-price {
          width: 40%;
          margin-top: 3em;
          margin-bottom: 3em;
        }
        p {
          display: flex;
          justify-content: space-between;
          padding:2em;
        }
      `}</style>
    </div>
  );
}

export default Payment;
