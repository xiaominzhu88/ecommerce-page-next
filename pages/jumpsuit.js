import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav.js';
import Link from 'next/link';
import Cookies from 'js-cookie';

function Jumpsuit() {
  const [price, setPrice] = useState('');
  const [piece, setPiece] = useState('');
  const [size, setSize] = useState('');

  function changePieces(e) {
    setPiece(e.target.value);
  }
  function showPrice() {
    setPrice('€' + piece * 79 + ',00');
  }
  function showSize(e) {
    setSize(e.target.value);
  }
  function goCart() {
    const product = {
      name: 'Jumpsuit',
      size: size,
      piece: piece,
      price: price,
    };
    Cookies.set('ProductJumpsuit', product);
    window.location.reload();
  }

  return (
    <div>
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />

      <div className="jumpsuit-page">
        <div className="jumpsuit-image">
          <img src="/jumpsuit.jpg" alt="jumpsuit" />
          <img src="/jumpsuit1.jpg" alt="jumpsuit" />
        </div>

        <div>
          <h2>Remain a classic, in a world full of trends</h2>
          <p>
            <b>Material & care instructions</b>
          </p>
          <p>
            Outer fabric material: <br />
            90% silk, 10% viscose
            <br />
            <br /> Lining: <br />
            100% silk
            <br />
            <br />
            <b> Care construction: </b>
            <br />
            <br />
            Do not tumble dry,
            <br />
            machine wash at 30 ° C, gentle cycle
          </p>
          <hr />

          <p>&#8364;79,00</p>
          <hr />
          <select onChange={showSize}>
            <option>Select size</option>
            <option>IT 34</option>
            <option>IT 36</option>
            <option>IT 38</option>
            <option>IT 40</option>
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
          img {
            width: 50%;
            margin-top: 2em;
            margin-left: 2em;
          }
          .jumpsuit-page {
            display: flex;
            justify-content: space-around;
            background-color: lightgray;
            background-image: url('/jumpsuitbgc.jpg');
            align-items: center;
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
            width: 4em;
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
        `}</style>
      </div>
    </div>
  );
}

export default Jumpsuit;
