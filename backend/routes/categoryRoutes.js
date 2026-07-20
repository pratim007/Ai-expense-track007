import express from 'express';
import protect from '../middleware/authMiddleWare.js';
import { createCategory, deleteCategory, getCategories, updateCategory } from '../controllers/categoryController.js';


const router = express.Router();

router.use(protect);

router.get('/', getCategories);
router.post('/', createCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export default router;