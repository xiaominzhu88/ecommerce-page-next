import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Nav() {
  return (
    <>
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <nav className="nav">
        <div className="nav-bar">
          <h1>ZHU</h1>
          <p>FASHION & PET STORE</p>
        </div>

        <hr />
        <div className="header">
          <h2>
            <Link href="/index">
              <a>HOME</a>
            </Link>
          </h2>

          <h2>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </h2>

          <h2>
            <Link href="/content">
              <a>FASHION-STORE</a>
            </Link>
          </h2>
          <h2>
            <Link href="/pet">
              <a>PET-STORE</a>
            </Link>
          </h2>

          <h2>
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </h2>
        </div>
      </nav>

      <style jsx>{`
        h1 {
          font-size: 3.5em;
          margin-bottom: 1em;
          padding-top: 0.5em;
          position: relative;
          text-align: center;
          color: rgb(33, 24, 155);
          text-shadow: 1px 3px 4px rgb(218, 147, 17);
          letter-spacing: 4px;
          text-decoration-line: underline;
        }
        .nav-bar p {
          color: gray;
          text-align: center;
          font-size: 1.8em;
          font-family: Georgia, 'Times New Roman', Times, serif;
          padding-bottom: 1em;
        }
        .nav-bar {
          justify-content: space-around;
          align-items: center;
          background-image: url('/cool5.jpeg');
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
          background-attachment: fixed;
          background-size: cover;
        }

        .header {
          display: flex;
          margin: 0 auto;
          width: 750px;
          height: 30px;
          justify-content: space-around;
          font-size: 10px;
          font-family: fantasy;
          font-weight: 800;
          position: relative;
          top: 10px;
        }
        .nav {
          margin-bottom: 2em;
        }
        a{
          text-decoration:none;
          color:rgb(33, 24, 155);
        }
        a:hover{
          text-decoration:underline;
          color:hotpink;
          font-size:1.1em;
          font-weight:700;
      `}</style>
    </>
  );
}
export default Nav;
