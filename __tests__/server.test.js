'use strict';

const { server } = require('../src/server.js');
const supergoose = require('@code-fellows/supergoose');
const { it, expect } = require('@jest/globals');
const mockRequest = supergoose(server);

describe('API SERVER:', () => {

  it('should create a new user in the db', async () => {
    const response = await mockRequest.post('/signup').send({ username: 'test', password: '123pw'})
    expect(response.status).toBe(201);
    expect(response.body.username).toEqual('test');
    // console.log('looking for response.body', response.body);
  });

  it('should sign in user', async () => {
    const response = await mockRequest.post('/signin').auth("test", "123pw");
    expect(response.status).toBe(200);
    expect(response.body.username).toEqual('test');
    // console.log('trying to see if this works', response.body);
  });
  
  it('should have invalid middleware function not send a basic header', async () => {
    const response = await mockRequest.post('/signin').auth("badUsername", "badPassword");
    expect(response.status).toBe(403);
  });

  it('should sign up new user and log them in', async () => {
    const request = await mockRequest.post('/signup').send({ username: 'test', password: '123pw'})
    const response = await mockRequest.post('/signin').auth("test", "123pw");
    expect(response.status).toBe(200);
    expect(request.body.username).toEqual('test');
    expect(response.body.username).toEqual('test');
  });

})