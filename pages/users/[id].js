import React from 'react';
import Head from 'next/head';
import Nav from '../../components/Nav.js';
import Footer from '../../components/Footer.js';
import { getUserById } from '../../dbFashion';

const User = (props) => {
  return (
    <>
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <main>
        <h1>Name: {props.user.name}</h1>
        <p>Id: {props.user.id}</p>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </main>
      <Footer />
    </>
  );
};
export default User;

export function getServerSideProps(context) {
  const user = getUserById(context.params.id);
  return {
    props: { user },
  };
}
