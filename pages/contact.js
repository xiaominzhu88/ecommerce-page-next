import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <div className="contact">
        <ul>
          <li>Name:</li>
          <input type="text" />
          <li>Tel:</li>
          <input type="text" />
          <li>E-mail:</li>
          <input type="text" />
          <li>Adress:</li>
          <input type="text" />
        </ul>
      </div>

      <Footer />

      <style jsx>{`
        .contact {
          padding: 30px;
          margin: 20px;
          background-image: url('/cool3.jpg');
          background-attachment: fixed;
        }

        button {
          width: 10em;
          border-radius: 5px;
          background-color: rgb(214, 208, 123);
          box-shadow: 1px 4px 3px blue;
          margin-left: 50%;
        }

        .contact li {
          font-family: cursive;
          color: orange;
          font-size: 20px;
          font-weight: 900;
          list-style: none;
        }
      `}</style>
    </>
  );
}
export default Contact;
