import React from 'react';
import {Image} from 'semantic-ui-react'

import md from "./마당이.jpg"
import Comments from './Comment.js'


function App() {
  return (
    <div>
    <Image src={md} centered/>
    <Comments />
    </div>
  );
}

export default App;
