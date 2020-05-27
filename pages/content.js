import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer.js';
import Nav from '../components/Nav.js';
import Link from 'next/link';
import { getFashionProducts } from '../dbFashion.js';

const fashionProductsList = getFashionProducts();

function Content(props) {
  return (
    <div className="content">
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />

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

      <div className="dress">
        <Link href="/Dress">
          <a>
            <img src="/4dress.jpg" width="150px" height="300px" alt="dress" />
            <h3>Your closet needs at least one yellow dress</h3>
            <p>“Be original, show off your style, and tell your story.”</p>
          </a>
        </Link>
        <h4>Yellow Dress-inspiration</h4>
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
            <h3>Why not try something more fun?</h3>
            <p>
              Flowerprint is a perfect look for spring and summer, but the most
              crative among us cas surely find ways to work them into winter
              wardrobes, as well.
            </p>
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
            <h3>8 fun ways to accessorize your outfit</h3>
            <p>
              If you have no idea how to to make the combination with them, just
              turn on the music.
            </p>
          </a>
        </Link>
      </div>

      <Footer />
      <style jsx>{`
        ul {
          list-style: none;
          display: flex;
          justify-content: space-around;
          background-color: lightgray;
          width: 50%;
          margin: 0 auto;
          font-family: fantasy;
        }
        li:hover {
          cursor: pointer;
          text-decoration: underline;
          color: hotpink;
          font-size: 1.1em;
          font-weight: 700;
        }

        .dress p {
          font-size: 15px;
          color: blue;
          text-decoration-line: underline overline;
          text-align: center;
          padding: 5px;
        }
        .dress h3 {
          font-style: italic;
          text-align: center;
          padding: 5px;
        }
        .dress img {
          box-shadow: 1px 2px 2px 0px;
          margin-top: 20px;
          margin-left: 10px;
          margin-right: 10px;
          width: auto;
        }
        .dress {
          text-align: center;
          border: 1px solid gray;
          box-shadow: 0px 2px 3px 1px;
          margin-bottom: 20px;
          margin-left: 40px;
          margin-top: 50px;
        }

        .flowerprint {
          text-align: center;
          border: 1px solid gray;
          box-shadow: 0px 2px 3px 1px;
          margin-bottom: 20px;
          margin-left: 40px;
          margin-top: 50px;
        }
        .flowerprint h3 {
          font-style: italic;
          text-align: center;
          padding: 5px;
        }
        .flowerprint p {
          font-size: 15px;
          color: blue;
          text-decoration-line: underline overline;
          text-align: center;
          padding: 5px;
        }
        .flowerprint img {
          box-shadow: 1px 2px 2px 0px;
          margin-top: 20px;
          margin-left: 10px;
          margin-right: 10px;
          width: auto;
        }
        .ways p {
          text-align: center;
          padding: 5px;
        }
        .ways h3 {
          font-style: italic;
          text-align: center;
          padding: 5px;
        }
        .ways p {
          font-size: 15px;
          color: blue;
          text-decoration-line: underline overline;
          text-align: center;
          padding: 5px;
        }
        .ways {
          text-align: center;
          box-shadow: 0px 2px 3px 1px;
          margin-bottom: 20px;
          margin-left: 40px;
          margin-top: 50px;
        }
        .ways img {
          box-shadow: 1px 2px 2px 0px;
          margin-top: 20px;
          margin-left: 10px;
          margin-right: 20px;
          width: auto;
        }

        .jumpsuit {
          text-align: left;
          margin-bottom: 20px;
          margin-left: 10px;
          margin-top: 50px;
          align-items: end;
        }
        .jumpsuit h3 {
          text-align: center;
          padding: 5px;
        }
        .jumpsuit p {
          font-size: 15px;
          color: blue;
          text-decoration-line: underline overline;
          text-align: center;
          padding: 5px;
        }
        .jumpsuit img {
          box-shadow: 1px 2px 2px 0px;
          margin-top: 20px;
          margin-left: 10px;
          margin-right: 10px;
          position: relative;
          top: 5px;
          left: 200px;
          width: auto;
        }
      `}</style>
    </div>
  );
}
export default Content;
