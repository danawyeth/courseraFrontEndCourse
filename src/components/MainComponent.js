import React, { Component } from "react";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from '../shared/dishes';
import Home from "./HomeComponent";
import { Routes, Route, Navigate } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    //  selectedDish: null, deleted together with the onDishSelect not need anymore. Implementation of react router dom
    };
  }

//  onDishSelect(dishId) {
//    this.setState({ selectedDish: dishId });
//  }

  render() {
      const HomePage = () => {
          return (
              <Home />
              
          )
      }
    return (
      <>
          <Header />
        {/*<Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <Dishdetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />*/}
        
        <Routes>
            <Route path="/home" element={<HomePage/>}/>
            {/*<Route exact path="/menu" element={() => <Menu dishes={this.state.dishes} />} />*/}
            <Route exact path="/menu" element={<Menu dishes={this.state.dishes}/>} />
            <Route path="/" element={<Navigate replace to="/Home"/>}/>
        </Routes>
        
        <Footer />
      </> 
    );
  }
}

export default Main;