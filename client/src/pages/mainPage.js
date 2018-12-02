import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/gridLayout";
import { List, ListItem } from "../components/list";
import { Input, TextArea, SubmitBtn } from "../components/form";


//Pages is the conatiner for the site, which renders the page
class mainPage extends Component {
  // Initialize this.state.books as an empty array
  state = {
    //fields controllers
    books: [],
    title: "",
    author: "",
    synopsis: "",
    link: ""
  };
  //This is where AJAX requests and DOM or state updates should occur
  componentDidMount() {
    this.loadBooks();
  }
//must use async with with await
//method to load all the books from get
//reset the form also 

loadBooks = () => {
  API.getBooks()
    .then(res =>
      this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    )
    .catch(err => console.log(err));
};
// run api.deleteBook api
deleteBooks = id => {
  API.deleteBooks(id)
    .then(res => this.loadBooks())
    .catch(err => console.log(err));
};

  //generale handler for forms 
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    //prevent the page from reloading 
    //check to see if there is anything in the fields,
    //Run API.saveBooks if there is something in the fields and
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.saveBook())
        // .catch(err => console.log(err));
    }
  };
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
            <h1>Books On My List</h1>
          </Jumbotron>
          {this.state.books.length ? (
            <List>
              {this.state.books.map(book => (
                <ListItem key={book._id}>
                  <Link to={"/books/" + book._id}>
                    <strong>
                      {book.title} by {book.author}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => this.deleteBook(book._id)} />
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


export default mainPage;
