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
// we import our newly created user services
const users_service_1 = __importDefault(require("../services/users.service"));
// we import the argon2 library for password hashing
const argon2_1 = __importDefault(require("argon2"));
// we use debug with a custom context as described in Part 1
const debug_1 = __importDefault(require("debug"));
const db_1 = __importDefault(require("../../src/config/db"));
const log = debug_1.default('app:users-controller');
class UsersController {
    listUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allUsers = [];
                const querySnapshot = yield db_1.default.collection('users').get();
                querySnapshot.forEach((doc) => allUsers.push(doc.data()));
                res.status(200).json(allUsers);
            }
            catch (error) {
                res.status(500).json;
            }
            //const users = await usersService.list(100, 0);
            //res.status(200).send(users);
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const user = await usersService.readById(req.body.id);
            //res.status(200).send(user);
            try {
                const querySnapshot = yield db_1.default
                    .collection('users')
                    .doc(req.params.userId)
                    .get();
                if (querySnapshot.exists) {
                    const userData = querySnapshot.data();
                    res.status(200).json(userData);
                }
                else {
                    res.status(404).send({
                        error: `User ${req.params.userId} not found`
                    });
                }
            }
            catch (error) {
                res.status(500).json;
            }
            //const users = await usersService.list(100, 0);
            //res.status(200).send(users);
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, firstName, lastName, invoiceNumber, address, tag, phone, permissionLevel } = req.body;
            try {
                const user = db_1.default.collection('users').doc();
                const userObject = {
                    id: user.id,
                    email,
                    password,
                    firstName,
                    lastName,
                    invoiceNumber,
                    address,
                    tag,
                    phone,
                    permissionLevel
                };
                user.set(userObject);
                res.status(200).send({
                    status: 'success',
                    message: 'user added successfully',
                    data: userObject
                });
            }
            catch (error) {
                res.status(500).json;
            }
            //req.body.password = await argon2.hash(req.body.password);
            //const userId = await usersService.create(req.body);
            //res.status(201).send({ id: userId });
        });
    }
    patch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body.password) {
                req.body.password = yield argon2_1.default.hash(req.body.password);
            }
            log(yield users_service_1.default.patchById(req.body.id, req.body));
            res.status(204).send();
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.password = yield argon2_1.default.hash(req.body.password);
            log(yield users_service_1.default.putById(req.body.id, req.body));
            res.status(204).send();
        });
    }
    removeUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield db_1.default.collection('users').doc(req.params.userId).delete();
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json;
            }
            //const users = await usersService.list(100, 0);
            //res.status(200).send(users);
            //log(await usersService.deleteById(req.body.id));
            //res.status(204).send();
        });
    }
}
exports.default = new UsersController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL2NvbnRyb2xsZXJzL3VzZXJzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHQSw0Q0FBNEM7QUFDNUMsOEVBQW9EO0FBRXBELG9EQUFvRDtBQUNwRCxvREFBMkI7QUFFM0IsNERBQTREO0FBQzVELGtEQUF5QjtBQUV6Qiw2REFBb0M7QUFFcEMsTUFBTSxHQUFHLEdBQW9CLGVBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO0FBRTFELE1BQU0sZUFBZTtJQUNYLFNBQVMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN2RCxJQUFJO2dCQUNBLE1BQU0sUUFBUSxHQUFRLEVBQUUsQ0FBQTtnQkFDeEIsTUFBTSxhQUFhLEdBQUcsTUFBTSxZQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO2dCQUN4RCxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQzlELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQ2pDO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUE7YUFDdkI7WUFDRCxnREFBZ0Q7WUFDaEQsOEJBQThCO1FBQ2xDLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN6RCx3REFBd0Q7WUFDeEQsNkJBQTZCO1lBQzdCLElBQUk7Z0JBQ0EsTUFBTSxhQUFhLEdBQUcsTUFBTSxZQUFFO3FCQUN6QixVQUFVLENBQUMsT0FBTyxDQUFDO3FCQUNuQixHQUFH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