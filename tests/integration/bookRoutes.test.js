const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose');

beforeAll(async () => {
  // Connect to the database if needed (optional if app already connects)
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('POST /api/books', () => {
  it('should create a new book', async () => {
    const res = await request(app)
      .post('/api/books')
      .send({
        title: 'Test Book Title',
        author: 'Test Author'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.title).toBe('Test Book Title');
    expect(res.body.author).toBe('Test Author');
    expect(res.body.isBorrowed).toBe(false);
  });
});
