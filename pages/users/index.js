import React from 'react';
import Head from 'next/head';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer.js';
import Link from 'next/link';
import { getUsers } from '../../dbFashion';

// page with all user list, which renderd from Nav=>users
//localhost:3000/users  => is this page adress

// works only without 'real database'
// if real database, use getServerSideProps/getStaticProps

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
          {/* below must use {name, id} inside map, object */}
          {usersList.map(({ name, id }) => {
            return (
              // below must use 'as='  for prefatching
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

      <style jsx>
        {`
          ul {
            list-style: none;
            display: flex;
          }
          li {
            margin-left: 5px;
          }
        `}
      </style>
    </>
  );
}
export default Users;
