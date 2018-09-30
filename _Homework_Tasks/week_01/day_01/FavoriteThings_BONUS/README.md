# Command line lab

## Introduction

Developing web apps requires a degree of comfort navigating and interacting with your operating system through the command line, and similar to how you'll be practicing writing and running Ruby and JavaScript later in the course, we'll be practicing creating, modifying, and moving files and folders in your terminal to get you practicing Unix commands.

For your first lab, you're going to create files and folders to organize your favorite books, movies, and music - then, you're going to reorganize them.

Be sure to use the cheat sheets in the "Additional Resources" section if you get stuck.

## Exercise

### Requirements

From your root directory, create a folder called `my-favorite-things`; you'll use that folder to do the exercises below.

- Organize your favorite books

  - In the `my-favorite-things` folder, create a folder called `books`
  - Create a folder in `books` named after your favorite author (e.g. `mark-twain`, or `douglas-hofstadter`, but avoid spaces!)
  - Create files named after some of the author's books in the author's folder
  - Open the `books` folder in VS Code
  - In each book file, add a brief description of the book

- Organize your favorite movies

  - In the `my-favorite-things` folder, create a folder called `movies`
  - Create a folder in `movies` named after your favorite `actor`
  - Create a folder in the `actor` folder named after the actor's breakthrough movie
  - Create a text file named after the actor's character in the breakthrough movie in the top level `movies` directory
  - Move the text file to the breakthrough movie's folder
  - Open the file in VS Code and edit that text file with a description of the character's role in the movie

- Organize your favorite music

  - In the `my-favorite-things` folder, create a folder called `music`
  - Move into the `music` folder
  - Create a folder called `disco`
  - Create a text file in `disco` called `ymca.txt`
  - Delete the `disco` folder
  - Create a folder called `jazz`
  - In `jazz`, create folders `miles-davis` and `john-coltrane`
  - In `miles-davis`, create a folders called `kind-of-blue`
  - in `john-coltrane`, create a folder called `a-love-supreme`
  - Create a text file in both `john-coltrane` and `miles-davis` called `track-listing.txt` using one command
  - Rename both `track-listing.txt` files to be called `tracks.txt`

- Reorganize _everything_

  - In the `my-favorite-things` folder, create a folder called `media`
  - Move `books`, `movies`, and `music` into the `media` folder

## Bonus

- Look through the additional resources and do the following without leaving your terminal:

  - Look at the top and bottom 10 lines of each file
  - Search for a string of text in a file
