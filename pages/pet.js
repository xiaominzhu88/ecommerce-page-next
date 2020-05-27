import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer.js';
import Nav from '../components/Nav.js';


function Pet() {
  return (
    <>
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <div className="drinkingdog">
        <img src="/4loladrink.jpg" width="200px" height="100px" alt='drinkingdog'/>
        <h3>Make your pet smile</h3>
        <hr />
        <p>
          Your Pet might not be able to tell you what they want to wear, but you
          should keep their comfort in mind when shopping or drinking.
        </p>
      </div>
      <hr />
      <div className="dog">
        <img src="/4dog.jpg" width="150px" height="300px" alt='dog' />
        <h3>To have the pat with you</h3>
        <hr />
        <p>Frenchy fever: who wear it best?</p>
      </div>
      <Footer />
      <style jsx>{`
        .dog h3 {
          font-style: italic;
          text-align: center;
          padding: 5px;
        }
        .dog p {
          font-size: 15px;
          color: blue;
          text-decoration-line: underline overline;
          text-align: center;
          padding: 5px;
        }
        .dog {
          text-align: right;
          border: 1px solid gray;
          box-shadow: 0px 2px 3px 1px;
          margin-bottom: 20px;
          margin-left: 40px;
          margin-top: 50px;
        }
        .dog img {
          box-shadow: 1px 2px 2px 0px;
          margin-top: 20px;
          margin-left: 10px;
          margin-right: 20px;
          width: auto;
        }
        .drinkingdog {
          text-align: right;
          margin-bottom: 20px;
          margin-left: 10px;
          margin-top: 50px;
        }
        .drinkingdog h3 {
          text-align: center;
          padding: 5px;
        }
        .drinkingdog p {
          font-size: 15px;
          color: blue;
          text-decoration-line: underline overline;
          text-align: center;
        }
        .drinkingdog img {
          box-shadow: 1px 2px 2px 0px;
          margin-top: 20px;
          margin-left: 10px;
          margin-right: 10px;
          position: relative;
          top: 5px;
          right: 200px;
          width: auto;
        }
        .drinkingdog,
        .jumpsuit {
          background-color: rgba(197, 182, 233, 0.507);
        }
      `}</style>
    </>
  );
}

export default Pet;
