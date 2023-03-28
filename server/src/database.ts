import mysql from 'mysql2';
import keys from './keys';

const pool = mysql.createPool(keys.database);


pool.getConnection(function(err,conn){
    // Connection is automatically released when query resolves
    console.log('DB is conected')
});

export default pool;