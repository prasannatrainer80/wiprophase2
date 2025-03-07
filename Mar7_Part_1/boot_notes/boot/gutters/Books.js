var books = [
    {bookId:1,bookName :"Let Us C",AuthorName : "Yashwanth Kanetkar",ISBN:"I123"},
    {bookId:2,bookName :"Learn XML",AuthorName : "Rachel Shelly",ISBN:"I284"},
    {bookId:3,bookName :"The Sky is falling",AuthorName : "Sidney Sheldon",
        ISBN:"K855"},
    {bookId:4,bookName :"Networks",AuthorName : "Ten 'N' Baum",ISBN:"K823"},
    {bookId:5,bookName :"Geethanjali",AuthorName:"Rabindranath Tagore",ISBN:"48823"},
]

var book={};
function addBook(id,bookName,authorName,isbn) {
    book.bookId = id;
    book.bookName = bookName;
    book.AuthorName = authorName;
    book.ISBN = isbn;
    // alert(book);
    // alert(book.bookName);
    books.push(book);
    alert("Added Book Successfully...");
}
function show() {
    alert(books.length);
    document.writeln("<table border='3' align='center'>");
    document.writeln("<tr>");
    document.writeln("<th>BookId</th><th>Book Name</th><th>Author Name</th><th>ISBN</th>");
    document.writeln("</tr>")
    for(var v in books) {
        document.writeln("<tr>");
        document.writeln("<td>" +books[v].bookId + "</td>");
        document.writeln("<td>" +books[v].bookName + "</td>");
        document.writeln("<td>" +books[v].AuthorName + "</td>");
        document.writeln("<td>" +books[v].ISBN + "</td>");
     //   alert(books[v].bookId + " " +books[v].bookName + " " + books[v].AuthorName + " "
      //      + books[v].ISBN + " ");
        document.writeln("</tr>");
    }
    document.write("</table>");
}