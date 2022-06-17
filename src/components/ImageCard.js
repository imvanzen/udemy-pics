import React from "react";

class ImageCard extends React.Component {
    render () {
        return (
            <img 
                alt={this.props.image.description} 
                src={this.props.image.urls.regular}
            />
        )
    }
}

export default ImageCard;