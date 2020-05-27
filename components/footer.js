import React from 'react';
import Head from 'next/head';

function Footer(){
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
            subscribe now
          </button>
          <input type="email" name="email" required />
        </form>
      </div>
      <div className="back">
        <p>© 2023 by XiaoMin.Zhu</p>
      </div>
      <style jsx>{`
      .background {
          background-image: url('/cool6.jpg');
          background-position:10px
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: 100% 100%;
          padding-bottom: 1em;
          padding-top: 1em;
        }
        .background h2 {
          text-align: center;
          color: white;
          font-size: 40px;
        }
        .background form {
          text-align: center;
        }
        .back p {
          text-align: center;
          font-weight: bold;
        }

        input {
          margin-left: 1em;
        }
      `}</style>
    </>
  );
}
export default Footer;
