import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav.js';
import Link from 'next/link';
import Cookies from 'js-cookie';

function Tracker() {
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
  function goCart() {
    const product = {
      name: 'Tracker',
      piece: piece,
      price: price,
      color: color,
    };
    Cookies.set('cart', product);
    window.location.reload();
  }
  return (
    <div>
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />

      <div className="tracker-page">
        <div>
          <h2>Monitor your dog's Daily Activity</h2>
          <ul>
            <li>
              Be your own dog whisperer. Get feedback on how your dog is
              responding to a new treatment or a new nutritional plan.
            </li>

            <br />
            <br />
            <li>
              Get notifications from your FREE downloadable app sent to your
              smartphone when your battery needs to be replaced.
            </li>
            <br />
            <br />
            <li>
              Attaches to any dog collars up to 1 1/4'' wide and designed to go
              anywhere with your pet, such as walks, the dog park, rolling in
              the mud or a dip in the water.
            </li>
            <br />
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
          <button onClick={goCart}>Add to Cart</button>

          <Link href="/CartForPayment">
            <a>
              <button>To Cart</button>
            </a>
          </Link>

          <Link href="/Dogge">
            <a>
              <button className="go-to">Go Pet</button>
            </a>
          </Link>
        </div>
        <div className="tracker-image">
          <img src="/dogge3.jpg" alt="tags" />
          <br />
          <img src="/tracker1.jpeg" alt="tags" />
          <img src="/tracker2.jpg" alt="tags" />
        </div>

        <style jsx>{`
          img {
            width: 40%;
            margin-top: 2em;
            margin-left: 2em;
          }
          .tracker-page {
            display: flex;
            justify-content: space-between;
            background-color: lightgray;
            align-items: center;
            padding-left: 2em;
            padding-top: 2em;
            padding-bottom: 2em;
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
    </div>
  );
}

export default Tracker;
