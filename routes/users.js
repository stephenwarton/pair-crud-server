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

router.get('/:id/beers', function(request, response, next) {
  queries.getBeersForUser(request.params.id)
    .then(function(user) {
      response.json(user);
    });
});

router.post('/:id/beers', function(req, res, next){
    queries.create({
      name: req.body.name,
      type: req.body.type,
      abv: req.body.abv,
      url: req.body.url,
      user_id: req.body.user_id
    }).then(function(result){
      res.json(result);
    });
});
module.exports = router;
