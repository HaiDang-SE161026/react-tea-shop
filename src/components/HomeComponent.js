import React from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardTitle, UncontrolledCarousel, Carousel, CarouselItem, CarouselCaption, CarouselIndicators, CarouselControl } from "reactstrap";
import Banner from "./BannerComponent";
import { baseURL } from "../shared/baseURL";

const carouselItems = [
    {
        src: baseURL+'images/TeahouseExterior.jpg',
        altText: 'Teashop Exterior',
        caption: 'It looks quite peaceful, does it not?',
        header: 'Exterior of our Teashop'
    },
    {
        src: baseURL+'images/TeahouseInterior.jpg',
        altText: 'Teashop Interior',
        caption: 'Do you think it looks cosy?',
        header: 'Interior of our Teashop'
    },
];



function RenderCard({ item }) {
    return (
        <Card>
            <CardImg src={baseURL+item.image} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardSubtitle>{item.price} VND</CardSubtitle>
            </CardBody>
        </Card>
    );
}



class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0
        };

        console.log(props);
    }

    onExiting = () => {
        this.animating = true;
    }

    onExited = () => {
        this.animating = false;
    }

    next = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === carouselItems.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? carouselItems.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex = (newIndex) => {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = carouselItems.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption captionText={item.caption} captionHeader={item.header} />
                </CarouselItem>
            );
        });

        const CarouselDisplay = () => {
            return (
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={carouselItems} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            );
        }

        return (
            <React.Fragment>
                <Banner message="WELCOME TO OUR TEA SHOP" image="../images/HeaderImage1.jpg" />
                <div className="container">
                    <div className="row justify-content-center">
                        {/* CAROUSEL */}
                        <Carousel
                            activeIndex={activeIndex}
                            next={this.next}
                            previous={this.previous}
                        >
                            <CarouselIndicators items={carouselItems} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                        </Carousel>
                        <hr />
                    </div>
                    <div className="row row-content justify-content-center">
                        <h1 className="heading col-12">SOME OF OUR FEATURED PRODUCTS</h1>
                        <div className="col-12 col-sm-3 m-1">
                            <RenderCard item={this.props.tea} />
                        </div>
                        <div className="col-12 col-sm-3 m-1">
                            <RenderCard item={this.props.coffee} />
                        </div>
                        <div className="col-12 col-sm-3 m-1">
                            <RenderCard item={this.props.pastry} />
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}
export default Home;