import { NextFunction, Response, Request } from "express";
import express from "express";
import { getCustomer, postCustomer } from "../src/controllers/controller";
import fs from "fs";
import path from "path";
const router = express.Router();

const dataBase = `${__dirname}/../../../database.json`;

if (!fs.existsSync(dataBase)) {
  fs.writeFileSync(dataBase, "[]");
}

function auth(req: Request, res: Response, next: NextFunction) {
  
  next()
  
}

router.get("/customer", auth, getCustomer)
router.post("/customer/", auth, postCustomer)

router.get("/customer/:email", async function (req: Request, res: Response, next: NextFunction) {
  try {
    let data = JSON.parse(fs.readFileSync(dataBase).toString());
    let customerEmail = req.params.email
    let customerData = data.find((customer: Record<string, unknown>) => {
      return customer.email === customerEmail
    })
    console.log(customerData);
    return res.render("customers", {customerData})
    
  }
  catch (error) {
    console.log(error);
    
  }
})

/* GET home page. */
router.get('/login', auth, function(req:Request, res:Response, next:NextFunction) {
  res.render('login', { title: '', body: "" });
});

router.post("/log_user", function (req: Request, res: Response, next: NextFunction) {
  try {
    console.log(req.body);
    res.redirect("/customer");
  }
  catch (error) {
    
  }
})



router.get('/register', auth, function(req:Request, res:Response, next:NextFunction) {
   res.render('register', { title: '', body: "" });
 });

 router.get("/customer", auth, function (req: Request, res: Response, next: NextFunction) {

 });

export default router;
    