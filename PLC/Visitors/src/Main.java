import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.ParserRuleContext;
import java.io.File;

import java.io.IOException;

public class Main {

    public static void main(String[] args) {
        user_lexer lexer;
        try {
            lexer = new user_lexer(CharStreams.fromFileName("/Users/JoaoPimentel/IdeaProjects/PLC_Project_Visitors/Testes/teste1.txt"));
            CommonTokenStream tokens = new CommonTokenStream(lexer);
            user_parser parser = new user_parser(tokens);
            ParserRuleContext ctx = parser.user();

            POST_Visitor visitor = new POST_Visitor();
            System.out.println(visitor.visit(ctx));

            System.out.println("END");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
