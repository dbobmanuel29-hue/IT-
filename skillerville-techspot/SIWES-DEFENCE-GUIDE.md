# SIWES Defence Guide — Bobmanuel Sogbeye Tamunodiepriye

## 1. Personal introduction

Good morning. My name is **Bobmanuel Sogbeye Tamunodiepriye**. I am a 400 Level Computer Science student of the University of Port Harcourt, Faculty of Computing. I recently completed my Students Industrial Work Experience Scheme (SIWES) at **Skillerville Techspot**, where I practised frontend web development using HTML, CSS and JavaScript.

For my practical demonstration, I prepared a personal portfolio website. It introduces me, explains my SIWES experience, describes the skills I practised and provides contact links. I used HTML for structure, CSS for design and JavaScript for selected interactive features.

## 2. What the website does

This is a personal portfolio, not a Skillerville business website. It is the practical website Bobmanuel prepared after completing his industrial training to demonstrate the frontend skills he practised.

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Introduction, profile photo area and featured work |
| About | `about.html` | Education, background, SIWES and interests |
| Website | `courses.html` | Explains the purpose and features of the portfolio website |
| Skills | `services.html` | Technical skills and tools |
| Contact | `contact.html` | Public profile links and demonstration form |

The header navigation connects the pages. The footer provides repeated navigation and basic profile details.

## 3. Technologies used

- **HTML5:** defines the structure and content of webpages.
- **CSS3:** controls colours, typography, spacing, layout, responsive behaviour and animations.
- **Vanilla JavaScript:** adds the mobile navigation and contact-form validation.
- **Visual Studio Code:** code editor.
- **Web browser:** displays and runs the website.

The pages use local images and a system-font stack. No package installation or external service is required to open the website.

## 4. Project folder structure

- `index.html`, `about.html`, `courses.html`, `services.html`, `contact.html`: the five webpage files.
- `style.css`: the shared stylesheet.
- `script.js`: the shared JavaScript file.
- `images/`: local image assets.
- `images/profile-placeholder.svg`: temporary local BST profile image.
- `images/profile-photo.jpg`: the filename expected for your own portrait.
- `ADD-YOUR-PHOTO.txt`: photo replacement instructions.

The five HTML pages share the same CSS and JavaScript files. This avoids repeating common styles and interactions.

## 5. HTML — structure of a webpage

HTML means **HyperText Markup Language**. It is a markup language used to describe webpage structure and content.

A basic HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Welcome to my portfolio</h1>
  <p>This is my first paragraph.</p>
  <script src="script.js"></script>
</body>
</html>
```

Explanation:
- `<!DOCTYPE html>` tells the browser to use modern HTML.
- `<html lang="en">` is the root element and declares the language.
- `<head>` contains page information and linked resources.
- `<meta charset="UTF-8">` supports common text characters.
- The viewport meta tag helps the page fit mobile screens.
- `<title>` sets the browser-tab title.
- `<link rel="stylesheet">` connects the CSS file.
- `<body>` contains the visible page content.
- `<script>` connects the JavaScript file.

### Common HTML elements in this project

- `<header>`: page header or introductory content.
- `<nav>`: navigation links.
- `<main>`: the main content of the page.
- `<section>`: a thematic group of content.
- `<article>`: a self-contained item, such as a project card.
- `<footer>`: closing information and links.
- `<h1>` to `<h6>`: headings.
- `<p>`: paragraph text.
- `<a>`: hyperlink. Its `href` attribute sets the destination.
- `<img>`: image. Its `src` attribute sets the file path and `alt` describes the image.
- `<form>`: groups form controls.
- `<label>`: describes a form field.
- `<input>`: accepts short user input.
- `<select>` and `<option>`: create a drop-down list.
- `<textarea>`: accepts longer text.
- `<button>`: creates an action button.
- `<div>`: a general-purpose container.

An HTML element can have an opening tag, content and a closing tag:

```html
<p class="intro">I am learning web development.</p>
```

Here, `p` is the element name, `class` is an attribute, `intro` is the class value, and the sentence is the content.

Semantic elements such as `header`, `nav`, `main`, `section` and `footer` describe the purpose of each part of the page. This improves organisation and accessibility.

## 6. CSS — appearance and layout

CSS means **Cascading Style Sheets**. It controls how HTML elements look and how they are arranged.

A CSS rule:

```css
h1 {
  color: #111111;
  font-size: 32px;
  text-align: center;
}
```

- `h1` is the selector.
- `color`, `font-size` and `text-align` are properties.
- The values after the colons set the styles.
- Curly braces contain the declarations.
- Each declaration ends with a semicolon.

### Classes

HTML: `<p class="intro">Welcome to my website.</p>`

CSS:

```css
.intro {
  font-size: 18px;
  color: #444444;
}
```

A class selector begins with a dot. The same class can be reused on multiple elements.

### CSS variables

The stylesheet defines reusable values inside `:root`:

```css
:root {
  --color-black: #111111;
  --color-white: #ffffff;
  --radius-lg: 20px;
}
```

Use a variable with `var()`:

```css
.card {
  color: var(--color-black);
  background: var(--color-white);
  border-radius: var(--radius-lg);
}
```

This makes shared design values easier to change in one place.

### The CSS box model

An element can be understood as a box:
1. **Content:** text or image.
2. **Padding:** space between content and border.
3. **Border:** line around the content and padding.
4. **Margin:** space outside the border.

The stylesheet uses `box-sizing: border-box` to make width calculations easier because padding and border are included in the declared width.

### Flexbox and Grid

Flexbox is useful for arranging items in a row or column. For example:

```css
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

