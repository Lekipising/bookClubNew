import Books from "../models/books.model.js";

//Add a Book
export async function addBook(req, res) {
    try {
        let books = await Books.create(req.body);
        if (books) {
            res.status(200).json({
                success: true,
                message: 'Book created successfully',
                data: books
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Book could not be created at this time'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View a Book
export async function viewBook(req, res) {
    try {
        let allbooks = await Books.findAll({where: {book_id: req.params.id}});
        if (allbooks) {
            res.json({
                success: true,
                message: 'Book records retrieved successfully',
                data: allbooks
            })
        } else {
            res.json({
                success: true,
                message: 'No Book records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View all Books
export async function viewAllBooks(req, res) {
    try {
        let allbooks = await Books.findAll();
        if (allbooks) {
            res.json({
                success: true,
                message: 'Books records retrieved successfully',
                data: allbooks
            })
        } else {
            res.json({
                success: true,
                message: 'No Books record found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//Update Book record
export async function updateBook(req, res) {
    try {
        let books = await Books.findAll();
        if (books) {
            res.status(200).json({
                success: true,
                message: 'Book records retrieved successfully',
                data: allbooks
            })
        } else {
            res.json({
                success: true,
                message: 'Book was not found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//Delete a Book
export async function deleteBook(req, res) {
    try {
        let books = await Books.findAll();
        if (books) {
            res.status(200).json({
                success: true,
                message: 'Book records was successfully deleted',
                data: allbooks
            })
        } else {
            res.json({
                success: true,
                message: 'Book was not found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}