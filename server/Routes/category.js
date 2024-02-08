import express  from "express";
import db from "../db.js";

const router = express.Router()

router.get('/categories', (req, res) => {
    db.query('SELECT * FROM categories', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  });

  router.post('/categories', (req, res) => {
    const {category_id, name, parent_category_id } = req.body;
    db.query('INSERT INTO categories (category_id, name, parent_category_id) VALUES (?, ?, ?)', [category_id, name, parent_category_id], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.status(201).json({ message: 'Product created successfully', categoryId: results.insertId });
      }
    });
  });
  router.delete('/categories/:id', (req, res) => {
    const categoryId = req.params.id;
    db.query('DELETE FROM categories WHERE idproducts = ?', categoryId, (error, results) => {
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
export {router as categoryrouter}