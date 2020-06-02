import React from 'react';
import Head from 'next/head';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { getProductsById } from '../../dbFashion';

// [id] act as part of the path, catch anything which is NOT
// match in onther files

const Product = (props) => {
  if (!props.item) return <div>Item not found!</div>;

  return (
    <>
      <Head>
        <title>{props.item.name}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />

      <main>
        <h1>{props.item.h2}</h1>

        <p>{props.item.p}</p>

        <pre>{JSON.stringify(props, null, 2)}</pre>
      </main>

      <Footer />
    </>
  );
};
export default Product;

// server side information
//will not get shared with user, run only on server
// like 'password'...database connection information...

export function getServerSideProps(context) {
  // get info from database, database was imported on the top with {getProductsById},  pass in the user as props
  const item = getProductsById(context.params.id);

  if (item === undefined) {
    return { props: {} };
  }
  return {
    props: { item },
  };
}
