import React from "react";
import { Jumbotron } from "reactstrap";
import { baseURL } from "../shared/baseURL";

class Banner extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const styleBanner = {
            
            backgroundImage: 'url('+baseURL+this.props.image+')',
            backgroundSize: 'cover',

        }
        return(
            <Jumbotron style={styleBanner}>
                <div className="container">
                    <div className="row banner">
                        <div className="col-12">
                            <h1><strong>{this.props.message}</strong></h1>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    }
}
export default Banner;