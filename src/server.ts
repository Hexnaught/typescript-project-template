import express, { Application, Request, Response } from 'express';
import * as http from 'http';

/**
 * Express Server abstraction class, wrapping express and providing utility methods.
 */
class Server {
  public app: Application = express();

  /**
   * Start the server listening on a specific port.
   * @param port The port the server should be listening to
   * @returns {http.Server} The instance of `http.Server` started by express
   */
  public listen = (port: string | number | undefined): http.Server => {
    const appPort = Number(port) || 8080;
    // eslint-disable-next-line no-console
    return this.app.listen(appPort, () => console.log(`* Service Listening @ http://localhost:${appPort}/`));
  };
}

/**
 * An exported instance of the 'server'.
 * @example
 * import { server } from './server';
 * server.listen(3000);
 *
 * @example
 * import { server } from './server';
 * const myServer = server.listen(3000);
 * myServer.close();
 */
export const server = new Server();

// TODO: Add routes, handlers and middleware to `server.app` below our
// exported instance, like this 'hello world' one below.
server.app.get(`/`, (req: Request, res: Response) => {
  res.status(200).json({
    statusCode: 200,
    status: `OK`,
    message: `Hello World!`,
  });
});
