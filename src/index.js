import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Comment from './App';
import * as serviceWorker from './serviceWorker';
import Data from './data.json';


  
// const comment = {
//     date: new Date(),
//     text: 'Test description',
//     author: {
//       name: 'Hello Krishna',
//       avatarUrl: 'https://placekitten.com/g/64/64',
//     },
// };
ReactDOM.render(
<Comment
    date={Data.avatardate}
    text={Data.text}
    author={Data.author}
/>,
document.getElementById('root')
);
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
