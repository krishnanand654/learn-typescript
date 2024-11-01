"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var updateUser = function (user) {
    var existingUser = { id: 101, name: "kris", isActive: true };
    var updatedUser = __assign(__assign({}, existingUser), user);
    return updatedUser;
};
console.log(updateUser({ name: "krishnanand" }));
