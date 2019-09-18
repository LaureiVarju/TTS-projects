package com.tts;
public class Main {
    public static void main(String[] args) {
        int number = 1;
        String s1 = "xy";

        String s2 = s1;

        s1 = s1 + s2 + "z";

        System.out.println( s1);

    }
}