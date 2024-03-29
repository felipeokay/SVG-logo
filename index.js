// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

const inquirer = require('inquirer');
const fs = require('fs');

const Circle = require('./.lib/circle');
const Square = require('./.lib/square');
const Triangle = require('./.lib/triangle');

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to three characters:"
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter text color keyword (or a hexadecimal number):"
    },
    {
        type: "list",
        name: "shape",
        message: "Select shape for logo:",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter shape color keyword (or a hexadecimal number):"
    }
];

inquirer
    .prompt(questions)
    .then((data) => {
        let shape;
        if (data.shape === "Circle") {
            shape = new Circle(data.text, data.textColor, "circle", data.shapeColor)
        } else if (data.shape === "Square") {
            shape = new Square(data.text, data.textColor, "rect", data.shapeColor)
        } else {
            shape = new Triangle(data.text, data.textColor, "polyygon", data.shapeColor)
        }

        fs.writeFile('./examples/logo.svg', shape.render(), (err) =>
            err ? console.log(err) : console.log('You have successfully generated logo.svg!')
        );

    })