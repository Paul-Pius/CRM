import express, { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";

const dataBase = `${__dirname}/../../../database.json`;

if (!fs.existsSync(dataBase)) {
    fs.writeFileSync(dataBase, "[]");
  }

  const database = JSON.parse(fs.readFileSync(dataBase).toString());

  function getCustomer(req: Request, res: Response, next: NextFunction) {
      res.status(200);
      res.render('customer', {data: database})
  }

  function postCustomer(req: Request, res: Response, next: NextFunction) {
      const user = { ...req.body };
      database.push(user);
      fs.writeFileSync(dataBase, JSON.stringify(database))
      res.redirect('/login');
  }

  export { getCustomer, postCustomer };