import React, { useState, MouseEvent, ChangeEvent } from 'react';
import Head from 'next/head';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Cookies from 'js-cookie';
import { NextPageContext } from 'next';
import Router from 'next/router';

// using typescript: 	yarn add --dev typescript @types/node

type Item = {
  id: string;
  name: string;
  price: number;
  src: string;
  h2: string;
  h3: string;
  p: string;
};
type Props = { item: Item };

// [id] => act as the part of the Path like 'localhost:3000/users/1(which is [id]'
const Product = (props: Props) => {
  const [price, setPrice] = useState<number>();
  // typescript
  // const [piece, setPiece] = useState<number | undefined>(undefined);
  const [piece, setPiece] = useState(1);

  // typescript error: Parameter 'e' implicitly has an 'any' type
  function changePieces(e: ChangeEvent<HTMLInputElement>) {
    const newPiece = Number(e.target.value);
    setPiece(newPiece);
    setPrice(newPiece * props.item.price);
  }

  if (!props.item) return <div>Item not found!</div>;

  function addProductToCart() {
    const product = {
      piece: piece,
      price: price,
      name: props.item.name,
      src: props.item.src,
      id: props.item.id,
    };

    const newCart = Cookies.getJSON('cart') || [];

    newCart.push(product);

    Cookies.set('cart', newCart);
    window.location.reload();
  }

  return (
    <div>
      <Head>
        <title>{props.item.name}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />

      <main>
        <h1>{props.item.h2}</h1>
        <h2>{props.item.name}</h2>
        <img src={props.item.src} alt={props.item.name} />
        <h3>{props.item.h3}</h3>
        <p>{props.item.p}</p>

        <p>Euro: {props.item.price}</p>
        <hr />

        <input
          type="text"
          min="1"
          step="10"
          placeholder="pieces"
          onChange={changePieces}
          value={piece}
        />
        <br />
        <hr />

        <p>Qty: {piece} </p>
        <p>Total Price: {price} </p>
        <hr />

        <button data-cy="addCart-button" onClick={() => addProductToCart()}>
          Add items
        </button>

        {/* Use Router.push */}

        <button onClick={() => Router.push('/cart')}>To CartPage</button>

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
// NextPageContext: use typescript
export async function getServerSideProps(context: NextPageContext) {
  const id = context.query.id;
  //const name = context.query.name;
  // This is without using postgres, db coded manually
  // import { getProductsById } from '../../dbFashion';
  // const items = getProductsById(context.params.id)
  // 1. get products (defined as items) from db which imported
  // 2. pass items into props
  // 3. props shows as props on top
  // 4. by run getServerSideProps, Next.js runs this function and gives props back which is at the top

  // This is the way using postgres, import function from db where require (postgres)
  const { getProductsById } = await import('../../dbFashion.js');
  const item = await getProductsById(id);

  console.log('item id', id);

  if (item === undefined) {
    return { props: {} };
  }
  return {
    props: {
      item: item[0],
    },
  };
}
