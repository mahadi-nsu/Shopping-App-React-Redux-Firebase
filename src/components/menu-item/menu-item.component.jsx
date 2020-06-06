import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div
        className={`${size} menu-item`}
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
    >
        <div>
            <div className="content">
                <div className="title"> {title.toUpperCase()} </div>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    </div>
)

export default MenuItem;