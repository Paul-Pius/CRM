"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCustomer = exports.getCustomer = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const dataBase = `${__dirname}/../../../database.json`;
if (!fs_1.default.existsSync(dataBase)) {
    fs_1.default.writeFileSync(dataBase, "[]");
}
const database = JSON.parse(fs_1.default.readFileSync(dataBase).toString());
function getCustomer(req, res, next) {
    res.status(200);
    res.render('customer', { data: database });
}
exports.getCustomer = getCustomer;
function postCustomer(req, res, next) {
    const user = Object.assign({}, req.body);
    database.push(user);
    fs_1.default.writeFileSync(dataBase, JSON.stringify(database));
    res.redirect('/login');
}
exports.postCustomer = postCustomer;
//# sourceMappingURL=controller.js.map