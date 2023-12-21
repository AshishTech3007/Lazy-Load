# Lazy Loading using Intersection Observer Demo

This project demonstrates the implementation of Lazy Load using Intersection Observer to trigger actions when elements enter or exit the viewport.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Structure](#structure)
- [Callback Functions](#callback-functions)
- [License](#license)

##  Introduction
Lazy loading is a strategy to identify resources as non-blocking (non-critical) and load these only when needed. It's a way to shorten the length of the critical rendering path, which translates into reduced page load times.

## Getting Started
To get started with this project, follow these steps:

- Clone the repository:

   ```bash
   git clone <repository-url>

## Usage
The project consists of sections with dynamic content and images loaded using Intersection Observer. The relevant classes are utilized to showcase visibility changes.

## Structure
- index.html: The main HTML file containing sections and script tags. ``` index.html ```
- style.css: The stylesheet file with styles for sections and images. ``` index.css ```
- script.js: The JavaScript file implementing Intersection Observer. ``` index.js ```
  
## Callback-Functions
### callback
- Responsible for updating the visibility status of the .checkelement.
### callback2
- Manages the visibility of sections by adding/removing the activesection class.
### callback3
- Handles the lazy loading of images within .imagecont. Images are loaded and displayed when they enter the viewport.
   
