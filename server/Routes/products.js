import express  from "express";
import db from "../db.js";

const router = express.Router()

router.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  });
  router.post('/products', (req, res) => {
    const {idproducts, name, description, price, stock_quantity } = req.body;
    db.query('INSERT INTO products (idproducts,name, description, price, stock_quantity) VALUES (?, ?, ?, ?,?)', [idproducts,name, description, price, stock_quantity], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.status(201).json({ message: 'Product created successfully', productId: results.insertId });
      }
    });
  });
  
  router.delete('/products/:id', (req, res) => {
    const productId = req.params.id;
    db.query('DELETE FROM products WHERE idproducts = ?', productId, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      } else if (results.affectedRows === 0) {
        res.status(404).json({ error: 'Product not found' });
      } else {
        res.json({ message: 'Product deleted successfully' });
      }
    });
  });
  export {router as productrouter}