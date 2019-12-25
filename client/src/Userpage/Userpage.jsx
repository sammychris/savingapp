import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import { getUsers } from '../services';


class Userpage extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			users: {}
		}
	}

	componentDidMount(){
		getUsers('/api/users')
			.then(res => {
				console.log(res);
				this.setState({
					users: res
				})
			})
	}
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
