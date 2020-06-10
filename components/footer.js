import React from 'react';
import Head from 'next/head';

function Footer() {
  return (
    <>
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="background">
        <h2>Join our mailing list</h2>
        <form>
          <button type="subscribe" name="subscribe" value="subscribe">
            subscribe
          </button>
        </form>
      </div>
      <p>© 2023 by Zhu</p>
      <style jsx>{`
      .background {
          background-image: url('/cool6.jpg');
          background-position:10px
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: 100% 100%;
          padding-bottom: 1em;
          padding-top: 0.6em;
        }
        .dogge .background {
          background-image: url('/bgcCool.jpg');
        }
        .background h2 {
          font-family:Didot, serif;
          text-align: center;
          color: white;
          font-size: 40px;
        }
        .background form {
          text-align: center;
        }
       p {
          text-align: center;
          font-weight: bold;
          font-family:Didot, serif;

        }

        input {
          margin-left: 1em;
        }
        button {
          height:2em;
          width:10%;
          font-weight:bold;
          cursor:pointer;
        }
      `}</style>
    </>
  );
}
export default Footer;
