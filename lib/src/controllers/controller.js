"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCustomer = exports.getCustomer = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
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
    fs_1.default.writeFileSync(path_1.default.join(__dirname, "database.json"), JSON.stringify(dataBase, null, 3));
    res.redirect('/login');
}
exports.postCustomer = postCustomer;
//JSON.stringify(arrOfData, null, 3)
//   fs.writeFileSync(dataBase, JSON.stringify(database))
//   fs.writeFile(path.join(__dirname, "database.json"), JSON.stringify(arrOfData, null, 3),(error) => {
//     if (error) {
//         res.end(JSON.stringify({success: true, message: error}))
//     } else {
//         res.end(JSON.stringify({success: true, message: incomingData}))
//     }
// })  
//# sourceMappingURL=controller.js.map