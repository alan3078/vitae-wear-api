"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = __importDefault(require("firebase"));
const config_1 = __importDefault(require("./config"));
const db = firebase_1.default.initializeApp(config_1.default.firebaseConfig);
exports.default = db;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9kYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdEQUErQjtBQUMvQixzREFBNkI7QUFFN0IsTUFBTSxFQUFFLEdBQUcsa0JBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQTtBQUV4RCxrQkFBZSxFQUFFLENBQUEifQ==