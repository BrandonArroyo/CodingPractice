
import java.io.*;
public class Reverse {
    public static void main (String[] args) throws IOException {
        File file = new File(args[0]);
        BufferedReader buffer = new BufferedReader(new FileReader(file));
        String line;

        while ((line = buffer.readLine()) != null) {
            line = line.trim();
            parseString(line);

        }
    }
    public static void parseString(String s ){
        String[] l = s.split(" ");
        for (int i = l.length - 1; i >= 0 ; -- i ) {
            System.out.print(l[i] + " ");
        }
        System.out.println("");
    }
}
