import { Router } from 'express';
import { indexController } from '../controllers/indexControllers';

class indexRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', indexController.index);
    }
}

export default new indexRoutes().router;