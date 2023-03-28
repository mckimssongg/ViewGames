import { Router } from 'express';
import gamesControllers from '../controllers/gamesControllers';

class gamesRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', gamesControllers.index);
        this.router.post('/', gamesControllers.create);
    }
}

export default new gamesRoutes().router;