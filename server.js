var express   = require('express'),
	app         = express(),
	logger      = require('morgan'),
	bodyParser	= require('body-parser'),
	port        = process.env.PORT || 3000,
	userRoutes  = require('./config/user_routes.js')



//log request made to the app
app.use(logger('dev'))




//mount 'public' folder as '/'
app.use(express.static('Site'))

//run the web server
app.listen(port, function(){
	console.log('Server started on', port)
})
