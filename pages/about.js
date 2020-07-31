import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';

function About() {
  return (
    <>
      <Head>
        <title>about</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="about" />
      </Head>
      <Nav />
      <div className="about-us">
        <div className="start">
          <h2>Elegant, intellectual, fashion, fine clothing, life-changing</h2>
        </div>
        <div className="blog">
          <h3>It ’s mine, and it ’s mine after all</h3>
        </div>
      </div>
      <div className="about">
        <p className="about-text1">
          Every day is a fashion show, the world is your runway
          <br />
          Don't always need a plan, sometimes you just need to breathe, trust,
          let go, <br />
          And see what happens...
        </p>{' '}
        <br />
        <p className="about-text2">
          {' '}
          " A girl should be two thing:
          <br />
          Who and What she wants "
          <br />
          -Coco Chanel
        </p>
      </div>
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
          width: 50vw;
          height: 25vh;
          background-attachment: fixed;
          background-size: cover;
          color: #fff;
          margin-left: 2em;
        }

        .about-text1,
        .about-text2 {
          text-align: center;
          letter-spacing: 0.2em;
          line-height: 2em;
        }

        @media only screen and (max-width: 450px) {
          .about-us {
            margin: 10em;
          }

          .blog {
            margin-top: 2em;
            height: 13em;
          }
          h2,
          h3 {
            padding: 10px;
          }
        }
        .about {
          display: block;

          margin: 1em;
        }
      `}</style>
    </>
  );
}
export default About;
