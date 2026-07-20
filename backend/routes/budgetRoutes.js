import express from 'express';
import protect from '../middleware/authMiddleWare.js';
import { analyzeBudgets, createBudget, deleteBudget, getBudget, updateBudget } from '../controllers/budgetController.js';

const router=express.Router();

router.use(protect);

router.get('/', getBudget);
router.post('/', createBudget);
router.put('/:id', updateBudget);
router.delete('/:id', deleteBudget);
router.post('/analyze', analyzeBudgets);

export default router;