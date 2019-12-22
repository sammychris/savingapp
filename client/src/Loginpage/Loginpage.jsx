import React from 'react';
import { Container, Row, Col, Form, Jumbotron, Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const socialStyle = {
	display: 'flex',
	justifyContent: 'space-between',
	// paddingBottom: '50px'
}

class Loginpage extends React.Component {
	render() {
		return (
			<Container style={{ maxWidth: '500px', paddingTop: '50px'}}>
  			<h2>Login</h2>
				<Jumbotron>
					<Form>
						<Form.Label>Log in using your social media accounts</Form.Label>
						<ButtonToolbar style={socialStyle}>
						  <Button variant="primary" type="submit">
						    <i className="fab fa-facebook-f"></i> Login with Facebook
						  </Button>
						  <Button variant="danger" type="submit">
						    <i className="fab fa-google-plus-g"></i> Login with Google
						  </Button>
						</ButtonToolbar>
						<Form.Text className="text-muted">
							<br/>
				      Don't have an account? <Link to="/register">Register</Link>
					  </Form.Text>
						<hr/>OR<hr/>
						<div style={{ textAlign: 'left' }}>
					  	<Form.Group controlId="formBasicEmail">
						    <Form.Label>Email address</Form.Label>
						    <Form.Text className="text-muted">
					      	The email you used to sign up
						    </Form.Text>
						    <Form.Control type="email" placeholder="Enter email" />
						  </Form.Group>

						  <Form.Group controlId="formBasicPassword">
						    <Form.Label>Password</Form.Label>
						    <Form.Text className="text-muted">
					      	Don't let anybody see!
						    </Form.Text>
						    <Form.Control type="password" placeholder="Password" />
						  </Form.Group>

						  <div style={{display: "flex", justifyContent: "space-between"}}>
							  <Form.Group id="formGridCheckbox">
							    <Form.Check type="checkbox" label="Remember me" />
							  </Form.Group>

							  <Form.Text className="text-muted">
							    <Link>Forget password?</Link>
								</Form.Text>
							</div>
					  </div>

					  <Button variant="primary" type="submit">
					    Login
					  </Button>
					</Form>
				</Jumbotron>
			</Container>
		);
	}
}

export default Loginpage;
