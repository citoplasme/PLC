// Generated from userLexer.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0014\u0083\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0006\u0011s\n\u0011\r\u0011\u000e\u0011t\u0003",
    "\u0012\u0003\u0012\u0007\u0012y\n\u0012\f\u0012\u000e\u0012|\u000b\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0002\u0002\u0014\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b",
    "\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b",
    "\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\u0003\u0002\u0005",
    "\u0003\u00022;\u0003\u0002$$\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002",
    "\u0084\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002",
    "\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002",
    "\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002",
    "\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002",
    "\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002",
    "\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002",
    "\u0003\'\u0003\u0002\u0002\u0002\u0005,\u0003\u0002\u0002\u0002\u0007",
    "1\u0003\u0002\u0002\u0002\t8\u0003\u0002\u0002\u0002\u000b>\u0003\u0002",
    "\u0002\u0002\rG\u0003\u0002\u0002\u0002\u000fR\u0003\u0002\u0002\u0002",
    "\u0011Y\u0003\u0002\u0002\u0002\u0013[\u0003\u0002\u0002\u0002\u0015",
    "]\u0003\u0002\u0002\u0002\u0017_\u0003\u0002\u0002\u0002\u0019e\u0003",
    "\u0002\u0002\u0002\u001bk\u0003\u0002\u0002\u0002\u001dm\u0003\u0002",
    "\u0002\u0002\u001fo\u0003\u0002\u0002\u0002!r\u0003\u0002\u0002\u0002",
    "#v\u0003\u0002\u0002\u0002%\u007f\u0003\u0002\u0002\u0002\'(\u0007P",
    "\u0002\u0002()\u0007C\u0002\u0002)*\u0007O\u0002\u0002*+\u0007G\u0002",
    "\u0002+\u0004\u0003\u0002\u0002\u0002,-\u0007[\u0002\u0002-.\u0007G",
    "\u0002\u0002./\u0007C\u0002\u0002/0\u0007T\u0002\u00020\u0006\u0003",
    "\u0002\u0002\u000212\u0007E\u0002\u000223\u0007Q\u0002\u000234\u0007",
    "W\u0002\u000245\u0007T\u0002\u000256\u0007U\u0002\u000267\u0007G\u0002",
    "\u00027\b\u0003\u0002\u0002\u000289\u0007G\u0002\u00029:\u0007O\u0002",
    "\u0002:;\u0007C\u0002\u0002;<\u0007K\u0002\u0002<=\u0007N\u0002\u0002",
    "=\n\u0003\u0002\u0002\u0002>?\u0007R\u0002\u0002?@\u0007C\u0002\u0002",
    "@A\u0007U\u0002\u0002AB\u0007U\u0002\u0002BC\u0007Y\u0002\u0002CD\u0007",
    "Q\u0002\u0002DE\u0007T\u0002\u0002EF\u0007F\u0002\u0002F\f\u0003\u0002",
    "\u0002\u0002GH\u0007W\u0002\u0002HI\u0007P\u0002\u0002IJ\u0007K\u0002",
    "\u0002JK\u0007X\u0002\u0002KL\u0007G\u0002\u0002LM\u0007T\u0002\u0002",
    "MN\u0007U\u0002\u0002NO\u0007K\u0002\u0002OP\u0007V\u0002\u0002PQ\u0007",
    "[\u0002\u0002Q\u000e\u0003\u0002\u0002\u0002RS\u0007I\u0002\u0002ST",
    "\u0007T\u0002\u0002TU\u0007C\u0002\u0002UV\u0007F\u0002\u0002VW\u0007",
    "G\u0002\u0002WX\u0007U\u0002\u0002X\u0010\u0003\u0002\u0002\u0002YZ",
    "\u0007.\u0002\u0002Z\u0012\u0003\u0002\u0002\u0002[\\\u0007]\u0002\u0002",
    "\\\u0014\u0003\u0002\u0002\u0002]^\u0007_\u0002\u0002^\u0016\u0003\u0002",
    "\u0002\u0002_`\u0007E\u0002\u0002`a\u0007N\u0002\u0002ab\u0007C\u0002",
    "\u0002bc\u0007U\u0002\u0002cd\u0007U\u0002\u0002d\u0018\u0003\u0002",
    "\u0002\u0002ef\u0007I\u0002\u0002fg\u0007T\u0002\u0002gh\u0007C\u0002",
    "\u0002hi\u0007F\u0002\u0002ij\u0007G\u0002\u0002j\u001a\u0003\u0002",
    "\u0002\u0002kl\u0007<\u0002\u0002l\u001c\u0003\u0002\u0002\u0002mn\u0007",
    "B\u0002\u0002n\u001e\u0003\u0002\u0002\u0002op\u00070\u0002\u0002p ",
    "\u0003\u0002\u0002\u0002qs\t\u0002\u0002\u0002rq\u0003\u0002\u0002\u0002",
    "st\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002",
    "\u0002u\"\u0003\u0002\u0002\u0002vz\u0007$\u0002\u0002wy\n\u0003\u0002",
    "\u0002xw\u0003\u0002\u0002\u0002y|\u0003\u0002\u0002\u0002zx\u0003\u0002",
    "\u0002\u0002z{\u0003\u0002\u0002\u0002{}\u0003\u0002\u0002\u0002|z\u0003",
    "\u0002\u0002\u0002}~\u0007$\u0002\u0002~$\u0003\u0002\u0002\u0002\u007f",
    "\u0080\t\u0004\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081",
    "\u0082\b\u0013\u0002\u0002\u0082&\u0003\u0002\u0002\u0002\u0005\u0002",
    "tz\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function userLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

