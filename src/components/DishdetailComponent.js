import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";



function RenderDish({dish}) {
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
      return <div></div>;
    }
  }

  function RenderComments({dish}) {
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

  const Dishdetail = (props) => {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish}/>
          <RenderComments dish={props.dish}/>
        </div>
      </div>
    );
}


export default Dishdetail;
