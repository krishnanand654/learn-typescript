"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasicTypes_1 = require("../../../../Basic Datatypes/BasicTypes");
var Login = /** @class */ (function () {
    function Login(user) {
        this.user = user;
    }
    Login.prototype.login = function () {
        if (this.user.username == "admin" && this.user.password == "XYZ123") {
            return ({ status_code: BasicTypes_1.Status.Success, message: "Login successfull" });
        }
        return ({ status_code: BasicTypes_1.Status.UnAuthorized, message: "Login Failed! Invalid Username or Password" });
    };
    return Login;
}());
var loginInstance = new Login({ username: "admin", password: "XYZ123" });
console.log(loginInstance.login());
