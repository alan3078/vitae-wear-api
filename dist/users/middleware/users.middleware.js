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
const users_service_1 = __importDefault(require("../services/users.service"));
const debug_1 = __importDefault(require("debug"));
const log = debug_1.default('app:users-controller');
class UsersMiddleware {
    constructor() {
        // Here we need to use an arrow function to bind `this` correctly
        this.validatePatchEmail = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            if (req.body.email) {
                log('Validating email', req.body.email);
                this.validateSameEmailBelongToSameUser(req, res, next);
            }
            else {
                next();
            }
        });
    }
    validateRequiredUserBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body &&
                req.body.email &&
                req.body.password &&
                req.body.firstName &&
                req.body.lastName &&
                req.body.address &&
                req.body.phone) {
                next();
            }
            else {
                res.status(400).send({
                    error: `Missing required fields`
                });
            }
        });
    }
    validateSameEmailDoesntExist(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_service_1.default.getUserByEmail(req.body.email);
            if (user) {
                res.status(400).send({ error: `User email already exists` });
            }
            else {
                next();
            }
        });
    }
    validateSameEmailBelongToSameUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_service_1.default.getUserByEmail(req.body.email);
            if (user && user.id === req.params.userId) {
                next();
            }
            else {
                res.status(400).send({ error: `Invalid email` });
            }
        });
    }
    validateUserExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_service_1.default.readById(req.params.userId);
            if (user) {
                next();
            }
            else {
                res.status(404).send({
                    error: `User ${req.params.userId} not found`
                });
            }
        });
    }
    extractUserId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.id = req.params.userId;
            next();
        });
    }
}
exports.default = new UsersMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL21pZGRsZXdhcmUvdXNlcnMubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLDhFQUFtRDtBQUNuRCxrREFBeUI7QUFFekIsTUFBTSxHQUFHLEdBQW9CLGVBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzFELE1BQU0sZUFBZTtJQUFyQjtRQWlESSxpRUFBaUU7UUFDakUsdUJBQWtCLEdBQUcsQ0FDakIsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEIsRUFDNUIsRUFBRTtZQUNBLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hCLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUV2QyxJQUFJLENBQUMsaUNBQWlDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTthQUN6RDtpQkFBTTtnQkFDSCxJQUFJLEVBQUUsQ0FBQTthQUNUO1FBQ0wsQ0FBQyxDQUFBLENBQUE7SUF5QkwsQ0FBQztJQXRGUyw4QkFBOEIsQ0FDaEMsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7O1lBRTFCLElBQ0ksR0FBRyxDQUFDLElBQUk7Z0JBQ1IsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUNkLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUTtnQkFDakIsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTO2dCQUNsQixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVE7Z0JBQ2pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTztnQkFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQ2hCO2dCQUNFLElBQUksRUFBRSxDQUFBO2FBQ1Q7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLEtBQUssRUFBRSx5QkFBeUI7aUJBQ25DLENBQUMsQ0FBQTthQUNMO1FBQ0wsQ0FBQztLQUFBO0lBRUssNEJBQTRCLENBQzlCLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixNQUFNLElBQUksR0FBRyxNQUFNLHVCQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDN0QsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsMkJBQTJCLEVBQUUsQ0FBQyxDQUFBO2FBQy9EO2lCQUFNO2dCQUNILElBQUksRUFBRSxDQUFBO2FBQ1Q7UUFDTCxDQUFDO0tBQUE7SUFFSyxpQ0FBaUMsQ0FDbkMsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7O1lBRTFCLE1BQU0sSUFBSSxHQUFHLE1BQU0sdUJBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUM3RCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUN2QyxJQUFJLEVBQUUsQ0FBQTthQUNUO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUE7YUFDbkQ7UUFDTCxDQUFDO0tBQUE7SUFpQkssa0JBQWtCLENBQ3BCLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixNQUFNLElBQUksR0FBRyxNQUFNLHVCQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDMUQsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLENBQUE7YUFDVDtpQkFBTTtnQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDakIsS0FBSyxFQUFFLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLFlBQVk7aUJBQy9DLENBQUMsQ0FBQTthQUNMO1FBQ0wsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUNmLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQTtZQUMvQixJQUFJLEVBQUUsQ0FBQTtRQUNWLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQSJ9