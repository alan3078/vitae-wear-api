"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const assert_1 = __importDefault(require("assert"));
dotenv_1.default.config();
const { PORT, HOST, HOST_URL, API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } = process.env;
assert_1.default(PORT, 'PORT is require');
assert_1.default(HOST, 'HOST is require');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQTJCO0FBQzNCLG9EQUEyQjtBQUUzQixnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBRWYsTUFBTSxFQUNGLElBQUksRUFDSixJQUFJLEVBQ0osUUFBUSxFQUNSLE9BQU8sRUFDUCxXQUFXLEVBQ1gsWUFBWSxFQUNaLFVBQVUsRUFDVixjQUFjLEVBQ2QsbUJBQW1CLEVBQ25CLE1BQU0sRUFDVCxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUE7QUFFZixnQkFBTSxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFBO0FBQy9CLGdCQUFNLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUE7QUFFL0Isa0JBQWU7SUFDWCxJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxJQUFJO0lBQ1YsR0FBRyxFQUFFLFFBQVE7SUFDYixjQUFjLEVBQUU7UUFDWixNQUFNLEVBQUUsT0FBTztRQUNmLFVBQVUsRUFBRSxXQUFXO1FBQ3ZCLFdBQVcsRUFBRSxZQUFZO1FBQ3pCLFNBQVMsRUFBRSxVQUFVO1FBQ3JCLGFBQWEsRUFBRSxjQUFjO1FBQzdCLGlCQUFpQixFQUFFLG1CQUFtQjtRQUN0QyxLQUFLLEVBQUUsTUFBTTtLQUNoQjtDQUNKLENBQUEifQ==