"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = __importDefault(require("firebase"));
const config_1 = __importDefault(require("./config"));
const admin = firebase_1.default.initializeApp(config_1.default.firebaseConfig);
const db = admin.firestore();
exports.default = db;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uZmlnL2RiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQStCO0FBQy9CLHNEQUE2QjtBQUU3QixNQUFNLEtBQUssR0FBRyxrQkFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBQzNELE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQTtBQUU1QixrQkFBZSxFQUFFLENBQUEifQ==