CSS Grid is useful for arranging cards in rows and columns:

```css
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

### Responsive design and media queries

Responsive design makes a page adapt to different screen sizes.

```css
@media (max-width: 700px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
```

The styles inside the media query apply when the viewport is 700 pixels wide or less. This project uses responsive CSS to adapt the navigation, cards, images and text to smaller screens.

### Transitions and animations

A transition makes a style change smooth:

```css
.button {
  transition: transform 0.2s ease;
}
.button:hover {
  transform: translateY(-2px);
}
```

The stylesheet also uses CSS keyframes for selected visual animations. A keyframe animation defines how a style changes over time.

## 7. JavaScript — behaviour and interaction

JavaScript is a programming language that adds behaviour to webpages. In this portfolio it is used for the mobile menu and contact-form validation.

### Variables and functions

A variable stores information:

```javascript
var name = "Bobmanuel";
var level = 400;
```

A function is a reusable group of instructions:

```javascript
function greet() {
  alert("Welcome to my portfolio!");
}
greet();
```

### Events

An event is an action the browser can detect, such as a click or key press.

```javascript
button.addEventListener("click", function () {
  alert("Button clicked!");
});
```

### DOM

DOM means **Document Object Model**. It is the browser's object representation of the HTML document. JavaScript can use it to find and change page elements.

```javascript
var heading = document.querySelector("h1");
heading.textContent = "My updated heading";
```

### Mobile navigation

The script finds the navigation list using `document.getElementById("navMenu")`. The menu button calls `toggleMenu()`. That function adds or removes the CSS class `show`; CSS controls how the menu appears.

The script also closes the menu when the visitor presses Escape, clicks outside the menu or chooses a page link.

### Contact form validation

The form uses HTML field types and required attributes. JavaScript then checks that a name, valid email, reason and message have been entered.

**Important:** this is a frontend demonstration form only. It does not send, upload or save messages because no backend or form-submission service is connected.

### Useful JavaScript statements used

- `document.getElementById()`: finds an element by its ID.
- `document.querySelector()`: finds the first element matching a CSS selector.
- `document.querySelectorAll()`: finds all matching elements.
- `addEventListener()`: listens for an event.
- `classList.toggle()`: adds a class if absent or removes it if present.
- `setAttribute()`: sets an HTML attribute.
- `textContent`: reads or changes text.
- `value`: reads a form field's value.
- `trim()`: removes extra whitespace at the beginning and end.
- `checkValidity()`: checks built-in HTML form validity.
- `alert()`: displays a browser alert.
- `return false`: prevents normal form submission in this demonstration.

The JavaScript file is wrapped in an immediately invoked function expression (IIFE):

```javascript
(function () {
  "use strict";
  // Website code goes here.
})();
```

It runs immediately and keeps helper variables inside its own scope. `"use strict"` enables stricter JavaScript rules and helps catch some common mistakes.

## 8. How the files work together

1. The browser opens `index.html`.
2. HTML builds the page structure.
3. The browser reads `style.css` and applies the design.
4. The browser loads local images referenced by the page.
5. The browser loads `script.js` and enables interactive features.
6. When a visitor selects a page link, the browser opens another HTML file.

## 9. Adding your photograph

1. Choose a clear portrait photograph.
2. Copy it into the `images` folder.
3. Rename it exactly to `profile-photo.jpg`.
4. Refresh the website.

The pages look for `images/profile-photo.jpg`. If it is not present, the local BST placeholder is displayed. See `ADD-YOUR-PHOTO.txt`.

## 10. How to test the website

- Open all five pages from the navigation.
- Resize the browser or use mobile view in developer tools.
- Open the mobile menu and test Escape and outside-click closing.
- Submit the contact form with empty fields and check validation.
- Complete the form and confirm the notice says the message was not sent or saved.
- Check that local images load and the pages do not depend on external fonts or libraries.

## 11. Sample SIWES defence questions and answers

**Q: What is the aim of your project?**  
A: The aim is to create a personal portfolio website that introduces me and demonstrates the HTML, CSS and JavaScript skills I practised during SIWES.

**Q: Why did you choose this project?**  
A: It allowed me to apply the HTML, CSS and JavaScript skills I practised during industrial training in a practical website.

**Q: What is HTML?**  
A: HTML means HyperText Markup Language. It defines the structure and content of a webpage.

**Q: What is CSS?**  
A: CSS means Cascading Style Sheets. It controls the appearance and layout of a webpage.

**Q: What is JavaScript?**  
A: JavaScript is a programming language used here to add interactions such as the mobile menu and form validation.

**Q: What is the difference between HTML, CSS and JavaScript?**  
A: HTML provides the structure, CSS controls the presentation, and JavaScript adds behaviour and interactivity.

**Q: What is a responsive website?**  
A: It is a website whose layout adjusts to different screen sizes, including phones, tablets and computers.

**Q: What is a CSS media query?**  
A: It applies CSS styles only when conditions such as screen width are met.

**Q: What is the DOM?**  
A: DOM means Document Object Model. It allows JavaScript to access and modify elements in an HTML page.

**Q: What is form validation?**  
A: It checks user input to make sure required information has been entered in an acceptable format.

**Q: Does your contact form send messages?**  
A: No. It is a frontend demonstration that validates the fields and displays a message. It does not send or store data because no backend is connected.

**Q: Why did you separate HTML, CSS and JavaScript?**  
A: It keeps the project organised. HTML handles structure, CSS handles presentation and JavaScript handles behaviour.

**Q: What is the purpose of the images folder?**  
A: It stores the visual files used by the pages locally, so the website does not need an external image service to display them.

**Q: What challenge did you face?**  
A: A common frontend challenge is making layouts work on different screen sizes and ensuring interactive features behave correctly. I addressed this by using responsive CSS and testing the navigation, search and form.

**Q: What did you learn during SIWES?**  
A: I gained practical experience structuring webpages with HTML, styling them with CSS, adding interactions with JavaScript, organising project files and testing a website.

**Q: What would you check or improve in the website?**  
A: I would test the website on different screen sizes, check accessibility and keep the code organised.

## 12. Short website demonstration plan

1. Start on the homepage and introduce yourself.
2. Explain the navigation and open About.
3. Show your academic background and completed SIWES experience.
4. Open the Website page and explain the structure and purpose of the portfolio.
5. Open Skills and explain HTML, CSS and JavaScript.
6. Open Contact and explain the public links.
7. Demonstrate form validation and clearly state that the form does not send messages.

## 13. Important accuracy points

- Say you completed SIWES at Skillerville Techspot. Do not describe Skillerville as your own company.
- This portfolio website is built with HTML, CSS and vanilla JavaScript.
- Do not claim the demonstration contact form sends messages.
- Only explain code you understand. Practise pointing to the relevant file during your demonstration.

## 14. Key terms

- **Frontend:** the part of a website users see and interact with.
- **Backend:** the server-side part that handles application logic, data and services.
- **Responsive design:** adapting a layout to different screen sizes.
- **Validation:** checking whether entered information meets requirements.
- **Function:** a reusable block of code that performs a task.
- **Event:** an action the browser can detect, such as a click.
- **Selector:** a CSS pattern used to target HTML elements.
- **Attribute:** extra information in an HTML opening tag.
- **Deployment:** making a website available through a hosting service or server.
