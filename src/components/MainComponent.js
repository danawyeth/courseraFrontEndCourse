import React, { Component } from "react";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import Contact from "./ContactComponent";
import Home from "./HomeComponent";
import { Routes, Route, Navigate } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    //  selectedDish: null, deleted together with the onDishSelect not need anymore. Implementation of react router dom
    };
  }

//  onDishSelect(dishId) {
//    this.setState({ selectedDish: dishId });
//  }

  render() {
      const HomePage = () => {
          return (
              <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}/> //all featured that is true
              
          )
      }
    return (
      <>
          <Header />
        <Routes>
            <Route path="/home" element={<HomePage/>}/>
            {/*<Route exact path="/menu" element={() => <Menu dishes={this.state.dishes} />} />*/}
            <Route exact path="/menu" element={<Menu dishes={this.state.dishes}/>} />
            <Route path="/" element={<Navigate replace to="/Home"/>}/>
            <Route exact path="/contactus" element={<Contact/>} />
        </Routes>
        
        <Footer />
      </> 
    );
  }
}

export default Main;