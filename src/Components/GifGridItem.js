import React from 'react'

export const GifGridItem = ({ url, id, title }) => {
    console.log(url,id,title)
    return (
        <div className="card animate__animated animate__zoomIn">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
