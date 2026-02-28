import express from 'express';
import {
  createJob,
  deleteJob,
  getJobs,
  getJobById,
  updateJob
} from '../controllers/jobController.js';

const router = express.Router();

router.route('/')
  .get(getJobs)
  .post(createJob);

router.route('/:id')
  .get(getJobById)
  .put(updateJob)
  .delete(deleteJob);

export default router;