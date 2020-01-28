import okhttp3.*;
import java.io.IOException;

public class POST_Visitor extends user_parserBaseVisitor<String> {

    private final OkHttpClient httpClient = new OkHttpClient();
    private FormBody.Builder builder = new FormBody.Builder();

    public void request(FormBody.Builder b){
        System.out.println("Sending Http POST request");
        RequestBody formBody = b.build();

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


    @Override public String visitUser(user_parser.UserContext ctx) {
        StringBuilder s = new StringBuilder();
        s.append(visit(ctx.personal_data()));
        s.append(visit(ctx.studies_data()));

        request(this.builder);

        return s.toString();
    }

    @Override public String visitPersonal_data(user_parser.Personal_dataContext ctx) {
        StringBuilder s = new StringBuilder();
        s.append(visit(ctx.name_data()));
        s.append(visit(ctx.email_data()));
        s.append(visit(ctx.password_data()));
        return s.toString();
    }

    @Override public String visitName_data(user_parser.Name_dataContext ctx) {
        String s = visit(ctx.name());
        builder.add("nome", s);
        return s;
    }
    @Override public String visitEmail_data(user_parser.Email_dataContext ctx) {
        String s = visit(ctx.email());
        builder.add("email", s);
        return s;
    }
    @Override public String visitPassword_data(user_parser.Password_dataContext ctx) {
        String s = visit(ctx.password());
        builder.add("password", s);
        return visit(ctx.password());
    }

    @Override public String visitStudies_data(user_parser.Studies_dataContext ctx) {
        StringBuilder s = new StringBuilder();
        if(ctx.course_data() != null){
            s.append(visit(ctx.course_data()));
        }
        if(ctx.university_data() != null){
            s.append(visit(ctx.university_data()));
        }
        if(ctx.year_data() != null){
            s.append(visit(ctx.year_data()));
        }
        return s.toString();
    }

    @Override public String visitUniversity_data(user_parser.University_dataContext ctx) {
        String s = visit(ctx.university());
        builder.add("universidade", s);
        return s;
    }
    @Override public String visitCourse_data(user_parser.Course_dataContext ctx) {
        String s = visit(ctx.course());
        builder.add("curso", s);
        return s;
    }
    @Override public String visitYear_data(user_parser.Year_dataContext ctx) {
        String s = visit(ctx.year());
        builder.add("ano", s);
        return s;
    }


    @Override public String visitName(user_parser.NameContext ctx) {
        return ctx.getText().substring(1, ctx.getText().length()-1);
    }
    @Override public String visitPassword(user_parser.PasswordContext ctx) {
        return ctx.getText().substring(1, ctx.getText().length()-1);
    }
    @Override public String visitEmail(user_parser.EmailContext ctx) {
        return ctx.getText().substring(1, ctx.getText().length()-1);
    }
    @Override public String visitUniversity(user_parser.UniversityContext ctx) {
        return ctx.getText().substring(1, ctx.getText().length()-1);
    }
    @Override public String visitYear(user_parser.YearContext ctx) {
        return ctx.getText();
    }
    @Override public String visitCourse(user_parser.CourseContext ctx) {
        return ctx.getText().substring(1, ctx.getText().length()-1);
    }
}
