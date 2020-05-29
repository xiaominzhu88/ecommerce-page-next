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
          <h3>It ’s mine, and it ’s mine after all</h3>
        </div>
        <hr />
      </div>
      <p className="about-text">
        Every day is a fashion show, the world is your runway
        <br />
        Don't always need a plan, sometimes you just need to breathe, trust, let
        go, <br />
        And see what happens...
      </p>{' '}
      <br />
      <p className="about-text">
        {' '}
        " A girl should be two thing:
        <br />
        Who and What she wants "
        <br />
        -Coco Chanel
      </p>
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
          margin-left: 2em;
        }
        .about-text {
          text-align: center;
          letter-spacing: 0.2em;
          line-height: 2em;
        }
        
      `}</style>
    </>
  );
}
export default About;
