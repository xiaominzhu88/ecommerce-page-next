import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { getProductsById } from '../../dbFashion';
import Cookies from 'js-cookie';
import Link from 'next/link';

// [id] act as part of the path, catch anything which is NOT
// match in onther files

const Product = ({ item }) => {
  const [price, setPrice] = useState();
  const [piece, setPiece] = useState('');

  function changePieces(e) {
    setPiece(e.target.value);
  }
  function showPrice(e) {
    setPrice('€' + piece * item.price);
  }

  if (!item) return <div>Item not found!</div>;

  function goCart() {
    const product = {
      piece: piece,
      price: price,
      name: item.name,
      src: item.src,
      id: item.id,
    };

    const newCart = Cookies.getJSON('cart') || [];

    newCart.push(product);

    Cookies.set('cart', newCart);
    window.location.reload();
  }

  return (
    <div>
      <Head>
        <title>{item.name}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <hr />

      <main>
        <h1>{item.h2}</h1>
        <h2>{item.name}</h2>
        <img src={item.src} alt="items" />
        <h3>{item.h3}</h3>
        <p>{item.p}</p>

        <p>Euro: {item.price}</p>
        <hr />
        {/*   <select onChange={}>
          <option>Select Size</option>
          <option>IT 34</option>
          <option>IT 36</option>
          <option>IT 38</option>
          <option>IT 40</option>
  </select> */}

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

        <p>Qty: {piece} </p>
        <p>Total Price: {price} </p>
        <hr />

        <button onClick={goCart}>Add item</button>
        <Link href="/CartForPayment">
          <a>
            <button className="toCartButton">To CartPage</button>
          </a>
        </Link>

        {/*<pre>{JSON.stringify(props, null, 2)}</pre>*/}
      </main>

      <Footer />
      <style jsx>{`
        main {
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        h1 {
          font-family: 'Lucida Console', Monaco, monospace;
          text-align: center;
          padding: 5px;
          text-shadow: 0px 3px 3px orange;
        }
        h2 {
          font-family: 'Lucida Console', Monaco, monospace;
          text-align: center;
          padding: 5px;
          background-image: url('/graybgc.jpeg');
          text-shadow: 0px 3px 3px orange;
        }
        h3 {
          font-family: 'Lucida Console', Monaco, monospace;
          text-shadow: 0px 3px 3px orange;
        }
        p {
          font-size: 15px;
          color: darkcyan;
          text-decoration-line: overline underline;
          text-align: center;
          font-weight: 700;
          margin-top: 1em;
          line-height: 1.5em;
          font-size: 0.8em;
        }

        img {
          width: 50%;
          margin: 0 auto;
          box-shadow: 0px 5px 5px blue;
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
          margin-bottom: 1em;
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
  );
};
export default Product;

// server side information
//will not get shared with user, run only on server
// like 'password'...database connection information...
//

export function getServerSideProps(context) {
  // get info from database, database was imported on the top with {getProductsById},  pass in the user as props

  //console.log(getProductsById(context.params.id));

  const item = getProductsById(context.params.id);

  if (item === undefined) {
    return { props: {} };
  }
  return {
    props: { item },
  };
}