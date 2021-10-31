import dotenv from 'dotenv';
import { server } from './server';

dotenv.config({
  path: `.env`,
});

server.listen(process.env.APP_PORT);
