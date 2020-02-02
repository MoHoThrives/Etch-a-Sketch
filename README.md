# Etch-a-Sketch
This is mildly similar to sketching games on mobile platforms. 
It starts out as a 16x16 grid and when the user runs the mouse over it,
the grid boxes change color to blue; much like running a blue pen over it.
The user can change the dimensions by simply clicking the change dimensions
button and respond to the prompt with a number.

## Future Improvements/Enhancements

- The application doesn't respond to very large dimensions, when changed.
My hypothesis is that there is too much cost on storage as a 'div' element is saved 
in memory with every iteration of the fillGrid function. If that's the case,
then the function should be modified to not save the 'div' element with every iteration.

- The functionality can be enhanced to make the size of the main grid window
bigger at the user's will. Thus, that would make the pixels easier to see.

- The application can be enhanced by generating a random color every time
the user runs over the grid boxes with the mouse. That would be more fun than a
simple mono-color.

## What I learned

- I have learned a lot about the use of flex box and it can be very useful to organize 
content in a structured way.

- I also learned about the internals of how the javascript can sometimes be processed before the 
html and css. That was an issue I had to work with when I couldn't retrieve the html elements 
from the javascript. The 'defer' keyword in the script tag of the html tag seems to be
the most effective, simplest, and safest way of ensuring the javascript files execute 
after the html.
