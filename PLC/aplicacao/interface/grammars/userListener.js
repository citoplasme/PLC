var antlr4 = require('antlr4/index');
var userParserListener = require('./userParserListener').userParserListener;


function userListener(){
    this.info = []

	userParserListener.call(this);
	return this;
}

userListener.prototype = Object.create(userParserListener.prototype);
userListener.prototype.constructor = userListener;

//----------------------------------------------------------------------------------------------------------

//axioma
userListener.prototype.enterUser = function(ctx) {
    this.info = Object.assign(this.enterPersonal_data(ctx.personal_data()), this.enterStudies_data(ctx.studies_data()));
};

//---------------------------------------------------------------------------------------------------------

/* tratar o personal_data */
userListener.prototype.enterPersonal_data = function(ctx) {
    var nome = this.enterName_data(ctx.name_data())
    var email = this.enterEmail_data(ctx.email_data())
    var password = this.enterPassword_data(ctx.password_data())

    console.log("Nome do utilizador: " + JSON.stringify(nome).substring(3, JSON.stringify(nome).length - 3))

    return({"nome": JSON.stringify(nome).substring(3, JSON.stringify(nome).length - 3), 
            "email": JSON.stringify(email).substring(3, JSON.stringify(email).length - 3), 
            "password": JSON.stringify(password).substring(3, JSON.stringify(password).length - 3)
           });
};

//name_data
userListener.prototype.enterName_data = function(ctx) {
    return this.enterName(ctx.name());
};

//email_data
userListener.prototype.enterEmail_data = function(ctx) {
    return this.enterEmail(ctx.email());
};

//password_data
userListener.prototype.enterPassword_data = function(ctx) {
    return this.enterPassword(ctx.password());
};

//ir buscar o name à produção name_data
userListener.prototype.enterName = function(ctx) {
    return(ctx.getText());
};

//ir buscar o email à produção email_data
userListener.prototype.enterEmail = function(ctx) {
    return(ctx.getText());
};

//ir buscar a password à produção password_data
userListener.prototype.enterPassword = function(ctx) {
    return(ctx.getText());
};

//-----------------------------------------------------------------------------------------------------------

/* tratar o studies_data */
userListener.prototype.enterStudies_data = function(ctx) {
    var university, course, year;

    university = (ctx.university_data() != null) ? this.enterUniversity_data(ctx.university_data()) : "";
    
    course = (ctx.course_data() != null) ? this.enterCourse_data(ctx.course_data()) : "";

    year = (ctx.year_data() != null) ? this.enterYear_data(ctx.year_data()) : "";

    return({"universidade": (university == "") ? "" : JSON.stringify(university).substring(3, JSON.stringify(university).length - 3), 
            "curso": (course == "") ? "" : JSON.stringify(course).substring(3, JSON.stringify(course).length - 3),
            "ano": year
           });
};

//university_data
userListener.prototype.enterUniversity_data = function(ctx) {
    return this.enterUniversity(ctx.university());
};

//course_data
userListener.prototype.enterCourse_data = function(ctx) {
    return this.enterCourse(ctx.course());
};

//year_data
userListener.prototype.enterYear_data = function(ctx) {
    return this.enterYear(ctx.year());
};

//ir buscar a universidade à university_data
userListener.prototype.enterUniversity = function(ctx) {
    return ctx.getText();
};

//ir buscar o cusro à course_data
userListener.prototype.enterCourse = function(ctx) {
    return ctx.getText();
};

//ir buscar o ano à year_data
userListener.prototype.enterYear = function(ctx) {
    return ctx.getText();
};

exports.userListener = userListener;
