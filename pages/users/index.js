import React from 'react';
import Head from 'next/head';
import Nav from '../../components/Nav.js';
import Footer from '../../components/Footer.js';
import Link from 'next/link';
import { getUsers } from '../../dbFashion.js';

const usersList = getUsers();

function Users() {
  return (
    <>
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      
      <main>
        <h1>Users</h1>
        <ul>
          {usersList.map((name, id) => {
            return (
              <li key={id}>
                <Link href="/users/[id]" as={'/users/' + id}>
                  <a>{name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
}
export default Users;
