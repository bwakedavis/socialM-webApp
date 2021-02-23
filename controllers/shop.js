const Product = require('../models/product');



exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll(products =>{
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    });

  }

  exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findbyId(prodId, product =>{
      res.render('shop/product-detail', {product: product, pageTitle: 'Product Detail'});
    })

  }

  exports.getIndex = (req, res, next) => {
    const products = Product.fetchAll(products =>{
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    });

  }

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  })

}

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  console.log(prodId);
  res.redirect('/cart');

}

  exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
      path: '/checkout',
      pageTitle: 'Checkout'
    })

  }