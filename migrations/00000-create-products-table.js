exports.up = async (sql) => {
  sql`
	CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name VARCHAR NOT NULL, 
    headline VARCHAR NOT NULL, 
    description VARCHAR NOT NULL, 
    careInstructions VARCHAR NOT NULL, 
    src VARCHAR NOT NULL, 
    price INTEGER)
`;
};

exports.down = async (sql) => {
  sql`
	DROP TABLE products
  `;
};
