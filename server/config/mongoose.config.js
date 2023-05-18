const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/products', {
	// the database name is created here and in this case is named products
	useNewUrlParser: true,
	// tells mongoose to use URL parser
	useUnifiedTopology: true
})
	.then(() => console.log('Established a connection to the database.'))
	.catch(err => console.log('Something went wrong with the connection to the database.', err));


	// URL parser is a feature of Mongoose that parses and interprets the MongoDB connection strings. Connection strings are made of components: protocol(mongodb://), hostname or IP address, port number, database name, and additional parameters. By setting the useNewURLParser: True, Mongoose will use it's own parser instead of the default parser in MongoDB Node.js driver