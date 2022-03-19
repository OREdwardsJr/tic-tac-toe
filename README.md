# tic-tac-toe
A tic-tac-toe game with 1-player ai functionality, created in JS, CSS, HTML.

This is multiplayer Javascript version of Tic-Tac-Toe.

--> Methodology <-- 
The Javascript portion of this game utilizes factory functions along with other Javascript methodologies. There are 2 fonts that are imported from Google Fonts. Everything else is build utilizing the standard Javascript, CSS, and HTML languages.


--> Scoring Strategy <--
An array was created with a amount of 0s that match the number of potential ways to win the game. Each button adds either +1 or -1 to the respective method. After each click, the array is read to see if any values equal to 3 or -3. If so, then a victory has occurred. This prompts the game to announce a winner and reset. However, if all spaces are filled, and no victor has been determined, then the game announces a tie before it resets.

Below is the mapping utilized for scoring:
To the right of methods is a coordinate. If you consider the board to be a plot then
you can find the piece using the coordinates. The first row indicates x = 0. The first
column equals to y = 0. EG: (0,0) is the first square in the  first column on the first row. */

Legend
    Coordinate | Button ID{i} | Methods
    (0,0) | 0 | 00, 03, 06
    (0,1) | 1 | 00, 04
    (0,2) | 2 | 00, 03, 05
    (1,0) | 3 | 01, 03
    (1,1) | 4 | 01, 04, 06, 07
    (1,2) | 5 | 01, 05
    (2,0) | 6 | 02, 03, 07
    (2,1) | 7 | 02, 04
    (2,2) | 8 | 02, 05, 06


methods[0] = 0, // (0,0), (0,1), (0,2)
methods[1] = 0, // (1,0), (1, 1), (1,2)
methods[2] = 0, // (2,0), (2,1), (2,2)
methods[3] = 0, // (0,0), (1,0), (2,0)
methods[4] = 0, // (0,1), (1,1), (2,1)
methods[5] = 0, // (0,2), (1,2), (2,2)
methods[6] = 0, // (0,0), (1,1), (2,2)
methods[7] = 0; // (2,0), (1,1), (0,2)  
