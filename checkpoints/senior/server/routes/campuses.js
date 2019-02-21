'use strict';

const express = require('express');
const db = require('../models');
const Campus = db.models.campus;
const Student = db.models.student;

// This router is already mounted on `/api/campuses` in server/app.js
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    // res.json(await Campus.findAll()); // inline await works too!
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (err) {
    next(err);
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findById(req.params.id, {
      include: Student
    })
    res.json(campus);
  } catch (err) {
    next(err);
  }
})

router.get('/:id/students', async (req, res, next) => {
  try {
    const students = await Student.findAll({
      where: {
        campusId: req.params.id
      }
    });
    res.json(students);
  } catch (err) {
    next(err);
  }
})

router.post('/', async (req, res, next) => {
  try {
    const campus = await Campus.create(req.body);
    res.status(201).json(campus);
  } catch (err) {
    next(err);
  }
})

router.post('/:id/students', async (req, res, next) => {
  try {
    const student = await Student.create({
      ...req.body,
      campusId: req.params.id
    });
    res.status(201).json(student);
  } catch (err) {
    next(err);
  }
})


module.exports = router;
