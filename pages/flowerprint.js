import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav.js';
import Link from 'next/link';
import Cookies from 'js-cookie';

function Flowerprint() {
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
  function showPrice() {
    setPrice('€' + piece * 59 + ',00');
  }
  function showSize(e) {
    setSize(e.target.value);
  }

  // set cookies 
  function goCart() {
    const product = { name:'Flowerprint', size: size, piece: piece, price: price, color: color };
    Cookies.set('ProductFlower', product);
    window.location.reload();
  }
  return (
    <div>
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />

      <div className="flower-page">
        <div className="skirt-image">
          <img
            src="/flowerprint.jpg"
            alt="flowerprint"
            width="550px"
            height="700px"
          />
          <br />
          <div className="flower">
            <img
              src="/leoprint.jpg"
              alt="flowerprint"
              width="250px"
              height="350px"
            />
            <img
              src="/flowerprint1.jpg"
              alt="flowerprint"
              width="250px"
              height="350px"
            />
          </div>
        </div>

        <div>
          <h2>Alway bring your own sunshine</h2>
          <h3>
            <b>Material & care instructions</b>
          </h3>
          <p>
            Outer fabric material: <br />
            95% polyamide, 5% elastane
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

          <p>&#8364;59,00</p>
          <hr />
          <select onChange={showSize}>
            <option>Select size</option>
            <option>IT 34</option>
            <option>IT 36</option>
            <option>IT 38</option>
            <option>IT 40</option>
          </select>
          <select onChange={showColor}>
            <option>Color</option>
            <option>Black</option>
            <option>Beige</option>
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
          .skirt-image {
            display: flex;
            flex-direction: column;
            width: 50%;
            margin-top: 2em;
          }
          .flower {
            display: flex;
            justify-content: space-around;
          }
          img {
            box-shadow: 0px 5px 5px blue;
          }
          h2 {
            color: blue;
          }
          .flower-page {
            display: flex;
            justify-content: space-around;
            background-image: url('/flowerbgc.png');
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

export default Flowerprint;
