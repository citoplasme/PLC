import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.ParserRuleContext;

import java.io.IOException;

public class Main {

    public static void main(String[] args) {
        userLexer lexer;
        try {
            lexer = new userLexer(CharStreams.fromFileName("/Users/JoaoPimentel/IdeaProjects/PLC_Project/Testes/teste1.txt"));
            CommonTokenStream tokens = new CommonTokenStream(lexer);
            userParser parser = new userParser(tokens);
            ParserRuleContext ctx = parser.user();
            System.out.println("END");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
