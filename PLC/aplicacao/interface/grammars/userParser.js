// Generated from userParser.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var userParserListener = require('./userParserListener').userParserListener;
var grammarFileName = "userParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0014U\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0005\u00075\n\u0007\u0003\u0007\u0005\u00078\n\u0007",
    "\u0003\u0007\u0005\u0007;\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0002\u0002",
    "\u0011\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e\u0002\u0002\u0002H\u0002 \u0003\u0002\u0002\u0002\u0004",
    "#\u0003\u0002\u0002\u0002\u0006\'\u0003\u0002\u0002\u0002\b+\u0003\u0002",
    "\u0002\u0002\n/\u0003\u0002\u0002\u0002\f4\u0003\u0002\u0002\u0002\u000e",
    "<\u0003\u0002\u0002\u0002\u0010@\u0003\u0002\u0002\u0002\u0012D\u0003",
    "\u0002\u0002\u0002\u0014H\u0003\u0002\u0002\u0002\u0016J\u0003\u0002",
    "\u0002\u0002\u0018L\u0003\u0002\u0002\u0002\u001aN\u0003\u0002\u0002",
    "\u0002\u001cP\u0003\u0002\u0002\u0002\u001eR\u0003\u0002\u0002\u0002",
    " !\u0005\u0004\u0003\u0002!\"\u0005\f\u0007\u0002\"\u0003\u0003\u0002",
    "\u0002\u0002#$\u0005\u0006\u0004\u0002$%\u0005\b\u0005\u0002%&\u0005",
    "\n\u0006\u0002&\u0005\u0003\u0002\u0002\u0002\'(\u0007\u0003\u0002\u0002",
    "()\u0007\u000f\u0002\u0002)*\u0005\u0014\u000b\u0002*\u0007\u0003\u0002",
    "\u0002\u0002+,\u0007\u0006\u0002\u0002,-\u0007\u000f\u0002\u0002-.\u0005",
    "\u0018\r\u0002.\t\u0003\u0002\u0002\u0002/0\u0007\u0007\u0002\u0002",
    "01\u0007\u000f\u0002\u000212\u0005\u0016\f\u00022\u000b\u0003\u0002",
    "\u0002\u000235\u0005\u000e\b\u000243\u0003\u0002\u0002\u000245\u0003",
    "\u0002\u0002\u000257\u0003\u0002\u0002\u000268\u0005\u0010\t\u00027",
    "6\u0003\u0002\u0002\u000278\u0003\u0002\u0002\u00028:\u0003\u0002\u0002",
    "\u00029;\u0005\u0012\n\u0002:9\u0003\u0002\u0002\u0002:;\u0003\u0002",
    "\u0002\u0002;\r\u0003\u0002\u0002\u0002<=\u0007\b\u0002\u0002=>\u0007",
    "\u000f\u0002\u0002>?\u0005\u001a\u000e\u0002?\u000f\u0003\u0002\u0002",
    "\u0002@A\u0007\u0005\u0002\u0002AB\u0007\u000f\u0002\u0002BC\u0005\u001e",
    "\u0010\u0002C\u0011\u0003\u0002\u0002\u0002DE\u0007\u0004\u0002\u0002",
    "EF\u0007\u000f\u0002\u0002FG\u0005\u001c\u000f\u0002G\u0013\u0003\u0002",
    "\u0002\u0002HI\u0007\u0013\u0002\u0002I\u0015\u0003\u0002\u0002\u0002",
    "JK\u0007\u0013\u0002\u0002K\u0017\u0003\u0002\u0002\u0002LM\u0007\u0013",
    "\u0002\u0002M\u0019\u0003\u0002\u0002\u0002NO\u0007\u0013\u0002\u0002",
    "O\u001b\u0003\u0002\u0002\u0002PQ\u0007\u0012\u0002\u0002Q\u001d\u0003",
    "\u0002\u0002\u0002RS\u0007\u0013\u0002\u0002S\u001f\u0003\u0002\u0002",
    "\u0002\u000547:"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'NAME'", "'YEAR'", "'COURSE'", "'EMAIL'", "'PASSWORD'", 
                     "'UNIVERSITY'", "'GRADES'", "','", "'['", "']'", "'CLASS'", 
                     "'GRADE'", "':'", "'@'", "'.'" ];

