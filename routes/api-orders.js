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
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next();
  }
  knex('orders')
    .where('user_id', id)
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }
      const order = camelizeKeys(row);

      res.send(order);
    })
    .catch((err) => {
      next(err);
    });
});
router.get('/api-orders/order_items/:id', (req, res, next) => {
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

module.exports = router;
