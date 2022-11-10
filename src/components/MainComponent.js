import React, { Component } from "react";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import Home from "./HomeComponent";
import DishDetail from "./DishdetailComponent";
import About from "./AboutComponent";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  postComment,
  fetchComments,
  fetchDishes,
  fetchPromos,
} from "../redux/ActionCreators";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => (
  console.log("dispatched"),
  {
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => {
      dispatch(fetchDishes());
    },
    //dispatching the thunk by using dispatch and in order to dispatch you need to map it in the dispatch props so that it will be available for the main component to make use of.
    resetFeedbackForm: () => {
      dispatch(actions.reset("feedback"));
    },
    fetchComments: () => {
      dispatch(fetchComments());
    },
    fetchPromos: () => {
      dispatch(fetchPromos());
    },
  }
);

class Main extends Component {
  constructor(props) {
    super(props);

    //  selectedD ish: null, deleted together with the onDishSelect not need anymore. Implementation of react router dom
  }
  //  onDishSelect(dishId) {
  //    this.setState({ selectedDish: dishId });
  //  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={
            this.props.promotions.promotions.filter(
              (promo) => promo.featured
            )[0]
          }
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        /> //all featured that is true
      );
    };
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
        />
      );
    };

    return (
      <>
        <Header />
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
        <Switch>
          <Route path="/home" component={HomePage} />
          {/*<Route exact path="/menu" element={() => <Menu dishes={this.state.dishes} />} />*/}
          {/*<Route exact path="/menu" component={<Menu dishes={this.state.dishes}/>} />*/}
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.props.leaders} />}
          />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route
            exact
            path="/contactus"
            component={() => (
              <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
            )}
          />
          <Redirect to="/home" />
        </Switch>
        </CSSTransition>
        </TransitionGroup>
        <Footer />
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
