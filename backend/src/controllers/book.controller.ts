const books = [];

export const getAllBooks = (req, res) => {
  res.json(books);
};

export const createBooks = (req, res) => {
  books.push(req.body);
  res.json(books);
};
