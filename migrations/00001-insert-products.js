// insert products to catabase
// to insert multiple products, create products als ARRAY which contains multiple products als object, and use sql`INSERT INTO products ${sql()}`

exports.up = async (sql) => {
  const products = [
    {
      name: 'dress',
      headline: 'Guide to the Best Memorial Day Weekend',
      description: 'Material & care instructions',
      careInstructions:
        'Outer fabric material:95% polyamide, 5% elastane,Lining:100% silk Care construction: Do not tumble dry,machine wash at 30 ° C, gentle cycle',
      src: '/yellow-dress.jpg',
      price: 90,
    },
    {
      name: 'flower-print',
      headline: 'Always bring your own sunshine',
      description: 'Material & care instructions',
      careInstructions:
        'Outer fabric material:95% polyamide, 5% elastane Lining: 100% silk Care construction:Do not tumble dry, machine wash at 30 ° C, gentle cycle',
      src: '/flowerprint.jpg',
      price: 59,
    },

    {
      name: 'jumpsuit',
      headline: 'Remain a classic',
      description: 'in a world full of trends',
      careInstructions:
        'Material & care instructions  Outer fabric material:90% silk, 10% viscose Lining:100% silk Care construction: Do not tumble dry,machine wash at 30 ° C, gentle cycle',
      src: '/jumpsuit.jpg',
      price: 79,
    },
    {
      name: 'accessoires',
      headline: 'A way to say who you are without having to speak',
      description: 'Material',
      careInstructions: 'Stainless Steel, Silver Plated,  Gold Plated',
      src: '/access.jpg',
      price: 59,
    },
    {
      name: 'Tracker',
      headline: 'Monitor your dogs Daily Activity',
      description: 'Be your own dog whisperer',
      careInstructions:
        'Get feedback on how your dog is responding to a new treatment or a new nutritional plan, Get notifications from your FREE downloadable app sent to your smartphone when your battery needs to be replaced.Attaches to any dog collars up to 1/4 wide and designed to go anywhere with your pet, such as walks, the dog park, rolling in the mud or a dip in the water',
      src: '/dogge3.jpg',
      price: 15,
    },
    {
      name: 'Tags',
      headline: 'Quick-Tag Pet ID Tags',
      description:
        'Quick-Tag can be engraved with personal information to ensure a safe return',
      careInstructions:
        'Features a sturdy D-ring that supports all standard leashes; Ensures your pet can be properly identified for a safe return; Handsome chrome dog name tags in a charming bone shape; Helps prevent your pet from becoming lost',
      src: '/doggetag2.jpg',
      price: 15,
    },
    {
      name: 'Harness',
      headline: 'Reversible Dog Harness',
      description: 'Features a sturdy D-ring',
      careInstructions:
        'supports all standard leashes Machine-washable, though hand-washing is preferred; Designed to fit any dog matching our size guide (see images) safely and securely; Fits comfortably, sliding easily over head, with padding and an adjustable strap to make sure your dog looks good and feels good; Made from high-quality neoprene and breathable mesh, with secure, durable buckles',
      src: '/harness1.jpg',
      price: 39,
    },
  ];
  sql`
	INSERT INTO products ${sql(
    products,
    'name',
    'headline',
    'description',
    'careInstructions',
    'src',
    'price',
  )}`;
};

// remove products to catabase
// run yarn migrate down to delete id (which with 'and' if it's multiple)
//after run migrate down, should run migrate up again to 'update' the 'new' table, I made the mistake so i ran migrate up 2 times,it created double contents, so i used delete to remove those contents and 'updated' table again

exports.down = async (sql) => {
  sql`
	DELETE FROM products WHERE id = 8 and id=15 and id=14 and id=13 and id=12 and id=11 and id=10 and id=9
  `;
};
