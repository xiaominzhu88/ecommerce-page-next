const fasionProducts = [
  { id: '1', name: 'yellow-dress' },
  { id: '2', name: 'flower-print' },
  { id: '3', name: 'jumpsuit' },
  { id: '4', name: 'accessoires' },
];

const petProducts = [
  { id: '1', name: 'harness', url: '/dogge1.jpeg' },
  { id: '2', name: 'tags', url: '/dogge2.jpg' },
  { id: '3', name: 'tracking', url: '/dogge3.jpg' },
];

const users = [
  { id: '1', name: 'a' },
  { id: '2', name: 'b' },
  { id: '3', name: 'c' },
];

export function getFashionProducts() {
  return fasionProducts;
}
export function getPetProducts() {
  return petProducts;
}
export default function getUsers() {
  return users;
}
export function getUserById(id) {
  return users.find((user) => user.id === id);
}
