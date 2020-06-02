import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav.js';
import Link from 'next/link';
import Cookies from 'js-cookie';

function Access() {
  const [price, setPrice] = useState('');
  const [piece, setPiece] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  function changePieces(e) {
    setPiece(e.target.value);
  }
  function showColor(e) {
    setColor(e.target.value);
  }
  function showSize(e) {
    setSize(e.target.value);
  }
  function showPrice() {
    setPrice('€' + piece * 59 + ',00');
  }

  function goCart() {
    const product = {
      name: 'Accessoires',
      size: size,
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

      <div className="access-page">
        <div className="access-image">
          <div className="access">
            <img src="/access.jpg" alt="access" width="250px" height="350px" />
            <br />
            <img src="/access1.jpg" alt="access" width="250px" height="350px" />
            <img src="/access2.jpg" alt="access" width="250px" height="350px" />
          </div>
        </div>

        <div>
          <h2>A way to say who you are without having to speak</h2>
          <h3>
            <b>Material </b>
          </h3>
          <p>
            Stainless Steel
            <br />
            Silver Plated
            <br />
            Gold Plated{' '}
          </p>
          <br />

          <hr />

          <p>&#8364;59,00 | each piece</p>
          <hr />
          <select onChange={showSize}>
            <option>Select size</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
          <select onChange={showColor}>
            <option>Color</option>
            <option>Silver</option>
            <option>Rose</option>
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

          <p>Size: {size} </p>
          <p>Color: {color}</p>
          <p>Qty: {piece} </p>
          <p>Total Price: {price} </p>
          <hr />
          <button onClick={goCart}>Add to Cart</button>
          <Link href="/CartForPayment">
            <a>
              <button>To Cart</button>
            </a>
          </Link>
        </div>

        <style jsx>{`
          .access-image {
            display: flex;
            flex-direction: column;
            width: 50%;
            margin-top: 2em;
          }
          .access {
            display: grid;
            justify-content: space-around;
            margin-bottom: 2em;
          }
          img {
            box-shadow: 0px 5px 5px blue;
          }
          h2 {
            color: hotpink;
          }
          .access-page {
            display: flex;
            justify-content: space-around;
            background-image: url('/graybgc.jpeg');
            align-items: center;
          }
          p {
            letter-spacing: 0.1em;
          }

          select {
            border-radius: 5px;
            box-shadow: 2px 3px 3px lightpink;
            font-family: cursive;
            font-size: 1em;
            padding: 5px;
            font-weight: bold;
            margin-left: 1em;
          }
          input {
            border-radius: 5px;
            box-shadow: 2px 3px 3px lightpink;
            font-family: cursive;
            font-size: 1em;
            padding: 5px;
            font-weight: bold;
            margin-left: 2em;
            width: 4em;
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
        `}</style>
      </div>
    </div>
  );
}

export default Access;
