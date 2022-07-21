import React from "react";
import Header from "./HeaderComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import Menu from "./MenuComponent";
import Footer from "./FooterComponent";
import About from "./AboutComponent";
import { PRODUCTS } from "../shared/products";
import { MEMBERS } from "../shared/members";
import { baseURL } from "../shared/baseURL";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products:[],
            members:[]
        }

        this.fetchProducts();
        this.fetchMembers();
    }

    fetchProducts(){
        return fetch(baseURL+'products')
        .then(response => response.json())
        .then(data => {
            this.setState({products:data});
        });
    }

    fetchMembers(){
        return fetch(baseURL+'members')
        .then(response => response.json())
        .then(data => {
            this.setState({members:data});
        });
    }

    render() {
        if(this.state.products.length){
            return (
                <React.Fragment>
                    <Header />
    
                    <Switch>
                        <Route path="/home" component={() => <Home  tea={this.state.products.filter((tea) => tea.featured && tea.category==="tea")[0]}
                                                                    coffee={this.state.products.filter((coffee) => coffee.featured && coffee.category==="coffee")[0]}
                                                                    pastry={this.state.products.filter((pastry) => pastry.featured && pastry.category==="pastry")[0]}
                                                                />} 
                        />
                        <Route exact path="/menu" component={() => <Menu    tea={this.state.products.filter((tea) => tea.category==="tea")}
                                                                            coffee={this.state.products.filter((coffee) => coffee.category==="coffee")}
                                                                            pastry={this.state.products.filter((pastry) => pastry.category==="pastry")}
                                                                    />}
                        
                        />
                        <Route exact path="/about" component={() => <About members={this.state.members} />} />
                        <Route exact path="/contact" component={Contact} />
                        <Redirect to="/home" />
                    </Switch>
    
                    <Footer />
    
                </React.Fragment>
            );
        }
        
    }
}
export default Main;