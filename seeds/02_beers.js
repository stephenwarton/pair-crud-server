
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE beers RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('beers').insert([
        {
          name: '90 minute IPA',
          type: 'IPA',
          abv: 9.0,
          url: 'https://www.gianteagle.com/ProductImages/PRODUCT_NODE_60/638489000602.jpg',
          user_id: 1
        },
        {
          name: 'Pliney the Elder',
          type: 'Imperial IPA',
          abv: 8.0,
          url: 'https://s3-us-west-2.amazonaws.com/homebrewassoc/wp-content/uploads/2015/06/russian-river-pliny-the-elder.jpg',
          user_id: 1
        },
        {
          name: 'Left Hand Milk Stout',
          type: 'Stout',
          abv: 5.8,
          url: 'https://www.gianteagle.com/ProductImages/PRODUCT_NODE_60/793866360028.jpg',
          user_id: 1
        },
        {
          name: 'Golden Monkey',
          type: 'Tripel',
          abv: 9.5,
          url: 'https://res.cloudinary.com/ratebeer/image/upload/w_250,c_limit/beer_630.jpg',
          user_id: 2
        },
        {
          name: 'Maharaja',
          type: 'American Double',
          abv: 10.2,
          url: 'https://images.contentful.com/qe08557i7rmu/VLRUeSkAAMRZnrPw/2198e53b81abf47960320d4b8bd1f67c/f30935c3147d4e9b3378e4042f591a0dc80cd7f7_avery-majaraha.png',
          user_id: 2
        },
        {
          name: '120 minute IPA',
          type: 'Imperial IPA',
          abv: 16.5,
          url: 'http://48tk9j3a74jb133e1k2fzz2s.wpengine.netdna-cdn.com/wp-content/uploads/2016/08/Dogfish-Head-120-Minute-IPA-bottle.jpg',
          user_id: 2
        },
        {
          name: 'Pliney the Younger',
          type: 'Imperial IPA',
          abv: 10.25,
          url: 'http://res.cloudinary.com/ratebeer/image/upload/w_250,c_limit/beer_43181.jpg',
          user_id: 3
        },
        {
          name: '90 Shilling',
          type: 'Scottish Ale',
          abv: 5.3,
          url: 'https://www.odellbrewing.com/wp-content/uploads/2015/04/beer-90shilling.png',
          user_id: 3
        },
        {
          name: 'Budweiser',
          type: 'lager',
          abv: 5.0,
          url: 'http://www.daytonabud.com/files/6814/0233/3668/Budweiser.jpg',
          user_id: 3
        }
      ]);
    });
};
