//import React from 'react';
import Cookies from 'js-cookie';

const cartSum = [
  Cookies.get('ProductDress'),
  Cookies.get('ProductJumpsuit'),
  Cookies.get('ProductFlower'),
  Cookies.get('ProductAccessoires'),
  Cookies.get('ProductHarness'),
  Cookies.get('ProductTags'),
  Cookies.get('ProductTracker'),
];
//export function getPrice() {
//cartSum.forEach((cart) => {
//
//    console.log(cart.price);
//  });
//}

export function getCookies() {
  return cartSum;
}



// use Cookies.getJSON() will get Array but not work in cartForPayment.js
// to use map => error: invalid child
