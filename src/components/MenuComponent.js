import React, { useState } from "react";
import Banner from "./BannerComponent";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardTitle, Media, Modal, ModalBody, ModalHeader } from "reactstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { baseURL } from "../shared/baseURL";

function RenderProducts({ items }) {

    const [modal, setModal] = React.useState(false);
    const [itemData, setModalData] = useState(false);

    const toggleModal = () => setModal(!modal);

    return (
        <React.Fragment>
            {items.map((item) => {
                return (
                    <div className="col-12 col-sm-3 m-1">
                        <Card onClick={() => {
                            setModalData(item);
                            setModal(true);
                        }} key={item.id}>
                            <CardImg src={baseURL+item.image} />
                            <CardBody>
                                <CardTitle>{item.name}</CardTitle>
                            </CardBody>
                        </Card>
                    </div>
                );
            })}

            <Modal isOpen={modal} toggle={toggleModal} large>
                <ModalHeader toggle={toggleModal}><strong>{itemData.name}</strong></ModalHeader>
                <ModalBody>
                    <Media>
                        <Media left>
                            <img src={baseURL+itemData.image} alt={itemData.name} height="200px" width="200px" />
                        </Media>
                        <Media body>
                            <Media heading>
                                <strong>Price: </strong>{itemData.price} VND <br />
                                {itemData.options ? <p><strong>Options: </strong>{itemData.options}</p> : null}
                            </Media>
                        </Media>
                    </Media>
                </ModalBody>
            </Modal>
        </React.Fragment>

    );


}

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
    }

    render() {
        return (
            <React.Fragment>
                <Banner message="TAKE A LOOK AT OUR PRODUCTS" image="../images/HeaderImage2.jpg" />

                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="row row-content justify-content-center">
                        <h1 className="heading col-12">TEA PRODUCTS</h1>
                        <RenderProducts items={this.props.tea} />
                    </div>
                    <div className="row row-content justify-content-center">
                        <h1 className="heading col-12">COFFEE PRODUCTS</h1>
                        <RenderProducts items={this.props.coffee} />
                    </div>
                    <div className="row row-content justify-content-center">
                        <h1 className="heading col-12">PASTRY PRODUCTS</h1>
                        <RenderProducts items={this.props.pastry} />
                    </div>
                </div>
            </React.Fragment>

        );
    }
}
export default Menu;