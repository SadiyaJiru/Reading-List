import React, { Component } from "react";
import Jumbotron from "../components/jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { Cols, Rows, Container } from "../components/gridLayout";
import { List, ListItem } from "../components/List";
import { Input, textArea, submitBtn } from "../components/form";
//import API
import API from "../utils/API";

//Pages is the conatiner for the site, which renders the page
class books extends Component {
  // Initialize this.state.books as an empty array
  state = {
    books: []
  };
  //This is where AJAX requests and DOM or state updates should occur
  componentDidMount (){
    this.loadBooks();
  }
//must use async with with await
//method to load all the books from get
loadBooks = async () =>{
  let response ;
  try{
    //getAllBooks is the promise that we are retruning aso await is to be used only with promises 
    response = await API.getAllBooks();
  } catch(err){
    console.log(err)
  }
  //change the state of the books property 
  this.setState({ books: response.data });

  }

  render() {
    return (
      <Container fluid>
        <Rows>
          <Cols size="md-6">
            <Jumbotron>
              <h1>What books Should I Read?</h1>
            </Jumbotron>
            <form>
            <Input for="Title" placeholder="Title" />
            <Input for="Author" placeholder="Author"/>
            <textArea for="Synopsis" placeholder="Synopsis"/>
              <submitBtn>Submit Book</submitBtn>
            </form>
          </Cols>
          <Cols size="md-6 sm-12">
            <Jumbotron>
              <h1>books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Cols>
        </Rows>
      </Container>
    );
  }
}

export default books;
