//get connected to database

require('dotenv').config();

const postgres = require('postgres');

const sql =
  process.env.NODE_ENV === 'production'
    ? postgres({ ssl: { rejectUnauthorized: false } })
    : postgres();

const fashionProducts = [
  {
    id: '1',
    className: 'dress',
    src: '/4dress.jpg',
    url: '/products/1',
    headline: 'Your closet needs at least one yellow dress',
    description: '“Be original, show off your style, and tell your story.”',
  },
  {
    id: '2',
    className: 'flowerprint',
    src: '/4huaqun.jpg',
    url: '/products/2',
    headline: 'A Sunday well spent brings a Week of Content',
    description: "Dress like you're Going to meet your Worst Enemy Today",
  },
  {
    id: '3',
    className: 'jumpsuit',
    src: '/4jumpsuit.jpg',
    url: '/products/3',
    headline: 'Jumpsuit',
    description:
      'Jumpsuit is great for everything from traveling or casual weekend brunch.',
  },

  {
    id: '4',
    className: 'ways',
    src: '/access.jpg',
    url: '/products/4',
    headline: 'Fashion as unique as you are, be your own label...',
    description:
      ' If you have no idea how to to make the combination with them, be patient, The best things happen Unexpectedly.',
  },
];

const petProducts = [
  { id: '7', url: '/products/7', src: '/dogge1.jpeg', className: 'Harness' },
  { id: '6', url: '/products/6', src: '/dogge2.jpg', className: 'Tag' },
  { id: '5', url: '/products/5', src: '/dogge3.jpg', className: 'Tracker' },
];

export function getFashionProducts() {
  return fashionProducts;
}
export function getPetProducts() {
  return petProducts;
}

export async function getProductsById(id) {
  const products = await sql`
    select * from products WHERE id = ${id}
  `;

  //console.log(products); // => Array
  return products;
  //database select already products, no need to return again
  //return products.find((product) => product.id === id);
}