userLexer.prototype = Object.create(antlr4.Lexer.prototype);
userLexer.prototype.constructor = userLexer;

Object.defineProperty(userLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

userLexer.EOF = antlr4.Token.EOF;
userLexer.NAME = 1;
userLexer.YEAR = 2;
userLexer.COURSE = 3;
userLexer.EMAIL = 4;
userLexer.PASSWORD = 5;
userLexer.UNIVERSITY = 6;
userLexer.GRADES = 7;
userLexer.COMMA = 8;
userLexer.LPAREN = 9;
userLexer.RPAREN = 10;
userLexer.CLASS = 11;
userLexer.GRADE = 12;
userLexer.DP = 13;
userLexer.ARROBA = 14;
userLexer.POINT = 15;
userLexer.NUM = 16;
userLexer.TEXT = 17;
userLexer.WS = 18;

userLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

userLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

userLexer.prototype.literalNames = [ null, "'NAME'", "'YEAR'", "'COURSE'", 
                                     "'EMAIL'", "'PASSWORD'", "'UNIVERSITY'", 
                                     "'GRADES'", "','", "'['", "']'", "'CLASS'", 
                                     "'GRADE'", "':'", "'@'", "'.'" ];

userLexer.prototype.symbolicNames = [ null, "NAME", "YEAR", "COURSE", "EMAIL", 
                                      "PASSWORD", "UNIVERSITY", "GRADES", 
                                      "COMMA", "LPAREN", "RPAREN", "CLASS", 
                                      "GRADE", "DP", "ARROBA", "POINT", 
                                      "NUM", "TEXT", "WS" ];

userLexer.prototype.ruleNames = [ "NAME", "YEAR", "COURSE", "EMAIL", "PASSWORD", 
                                  "UNIVERSITY", "GRADES", "COMMA", "LPAREN", 
                                  "RPAREN", "CLASS", "GRADE", "DP", "ARROBA", 
                                  "POINT", "NUM", "TEXT", "WS" ];

userLexer.prototype.grammarFileName = "userLexer.g4";



exports.userLexer = userLexer;

