import React from "react";
import { Breadcrumb, BreadcrumbItem, Media, Card, CardBody, CardImg, CardTitle, CardSubtitle } from "reactstrap";
import Banner from "./BannerComponent";
import { Link } from "react-router-dom";
import { baseURL } from "../shared/baseURL";

function RenderMembers({ member }) {
    return (
        <Card>
            <CardImg src={baseURL+member.image} />
            <CardBody>
                <CardTitle>{member.name} - {member.title}</CardTitle>
                <CardSubtitle>"{member.quote}"</CardSubtitle>
            </CardBody>
        </Card>
    );
}

function About(props) {

    return (
        <React.Fragment>
            <Banner message="LEARN MORE ABOUT US!" image="../images/HeaderImage3.jpg" />

            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About</BreadcrumbItem>
                    </Breadcrumb>
                </div>

                <div className="row row-content justify-content-center">
                    <h1 className="heading col-12">OUR CORE PRINCIPLES</h1>
                    <Media className="align-items-center">
                        <Media left href="#">
                            <img src={baseURL+"../images/Ayaka.png"} alt="Ayaka Sipping Tea" height="200px" />
                        </Media>
                        <Media body>
                            <Media heading>
                                Serenity
                            </Media>
                            Our tea shop offer customers a tranquil and relaxing atmosphere. Visitors to our tea shop are sure to feel at ease and enjoy our drinks to the fullest. Come to our tea shop to escape from all your stressful worries.
                        </Media>
                    </Media>
                    <Media className="align-items-center">
                        <Media body>
                            <Media heading>
                                High-quality Tea
                            </Media>
                            Not only will you be able to relax in our comfortable shop, you can also enjoy our expertly-made drinks and pastries. Immersing yourself in an amazing atmosphere with a nice drink in hand is, in our humble opinion, a most suitable put your mind at ease.
                        </Media>
                        <Media right href="#">
                            <img src={baseURL+"../images/Ayato.png"} alt="Ayato Drinking Milk Tea" height="200px" />
                        </Media>
                    </Media>
                    <Media className="align-items-center">
                        <Media left href="#">
                            <img src={baseURL+"../images/Thoma.png"} alt="Thoma" height="200px" />
                        </Media>
                        <Media body>
                            <Media heading>
                                Friendly Service
                            </Media>
                            Last but not least, a calm and tranquil tea shop should have a friendly and welcoming staff. Our staff serve customers with due diligence and will gladly help you if needed. If you have any special requests to make, please do not be afraid to ask any member of our staff.
                        </Media>
                    </Media>
                </div>

                <div className="row row-content justify-content-center">
                    <h1 className="heading col-12">NOTABLE MEMBERS</h1>
                    <div className="col-12 col-sm-3 m-1">
                        <RenderMembers member={props.members[0]}/>
                    </div>
                    <div className="col-12 col-sm-3 m-1">
                        <RenderMembers member={props.members[1]}/>
                    </div>
                    <div className="col-12 col-sm-3 m-1">
                        <RenderMembers member={props.members[2]}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default About;