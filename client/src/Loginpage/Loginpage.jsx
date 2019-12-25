import React from 'react';
import { Container, Form, Jumbotron, Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logIn } from '../services';

const socialStyle = {
	display: 'flex',
	justifyContent: 'space-between',
	// paddingBottom: '50px'
}

class Loginpage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email:'',
			password: '',
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		const { email, password } = this.state;
		const { history } = this.props;
		logIn('/api/user/login', {email, password})
			.then(res => {
				if(!res.token) {
					console.log(res.message);
					return res.message;
				}
				history.push('/dashboard');
			});
	}

	handleChange(e){
		const { name, value } = e.target;
		this.setState({
			[name]: value
		})
	}

	render() {
		return (
			<Container style={{ maxWidth: '500px', paddingTop: '50px'}}>
  			<h2>Login</h2>
				<Jumbotron>
					<Form onSubmit={this.handleSubmit}>
						<Form.Label>Log in using your social media accounts</Form.Label>
						<ButtonToolbar style={socialStyle}>
						  <a href="http://localhost:8000/auth/facebook">
						  	<Button variant="primary">
						    	<i className="fab fa-facebook-f"></i> Login with Facebook
						  	</Button>
						  </a>
						  <Button variant="danger">
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
						    <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.handleChange}/>
						  </Form.Group>

						  <Form.Group controlId="formBasicPassword">
						    <Form.Label>Password</Form.Label>
						    <Form.Text className="text-muted">
					      	Don't let anybody see!
						    </Form.Text>
						    <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleChange}/>
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
