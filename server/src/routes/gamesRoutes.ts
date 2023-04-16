import { Router } from 'express';
import gamesControllers from '../controllers/gamesControllers';

class gamesRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', gamesControllers.list);
        this.router.get('/:id', gamesControllers.getOne);
        this.router.post('/', gamesControllers.create);
        this.router.put('/:id', gamesControllers.update);
        this.router.delete('/:id', gamesControllers.delete);
    }
}

export default new gamesRoutes().router;