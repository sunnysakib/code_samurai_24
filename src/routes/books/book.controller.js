const Book = require('../../models/book.mongo')
// GET
async function httpGetBooks(req, res) {
    const { value, sort, order } = req.query;
    console.log(req.query)
    try {
            let book = await Book.find({})
            console.log("ok")
            return res.status(200).json({books:book})
        // console.log("out")
        // const query = req.query;
        // let book = await Book.find({title:query.title});
        // return res.status(200).json({books:book})
        
      } catch (err) {
        console.log(err);
        return { message: "Failed fecth user data", error: err.message};
      }
  }

async function httpPostBooks(req, res) {
  const book = req.body;
  try {
    const newBook = {
      id: book.id,
      title: book.title,
      author: book.author,
      genre: book.genre,
      price: book.price,
    };
    Book.create(newBook);
    return res.status(201).json(newBook);
  } catch (error) {
    return res.status(400).json({ message: "books creation failed", error: err.message });
  }
}

async function httpGetBookById(req, res) {
  const id = req.params.id;
  try {
    let data = await Book.find({id:id});
    if(data.length ===0){
        return res.status(404).json({ message: `book with id: ${id} was not found` });
    }else{
        return res.status(200).json(data);
    }
  } catch (err) {
    return res.status(400).json({ message: "Failed", error: err.message });
  }
}
async function httpUpdateBook(req, res) {
  const book = req.body;
  const id = parseInt(req.params.id);
  let books = await Book.find({});
  let data = books.find(book => book.id === id);
  let bookIn = books.findIndex(book => book.id === id);
  if(bookIn === -1){
    return res.status(404).json({ message: `book with id: ${id} was not found` });
  }
  try {
    const updateBook = {
      id: id,
      title: book.title,
      author: book.author,
      genre: book.genre,
      price: book.price,
    };
    await Book.findByIdAndUpdate(data._id, updateBook)
    return res.status(200).json(updateBook);
  } catch (err) {
    return res.status(400).json({ message: "books update failed", error: err.message });
  }
}

module.exports = { httpPostBooks, httpGetBooks, httpGetBookById, httpUpdateBook };
