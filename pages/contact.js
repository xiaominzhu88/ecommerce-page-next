import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav.js';

function Contact() {
  return (
    <>
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <div className="contact">
        <form>
        <ul>
          <li>Name:</li>
          <input type="text" placeholder="Name" />
          <li>Tel:</li>
          <input type="text" placeholder="Tel" />
          <li>E-mail:</li>
          <input type="text" placeholder="Mail" />
          <li>Adress:</li>
          <input type="text" placeholder="Adress" />
        </ul>
          <button className='send' type="button">send</button>
        </form>
      </div>

      <div className="background">
        <h2>Join our mailing list</h2>
        <form>
          <button className="subscribe" name="subscribe" value="subscribe">
            subscribe now
          </button>
          <input type="email" name="email" required />
        </form>
      </div>
      <div className="back">
        <p>© 2023 by XiaoMin.Zhu</p>
      </div>

      <style jsx>{`
      .contact {
        margin-top: 10px;
        padding-top: 20px;
        display: flex;
        flex-direction:column;
        background-image: url('/cool3.jpg');
        background-attachment: fixed;
        width: 50%;
        padding:10px;
      }

      button{
        width: 10em;
        border-radius: 5px;
        background-color: rgb(214, 208, 123);
        box-shadow: 1px 4px 3px blue;
        margin-left:50%;
      }

      .contact li {
        font-family: cursive;
        color: darkblue;
        font-size: 20px;
        font-weight: 900;
        list-style: none;
      }
      
        .background {
          background-image: url('/cool6.jpg');
          background-position:10px
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: 100% 100%;
          padding-bottom: 1em;
          padding-top: 1em;
          margin-top:2em;
        }
        
        .background h2 {
          text-align: center;
          color: white;
          font-size: 40px;
        }
        .background form {
          text-align: center;
        }
        .back p {
          text-align: center;
          font-weight: bold;
        }

        input {
          margin-left: 1em;
        }
      `}</style>
    </>
  );
}
export default Contact;
