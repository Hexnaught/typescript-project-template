import request from 'supertest';
import { server } from './server';
import * as http from 'http';

// FIXME: This is just an example to show Jest working
it(`Testing to see if Jest works`, () => {
  expect(true).toBe(true);
});

let testServer: http.Server;

// FIXME: This is just an example to show Jest working
describe(`Test Express App`, () => {
  beforeAll((done) => {
    testServer = server.listen(8989);
    done();
  });

  afterAll((done) => {
    testServer.close();
    done();
  });

  it(`Request to root URI should return hello world`, async () => {
    const result = await request(server.app).get(`/`).send();

    expect(result.status).toBe(200);
    expect(result.body.message).toBe(`Hello World!`);
    expect(result.body.status).toBe(`OK`);
    expect(result.body.statusCode).toBe(200);
  });
});
