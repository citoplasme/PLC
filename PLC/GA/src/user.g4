grammar user;

@header {
    import okhttp3.*;
    import java.io.IOException;
}

@members{
    private final OkHttpClient httpClient = new OkHttpClient();
}

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

/*
NAME : "João Pimentel"
EMAIL : "jony.pi10@gmail.com"
PASSWORD : "456"
UNIVERSITY : "Universidade do Minho"
COURSE : "Mestrado Integrado em Engenharia Informática"
YEAR : 4

*/

// PARSER
user : personal_data studies_data {

        System.out.println("Sending Http POST request");

        // form parameters
        FormBody.Builder builder = new FormBody.Builder()
                .add("email", $personal_data.out_email)
                .add("nome", $personal_data.out_name)
                .add("password", $personal_data.out_password);
                //.build();

        if(!$studies_data.out_university.equals(""))
            builder.add("universidade", "" + $studies_data.out_university);

        if(!$studies_data.out_course.equals(""))
            builder.add("curso", "" + $studies_data.out_course);

        if(!$studies_data.out_year.equals(""))
            builder.add("ano", "" + $studies_data.out_year);

        RequestBody formBody = builder.build();

        Request request = new Request.Builder()
                .url("http://localhost:5004/regGA")
                .addHeader("User-Agent", "OkHttp Bot")
                .post(formBody)
                .build();

        try (Response response = httpClient.newCall(request).execute()) {

            if (!response.isSuccessful()) throw new IOException("Unexpected code " + response);

            // Get response body
            System.out.println(response.body().string());
        } catch (Exception e){
            System.out.println("Something went wrong...");
        }

}
     ;

personal_data returns [String out_name, String out_email, String out_password]
    : name_data email_data password_data {
                                            $out_name = $name_data.out_name;
                                            $out_email = $email_data.out_email;
                                            $out_password = $password_data.out_password;
                                         }
    ;

name_data returns [String out_name]
    : NAME DP name {$out_name = $name.text.substring(1, $name.text.length()-1);}
    ;

email_data returns [String out_email]
    : EMAIL DP email {$out_email = $email.text.substring(1, $email.text.length()-1);}
    ;

password_data returns [String out_password]
    : PASSWORD DP password {$out_password = $password.text.substring(1, $password.text.length()-1);}
    ;

studies_data returns [String out_university, String out_course, String out_year]
    : university_data? course_data? year_data? {
                                                    if($university_data.ctx != null){
                                                        $out_university = $university_data.out_university;
                                                    } else {
                                                        $out_university = "";
                                                    }
                                                    if($course_data.ctx != null){
                                                        $out_course = $course_data.out_course;
                                                    } else {
                                                        $out_course = "";
                                                    }
                                                    if($year_data.ctx != null){
                                                        $out_year = $year_data.out_year;
                                                    } else {
                                                        $out_year = "";
                                                    }
                                               }
    ;

university_data returns [String out_university]
    : UNIVERSITY DP university {$out_university = $university.text.substring(1, $university.text.length()-1);}
    ;

course_data returns [String out_course]
    : COURSE DP course {$out_course = $course.text.substring(1, $course.text.length()-1);}
    ;

year_data returns [String out_year]
    : YEAR DP year {$out_year = $year.text;}
    ;

name
    : TEXT ;

password
    : TEXT ;

email
    : TEXT ;

university
    : TEXT ;

year
    : NUM ;

course
    : TEXT;

// Not used yet
//grades : LPAREN (grade (COMMA grade)*)? RPAREN ;

//grade : class DP value ;

//class : TEXT ;

//value : NUM ;