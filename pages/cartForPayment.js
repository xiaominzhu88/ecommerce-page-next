import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';
import nextCookies from 'next-cookies';
import Cookies from 'js-cookie';

function CartForPayment({ cart }) {
  const [cartArray, setCartArray] = useState(cart);
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [cvcNumber, setCvcNumber] = useState('');

  //get Price from cookies in an Array, IF cart is UNDEFINED, then return [], else map over to get each price
  const itemPrice =
    cart === undefined
      ? []
      : cartArray.map((cartEach, i) => {
          return cartEach.price;
        });
  //console.log('price', itemPrice); //price array with number

  // Map each price, reduce to get total sum price
  //If price is UNDEFINED, then return 0, otherwise COUNT from 0!!!!

  const total =
    itemPrice === undefined
      ? 0
      : itemPrice
          //  .map((x) => Number(x.replace(/[^0-9.-]+/g, '')))
          .reduce((a, b) => {
            return a + b;
          }, 0);

  Cookies.set('total', total);

  // remove cookie
  const removeCookie = (indexToRemove) => {
    const indexArray = cartArray.filter((el, i) => {
      return i !== indexToRemove;
    });
    setCartArray(indexArray);
    Cookies.set('cart', indexArray);
    //console.log('index-array', indexArray);
  };

  // increment amount
  function increment(indexToIncrement) {
    //console.log('cart-array', cartArray);
    const cartIncrement = cartArray.map((eachCart, i) =>
      i === indexToIncrement
        ? {
            ...eachCart,
            piece: (+eachCart.piece + 1).toString(),
            price:
              eachCart.price + Math.round(eachCart.price / +eachCart.piece),
          }
        : eachCart,
    );
    //Array pieces from each cookie item ['2','1',...]
    Cookies.set('cart', cartIncrement);
    window.location.reload();
    console.log('Cart-amount', cartIncrement);
  }

  function decrement(indexToDecrement) {
    const cartDecrement = cartArray.map((eachCart, i) =>
      i === indexToDecrement
        ? {
            ...eachCart,
            piece: +eachCart.piece >= 1 ? (+eachCart.piece - 1).toString() : 0,

            price:
              +eachCart.piece >= 1
                ? eachCart.price - Math.round(eachCart.price / +eachCart.piece)
                : 0,
          }
        : eachCart,
    );
    Cookies.set('cart', cartDecrement);
    window.location.reload();
    console.log('Cart-amount', cartDecrement);
  }

  function inputOnlyNumber(e) {
    const inputCreditNumber = e.target.value;

    return !Number(inputCreditNumber) || inputCreditNumber.length > 19
      ? alert('Please enter valid number!')
      : setCreditCardNumber(inputCreditNumber);
  }

  function inputOnlyThreeNumber(e) {
    const inputThreeNumber = e.target.value;
    return !Number(inputThreeNumber) || inputThreeNumber.length > 3
      ? alert('Please enter valid number!')
      : setCvcNumber(inputThreeNumber);
  }

  return (
    <div className="paymentPage">
      <Head>
        <title>Ecommerce-Store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />

      {/* <p className="label">
        Items in Cart:{' '}
        <span className="itemsSpan">{cart ? cart.length : 'No Cart'}</span>{' '}
      </p> */}

      <p className="cart label">
        Cart:
        <span aria-label="emoji" className="emoji" role="img">
          🛒
        </span>
      </p>

      <ul>
        {cartArray.map((cartEach, i) => {
          return (
            <div className="itemCart" key={i}>
              <img src={cartEach.src} alt="all cart images" />

              <li data-cy="cart-item-name" key={`${cartEach.name}_i`}>
                {' '}
                {cartEach.name}
              </li>
              <li data-cy="qty-cart" key={`${cartEach.piece}_i`}>
                Qty: {cartEach.piece} <br />
                <button
                  data-cy="add-one-more-button"
                  className="increment"
                  onClick={() => increment(i)}
                >
                  +
                </button>
                <button className="decrement" onClick={() => decrement(i)}>
                  -
                </button>{' '}
              </li>
              <li data-cy="price-cart" key={`${cartEach.price}_i`}>
                {' '}
                Price: {cartEach.price},00{' '}
              </li>
              <button data-cy="remove-button" onClick={() => removeCookie(i)}>
                remove
              </button>
            </div>
          );
        })}
      </ul>

      <hr />

      <p className="label">
        Total incl. VAT.:
        <span aria-label="emoji" className="emoji" role="img">
          🎈 €{' '}
        </span>{' '}
        <span className="totalSpan">{total},00</span>{' '}
      </p>
      <hr />

      <div className="payment-shipment">
        <div className="delivery">
          <p>
            Delivery: free
            <span aria-label="emoji" className="emoji" role="img">
              {' '}
              🛫
            </span>
          </p>
          <hr />
        </div>
        <div className="delivery">
          <p>
            Ships Next Business Day
            <span aria-label="emoji" className="emoji" role="img">
              🚀{' '}
            </span>{' '}
            {}
          </p>
          <hr />
        </div>
        <div className="payment-form">
          <form>
            <label>Credit card number</label>
            <br />
            <input
              className="credit"
              onChange={inputOnlyNumber}
              maxLength="19"
              value={creditCardNumber}
              type="text"
              placeholder="Credit-card number"
            ></input>
            <br />
            <label>Expires</label>
            <br />
            <input className="expires" type="text" placeholder="MM"></input>
            <input className="expires" type="text" placeholder="YY"></input>
            <br />
            <label>CVC</label>
            <br />
            <input
              className="cvc"
              value={cvcNumber}
              onChange={inputOnlyThreeNumber}
              type="text"
            ></input>
          </form>
        </div>
        <img className="paymentImg" src="/paymentCard.png" alt="payment-card" />
        <div>
          <Link href="/Thanks">
            <button
              onClick={() => alert('Order received,check out to our home')}
            >
              Check Out
            </button>
          </Link>
        </div>
      </div>

      <Footer />
      <style jsx>{`
        .itemsSpan {
          font-size: 1em;
          margin-left: 0.3em;
          color: red;
          font-weight: bold;
        }
        .increment,
        .decrement {
          width: 2em;
          height: 2em;
          background-color: gray;
          color: #fff;
          margin-right: 0.5em;
          margin-top: 1em;
        }
        .totalSpan {
          font-size: 1em;
          margin-left: 0.3em;
          color: blue;
          font-weight: bold;
        }
        form {
          letter-spacing: 0.1em;
          padding: 1em;
          font-family: 'Lucida Console', Monaco, monospace;
        }
        input {
          margin: 1em auto;
        }
        img {
          width: 5em;
          height: 5em;
        }
        li {
          list-style: none;
        }
        .payment-shipment {
          width: 50%;
          margin: auto;
          background-color: lightgray;
          padding: 1em;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .payment-shipment p {
          display: flex;
          justify-content: space-between;
          padding: 1em;
          letter-spacing: 0.2em;
        }
        .itemCart {
          display: flex;
          justify-content: space-between;
          margin-left: 1em;
          margin-right: 1em;
          background-image: url('/jumpsuitbgc.jpg');
          padding: 2em;
          font-family: 'Lucida Console', Monaco, monospace;
        }
        .label {
          font-family: 'Lucida Console', Monaco, monospace;
        }

        button {
          width: 5em;
          height: 2em;
          padding: 3px;
          border-radius: 5px;
          cursor: pointer;
          box-shadow: 0px 3px 3px orange;
          background-color: rgb(217, 236, 230);
          font-family: cursive;
          font-size: 1em;
          font-weight: bold;
          outline: none;
        }
        button:hover {
          background-color: steelblue;
          color: #fff;
        }
        button:active {
          transition: transformY(4px);
          background-color: rgb(235, 208, 121);
        }
        .credit {
          width: 100%;
          height: 1.8em;
        }
        .expires {
          width: 2em;
          height: 1.5em;
        }
        .cvc {
          width: 4em;
          height: 1.5em;
        }
        .paymentImg {
          width: 12em;
          height: 3em;
          margin: 1em auto;
        }
      `}</style>
    </div>
  );
}

export default CartForPayment;

export function getServerSideProps(context) {
  const { cart } = nextCookies(context);

  //console.log(nextCookies(context));

  return {
    props: {
      cart: cart === undefined ? [] : cart,
    },
  };
}
