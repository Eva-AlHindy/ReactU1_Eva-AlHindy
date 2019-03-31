/* DashBoardComponent is a class component which has three states in the constructor:
1- userList which is an array
2- a value that respects the value of the input field in the form.
3-color which we use to change the colour of the text in the user list.
the component has also four methods.
1-handleChange: To control and change the value of the input field in the form by using setState.
2-addUserName: To add the value of the input field as an item into the userList array.
3-removUserName: To remove an item from the userList array.
4-toggleColor: To change the color of the text of user by change the state of the color
from true till false or vice versa by using setState.
*/
import React, { Component , Fragment} from 'react';
import UserListComponent from '../components/UserListComponent';
import CardComponent from '../components/CardComponent';
import {Container,Row,Col,Button,Form,ListGroup} from 'react-bootstrap';

class DashBoardComponent extends Component {
  constructor(props) {
  super(props);
  this.state ={
          userList:['Eva','Jinne','John'],
          value: '',
          color:true
         };
    this.handleChange = this.handleChange.bind(this);
    this.addUserName = this.addUserName.bind(this);
  }
/*A method which controls and changes the value of the input field in the form by using setState */
  handleChange(event) {
    this.setState({value: event.target.value});
  }
/*A method which adds the value of the input field as an item into the userList array
 without mutating it by using concat  method . */
  addUserName(event) {
  const newUser=this.state.userList.concat([this.state.value]);
  this.setState({userList: newUser});
  event.preventDefault();
  }
  /*A method which remove an item from userList . */
  removUserName = (e) => {
       const removeUser=this.state.userList.slice(1);
       this.setState({userList: removeUser});
    }

  /*A method which changes the color of the text of user by change the state of the color
  from true till false or vice versa by using setState. */
    toggleColor = (e) => {
       this.setState({
         color: !this.state.color
       })
    }

/*We render two card's components*/
  render(){
    return (
      <Fragment>
        <Container>
          <Row>
            <Col  lg="6">
              <div >
                <CardComponent>
                  <ListGroup>
                    {/*We render the userList array by using map method and we use index as a key.*/}
                    {this.state.userList.map((user,index) =>
                    <UserListComponent key={index} color={this.state.color}> {user}</UserListComponent>
                    )}
                </ListGroup>
                <div>
                {/*We call toggleColor method when we click the button .*/}
                <Button variant="warning" onClick={() =>this.toggleColor(this.state.color)}>Toggle color</Button>
                </div>
                <br />
              </CardComponent>
            </div>
          </Col>

          <Col  lg="6">
            <div >
              <CardComponent>
                <Form onSubmit={this.addUserName}>
                  <Form.Control className="inputForm" size="lg" type="text" placeholder="User Name" value={this.state.value}  onChange={this.handleChange} />
                  <br />
                  {/*We calladdUserName method when we click the submit button in the form .*/}
                  <Button variant="success" type="submit">  Add user name</Button>
                </Form>
                <br />
                <div>
                {/*We call removUserName method when we click the button .*/}
                <Button variant="danger" onClick={this.removUserName}>Remove user name</Button>
                </div>
                <br />
            </CardComponent>
          </div>
        </Col>
      </Row>
    </Container>
  </Fragment>
    );
  }
}

export default DashBoardComponent;
