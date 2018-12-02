import React, { Component } from "react";
import Jumbotron from "../components/jumbotron";
//import API
import API from "../utils/API";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/gridLayout";
import { List, ListItem } from "../components/list";
import { Input, TextArea, SubmitBtn } from "../components/form";


//Pages is the conatiner for the site, which renders the page
class books extends Component {
  // Initialize this.state.books as an empty array
  state = {
    //fields controllers
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };
  //This is where AJAX requests and DOM or state updates should occur
  componentDidMount (){
    this.loadBooks();
  }
//must use async with with await
//method to load all the books from get
//reset the form also 
loadBooks =  () =>{
  API.getBook()
  .then(res => this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  )
  .catch(err => console.log(err))
  console.log("books loaded")
};

// run api.deleteBook api
DeleteBtn = id => {
API.deleteBooks(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  //generale handler for forms 
  handleInputChange = event => {
const {name, value} =  event.target;
this.setState({[name]: value});
  }

  handleFormSubmit = event => {
    //prevent the page from reloading 
    event.preventDefault();
    //check to see if there is anything in the fields,
    //Run API.saveBooks if there is something in the fields and
    if(this.state.title && this.state.author){
      API.saveBooks({
        //pulling off info off the states
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis,

      })
      //Refresh
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
    }
  }
//take the value of whatever is in the state for input/author/synopsis
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What books Should I Read?</h1>
            </Jumbotron>
            <form>
            <Input
            value ={this.state.title}
            onChange = {this.handleInputChange}
            name = "title"
            placeholder="Title (required)"
            />
            <Input
            value ={this.state.author}
            onChange = {this.handleInputChange}
            name = "author"
            placeholder="Author (required)"
            />
            <TextArea
            value ={this.state.synopsis}
            onChange = {this.handleInputChange}
            name = "synopsis"
            placeholder="Synopsis (optional)"
            />
            <SubmitBtn
            disabled ={!(this.state.author && this.state.title)}
            onClick = {this.handleFormSubmit}
            > Submit Book
            </SubmitBtn>
            </form>

          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} - {book.author}
                      </strong>
                    </Link>
                      <DeleteBtn onClick={() => this.deleteBooks(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default books;
