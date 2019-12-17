<img alt="screen shot 2018-07-26 at 7 26 15 pm" src="https://github.com/sammychris/hellobooks/blob/development/template/img/hellobook-screenshot.JPG">

# SavingApp
### Saving-App is a simple application that helps people to save their cash online in order for them to purchase items from the app owner after their money has reached a particular amount.


## Development And Technology
The application leverages Node; Express for routing and knexjs for ORM and MySQL for database.

### Technologies: 
Nodejs, Javascript, React, Bootstrap, Git, Express, Knexjs, Morgan, MySQL for database.

Front-end is designed using React and Bootstrap.

#### Installation
- Install node and MySQL2
- Clone the repository git clone https://github.com/sammychris/hellobooks/
- Switch to project directory cd ../path/to/HelloBooks
- Install dependencies npm i
- Test npm test
- Start app npm start
- Consume via postman

## Route
### user:
- User Signup - api/users/signup - Registers a user
- User Signin - api/users/signin - Logs a user in
- Get Book - api/userid/books - allows a user to view all books
- Get Book - api/userid/books?returnd=false - allows a user to view all books that are not yet returned
- Get Book - api/userid/books?returnd=true - allows a user to view all books that have been returned
- Borrow Book - api/userid/books - allows a user to borrow books
- Return Book - api/userid/books - allows a user to return borrowed books

### Admin:
- User Signin - api/users/signin - Logs an admin in
- Add Book - api/books - allows an admin to add a book
- Modify Book - api/books - allows an admin to modify a book
- Delete Book - api/books - allows an admin to delete book

## Verbs
- GET
- POST
- PUT
- DELETE

## state
still on development

