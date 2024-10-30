"use strict";
//Type Annotations
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
var isDone = true;
var num = 123;
var username = "kris";
var list = [1, 23, 4];
var list1 = ["a", "b", "c"];
//Union Types
var Id = "ID-121"; //valid
Id = 123; // valid
//enum
/* enum is a way to define a set of named constants*/
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["ServerError"] = 500] = "ServerError";
    Status[Status["UnAuthorized"] = 401] = "UnAuthorized";
})(Status || (exports.Status = Status = {}));
var response = Status.Success;
// console.log(response)
