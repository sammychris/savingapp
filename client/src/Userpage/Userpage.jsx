import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Userpage extends React.Component {
	render() {
		return (
			<Container style={{ paddingTop: '50px'}}>
  			<h2>User Dashboard</h2>
				<Jumbotron>
				</Jumbotron>
			</Container>
		);
	}
}

export default Userpage;
