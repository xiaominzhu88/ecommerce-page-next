//'fake' database, there is no secret, means every information will be sent

const fasionProducts = [
  {
    id: '1',
    className: 'dress',
    src: '/4dress.jpg',
    url: '/Dress',
    h3: 'Your closet needs at least one yellow dress',
    p: '“Be original, show off your style, and tell your story.”',
  },
  {
    id: '2',
    className: 'flowerprint',
    src: '/4huaqun.jpg',
    url: '/Flowerprint',
    h3: 'A Sunday well spent brings a Week of Content',
    p: "Dress like you're Going to meet your Worst Enemy Today",
  },
  {
    id: '3',
    className: 'jumpsuit',
    src: '/4jumpsuit.jpg',
    url: '/Jumpsuit',
    h3: 'Jumpsuit',
    p:
      'Jumpsuit is great for everything from traveling or casual weekend brunch.',
  },

  {
    id: '4',
    className: 'ways',
    src: '/access.jpg',
    url: '/Access',
    h3: 'Fashion as unique as you are, be your own label...',
    p:
      ' If you have no idea how to to make the combination with them, be patient, The best things happen Unexpectedly.',
  },
];

const petProducts = [
  { id: '1', url: '/Harness', src: '/dogge1.jpeg', className: 'd1' },
  { id: '2', url: '/Tags', src: '/dogge2.jpg', className: 'd2' },
  { id: '3', url: '/Tracker', src: '/dogge3.jpg', className: 'd3' },
];

const products = [
  {
    id: '1',
    name: 'dress',
    h2: 'Guide to the Best Memorial Day Weekend',
    p:
      'Material & care instructions Outer fabric material:95% polyamide, 5% elastane,Lining:100% silk Care construction: Do not tumble dry,machine wash at 30 ° C, gentle cycle',
    src: '/yellow-dress.jpg',
    price: '€90,00',
    className1: 'dress-page',
    className2: 'dress-image',
  },

  {
    id: '2',
    name: 'flower-print',
    h2: 'Alway bring your own sunshine',
    p:
      ' Material & care instructions Outer fabric material:95% polyamide, 5% elastane Lining: 100% silk Care construction:Do not tumble dry, machine wash at 30 ° C, gentle cycle',
    src: '/flowerprint.jpg',
    price: '€59,00',
    className1: 'flower-page',
    className2: 'skirt-image',
  },

  {
    id: '3',
    name: 'jumpsuit',
    h2: 'Remain a classic',
    p:
      'in a world full of trends Material & care instructions  Outer fabric material:90% silk, 10% viscose Lining:100% silk Care construction: Do not tumble dry,machine wash at 30 ° C, gentle cycle',
    src: '/jumpsuit.jpg',
    price: '€79,00',
    className1: 'jumpsuit-page',
    className2: 'jumpsuit-image',
  },
  {
    id: '4',
    name: 'accessoires',
    h2: 'A way to say who you are without having to speak',
    p: 'Material Stainless Steel, Silver Plated,  Gold Plated',
    src: '/access.jpg',
    price: '€59,00 | each piece',
    className1: 'access-page',
    className2: 'access-image',
  },
];

export function getFashionProducts() {
  return fasionProducts;
}
export function getPetProducts() {
  return petProducts;
}

export function getProducts() {
  return products;
}
export function getProductsById(id) {
  return products.map((product) => product.id === id);
}
