import java.lang.Math;
import java.util.*;
public class Main {
    // used wikipidea page to help impliment
    public static void main(String[] args) {
        System.out.println(karatsuba(1234,9867));
        System.out.println(karatsuba(5,5));
    }
    public static long karatsuba(long num1, long num2){
        int size1 = getSize(num1);
        int size2 = getSize(num2);
        final int BASE = 10;
        double maxSize = Math.max(size1,size2);
        long m = (long)Math.ceil(maxSize/2);// round up and find the m you want
        long base = (long)Math.pow(BASE, maxSize);//this sets it to m 10 here
        //subdividing the integers
        long b = (long)(num1 / base);
        long a = (long)(num1 - (b * base));
        long d = (long)(num2 / base);
        long c = (long)(num2 - (d * m));
        // these are the different cases for the algorithm
        long z0 = a * c ;
        long z1 = (a + b)* (c + d);
        long z2 = b * d;

        return (z2 * (long)(Math.pow(BASE, 2 * m)))+ ((z1 - z0 - z2) * m) + z0 ;
    }

    public static int getSize(long num){
       int counter = 0;
       while (num != 0)
       {
           counter++;
           num /= 10;
       }
       return counter;
   }

}
