import React from 'react';

const ImageList = (props) => {
    const images = props.images.map(image => (
        <img src={image.urls.regular} key={image.id} />
    ));
 
    return (
        <div className='image-list'>
            {images}
        </div>
    )
}

export default ImageList;