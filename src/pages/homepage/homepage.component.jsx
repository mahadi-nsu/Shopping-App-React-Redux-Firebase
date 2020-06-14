import React from 'react';

//style import
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

const HomePage = ({ history }) => {
    console.log(history);
    console.log("Mahadi");
    return (
        // console.log("mahadi")
        <div className="homepage">
            {/* console.log(props);
            console.log("Mahadi"); */}
            <Directory />
        </div>
    )
}
export default HomePage;