package com.tts;

public class Main {

    public static void main(String[] args) {
        System.out.println("Let's play Craps! Here we go!");

        /*-----  First Dice Roll ----- */
        int dieOne = (1 + (int) (Math.random() * 6));
        int dieTwo = (1 + (int) (Math.random() * 6));
        int roundOneTotal = (dieOne + dieTwo);

        /*------------Round One Win/Point/Lose Conditions----------------*/

        /* ----- Win Conditions ---- */

        if ((roundOneTotal == 7) || (roundOneTotal == 11)) {
            System.out.println("you rolled a " + dieOne + " and a " + dieTwo);
            System.out.println("Your total is: " + roundOneTotal + ". You win! :)");
        }

        /* ---- Lose Conditions --- */

        else if ((roundOneTotal == 2) || (roundOneTotal == 3) || (roundOneTotal == 12)) {
            System.out.println("you rolled a " + dieOne + " and a " + dieTwo);
            System.out.println("Your total is: " + roundOneTotal + ". You lose! :(");
        }

        /* --- Point Condition. User rolls a 4, 5, 6, 8, 9, or 10 ---- */
        else {
            System.out.println("you rolled a " + dieOne + " and a " + dieTwo);
            System.out.println("Your total for the first round is: " + roundOneTotal + ". You got a point!");
            System.out.println("Roll it again to win! Roll a 7 and you lose. Here we go...");


            while (true) {
                int dieOneAgain = (1 + (int) (Math.random() * 6));
                int dieTwoAgain = (1 + (int) (Math.random() * 6));
                int newTotal = (dieOneAgain + dieTwoAgain);
                System.out.println("you rolled a " + dieOneAgain + " and a " + dieTwoAgain);
                System.out.println("Your total is: " + newTotal);
                if (newTotal == roundOneTotal) {
                    System.out.println("You matched the point, you won!");
                    break;
                }
                if (newTotal == 7) {
                    System.out.println("You rolled a 7, you lose :(");
                    break;
                } else System.out.println("No match, roll again...");

            }
        }
    }
}
