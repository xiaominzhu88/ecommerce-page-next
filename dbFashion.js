//'fake' database, there is no secret, means every information will be sent

const fasionProducts = [
  {
    id: '1',
    className: 'dress',
    src: '/4dress.jpg',
    url: '/products/1',
    h3: 'Your closet needs at least one yellow dress',
    p: '“Be original, show off your style, and tell your story.”',
  },
  {
    id: '2',
    className: 'flowerprint',
    src: '/4huaqun.jpg',
    url: '/products/2',
    h3: 'A Sunday well spent brings a Week of Content',
    p: "Dress like you're Going to meet your Worst Enemy Today",
  },
  {
    id: '3',
    className: 'jumpsuit',
    src: '/4jumpsuit.jpg',
    url: '/products/3',
    h3: 'Jumpsuit',
    p:
      'Jumpsuit is great for everything from traveling or casual weekend brunch.',
  },

  {
    id: '4',
    className: 'ways',
    src: '/access.jpg',
    url: '/products/4',
    h3: 'Fashion as unique as you are, be your own label...',
    p:
      ' If you have no idea how to to make the combination with them, be patient, The best things happen Unexpectedly.',
  },
];

const petProducts = [
  { id: '7', url: '/products/7', src: '/dogge1.jpeg', className: 'd1' },
  { id: '6', url: '/products/6', src: '/dogge2.jpg', className: 'd2' },
  { id: '5', url: '/products/5', src: '/dogge3.jpg', className: 'd3' },
];

const products = [
  {
    id: '1',
    name: 'dress',
    h2: 'Guide to the Best Memorial Day Weekend',

    h3: 'Material & care instructions',
    p:
      ' Outer fabric material:95% polyamide, 5% elastane,Lining:100% silk Care construction: Do not tumble dry,machine wash at 30 ° C, gentle cycle',
    src: '/yellow-dress.jpg',
    price: 90,
    className1: 'dress-page',
    className2: 'dress-image',
  },

  {
    id: '2',
    name: 'flower-print',
    h2: 'Alway bring your own sunshine',
    h3: ' Material & care instructions',
    p:
      ' Outer fabric material:95% polyamide, 5% elastane Lining: 100% silk Care construction:Do not tumble dry, machine wash at 30 ° C, gentle cycle',
    src: '/flowerprint.jpg',
    price: 59,
    className1: 'flower-page',
    className2: 'skirt-image',
  },

  {
    id: '3',
    name: 'jumpsuit',
    h2: 'Remain a classic',
    h3: 'in a world full of trends',
    p:
      ' Material & care instructions  Outer fabric material:90% silk, 10% viscose Lining:100% silk Care construction: Do not tumble dry,machine wash at 30 ° C, gentle cycle',
    src: '/jumpsuit.jpg',
    price: 79,
    className1: 'jumpsuit-page',
    className2: 'jumpsuit-image',
  },
  {
    id: '4',
    name: 'accessoires',
    h2: 'A way to say who you are without having to speak',
    h3: 'Material ',
    p: 'Stainless Steel, Silver Plated,  Gold Plated',
    src: '/access.jpg',
    price: 59,
    className1: 'access-page',
    className2: 'access-image',
  },
  {
    id: '5',
    name: 'Tracker',
    h2: "Monitor your dog's Daily Activity",
    h3: 'Be your own dog whisperer',
    p:
      ' Get feedback on how your dog is responding to a new treatment or a new nutritional plan, Get notifications from your FREE downloadable app sent to your smartphone when your battery needs to be replaced.Attaches to any dog collars up to 1/4 wide and designed to go anywhere with your pet, such as walks, the dog park, rolling in the mud or a dip in the water.',
    src: '/dogge3.jpg',
    price: 15,
    className1: 'tracker-page',
    className2: 'tracker-image',
  },
  {
    id: '6',
    name: 'Tags',
    h2: 'Quick-Tag Pet ID Tags',
    h3:
      'Quick-Tag can be engraved with personal information to ensure a safe return',
    p:
      ' Features a sturdy D-ring that supports all standard leashes; Ensures your pet can be properly identified for a safe return; Handsome chrome dog name tags in a charming bone shape; Helps prevent your pet from becoming lost',
    src: '/doggetag2.jpg',
    price: 15,
    className1: 'tags-page',
    className2: 'tags-image',
  },
  {
    id: '7',
    name: 'Harness',
    h2: 'Reversible Dog Harness',
    h3: 'Features a sturdy D-ring',
    p:
      'supports all standard leashes Machine-washable, though hand-washing is preferred; Designed to fit any dog matching our size guide (see images) safely and securely; Fits comfortably, sliding easily over head, with padding and an adjustable strap to make sure your dog looks good and feels good; Made from high-quality neoprene and breathable mesh, with secure, durable buckles',
    src: '/harness1.jpg',
    price: 39,
    className1: 'harness-page',
    className2: 'harness-image',
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
  return products.find((product) => product.id === id);
}
