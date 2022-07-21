import React from "react";
import Banner from "./BannerComponent";
import { Breadcrumb, BreadcrumbItem, Col, Form, FormGroup, Input, Label, FormFeedback, Button } from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleBlur = (field) => (event) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        })
    }

    validate = (firstname, lastname, telnum, email) => {
        const errors = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: ""
        };

        if (this.state.touched.firstname && firstname.length < 2)
            errors.firstname = "First Name should have at least one character";
        else if (this.state.touched.firstname && firstname.length > 15)
            errors.firstname = "First Name should not have more than 15 characters";

        if (this.state.touched.lastname && lastname.length < 2)
            errors.lastname = "Last Name should have at least one charactere";
        else if (this.state.touched.lastname && lastname.length > 15)
            errors.lastname = "Last Name should not have more than 15 characters";

        const regex = /^\d+$/;
        if (this.state.touched.telnum && !regex.test(telnum))
            errors.telnum = "Tel. number should contain only numbers!";
        if (this.state.touched.email && email.split("").filter(x => x === "@").length !== 1)
            errors.email = "Email should contain an @";

        return errors;
    }

    handleSubmit = (event) => {
        console.log("Current state is: " + JSON.stringify(this.state));
        alert("Thank You for submitting this feedback. We will try our best to accommodate your desires!");
        event.preventDefault();
    }

    render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);

        return (
            <React.Fragment>
                <Banner message="GIVE US SOME FEEDBACK!" image="../images/HeaderImage4.png" />

                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact</BreadcrumbItem>
                        </Breadcrumb>
                    </div>

                    <div className="row row-content">
                        <p><strong>We are always looking for ways to improve our tea shop in order to satisfy the needs of our customers.
                            If you could spare a moment to give us some feedback, it would be greatly appreciated.</strong></p>
                        <hr />
                    </div>

                    <div className="row row-content">
                        <Form onSubmit={this.handleSubmit} className="col-12">
                            {/* First Name and Last Name*/}
                            <FormGroup row>
                                <div className="col-12 col-sm-5 m-1">
                                    <Input type="text" id="firstname" name="firstname" placeholder="First Name"
                                        value={this.state.firstname}
                                        valid={errors.firstname === ""}
                                        invalid={errors.firstname !== ""}
                                        onBlur={this.handleBlur("firstname")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </div>
                                <div className="col-12 col-sm-5 m-1">
                                    <Input type="text" id="lastname" name="lastname" placeholder="Last Name"
                                        value={this.state.lastname}
                                        valid={errors.lastname === ""}
                                        invalid={errors.lastname !== ""}
                                        onBlur={this.handleBlur("lastname")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </div>
                            </FormGroup>

                            <FormGroup row>
                                <div className="col-12 col-sm-5 m-1">
                                    <Input type="tel" id="telnum" name="telnum" placeholder="Tel. number"
                                        value={this.state.telnum}
                                        valid={errors.telnum === ""}
                                        invalid={errors.telnum !== ""}
                                        onBlur={this.handleBlur("telnum")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </div>
                                <div className="col-12 col-sm-5 m-1">
                                    <Input type="email" id="email" name="email" placeholder="Email"
                                        value={this.state.email}
                                        valid={errors.email === ""}
                                        invalid={errors.email !== ""}
                                        onBlur={this.handleBlur("email")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </div>
                            </FormGroup>

                            <FormGroup row>
                                <div className="col-12">
                                    <label><strong>Topic of Feedback</strong></label>
                                </div>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" onChange={this.handleInputChange} />Complaint
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" onChange={this.handleInputChange} />Praise
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" onChange={this.handleInputChange} />Job-related
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" onChange={this.handleInputChange} />Others
                                    </Label>
                                </FormGroup>
                            </FormGroup>

                            {/* Feedback Box */}
                            <FormGroup row>
                                <Label htmlFor="message" className="col-12"><strong>Your Feedback</strong></Label>
                                <div className="col-12">
                                    <Input type="textarea" id="message" name="message" rows="12" value={this.state.message}
                                        onChange={this.handleInputChange} />
                                </div>
                            </FormGroup>

                            {/* Submit Button */}
                            <FormGroup row className="col-12">
                                <Button type="submit" color="primary">
                                    Send Feedback
                                </Button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}
export default Contact;