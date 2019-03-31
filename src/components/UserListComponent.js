/*
UserListComponent (UserComponent) is a function component which we use to show the user name.
*/

import React from 'react';
import {ListGroup} from 'react-bootstrap';

/* we definde two color red and green to toggle the text of  the user mane
(whish is: props.children from DashBoardComponent)  between them.*/

  const redColor = '#DC2601';
  const greenColor = '#26B001';

  function UserListComponent(props){
  /*We test the poperty of the color, if it is true so the color will be red and if it is false the color will be green.*/
    return  (
      <ListGroup.Item style={{color: props.color ? redColor : greenColor}} >
        <span >{props.children}</span>
      </ListGroup.Item>)
  }

export default UserListComponent;
