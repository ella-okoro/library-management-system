const Book = require('../../models/Book');

describe('Book Model Test', () => {
  it('should create a book object correctly', () => {
    const book = new Book({ title: 'The Hobbit', author: 'J.R.R. Tolkien' });

    expect(book.title).toBe('The Hobbit');
    expect(book.author).toBe('J.R.R. Tolkien');
    expect(book.isBorrowed).toBe(false);
  });
});
