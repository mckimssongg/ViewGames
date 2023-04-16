import {Request, Response} from 'express';
import poolDatabase from '../database';

class gamesControllers {
    public list (req: Request, res: Response) {
        poolDatabase.query('SELECT * FROM games', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public getOne (req: Request, res: Response): any {
        const id: string = req.params.id
        poolDatabase.query('SELECT * FROM games WHERE id = ?', [id], function(err, result, fields) {
            if (err) throw err;
            else {
                if (Array.isArray(result) && result.length > 0) {
                    return res.json(result[0]);
                }
                res.status(404).json({text: "The game doesn't exists"});
            }
        });
        
    }

    public create (req: Request, res: Response): void {
        const game_data = req.body;
        poolDatabase.query('INSERT INTO games set ?', [game_data]);
        res.json({message: 'Game Saved'});
    }
    
    public update (req: Request, res: Response) {
        const id: string = req.params.id
        const game_data = req.body;
        poolDatabase.query('UPDATE games set ? WHERE id = ?', [game_data, id], function(err, result, fields) {
            if (err) throw err;
            else {
                res.json({message: `The game ${id} was updated`});
            }
        });
    }
    
    public delete (req: Request, res: Response) {
        const id: string = req.params.id
        poolDatabase.query('DELETE FROM games WHERE id = ?', [id], function(err, result, fields) {
            if (err) throw err;
            else {
                res.json({message: `The game ${id} was deleted`});
            }
        });
    }

}

const gamesController = new gamesControllers();
export default gamesController;