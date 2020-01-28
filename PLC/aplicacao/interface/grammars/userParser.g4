parser grammar userParser;

options {
    tokenVocab = userLexer;
}

/*
NAME : "João Pimentel"
EMAIL : "jony.pi10@gmail.com"
PASSWORD : "aaaaaaa123453aaa"
UNIVERSITY : "Universidade do Minho"
COURSE : "Mestrado Integrado em Engenharia Informática"
YEAR : 4

*/

// PARSER
user : personal_data studies_data ;

personal_data : name_data email_data password_data ;

name_data : NAME DP name ;

email_data : EMAIL DP email ;

password_data : PASSWORD DP password ;

studies_data : university_data? course_data? year_data? ;

university_data : UNIVERSITY DP university ;

course_data : COURSE DP course ;

year_data : YEAR DP year ;

name : TEXT ;

password : TEXT ;

email : TEXT ;

university : TEXT ;

year : NUM ;

course : TEXT;

// Not used yet
//grades : LPAREN (grade (COMMA grade)*)? RPAREN ;

//grade : class DP value ;

//class : TEXT ;

//value : NUM ;