var symbolicNames = [ null, "NAME", "YEAR", "COURSE", "EMAIL", "PASSWORD", 
                      "UNIVERSITY", "GRADES", "COMMA", "LPAREN", "RPAREN", 
                      "CLASS", "GRADE", "DP", "ARROBA", "POINT", "NUM", 
                      "TEXT", "WS" ];

var ruleNames =  [ "user", "personal_data", "name_data", "email_data", "password_data", 
                   "studies_data", "university_data", "course_data", "year_data", 
                   "name", "password", "email", "university", "year", "course" ];

function userParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

userParser.prototype = Object.create(antlr4.Parser.prototype);
userParser.prototype.constructor = userParser;

Object.defineProperty(userParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

userParser.EOF = antlr4.Token.EOF;
userParser.NAME = 1;
userParser.YEAR = 2;
userParser.COURSE = 3;
userParser.EMAIL = 4;
userParser.PASSWORD = 5;
userParser.UNIVERSITY = 6;
userParser.GRADES = 7;
userParser.COMMA = 8;
userParser.LPAREN = 9;
userParser.RPAREN = 10;
userParser.CLASS = 11;
userParser.GRADE = 12;
userParser.DP = 13;
userParser.ARROBA = 14;
userParser.POINT = 15;
userParser.NUM = 16;
userParser.TEXT = 17;
userParser.WS = 18;

userParser.RULE_user = 0;
userParser.RULE_personal_data = 1;
userParser.RULE_name_data = 2;
userParser.RULE_email_data = 3;
userParser.RULE_password_data = 4;
userParser.RULE_studies_data = 5;
userParser.RULE_university_data = 6;
userParser.RULE_course_data = 7;
userParser.RULE_year_data = 8;
userParser.RULE_name = 9;
userParser.RULE_password = 10;
userParser.RULE_email = 11;
userParser.RULE_university = 12;
userParser.RULE_year = 13;
userParser.RULE_course = 14;

function UserContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = userParser.RULE_user;
    return this;
}

UserContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UserContext.prototype.constructor = UserContext;

UserContext.prototype.personal_data = function() {
    return this.getTypedRuleContext(Personal_dataContext,0);
};

UserContext.prototype.studies_data = function() {
    return this.getTypedRuleContext(Studies_dataContext,0);
};

UserContext.prototype.enterRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.enterUser(this);
	}
};

UserContext.prototype.exitRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.exitUser(this);
	}
};




userParser.UserContext = UserContext;

userParser.prototype.user = function() {

    var localctx = new UserContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, userParser.RULE_user);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 30;
        this.personal_data();
        this.state = 31;
        this.studies_data();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Personal_dataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = userParser.RULE_personal_data;
    return this;
}

Personal_dataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Personal_dataContext.prototype.constructor = Personal_dataContext;

Personal_dataContext.prototype.name_data = function() {
    return this.getTypedRuleContext(Name_dataContext,0);
};

Personal_dataContext.prototype.email_data = function() {
    return this.getTypedRuleContext(Email_dataContext,0);
};

Personal_dataContext.prototype.password_data = function() {
    return this.getTypedRuleContext(Password_dataContext,0);
};

Personal_dataContext.prototype.enterRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.enterPersonal_data(this);
	}
};

Personal_dataContext.prototype.exitRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.exitPersonal_data(this);
	}
};




userParser.Personal_dataContext = Personal_dataContext;

userParser.prototype.personal_data = function() {

    var localctx = new Personal_dataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, userParser.RULE_personal_data);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 33;
        this.name_data();
        this.state = 34;
        this.email_data();
        this.state = 35;
        this.password_data();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Name_dataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = userParser.RULE_name_data;
    return this;
}

Name_dataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Name_dataContext.prototype.constructor = Name_dataContext;

Name_dataContext.prototype.NAME = function() {
    return this.getToken(userParser.NAME, 0);
};

Name_dataContext.prototype.DP = function() {
    return this.getToken(userParser.DP, 0);
};

Name_dataContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

Name_dataContext.prototype.enterRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.enterName_data(this);
	}
};

Name_dataContext.prototype.exitRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.exitName_data(this);
	}
};




userParser.Name_dataContext = Name_dataContext;

userParser.prototype.name_data = function() {

    var localctx = new Name_dataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, userParser.RULE_name_data);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37;
        this.match(userParser.NAME);
        this.state = 38;
        this.match(userParser.DP);
        this.state = 39;
        this.name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Email_dataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = userParser.RULE_email_data;
    return this;
}

Email_dataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Email_dataContext.prototype.constructor = Email_dataContext;

