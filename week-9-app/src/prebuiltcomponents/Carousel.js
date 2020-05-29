import React, { Component } from "react";
import Carousel from 'react-images';

class PrebuiltCarousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [{ source: 'https://cutt.ly/ke3x2y5' }, { source: 'https://cutt.ly/ee3x2lR' }, { source: 'https://cutt.ly/re3x2LP' }],
        }
    }

    render() {
        const { images } = this.state;

        return <Carousel views={images} />;
    }
}

export default PrebuiltCarousel;