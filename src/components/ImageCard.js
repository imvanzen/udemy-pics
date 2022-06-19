import React from "react";

class ImageCard extends React.Component {
    constructor (props) {
        super(props);
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = (event) => {
    }

    render () {
        const {description, urls} = this.props.image;

        return (
            <img 
                ref={this.imageRef}
                alt={description} 
                src={urls.regular}
            />
        )
    }
}

export default ImageCard;