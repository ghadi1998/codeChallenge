var router = require('express').Router();
var Category = require('../models/category');
var Product = require('../models/product')
var mongoose = require('mongoose')
router.get('/add-category', function(req, res, next) {
  res.render('admin/add-category', { message: req.flash('success') });
});


router.post('/add-category', function(req, res, next) {
  var category = new Category();
  category.name = req.body.name;

  category.save(function(err) {
    if (err) return next(err);
    req.flash('success', 'Successfully added a category');
    return res.redirect('/add-category');
  });
});

router.get('/add-product', function(req, res, next) {
  res.render('admin/add-product', { message: req.flash('success') });
});

router.post('/add-product', function(req, res , next ) {
  var product = new Product()
 
    product.name = req.body.name,
    product.category = req.body.category,
    product.price = req.body.price,

    product.save(function(err) {
      if (err) return next(err);
      req.flash('success', 'Successfully added a product');
      return res.redirect('/add-product');
    });
  });


module.exports = router;

