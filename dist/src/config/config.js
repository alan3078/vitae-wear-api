"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { PORT, HOST, HOST_URL, API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } = process.env;
//assert(PORT, 'PORT is require');
//assert(HOST, 'HOST is require');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbmZpZy9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQixNQUFNLEVBQ0YsSUFBSSxFQUNKLElBQUksRUFDSixRQUFRLEVBQ1IsT0FBTyxFQUNQLFdBQVcsRUFDWCxZQUFZLEVBQ1osVUFBVSxFQUNWLGNBQWMsRUFDZCxtQkFBbUIsRUFDbkIsTUFBTSxFQUNULEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUVoQixrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBRWxDLGtCQUFlO0lBQ1gsSUFBSSxFQUFFLElBQUk7SUFDVixJQUFJLEVBQUUsSUFBSTtJQUNWLEdBQUcsRUFBRSxRQUFRO0lBQ2IsY0FBYyxFQUFHO1FBQ2IsTUFBTSxFQUFFLE9BQU87UUFDZixVQUFVLEVBQUUsV0FBVztRQUN2QixXQUFXLEVBQUUsWUFBWTtRQUN6QixTQUFTLEVBQUUsVUFBVTtRQUNyQixhQUFhLEVBQUUsY0FBYztRQUM3QixpQkFBaUIsRUFBRSxtQkFBbUI7UUFDdEMsS0FBSyxFQUFFLE1BQU07S0FDaEI7Q0FDSixDQUFBIn0=