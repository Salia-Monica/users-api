const books = require ("../data/books")

const booksHandlers = {};
 booksHandlers.byCategory = (req,res,next)=>{
const category = reqquery.category;
if(category){
    let_bookk =books.filter((b)=>b.category == category);
    return res.status(200).JSON({succes:true, data:books})
}
next()
 },
booksHandlers.byAuthor = (req,res,next)=>{
    const category = requery.author;
    if(author){
         let_author =books.filter((b)=>b.category == category);
        return res.status(200).JSON({succes:true, data:books})
    }
    next()
}

module.exports = booksHandlers
