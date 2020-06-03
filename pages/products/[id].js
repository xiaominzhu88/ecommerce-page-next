import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { getProductsById } from '../../dbFashion';
import Cookies from 'js-cookie';
import Link from 'next/link';

// [id] act as part of the path, catch anything which is NOT
// match in onther files

//const productList = getProductsById();

const Product = ({ item }) => {
  const [price, setPrice] = useState('');
  const [piece, setPiece] = useState('');
  const [size, setSize] = useState('');

  function changePieces(e) {
    setPiece(e.target.value);
  }
  function showPrice() {
    setPrice('€' + piece * 90 + ',00');
  }
  function showSize(e) {
    setSize(e.target.value);
  }

  if (!item) return <div>Item not found!</div>;

  function goCart() {
    const product = { size: size, piece: piece, price: price };

    const newCart = Cookies.getJSON('cart') || [];

    newCart.push(product);

    Cookies.set('cart', newCart);
    window.location.reload();
  }

  return (
    <>
      <Head>
        <title>{item.name}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <hr />

      <main>
        <h2>{item.h2}</h2>
        <h2>{item.name}</h2>
        <img src={item.src} alt="yellow-dress" />
        <p>{item.p}</p>

        <p>{item.price}</p>
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

        <button onClick={goCart}>Add item</button>
        <Link href="/CartForPayment">
          <a>
            <button>To CartPage</button>
          </a>
        </Link>

        {/*<pre>{JSON.stringify(props, null, 2)}</pre>*/}
      </main>

      <Footer />
      <style jsx>{`
        h2 {
          font-family: 'Lucida Console', Monaco, monospace;
          text-align: center;
          padding: 5px;
        }

        p {
          font-size: 15px;
          color: darkcyan;
          text-decoration-line: overline;
          text-align: center;
          padding: 5px;
        }

        img {
          width: 50%;
          margin: 0 auto;
        }
        .dress-page {
          display: flex;
          justify-content: space-around;
          background-color: lightgray;
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
        .go-to {
          margin-left: 2em;
        }
      `}</style>
    </>
  );
};
export default Product;

// server side information
//will not get shared with user, run only on server
// like 'password'...database connection information...
//

export function getServerSideProps(context) {
  // get info from database, database was imported on the top with {getProductsById},  pass in the user as props

  console.log(getProductsById(context.params.id));

  const item = getProductsById(context.params.id);

  if (item === undefined) {
    return { props: {} };
  }
  return {
    props: { item },
  };
}
