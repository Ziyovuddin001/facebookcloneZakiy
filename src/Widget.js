import React from 'react'
import "./Widget.css"

function Widget() {
    return (
        <div className="widget">
            <iframe
                className="widget__scroll"
                title="facebook-post"
                src="https://www.pexels.com/search/nature%20wallpaper/"
                width="340"
                height="100%"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="none"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
        </div>
    )
}

export default Widget
