import axios from "axios";
//API wraper
export default {
    //return all of the books
    getBook: function(){
        return axios.get("/api/books")
    },
    //return books by the ID
    getBooksID:function(id){
        return axios.get("/api/books/" + id)
    },
    //save/Post new books to database
    saveBooks: function(booksData) {
        return axios.post("/api/books", booksData)
    },
     //delete books from the DB by ID
     deleteBooks: function(id){
        return axios.delete("/api/books/" + id )

    }

};