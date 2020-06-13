import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Cookies from 'js-cookie';
import Link from 'next/link';

// [id] => act as the part of the Path like 'localhost:3000/users/1(which is [id]'
const Product = ({ items }) => {
  const [price, setPrice] = useState();
  const [piece, setPiece] = useState('');

  function changePieces(e) {
    setPiece(e.target.value);
  }
  function showPrice(e) {
    setPrice(piece * items.price);
  }

  if (!items) return <div>Item not found!</div>;

  function goCart() {
    const product = {
      piece: piece,
      price: price,
      name: items.name,
      src: items.src,
      id: items.id,
    };

    const newCart = Cookies.getJSON('cart') || [];

    newCart.push(product);

    Cookies.set('cart', newCart);
    window.location.reload();
  }

  return (
    <div>
      <Head>
        <title>{items.name}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <hr />

      <main>
        <h1>{items.h2}</h1>
        <h2>{items.name}</h2>
        <img src={items.src} alt="items" />
        <h3>{items.h3}</h3>
        <p>{items.p}</p>

        <p>Euro: {items.price}</p>
        <hr />

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

        <button data-cy="addCart-button" onClick={goCart}>
          Add items
        </button>
        <Link href="/cartForPayment">
          <a>
            <button data-cy="go-to-cart-button" className="toCartButton">
              To CartPage
            </button>
          </a>
        </Link>

        {/* show query from items which from getServerSideProps
        
        <pre>{JSON.stringify(props, null, 2)}</pre>*/}
      </main>

      <Footer />
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bitter:ital@1&display=swap');
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
          text-align: left;
          font-weight: 700;
          margin-top: 1em;
          line-height: 1.6em;
          font-size: 0.8em;
          font-family: 'Bitter', serif;
          max-width: 450px;
        }

        img {
          width: 50%;
          margin: 0 auto;
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

// context: object => { params, req, res, query, preview, previewData}
// params: dynamic route
export async function getServerSideProps(context) {
  // This is without using postgres, db coded manually
  // import { getProductsById } from '../../dbFashion';
  // const items = getProductsById(context.params.id)
  // 1. get products (defined as items) from db which imported
  // 2. pass items into props
  // 3.props shows as props
  // 4. by run getServerSideProps, Next.js runs this function and gives props back which is at the top

  // This is the way using postgres, import function from db where require (postgres)
  const { getProductsById } = await import('../../dbFashion.js');
  const items = await getProductsById(context.params.id);

  //console.log('item id', context.params.id);

  if (items === undefined) {
    return { props: {} };
  }
  return {
    props: {
      items: items[0],
    },
  };
}
