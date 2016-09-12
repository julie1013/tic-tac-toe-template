Welcome to Tic-CAT-Toe, a variation of Tic-Tac-Toe for cat lovers and fans
of "cat fail" videos.

In Tic-CAT-Toe, we use famous Internet cats as tokens:
"Grumpycat" is "o" and "Lil Bub" is "o".

You can find a link to the repo here:
<https://github.com/julie1013/tic-tac-toe-template>

A wireframe (which is a little different from the final product) is here:
<https://github.com/julie1013/game-project-scope-study/blob/response/tttwireframe.jpg>

User stories:

1.As a user, I want it to be clear how I can create an account and login.
2.As a user, I want it to be clear how I can change my password.
3.As a user, I want gameplay to be straightforward (ie click a square to make
token appear)
4.As a user, I want to keep track of how many games I've won.
5.As a user, I want to have a fun visual experience while playing the game.
6.As a user, I want to to be notified in a clear and fun way that I've won the
game, or that the game is a tie.

To make Tic-CAT-Toe, I used JavaScript, jQuery, HTML, and a little bit of
bootstrap.

The first thing I did was work out the game logic. I drew a Tic-Tac-Toe board
in my notebook, complete with index cells. I tried to figure out if there
was a mathematical pattern for cell combinations that are winners (ie, are
they divisible by 5? All odd numbers? etc.) but such an option did not
appear to be available. Therefore, each winning condition was spelled out.

I broke the entire game down into very basic steps, taking care of my game
logic before worrying about how it would translate into the UI. For example,
I wrote functions and passed arguments through them to make sure that the
tic-tac-toe array would be updated. I console the array to make sure the
expected values were being pushed to it.

Very basic components included: Initializing the board in the game logic,
drawing a visual representation of the board in the browser, setting a cell
(that is, finishing a move with either an x or an o).

Since there is not an apparently "efficient" way to check for winning
conditions,I created three functions: one for checking horizontally,
one for checking vertically, and one for checking diagonally. I also created
a function that checks for a tie. A function called winCheck runs the first
three functions and returns a winner. If none of the conditions are returned
true by the end of the game, a tie is declared. Declaring a tie merely
involved counting nine moves without a win condition occurring.

Otherwise, I kept my code as efficient as humanly possible: in the scss, I
grouped classes together when they had the same values. In the JavaScript,
I used variables whenever possible. For example, when creating the tokens, the
game does not manually reference 'x.png' or 'o.png'. Rather, it concatonates,
referencing the variable player. Depending on whose turn it is, either x.png
or o.png are referenced and set into the square. I attempted to find a way
to refactor the functions for GET, PATCH, POST, DELETE since
much of the code is exactly the same. However, I was unable to find an
obvious solution to this, and as there was still a lot more to do to meet the
requirements, I decided to forgo it. That brings me to unsolved problems:

The aforementioned: refactoring the functions for GET, PATCH, POST, DELETE.

Making text in fields disappear after hitting the button (example, making
 login info disappear after hitting "sign in")

Keeping score, while easy on a local level, is not easy for me to deal with
on the back end. I want to find a way to reset the score to 0 ON THE SERVER
when a user signs out.

Changing references to "x" and "o" (in the context of the statement of who
has won) to the appropriate tokens.

Creating error messages for incorrect passwords and passwords that don't match
when creating a new account.

In future iterations of this game, I would like to do more with the cat
theme (noises, hand-drawn tokens, etc), but as the theme was not the main
focus of the project and the coding was first priority, this was not possible.
