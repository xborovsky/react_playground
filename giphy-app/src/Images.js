import React from 'react';

const Images = ({images}) => {
    return (
        <div>
            {images.map((data, index) => {
                return (
                    <img key={index} 
                         src={data.images.preview_gif.url}
                         alt={data.images.title}
                         height={data.images.preview_gif.height} 
                         width={data.images.preview_gif.width} />
                );
            })}
        </div>
    );
};

export default Images;