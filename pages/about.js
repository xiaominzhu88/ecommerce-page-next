import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer.js';
import Nav from '../components/Nav.js';

function About() {
  return (
    <>
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <div className="about-us">
        <div className="start">
          <h2>Elegant, intellectual, fashion, fine clothing, life-changing</h2>
        </div>
        <div className="blog">
          <h3>It ’s mine, and it ’s mine after all, it ’s not mine</h3>
        </div>
        <hr />
      </div>

      <Footer />

      <style jsx>{`
        .about-us {
          margin-top: 2.5em;
          margin-bottom: 1em;
          display: flex;
          padding: 2.5em;
          justify-content: space-between;
          align-items: center;
        }
        .start {
          padding: 1em;
          background-image: url('/light.jpg');
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover;
          color: #fff;
        }
        .blog {
          padding: 0.5em;
          background-image: url('/light.jpg');
          background-repeat: no-repeat;
          width: vw;
          height: vh;
          background-attachment: fixed;
          background-size: cover;
          color: #fff;
        }
      `}</style>
    </>
  );
}
export default About;
