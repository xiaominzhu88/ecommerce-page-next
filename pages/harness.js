import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav.js';
import Link from 'next/link';
import Footer from '../components/Footer.js';
import cookies from 'js-cookie';

function Harness() {
  const [price, setPrice] = useState('');
  const [piece, setPiece] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  function changePieces(e) {
    setPiece(e.target.value);
  }
  function showPrice() {
    setPrice('€' + piece * 39 + ',00');
  }
  function showSize(e) {
    setSize(e.target.value);
  }
  function showColor(e) {
    setColor(e.target.value);
  }

  function goCart() {
    const product = {
      name: 'Harness',
      price: price,
      size: size,
      piece: piece,
      color: color,
    };
    cookies.set('cart', product);
    window.location.reload();
  }

  return (
    <div>
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />

      <div className="harness-page">
        <div className="harness-image">
          <img
            src="/dogge1.jpeg"
            alt="harness"
            style={{
              marginLeft: '3%',
              width: '40%',
              height: '40%',
              border: '1px blue solid',
              boxShadow: '0px 4px 4px blue',
            }}
          />
          <img
            src="/harness1.jpg"
            alt="harness"
            style={{
              marginTop: '-25px',
              marginLeft: '-5%',
              width: '30%',
              height: '30%',
              border: '1px gray solid',
              boxShadow: '0px 4px 4px gray',
            }}
          />
          <img
            src="/harness2.jpg"
            alt="harness"
            style={{
              marginTop: '-35px',
              marginLeft: '15%',
              width: '30%',
              height: '30%',
              border: '2px hotpink solid',
              boxShadow: '0px 4px 4px hotpink',
            }}
          />
        </div>

        <div>
          <h2>Reversible Dog Harness</h2>
          <ul>
            <li>
              Features a sturdy D-ring that supports all standard leashes
              Machine-washable, though hand-washing is preferred
            </li>
            <br />
            <br />
            <li>
              Designed to fit any dog matching our size guide (see images)
              safely and securely
            </li>
            <br />
            <br />
            <li>
              Fits comfortably, sliding easily over the dog's head, with padding
              and an adjustable strap to make sure your dog looks good and feels
              good
            </li>
            <br />
            <li>
              Made from high-quality neoprene and breathable mesh, with secure,
              durable buckles
            </li>
          </ul>
          <hr />

          <p>&#8364;39,00</p>
          <hr />
          <select onChange={showSize}>
            <option>Select size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>
          <select onChange={showColor}>
            <option>Color</option>
            <option>blue</option>
            <option>gray</option>
            <option>colorful</option>
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

        <style jsx>{`
          .harness-page {
            display: flex;
            justify-content: space-between;
            background-image: url('/bgc2.jpg');
            align-items: center;
            font-family: monospace;
            padding-right: 5em;
            padding-left: 2em;
            padding-top: 2em;
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
          .go-to {
            margin-left: 2em;
          }
        `}</style>
      </div>
      <Footer />
    </div>
  );
}

export default Harness;
