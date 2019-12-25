import React from 'react';
import { Container, Col, Form, Jumbotron, Button } from 'react-bootstrap';

class Registerpage extends React.Component {
	render() {
		return (
			<Container style={{ maxWidth: '500px', paddingTop: '50px'}}>
  			<h2>Register</h2>
				<Jumbotron>
					<Form>

						<Form.Group controlId="formBasicEmail">
					    <Form.Label>First name</Form.Label>
					    <Form.Control type="firstname" placeholder="Enter first name" />
					  </Form.Group>

					  <Form.Group controlId="formBasicEmail">
					    <Form.Label>Last name</Form.Label>
					    <Form.Control type="lastname" placeholder="Enter last name" />
					  </Form.Group>

					  <Form.Row>
					    <Form.Group as={Col} controlId="formGridEmail">
					      <Form.Label>Email</Form.Label>
					      <Form.Control type="email" placeholder="Enter email" />
					    </Form.Group>

					    <Form.Group as={Col} controlId="formGridPassword">
					    	<Form.Label>Password</Form.Label>
					      <Form.Control type="password" placeholder="Password" />
					    </Form.Group>
					  </Form.Row>

					  <Form.Group controlId="formGridAddress1">
					    <Form.Label>Address</Form.Label>
					    <Form.Control placeholder="1234 Main St" />
					  </Form.Group>

					  <Form.Row>
					    <Form.Group as={Col} controlId="formGridCity">
					      <Form.Label>City</Form.Label>
					      <Form.Control />
					    </Form.Group>

					    <Form.Group as={Col} controlId="formGridState">
					      <Form.Label>State</Form.Label>
					      <Form.Control as="select">
					        <option>Choose...</option>
					        <option>...</option>
					      </Form.Control>
					    </Form.Group>

					    <Form.Group as={Col} controlId="formGridZip">
					      <Form.Label>Zip</Form.Label>
					      <Form.Control />
					    </Form.Group>
					  </Form.Row>

					  <Form.Group id="formGridCheckbox">
					    <Form.Check type="checkbox" label="Check me out" />
					  </Form.Group>

					  <Button variant="primary" type="submit">
					    Submit
					  </Button>
					</Form>
				</Jumbotron>
			</Container>
			);
	}
}

export default Registerpage;
