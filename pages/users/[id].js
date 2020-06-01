import React from 'react';
import Head from 'next/head';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { getUserById } from '../../dbFashion';

// [id] act as part of the path, catch anything which is NOT
// match in onther files

const User = (props) => {
  if (!props.user) return <div>User not found!</div>;

  // if (typeof window !== 'undefined') {
  // visitedUser is an Array, turn it into onject for localStorage.getItem
  //   const visitedUser = JSON.parse(window.localStorage.usersVisited);
  //
  //   window.localStorage.usersVisited = JSON.stringify([
  //     ...visitedUser,
  //     props.user.id,
  //   ]);
  // }

  return (
    <>
      <Head>
        <title>{props.user.name}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />

      <main>
        <h1>{props.user.name}</h1>
        <p>Id: {props.user.id}</p>

        <p>{props.user.role === 'admin' ? props.user.role : ''}</p>

        <pre>{JSON.stringify(props, null, 2)}</pre>
      </main>

      <Footer />
    </>
  );
};
export default User;

// server side information
//will not get shared with user, run only on server
// like 'password'...database connection information...

export function getServerSideProps(context) {
  // get info from database as user, database was imported on the top with {getUserById},  pass in the user as props
  const user = getUserById(context.params.id);

  if (user === undefined) {
    return { props: {} };
  }
  return {
    props: { user },
  };
}
