package com.tts;

import java.util.Scanner;
public class Main {

    // TO DO: Account for inputs other than yes and no. Only partial functionality currently.

    public static void main(String[] args) {
        System.out.println("******************");
        System.out.println("Let's play Craps!");
        System.out.println("******************");
        System.out.println("First Roll!");



        /*-----  First Dice Roll ----- */
        int dieOne = (1 + (int) (Math.random() * 6));
        int dieTwo = (1 + (int) (Math.random() * 6));
        int roundOneTotal = (dieOne + dieTwo);

        /*------------Round One Win/Point/Lose Conditions----------------*/

        /* ----- Win Conditions ---- */

        if ((roundOneTotal == 7) || (roundOneTotal == 11)) {
            System.out.println("you rolled a " + dieOne + " and a " + dieTwo);
            System.out.println("Your total is: " + roundOneTotal + ". You win! :) Re-run to play again");
        }

        /* ---- Lose Conditions --- */

        else if ((roundOneTotal == 2) || (roundOneTotal == 3) || (roundOneTotal == 12)) {
            System.out.println("you rolled a " + dieOne + " and a " + dieTwo);
            System.out.println("Your total is: " + roundOneTotal + ". You lose! :( Re-run to try again.");
        }

        /* --- Point Condition. User rolls a 4, 5, 6, 8, 9, or 10 ---- */
        else {
            System.out.println("you rolled a " + dieOne + " and a " + dieTwo);
            System.out.println("Your total for the first round is: " + roundOneTotal + ". You got a point!");
            System.out.println("Roll " + roundOneTotal + " again to win. Roll a 7 and you lose. Ready to roll? (y/n)");
            Scanner keyboard = new Scanner(System.in);
            String userInput = keyboard.nextLine();
            if (userInput.equals("N") || userInput.equals("n")) {
                System.out.println("Thanks for playing! Seeya!");
                System.exit(0);
            } else {


                boolean isValidInput = userInput.equals("Y") || userInput.equals("y");

                while ((userInput.equals("y")) || (userInput.equals("Y"))) {

                    boolean termCondition = true;


                    while (termCondition) {
                        int dieOneAgain = (1 + (int) (Math.random() * 6));
                        int dieTwoAgain = (1 + (int) (Math.random() * 6));
                        int newTotal = (dieOneAgain + dieTwoAgain);
                        System.out.println("you rolled a " + dieOneAgain + " and a " + dieTwoAgain);
                        System.out.println("Your total is: " + newTotal);
                        if (newTotal == roundOneTotal) {
                            System.out.println("You matched the point, you won! Re-run to play again.");
                            termCondition = false;
                            System.exit(0); // for some reason the term condition isn't ending so I'm trying the system exit. break; didn't seem to prevent fall-through.

                        } else if (newTotal == 7) {
                            System.out.println("You rolled a 7, you lose :( Re-run to try again");
                            termCondition = false;
                            System.exit(0);

                        } else {
                            System.out.println("No match, you need a " + roundOneTotal + " to win. Roll again? y/n");
                            userInput = keyboard.nextLine(); }
                        /* --------------Defined Valid Inputs------------------- */
                            isValidInput = userInput.equals("Y") || userInput.equals("y") || userInput.equals("N") || userInput.equals("n");

                            if ((userInput.equals("n")) || (userInput.equals("N"))) {
                                System.out.println("Thanks for playing!");
                                termCondition = false;
                                System.exit(0);


                                do {
                                    System.out.println("Roll again?. (Y/N");
                                    userInput = keyboard.nextLine();
                                    isValidInput = userInput.equalsIgnoreCase("Y") || userInput.equalsIgnoreCase("N");
                                } while (!isValidInput);

                        } else {
                            termCondition = true;
                        }

                    }

                }
            }

        }
    }

}
