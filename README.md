# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![desktop screenshot](./screenshots/desktop-ss.JPG)
![mobile screenshot](./screenshots/mobile-ss.JPG)

### Links

- Solution URL: [https://github.com/danyela2000/interactive-rating-component](https://github.com/danyela2000/interactive-rating-component)
- Live Site URL: [https://joyful-profiterole-f4f32e.netlify.app/](https://joyful-profiterole-f4f32e.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript
- Event listeners
- Modify styles, add/remove css classes using JavaScript

### What I learned
I learned how to change the default appearance of a radio button, and how to customize it
in css:
```css
 input[type="radio"] {
    appearance: none;
}
 /*  If a radio button has been checked then change the color and background color of the label */
 input[type="radio"]:checked + label {
    color: var(--White);
    background-color: var(--Light-grey);
}

 label:hover {
    color: var(--White);
    background-color: var(--Orange);
 }
```

In JavaScript I learn how to check if a radio button has been checked and how to use its value
```js
  document.querySelectorAll('input[name="rating"]:checked')
  //returns a collection with all the radio buttons that has been checked
  document.querySelector('input[name="rating"]:checked').value  
  //returns the value of the checked radio button 
```

I also learned how to import a css file into another one.

```css
/*  target css file*/

@import "css-reset.css";
```

### Useful resources

- [https://www.geeksforgeeks.org/how-to-include-one-css-file-in-another/](https://www.geeksforgeeks.org/how-to-include-one-css-file-in-another/) - This helped me understand how to include a css file in another one.

## Author
- Frontend Mentor - [https://www.frontendmentor.io/profile/danyela2000](https://www.frontendmentor.io/profile/danyela2000)


