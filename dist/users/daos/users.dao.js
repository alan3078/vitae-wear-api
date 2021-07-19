"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shortid_1 = __importDefault(require("shortid"));
const debug_1 = __importDefault(require("debug"));
const log = debug_1.default('app:in-memory-dao');
class UsersDao {
    constructor() {
        this.users = [];
        log('Created new instance of UsersDao');
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            user.id = shortid_1.default.generate();
            this.users.push(user);
            return user.id;
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users;
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users.find((user) => user.id === userId);
        });
    }
    putUserById(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => obj.id === userId);
            this.users.splice(objIndex, 1, user);
            return `${user.id} updated via put`;
        });
    }
    patchUserById(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => obj.id === userId);
            let currentUser = this.users[objIndex];
            const allowedPatchFields = [
                'password',
                'firstName',
                'lastName',
                'permissionLevel'
            ];
            for (const field of allowedPatchFields) {
                if (field in user) {
                    // @ts-ignore
                    currentUser[field] = user[field];
                }
            }
            this.users.splice(objIndex, 1, currentUser);
            return `${user.id} patched`;
        });
    }
    removeUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => obj.id === userId);
            this.users.splice(objIndex, 1);
            return `${userId} removed`;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => obj.email === email);
            let currentUser = this.users[objIndex];
            if (currentUser) {
                return currentUser;
            }
            else {
                return null;
            }
        });
    }
}
exports.default = new UsersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlcnMvZGFvcy91c2Vycy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBNkI7QUFDN0Isa0RBQXlCO0FBS3pCLE1BQU0sR0FBRyxHQUFvQixlQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtBQUV2RCxNQUFNLFFBQVE7SUFHVjtRQUZBLFVBQUssR0FBeUIsRUFBRSxDQUFBO1FBRzVCLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFBO0lBQzNDLENBQUM7SUFFSyxPQUFPLENBQUMsSUFBbUI7O1lBQzdCLElBQUksQ0FBQyxFQUFFLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNyQixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUE7UUFDbEIsQ0FBQztLQUFBO0lBRUssUUFBUTs7WUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDckIsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLE1BQWM7O1lBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFvQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFBO1FBQ3hFLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxNQUFjLEVBQUUsSUFBZ0I7O1lBQzlDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUNqQyxDQUFDLEdBQW1CLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUM3QyxDQUFBO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUNwQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsa0JBQWtCLENBQUE7UUFDdkMsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLE1BQWMsRUFBRSxJQUFrQjs7WUFDbEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQ2pDLENBQUMsR0FBbUIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQzdDLENBQUE7WUFDRCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3RDLE1BQU0sa0JBQWtCLEdBQUc7Z0JBQ3ZCLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxVQUFVO2dCQUNWLGlCQUFpQjthQUNwQixDQUFBO1lBQ0QsS0FBSyxNQUFNLEtBQUssSUFBSSxrQkFBa0IsRUFBRTtnQkFDcEMsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO29CQUNmLGFBQWE7b0JBQ2IsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtpQkFDbkM7YUFDSjtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUE7WUFDM0MsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQTtRQUMvQixDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsTUFBYzs7WUFDL0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQ2pDLENBQUMsR0FBbUIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQzdDLENBQUE7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDOUIsT0FBTyxHQUFHLE1BQU0sVUFBVSxDQUFBO1FBQzlCLENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxLQUFhOztZQUM5QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDakMsQ0FBQyxHQUFzQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FDbEQsQ0FBQTtZQUNELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDdEMsSUFBSSxXQUFXLEVBQUU7Z0JBQ2IsT0FBTyxXQUFXLENBQUE7YUFDckI7aUJBQU07Z0JBQ0gsT0FBTyxJQUFJLENBQUE7YUFDZDtRQUNMLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxRQUFRLEVBQUUsQ0FBQSJ9