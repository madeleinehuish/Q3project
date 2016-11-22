/* eslint-disable camelcase, max-len */

'use strict';

exports.seed = function(knex) {
  return knex('products').del()
    .then(() => {
      return knex('products').insert([{
        id: 1,
        name: 'Kent Beard and Moustache Comb, Fine',
        image: 'http://www.westcoastshaving.com/resize/shared/images/kent-beard-and-moustache-comb-fine.jpg',
        rating: 4.5,
        price: 5.5,
        description: 'Kent Extra Small Men\'s moustache and beard comb is 73mm fine toothed comb. This specialist comb is perfect for grooming, maintaining and trimming facial hair.',
        on_sale: false
      }, {
        id: 2,
        name: 'Canon EOS 70D',
        image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
        rating: 2,
        price: 1099.0,
        description: 'This game-changing technology allows you to capture video in Live View.',
        on_sale: false
      }, {
        id: 3,
        name: 'Nikon D810A',
        image: 'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
        rating: 3,
        price: 3796.95,
        description: 'Capture the jewels of the night sky like never before.',
        on_sale: true
      }, {
        id: 4,
        name: 'Camera',
        image:'http://www.adorama.com/images/Large/ifjxa2sl.jpg',
        rating: 4,
        price: 549.00,
        description: 'Use this to take photos.',
        on_sale: false
      }, {
        id: 5,
        name: 'Nikon D7200',
        image:'http://cdn.mos.cms.futurecdn.net/ef9f6ec0a94a4ddaa501e73edcb46da8-650-80.jpg',
        rating: 4,
        price: 831.95,
        description: 'Seems reasonable.',
        on_sale: false
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('products_id_seq', (SELECT MAX(id) FROM products));"
      );
    });
};
