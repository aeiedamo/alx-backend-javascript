#!/usr/bin/nodejs

let fn1 = process.stdout;
let fn2 = process.stdin;

fn1.write("Welcome to Holberton School, what is your name?\n");
fn2.on("data", (data) => {
    fn1.write(`Your name is: ${data}`);
});

fn2.on('end', () => {
    fn1.write("This important software is now closing\n");
});
