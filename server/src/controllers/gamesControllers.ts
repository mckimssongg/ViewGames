import {Request, Response} from 'express';
import poolDatabase from '../database';

class gamesControllers {
    public index (req: Request, res: Response) {
        poolDatabase.query('DESCRIBE games');
        res.json({text: 'API is /api/games'});
    }

    public create (req: Request, res: Response) {
        res.json({message: 'Game Saved'});
    }
}

const gamesController = new gamesControllers();
export default gamesController;