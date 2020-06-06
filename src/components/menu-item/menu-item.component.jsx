import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrls, size }) => (
    <div className="menu-item">
        <div className="content">
            <div className="title"> {title.toUpperCase()} </div>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
)

export default MenuItem;