Email_dataContext.prototype.EMAIL = function() {
    return this.getToken(userParser.EMAIL, 0);
};

Email_dataContext.prototype.DP = function() {
    return this.getToken(userParser.DP, 0);
};

Email_dataContext.prototype.email = function() {
    return this.getTypedRuleContext(EmailContext,0);
};

Email_dataContext.prototype.enterRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.enterEmail_data(this);
	}
};

Email_dataContext.prototype.exitRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.exitEmail_data(this);
	}
};




userParser.Email_dataContext = Email_dataContext;

userParser.prototype.email_data = function() {

    var localctx = new Email_dataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, userParser.RULE_email_data);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        this.match(userParser.EMAIL);
        this.state = 42;
        this.match(userParser.DP);
        this.state = 43;
        this.email();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Password_dataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = userParser.RULE_password_data;
    return this;
}

Password_dataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Password_dataContext.prototype.constructor = Password_dataContext;

Password_dataContext.prototype.PASSWORD = function() {
    return this.getToken(userParser.PASSWORD, 0);
};

Password_dataContext.prototype.DP = function() {
    return this.getToken(userParser.DP, 0);
};

Password_dataContext.prototype.password = function() {
    return this.getTypedRuleContext(PasswordContext,0);
};

Password_dataContext.prototype.enterRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.enterPassword_data(this);
	}
};

Password_dataContext.prototype.exitRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.exitPassword_data(this);
	}
};




userParser.Password_dataContext = Password_dataContext;

userParser.prototype.password_data = function() {

    var localctx = new Password_dataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, userParser.RULE_password_data);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this.match(userParser.PASSWORD);
        this.state = 46;
        this.match(userParser.DP);
        this.state = 47;
        this.password();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Studies_dataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = userParser.RULE_studies_data;
    return this;
}

Studies_dataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Studies_dataContext.prototype.constructor = Studies_dataContext;

Studies_dataContext.prototype.university_data = function() {
    return this.getTypedRuleContext(University_dataContext,0);
};

Studies_dataContext.prototype.course_data = function() {
    return this.getTypedRuleContext(Course_dataContext,0);
};

Studies_dataContext.prototype.year_data = function() {
    return this.getTypedRuleContext(Year_dataContext,0);
};

Studies_dataContext.prototype.enterRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.enterStudies_data(this);
	}
};

Studies_dataContext.prototype.exitRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.exitStudies_data(this);
	}
};




userParser.Studies_dataContext = Studies_dataContext;

userParser.prototype.studies_data = function() {

    var localctx = new Studies_dataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, userParser.RULE_studies_data);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===userParser.UNIVERSITY) {
            this.state = 49;
            this.university_data();
        }

        this.state = 53;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===userParser.COURSE) {
            this.state = 52;
            this.course_data();
        }

        this.state = 56;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===userParser.YEAR) {
            this.state = 55;
            this.year_data();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function University_dataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = userParser.RULE_university_data;
    return this;
}

University_dataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
University_dataContext.prototype.constructor = University_dataContext;

University_dataContext.prototype.UNIVERSITY = function() {
    return this.getToken(userParser.UNIVERSITY, 0);
};

University_dataContext.prototype.DP = function() {
    return this.getToken(userParser.DP, 0);
};

University_dataContext.prototype.university = function() {
    return this.getTypedRuleContext(UniversityContext,0);
};

University_dataContext.prototype.enterRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.enterUniversity_data(this);
	}
};

University_dataContext.prototype.exitRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.exitUniversity_data(this);
	}
};




userParser.University_dataContext = University_dataContext;

userParser.prototype.university_data = function() {

    var localctx = new University_dataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, userParser.RULE_university_data);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        this.match(userParser.UNIVERSITY);
        this.state = 59;
        this.match(userParser.DP);
        this.state = 60;
        this.university();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Course_dataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = userParser.RULE_course_data;
    return this;
}

Course_dataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Course_dataContext.prototype.constructor = Course_dataContext;

Course_dataContext.prototype.COURSE = function() {
    return this.getToken(userParser.COURSE, 0);
};

Course_dataContext.prototype.DP = function() {
    return this.getToken(userParser.DP, 0);
};

Course_dataContext.prototype.course = function() {
    return this.getTypedRuleContext(CourseContext,0);
};

Course_dataContext.prototype.enterRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.enterCourse_data(this);
	}
};

Course_dataContext.prototype.exitRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.exitCourse_data(this);
	}
};




