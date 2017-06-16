const express = require('express');
const router = express.Router();
const queries = require("../queries")

router.get('/', function(request, response, next) {
  queries.getAll()
    .then(function(users) {
      response.json(users);
    });
});

router.get('/:id', function(request, response, next) {
  queries.getOne(request.params.id)
    .then(function(user) {
      response.json(user);

    });
});
module.exports = router;
