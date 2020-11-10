import React from "react";
import { Grid, Button, Image, Divider, Header, Icon } from "semantic-ui-react";

import md from "./마당이.jpg";
import Comments from "./Comment.js";
import FixedMenuLayout from "./Menu.js";
import FixedBoardLayout from "./Board.js";
import FixedBoardWriteLayout from "./Write.js"
import FixedFAQLayout from "./FAQ.js"
function App() {
  return (
    <div>
      <FixedFAQLayout />
    </div>
  );
}

export default App;
