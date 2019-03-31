/*
CardComponent (WrapperComponent) is a class component which we use to show or hide the card.
It has one state (Showhide) in the constructor, and one method (toggleContent)
which we use to change the state(showHide) from true to false when we click the button
 (Show content) and this will in its turn to show or hide the card.
*/

import React, { Component } from 'react';
import {Button,Card} from 'react-bootstrap';
class CardComponent extends Component {

  constructor(props){
    super(props);
    /* We put (showHide) as a  beginning state in the constructor*/
    this.state = {
      showHide: true
    }
  }
  /* toggleContent is a method to change the state (Showhide) from true till false or vice versa
    by using setState.
  */
  toggleContent = (e) => {
      this.setState({
        showHide: !this.state.showHide
      })
    }
    /* we render the card which has a div and a button.
    when we click the button, we call the method (toggleContent)
    and this will show or hide the div which has (this.props.children)
    this props.children come from DashBoardComponent.
    */
  render(){
    return (
      <Card className="card">
        <div>
          {this.state.showHide?this.props.children:null}
        </div>
      <Button className="cardBtn" variant="primary" onClick={this.toggleContent}>Show content</Button>
      </Card>
    );
}
}

export default CardComponent;
