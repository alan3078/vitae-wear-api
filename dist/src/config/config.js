"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { PORT, HOST, HOST_URL, API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } = process.env;
// assert(PORT, 'PORT is require');
// assert(HOST, 'HOST is require');
exports.default = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        databaseURL: DATABASE_URL,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbmZpZy9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBMkI7QUFFM0IsZ0JBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUVmLE1BQU0sRUFDRixJQUFJLEVBQ0osSUFBSSxFQUNKLFFBQVEsRUFDUixPQUFPLEVBQ1AsV0FBVyxFQUNYLFlBQVksRUFDWixVQUFVLEVBQ1YsY0FBYyxFQUNkLG1CQUFtQixFQUNuQixNQUFNLEVBQ1QsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFBO0FBRWYsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUVuQyxrQkFBZTtJQUNYLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLElBQUk7SUFDVixHQUFHLEVBQUUsUUFBUTtJQUNiLGNBQWMsRUFBRTtRQUNaLE1BQU0sRUFBRSxPQUFPO1FBQ2YsVUFBVSxFQUFFLFdBQVc7UUFDdkIsV0FBVyxFQUFFLFlBQVk7UUFDekIsU0FBUyxFQUFFLFVBQVU7UUFDckIsYUFBYSxFQUFFLGNBQWM7UUFDN0IsaUJBQWlCLEVBQUUsbUJBQW1CO1FBQ3RDLEtBQUssRUFBRSxNQUFNO0tBQ2hCO0NBQ0osQ0FBQSJ9