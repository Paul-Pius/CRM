import express from "express";
import { Response, Request, NextFunction } from "express";
const router = express.Router();
// var express = require('express');

/* GET users listing. */
router.get('/', function(req:Request, res:Response, next:NextFunction) {
  res.send('respond with a resource');
});

export default router;
