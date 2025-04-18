import { Pool } from 'pg';

const pool = new Pool({
    user: '',
    host: '',
    database: '',
    password: '',
    port: 1234,
});

export default pool;
