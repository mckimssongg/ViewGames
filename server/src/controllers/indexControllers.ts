import {Request, Response} from 'express';

class indexControllers {
    public index (req: Request, res: Response) {
        res.json({text: 'API is /api/'});
    }
}

export const indexController = new indexControllers();