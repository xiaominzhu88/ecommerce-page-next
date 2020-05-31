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

const users = [
  { id: '1', name: 'Mini', role: 'admin' },
  { id: '2', name: 'Lola', role: 'user' },
  { id: '3', name: 'Christoph', role: 'admin' },
];

export function getFashionProducts() {
  return fasionProducts;
}
export function getPetProducts() {
  return petProducts;
}
export function getUsers() {
  return users;
}
export function getUserById(id) {
  return users.find((user) => user.id === id);
}
