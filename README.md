# GoogleBooks Search


#### https://googlebooksmbm.herokuapp.com
### An app to search for books on Google Books

* Search for books
* View results
* Go to book on Google Books by clicking on the **_View_** button
* Save selected books to the database by clicking on the **_Save_** button
* View saved books by clicking on **_Saved_** in the main menu
* View or Delete book by clicking on the appropriate button

### Technologies Used
* React.js (context and hooks)
* Google Books API
* MongoDB
* Material-UI

### To Run on Local Machine
* clone git repository
* install dependencies by running **_npm install_** in both the global and client direcotories
* set up a database called **_googlebooks_db_** on MongoDB Compass
* open three tabs in your terminal:
** run **_mongod_** in the first
** cd into the root directory and run **_nodemon_** or **_node server.js_** in the second
** cd into the client directory and run **_npm start_** in the third
* the app should open on your local server

### Quick Overview
![Books Search Demo](client/src/assets/images/BookSearchDemo.gif)