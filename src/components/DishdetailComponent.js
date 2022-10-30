import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Dishdetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        dish: this.props.dish,
    };
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div>haha</div>;
    }
  }

  renderComments(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <div>
            <h4>Comments</h4>
            {dish.comments.map((dish) => {
              return (
                <>
                  <p>{dish.comment}</p>
                  <p>
                    -- {dish.author} , {new Intl.DateTimeFormat('en-US', {year: 'numeric' , month: 'short', day: '2-digit'}).format(new Date(Date.parse(dish.date)))}
                  </p>
                </>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderDish(this.props.dish)}
          {this.renderComments(this.props.dish)}
        </div>
      </div>
    );
  }
}

export default Dishdetail;
