import React from 'react';

//style import
import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <h1>Welcome to HomePage</h1>
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <div className="title"> Hats </div>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <div className="title"> Hats </div>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <div className="title"> Jackets </div>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <div className="title"> WOMENS </div>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <div className="title"> MENS </div>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;