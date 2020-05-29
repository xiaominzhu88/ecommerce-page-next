import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer.js';
import Nav from '../components/Nav.js';
import Link from 'next/link';
import { getFashionProducts } from '../dbFashion.js';

const fashionProductsList = getFashionProducts();

function Content() {
  return (
    <div className="content">
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <div className="slogan">
        <h3>New Arrivals</h3>
        <ul>
          {fashionProductsList.map((list, i) => {
            return (
              <li key={list.id}>
                <span aria-label="emoji" className="emoji" role="img">
                  👗
                </span>
                {list.name}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="dress">
        <Link href="/Dress">
          <a>
            <img src="/4dress.jpg" width="150px" height="300px" alt="dress" />
            <h3>Your closet needs at least one yellow dress</h3>
            <p>“Be original, show off your style, and tell your story.”</p>
          </a>
        </Link>
      </div>

      <div className="flowerprint">
        <Link href="/Flowerprint">
          <a>
            <img
              src="/4huaqun.jpg"
              width="150px"
              height="300px"
              alt="flowerprint"
            />
            <h3>A Sunday well spent brings a Week of Content</h3>
            <p>Dress like you're Going to meet your Worst Enemy Today</p>
          </a>
        </Link>
      </div>

      <div className="jumpsuit">
        <Link href="/Jumpsuit">
          <a>
            <img
              src="/4jumpsuit.jpg"
              width="150px"
              height="300px"
              alt="jumpsuit"
            />
            <h3>Jumpsuit</h3>
            <p>
              Jumpsuit is great for everything from traveling or casual weekend
              brunch.
            </p>
          </a>
        </Link>
      </div>

      <div className="ways">
        <Link href="/Access">
          <a>
            <img src="/access.jpg" width="150px" height="300px" alt="ways" />
            <h3>Fashion as unique as you are, be your own label...</h3>
            <p>
              If you have no idea how to to make the combination with them, be
              patient, The best things happen Unexpectedly.
            </p>
          </a>
        </Link>
      </div>

      <Footer />
      <style jsx>{`
      .content {
        
      }
        .slogan {
          text-align: center;
          font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
          background-color: ivory;
          padding-bottom: 1em;
          padding-top: 0.5em;
        }
        ul {
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          list-style: none;
          padding: 10px;
          background-color: #fff;
          box-shadow: 0px 3px 5px steelblue;
          width: 15%;
          border-radius: 20%;
          font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
          text-align: center;
        }
        p {
          font-size: 15px;
          color: blue;
          text-decoration-line: underline overline;
          text-align: center;
          padding: 5px;
        }
        h3 {
          font-family: 'Lucida Console', Monaco, monospace;
          text-align: center;
          padding: 5px;
        }
        .dress,
        .flowerprint,
        .ways,
        .jumpsuit {
          box-shadow: 0px 3px 3px gray;
          margin-bottom: 20px;
          margin-left: 40px;
          margin-top: 50px;
          width: 40%;
        }

        .dress img {
          width:auto;
          box-shadow: 0px 3px 3px steelblue;
          margin-top: -40px;
          margin-left: 70%;
        }

        .flowerprint img {
          box-shadow: 1px 2px 2px 0px;
          margin-top: -40px;
          margin-left: 80%;
          width: auto;

        }

        .jumpsuit img {
          box-shadow: 0px 3px 3px hotpink;
          margin-top: 20px;
          margin-left: 10px;
          margin-right: 10px;
          position: relative;
          top: 5px;
          left: 200px;
          width: auto;
        }
        .ways img {
          box-shadow: 1px 2px 2px 0px;
          margin-top: 20px;
          margin-left: 80%;
          width: auto;

        }
      `}</style>
    </div>
  );
}
export default Content;
