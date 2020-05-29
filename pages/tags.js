import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav.js';
import Link from 'next/link';
import Footer from '../components/Footer.js';

function Tags() {
  const [price, setPrice] = useState('');
  const [piece, setPiece] = useState('');
  const [color, setColor] = useState('');

  function changePieces(e) {
    setPiece(e.target.value);
  }
  function showPrice() {
    setPrice('€' + piece * 15 + ',00');
  }
  function showSize(e) {
    setColor(e.target.value);
  }

  return (
    <div>
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />

      <div className="tags-page">
        <div className="tags-image">
          <img src="/dogge2.jpg" alt="tags" />
          <br />
          <img src="/doggetag.jpeg" alt="tags" />
          <img src="/doggetag2.jpg" alt="tags" />
        </div>

        <div>
          <h2>Quick-Tag Pet ID Tags </h2>
          <ul>
            <li>
              Quick-Tag can be engraved with personal information to ensure a
              safe return. Features a sturdy D-ring that supports all standard
              leashes
            </li>

            <br />
            <br />
            <li>
              Dog ID tags that include engraving with up to four lines of
              personal information
            </li>
            <br />
            <br />
            <li>
              Ensures your pet can be properly identified for a safe return
            </li>
            <br />
            <li>Handsome chrome dog name tags in a charming bone shape</li>
            <br />
            <li>Helps prevent your pet from becoming lost</li>
          </ul>
          <hr />

          <p>&#8364;15,00</p>
          <hr />
          <select onChange={showSize}>
            <option>Color</option>
            <option>Silver</option>
            <option>Gold</option>
          </select>
          <input
            type="number"
            min="1"
            placeholder="pieces"
            onChange={changePieces}
            onKeyUp={showPrice}
            value={piece}
          />
          <br />
          <hr />

          <p>Color: {color} </p>
          <p>Qty: {piece} </p>
          <p>Total Price: {price} </p>
          <hr />

          <Link href="/Payment">
            <a>
              <button>Checkout</button>
            </a>
          </Link>
          <Link href="/Dogge">
            <a>
              <button className="go-to">Go Pet</button>
            </a>
          </Link>
        </div>

        <style jsx>{`
          img {
            width: 40%;
            margin-top: 2em;
            margin-left: 2em;
          }
          .tags-page {
            display: flex;
            justify-content: space-around;
            background-color: lightgray;
            align-items: center;
            font-family: monospace;
            text-align: center;
          }
          select {
            border-radius: 5px;
            box-shadow: 2px 3px 3px lightpink;
            font-family: cursive;
            font-size: 1em;
            padding: 5px;
            font-weight: bold;
          }
          input {
            border-radius: 5px;
            box-shadow: 2px 3px 3px lightpink;
            font-family: cursive;
            font-size: 1em;
            padding: 5px;
            font-weight: bold;
            margin-left: 2em;
            width: 3em;
            margin-left: 1em;
          }
          button {
            margin-top: 2em;
            margin-bottom: 2em;
            width: 6em;
            height: 3em;
            padding: 5px;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 2px 3px 3px lightpink;
            background-color: rgb(217, 236, 230);
            font-family: cursive;
            font-size: 1em;
            font-weight: bold;
            outline: none;
          }
          button:hover {
            background-color: yellow;
            color: blue;
            font-weight: 700;
          }
          button:active {
            transition: transformY(4px);
            background-color: rgb(235, 208, 121);
          }
          .go-to {
            margin-left: 2em;
          }
        `}</style>
      </div>
      <Footer />
    </div>
  );
}

export default Tags;
