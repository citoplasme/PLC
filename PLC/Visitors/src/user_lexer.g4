lexer grammar user_lexer;
// LEXER

NAME : 'NAME';
YEAR : 'YEAR' ;
COURSE : 'COURSE' ;
EMAIL : 'EMAIL' ;
PASSWORD : 'PASSWORD' ;
UNIVERSITY : 'UNIVERSITY' ;
GRADES : 'GRADES' ;
COMMA : ',';
LPAREN : '[' ;
RPAREN : ']' ;
CLASS : 'CLASS' ;
GRADE : 'GRADE' ;
DP : ':' ;
ARROBA : '@' ;
POINT : '.' ;


//MAIL : CHAR (CHAR|NUM|POINT)* ARROBA CHAR (CHAR|NUM)* POINT [a-z]+ ;
NUM : [0-9]+ ;
// See this
TEXT : '"'~('"')*'"' ;

//fragment CHAR : [a-zA-ZáéíóúÁÉÍÓÚâêîôûÂÊÎÔÛãõÃÕàèìòùÀÈÌÒÙçÇ_] ;

WS : [ \n\r\t] -> skip ;