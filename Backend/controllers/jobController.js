import asyncHandler from "express-async-handler";
import Job from "../models/jobModel.js";


// ======================================
// @desc    Get all jobs
// @route   GET /api/jobs
// ======================================
export const getJobs = asyncHandler(async (req, res) => {
  const pageSize = 6;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        $or: [
          { title: { $regex: req.query.keyword, $options: "i" } },
          { company: { $regex: req.query.keyword, $options: "i" } },
        ],
      }
    : {};

  const count = await Job.countDocuments({ ...keyword });

  const jobs = await Job.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    jobs,
    page,
    pages: Math.ceil(count / pageSize),
  });
});


// ======================================
// @desc    Get single job
// @route   GET /api/jobs/:id
// ======================================
export const getJobById = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    res.status(404);
    throw new Error("Job not found");
  }

  res.status(200).json({
    success: true,
    job,
  });
});


// ======================================
// @desc    Create new job
// @route   POST /api/jobs
// ======================================
export const createJob = asyncHandler(async (req, res) => {
  const { title, company, location, description, salary } = req.body;

  const job = await Job.create({
    title,
    company,
    location,
    description,
    salary,
  });

  res.status(201).json({
    success: true,
    job,
  });
});


// ======================================
// @desc    Update job
// @route   PUT /api/jobs/:id
// ======================================
export const updateJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    res.status(404);
    throw new Error("Job not found");
  }

  job.title = req.body.title || job.title;
  job.company = req.body.company || job.company;
  job.location = req.body.location || job.location;
  job.description = req.body.description || job.description;
  job.salary = req.body.salary || job.salary;

  const updatedJob = await job.save();

  res.status(200).json({
    success: true,
    job: updatedJob,
  });
});


// ======================================
// @desc    Delete job
// @route   DELETE /api/jobs/:id
// ======================================
export const deleteJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    res.status(404);
    throw new Error("Job not found");
  }

  await job.deleteOne();

  res.status(200).json({
    success: true,
    message: "Job removed successfully",
  });
});