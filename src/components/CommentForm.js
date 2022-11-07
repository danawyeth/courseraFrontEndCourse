import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Col,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length; //checks to see if the value is greater than zero
const maxLength = (len) => (val) => !val || val.length <= len; //will check if length is less than or equal the value that is specified in this function
const minLength = (len) => (val) => val && val.length >= len;

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
    //alert("Current state is: " + JSON.stringify(values));
    this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  render() {
    return (
      <>
        <div>
          <Button outline color="primary" onClick={this.toggleModal}>
            <span className=" fa fa-sharp fa-solid fa-pencil">
              Submit Comment{" "}
            </span>
          </Button>
        </div>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Label htmlFor="rating">Rating</Label>
              <Col md={10}>
                <Control.select
                  model=".rating"
                  name="rating"
                  className="form-control"
                  validators={{
                    required,
                  }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
                <Errors
                  className="text-danger"
                  model=".rating"
                  show="touched"
                  messages={{
                    required: "Required",
                  }}
                />
              </Col>
              <Label htmlFor="name" md={2}>
                Your name
              </Label>
              <Col md={10}>
                <Control.text
                  model=".name"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>

              <Label htmlFor="comment" md={3}>
                Comment
              </Label>
              <Col md={10}>
                <Control.textarea
                  model=".comment"
                  id="comment"
                  name="comment"
                  rows="6"
                  className="form-control"
                />
              </Col>
              <Col md={{ size: 10 }}>
                <Button type="submit" color="primary" className="mt-2">
                  Submit
                </Button>
              </Col>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default Comment;
