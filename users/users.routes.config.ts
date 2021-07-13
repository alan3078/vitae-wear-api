import { CommonRoutesConfig } from '../common/common.routes.config';
import UsersController from './controllers/users.controller';
import UsersMiddleware from './middleware/users.middleware';
import express from 'express';

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {
        this.app
            .route(`/api/v1/users`)
            .get(UsersController.listUsers)
            .post(
                UsersMiddleware.validateRequiredUserBodyFields,
                UsersMiddleware.validateSameEmailDoesntExist,
                UsersController.createUser
            );

        this.app.param(`/api/v1/userId`, UsersMiddleware.extractUserId);
        this.app
            .route(`/api/v1/users/:userId`)
            .all(UsersMiddleware.validateUserExists)
            .get(UsersController.getUserById)
            .delete(UsersController.removeUser);

        this.app.put(`/api/v1/users/:userId`, [
            UsersMiddleware.validateRequiredUserBodyFields,
            UsersMiddleware.validateSameEmailBelongToSameUser,
            UsersController.put,
        ]);

        this.app.patch(`/api/v1/users/:userId`, [
            UsersMiddleware.validatePatchEmail,
            UsersController.patch,
        ]);

        return this.app;
    }
}