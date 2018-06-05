let data = [];

export const addBook = (book) => {
    book.id = data.length;
    data.push(book);
}

export const getAllBooks = () => {
    return data;
};

export const deleteBook = (id) => {
    const idx = data.map((book) => book.id).indexOf(id);
    data.splice(idx, 1);
};