userParser.Course_dataContext = Course_dataContext;

userParser.prototype.course_data = function() {

    var localctx = new Course_dataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, userParser.RULE_course_data);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.match(userParser.COURSE);
        this.state = 63;
        this.match(userParser.DP);
        this.state = 64;
        this.course();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Year_dataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = userParser.RULE_year_data;
    return this;
}

Year_dataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Year_dataContext.prototype.constructor = Year_dataContext;

Year_dataContext.prototype.YEAR = function() {
    return this.getToken(userParser.YEAR, 0);
};

Year_dataContext.prototype.DP = function() {
    return this.getToken(userParser.DP, 0);
};

Year_dataContext.prototype.year = function() {
    return this.getTypedRuleContext(YearContext,0);
};

Year_dataContext.prototype.enterRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.enterYear_data(this);
	}
};

Year_dataContext.prototype.exitRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.exitYear_data(this);
	}
};




userParser.Year_dataContext = Year_dataContext;

userParser.prototype.year_data = function() {

    var localctx = new Year_dataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, userParser.RULE_year_data);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.match(userParser.YEAR);
        this.state = 67;
        this.match(userParser.DP);
        this.state = 68;
        this.year();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = userParser.RULE_name;
    return this;
}

NameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameContext.prototype.constructor = NameContext;

NameContext.prototype.TEXT = function() {
    return this.getToken(userParser.TEXT, 0);
};

NameContext.prototype.enterRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.enterName(this);
	}
};

NameContext.prototype.exitRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.exitName(this);
	}
};




userParser.NameContext = NameContext;

userParser.prototype.name = function() {

    var localctx = new NameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, userParser.RULE_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.match(userParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PasswordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = userParser.RULE_password;
    return this;
}

PasswordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PasswordContext.prototype.constructor = PasswordContext;

PasswordContext.prototype.TEXT = function() {
    return this.getToken(userParser.TEXT, 0);
};

PasswordContext.prototype.enterRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.enterPassword(this);
	}
};

PasswordContext.prototype.exitRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.exitPassword(this);
	}
};




userParser.PasswordContext = PasswordContext;

userParser.prototype.password = function() {

    var localctx = new PasswordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, userParser.RULE_password);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        this.match(userParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EmailContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = userParser.RULE_email;
    return this;
}

EmailContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmailContext.prototype.constructor = EmailContext;

EmailContext.prototype.TEXT = function() {
    return this.getToken(userParser.TEXT, 0);
};

EmailContext.prototype.enterRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.enterEmail(this);
	}
};

EmailContext.prototype.exitRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.exitEmail(this);
	}
};




userParser.EmailContext = EmailContext;

userParser.prototype.email = function() {

    var localctx = new EmailContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, userParser.RULE_email);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.match(userParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UniversityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = userParser.RULE_university;
    return this;
}

UniversityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UniversityContext.prototype.constructor = UniversityContext;

UniversityContext.prototype.TEXT = function() {
    return this.getToken(userParser.TEXT, 0);
};

UniversityContext.prototype.enterRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.enterUniversity(this);
	}
};

UniversityContext.prototype.exitRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.exitUniversity(this);
	}
};




userParser.UniversityContext = UniversityContext;

userParser.prototype.university = function() {

    var localctx = new UniversityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, userParser.RULE_university);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this.match(userParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function YearContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = userParser.RULE_year;
    return this;
}

YearContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
YearContext.prototype.constructor = YearContext;

YearContext.prototype.NUM = function() {
    return this.getToken(userParser.NUM, 0);
};

YearContext.prototype.enterRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.enterYear(this);
	}
};

YearContext.prototype.exitRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.exitYear(this);
	}
};




userParser.YearContext = YearContext;

userParser.prototype.year = function() {

    var localctx = new YearContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, userParser.RULE_year);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.match(userParser.NUM);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CourseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = userParser.RULE_course;
    return this;
}

CourseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CourseContext.prototype.constructor = CourseContext;

CourseContext.prototype.TEXT = function() {
    return this.getToken(userParser.TEXT, 0);
};

CourseContext.prototype.enterRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.enterCourse(this);
	}
};

CourseContext.prototype.exitRule = function(listener) {
    if(listener instanceof userParserListener ) {
        listener.exitCourse(this);
	}
};




userParser.CourseContext = CourseContext;

userParser.prototype.course = function() {

    var localctx = new CourseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, userParser.RULE_course);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        this.match(userParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.userParser = userParser;
