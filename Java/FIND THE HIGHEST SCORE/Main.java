import java.io.*;
import java.util.Arrays;
public class  Main{
    public static void main (String[] args) throws IOException {
        File file = new File(args[0]);
        BufferedReader buffer = new BufferedReader(new FileReader(file));
        String line;
        while ((line = buffer.readLine()) != null) {
            line = line.trim();
            String[] l = line.split("\\s+");

            parseLine(l);
            System.out.println("");
        }
    }
    public static void parseLine(String[] s){
        int highest = -1001;// this is lowest in possible input
        
        for (int i = 0; i < s.length ;++i ) {
            if(s[i].equals("|")){
              //System.out.println(Integer.parseInt(s[i]));
              System.out.print(highest + " ");
              highest = -1001;
            }
            else if(highest < Integer.parseInt(s[i])){
                highest =  Integer.parseInt(s[i]);
            }

        }
        System.out.print(highest); // case for last set
    }

}
