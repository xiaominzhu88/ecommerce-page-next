import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Link from 'next/link';

// Page that links to dogge page

function Pet({ petProducts }) {
  return (
    <>
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />

      <div className="drinkingdog">
        <img
          src="/4loladrink.jpg"
          width="200px"
          height="100px"
          alt="drinkingdog"
        />
        <img src="/4workadog.jpg" width="150px" height="190px" alt="workdog" />
        <img src="/4dog.jpg" width="150px" height="300px" alt="dog" />
        <h3>Make your pet smile</h3>
        <hr />
        <p>
          Your Pet might not be able to tell you what they want to wear, but you
          should keep their comfort in mind when shopping or drinking.
        </p>
      </div>
      <div className="dog">
        <ul>
          {petProducts.map((pet) => {
            return (
              <li key={pet.id}>
                <Link href="/Dogge">
                  <a>
                    <img
                      className={pet.className}
                      src={pet.src}
                      alt={pet.className}
                      style={{
                        width: '10em',
                        height: '10em',
                        borderRadius: '50%',
                      }}
                    />
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        <h3 className="drinkingdog">To have the pat with you</h3>
      </div>
      <Footer />
      <style jsx>{`
        .dog h3 {
          font-style: italic;
          text-align: center;
          padding: 15px;
          margin-left: 0;
          margin-top: 0;
        }
        .dog p {
          font-size: 15px;
          color: blue;
          text-decoration-line: underline overline;
          text-align: center;
          padding: 5px;
        }
        .dog {
          text-align: right;

          border-radius: 20px;
          box-shadow: 0 0 25px rgba(0, 0, 0, 0.33);
          margin: 100px 50px;
        }
        .dog img {
          box-shadow: 0px 3px 4px blue;
          margin: 0;
          width: auto;
        }
        .drinkingdog {
          text-align: right;
          margin-bottom: 20px;
          margin-left: 10px;
          margin-top: 50px;
        }
        .drinkingdog h3,
        h3 {
          text-align: center;
          padding: 5px;
          color: hotpink;
          font-family: monospace;
          font-size: 2em;
          text-shadow: 0px 2px 3px blue;
          border-radius: 0 0 20px 20px;
        }
        .drinkingdog p {
          font-size: 15px;
          color: darkblue;
          text-align: center;
          font-family: monospace;
          width: 60%;
          padding-bottom: 1.5em;
          margin: 0 auto;
        }
        .drinkingdog img {
          box-shadow: 1px 2px 2px 0px;
          margin-top: 20px;
          margin-left: 10px;
          margin-right: 10px;
          position: relative;
          top: 5px;
          right: 200px;
          width: auto;
        }
        .drinkingdog {
          background-color: rgba(197, 182, 233, 0.507);
        }
        ul {
          display: flex;
          align-items: center;
          list-style: none;
          justify-content: space-around;
          padding-left: 0;
          padding: 50px 0;
          margin: 0;
        }
      `}</style>
    </>
  );
}

export default Pet;

export async function getServerSideProps(context) {
  const { getPetProducts } = await import('../dbFashion.js');

  const petProducts = getPetProducts(context.params);
  if (petProducts === undefined) {
    return { props: {} };
  }
  return {
    props: { petProducts },
  };
}
