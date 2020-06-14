import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import { Route } from 'react-router-dom';

// const HomePage = (props) => {
//   // console.log(props);
//   // console.log(history);
//   console.log(props.match);
//   console.log(props.history);
//   console.log(props.location);
//   console.log(props);
//   return (
//     <div>
//       <h1>
//         Home Page
//       </h1>
//     </div>
//   )
// }

// const TopicList = props => {
//   console.log(props);
//   return (
//     <div>
//       <h1>
//         Topic List  Page
//       </h1>
//     </div>
//   )
// }

// const TopicDetails = props => {
//   console.log(props);
//   return (
//     <div>
//       <h1>
//         Topic Details  Page : {props.match.params.topicId}
//       </h1>
//     </div>
//   )
// }

// const HatsPage = () => (
//   <div>
//     <h1>
//       Hats page
//      </h1>
//   </div>
// )


function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
