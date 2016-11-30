'use strict';
const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/api-orders', (_req, res, next) => {
  knex('orders')
    .orderBy('id')
    .then((rows) => {
      const orders = camelizeKeys(rows);
      res.send(orders);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/api-orders/:id', (req, res, next) => {
  const orderId = Number.parseInt(req.params.id);

  if (!Number.isInteger(orderId)) {
    return next(boom.create(400, 'Order Id must be an integer'));
  }

  let orders;

  knex('orders')
    .where('user_id', req.params.id)
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }
      orders = camelizeKeys(row);
    })
    .then(() => {
      return knex('order_items')
      .innerJoin('orders', 'orders.id', 'order_items.order_id')
      .where('orders.user_id', req.params.id)
      .orderBy('ordered_at')
    })
    .then((rows) => {
      const orderItemsData = camelizeKeys(rows);

      res.send({ orderItemsData, orders });
    })
    .catch((err) => {
      next(err);
    });

});

// router.post('/api-orders', authorize, (req, res, next) => {
//   const { items, address1, address2, city, state, zip } = req.body;
//   const { userId } = req.token;
//   console.log(items);
//   if (!address1 || !address1.trim()) {
//     return next(boom.create(400, 'Address must not be blank'));
//   }
//
//   if (!city || !city.trim()) {
//     return next(boom.create(400, 'City must not be blank'));
//   }
//
//   if (!state || !state.trim()) {
//     return next(boom.create(400, 'State must not be blank'));
//   }
//
//   if (!zip || !zip.trim()) {
//     return next(boom.create(400, 'Zip must not be blank'));
//   }
//
//   const insertOrder = { userId, address1, address2, city, state, zip };
//   let order;
//
//   knex('orders')
//     .insert(decamelizeKeys(insertOrder), '*')
//     .then((rows) => {
//       order = camelizeKeys(rows[0]);
//
//       return knex('order_items')
//         .insert(decamelizeKeys(products.map((product) => {
//           return {
//             orderId: order.id,
//             productsId: product.productId,
//             quantity: product.quantity
//           };
//         })));
//     })
//     .then(() => {
//       res.send(order);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });


module.exports = router;
