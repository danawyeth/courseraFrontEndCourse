import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import Comment from "./CommentForm";

function RenderDish({ dish }) {
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

function RenderComments({ comments, addComment, dishId }) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <div>
          <h4>Comments</h4>
          {comments.map((comments) => {
            return (
              <>
                <p>{comments.comment}</p>
                <p>
                  -- {comments.author} ,{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comments.date)))}
                </p>
                
              </>
            );
          }
          )}
          <Comment dishId={dishId} addComment={addComment}/>
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
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
      
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.comments} addComment={props.addComment}
          dishId={props.dish.id} />
          
        
      </div>
    </div>
  );
};

export default Dishdetail;
