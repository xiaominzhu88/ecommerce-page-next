//import React from 'react';
import Cookies from 'js-cookie';

const cartSum = Cookies.get();

//export function getPrice() {
//cartSum.forEach((cart) => {
//
//    console.log(cart.price);
//  });
//}

Cookies.remove('ProductJumpsuit');
Cookies.remove('ProductHarness');
Cookies.remove('ProductAccessoires');
Cookies.remove('ProductFlower');
Cookies.remove('ProductTracker');
Cookies.remove('ProductDress');
Cookies.remove('ProductTags');

export function getCookies() {
  return cartSum;
}

// use Cookies.getJSON() will get Array but not work in cartForPayment.js
// to use map => error: invalid child
