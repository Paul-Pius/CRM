"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const controller_1 = require("../src/controllers/controller");
const fs_1 = tslib_1.__importDefault(require("fs"));
const router = express_1.default.Router();
const dataBase = `${__dirname}/../../../database.json`;
if (!fs_1.default.existsSync(dataBase)) {
    fs_1.default.writeFileSync(dataBase, "[]");
}
function auth(req, res, next) {
    next();
}
router.get("/customer", auth, controller_1.getCustomer);
router.post("/customer/", auth, controller_1.postCustomer);
router.get("/customer/:email", function (req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            let data = JSON.parse(fs_1.default.readFileSync(dataBase).toString());
            let customerEmail = req.params.email;
            let customerData = data.find((customer) => {
                return customer.email === customerEmail;
            });
            console.log(customerData);
            return res.render("customers", { customerData });
        }
        catch (error) {
            console.log(error);
        }
    });
});
/* GET home page. */
router.get('/login', auth, function (req, res, next) {
    res.render('login', { title: '', body: "" });
});
router.post("/log_user", function (req, res, next) {
    try {
        console.log(req.body);
        res.redirect("/customer");
    }
    catch (error) {
    }
});
router.get('/register', auth, function (req, res, next) {
    res.render('register', { title: '', body: "" });
});
router.get("/customer", auth, function (req, res, next) {
});
exports.default = router;
//# sourceMappingURL=index.js.map