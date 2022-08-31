# Figtion
Figtion extends Figma's functionality.Figtion is a React web application built using [Dhiwise](dhiwise.com), Figma design, Figma APIs, Slack webhook and WhatsApp APIs.

Figtion provides a list of Figma Files which enables sharing multiple links with people/groups across multiple platforms like Whatsaap and Slack.All the essential information like the Figma comments and version history can also be obtained.Figtion allows filtering the figmas on the basis of it's creation and updation.

### Table of Contents
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Version of Technologies](#version-of-technologies)
- [Folder Structure](#folder-structure)
- [Installed Dependency](#installed-dependency)
- [MIT License](#mit-license)
- [Community](#community)


# Features
<ul>
<li>Login</li>
<li>
List of Figma Files
<ul>
<li>Individual Figma sharing 
<ul>
<li>Share on Slack </li>
<li>Share on WhatsApp </li>
</ul></li>
<li>Multiple Figma sharing 
<ul>
<li>Share on Slack </li>
<li>Share on WhatsApp </li>
</ul></li>

<li>Sorting Figmas
<ul>
<li>Sort by Creation </li>
<li>Sort by Updation </li>
</ul></li>
<li>Copy Figma's link to clipBoard</li>
<li>Open Figma's link</li>

</ul>
</li>
<li>Logout</li>
</ul>

## Screenshots
![Dashboard](https://github.com/bhakti-tech02/figtion/blob/main/src/assets/images/dashboard.png) 
![Comments](https://github.com/bhakti-tech02/figtion/blob/main/src/assets/images/comments.png) 
![Whatsapp](https://github.com/bhakti-tech02/figtion/blob/main/src/assets/images/linkToWhatsapp.png)
![Multiselect](https://github.com/bhakti-tech02/figtion/blob/main/src/assets/images/multiselect.png) 


# Setup

#### 1. Clone the repository
```sh
$ git clone https://github.com/bhakti-tech02/figtion.git
$ cd figtion
```
## Install Dependencies

    npm install
## Running the App

    npm start

#### 2. [Figma Setup](https://www.figma.com/developers/api)
#### 3. [Slack setup](https://api.slack.com/messaging/webhooks)

<h3><u>How to run Figtion?</u></h3>

  1. First run server.js which acts as the proxy server between Figtion and the Figma API.
  ```sh
$ node server.js
```
  2. Log into the application with username "Priscilla_Mohr@yahoo.com" and password "mGEGqKcEUOMnInZ".

  3. For accessing version and comments feature, add your Figma Access Token in the API's headers in Services.

  4. For accessing sharing feature across slack, generate your webhook url and get started.

## Running the storybook

We have detected common components and have generated possible variants of it. To check the documentation of generated common components by integrating storybook, Please follow below steps.

## Install and Initializes

     npx storybook init

## Run the Storybook

      npm run storybook

 
# Version of Technologies

- [git](https://git-scm.com/) - v2.13 or greater
- [NodeJS](https://nodejs.org/en/) - `12 || 14 `
- [npm](https://www.npmjs.com/) - v6 or greater

## Folder Structure

After creation, your project should look like this:

```
.
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.js
│   ├── assets
│   │   ├── fonts ---------- Project fonts
│   │   └── images --------- All Project Images
│   ├── components --------- UI and Detected Common Components
│   ├── constants ---------- Project constants, eg: string consts
│   ├── hooks -------------- Helpful Hooks
│   ├── index.js
│   ├── pages -------------- All route pages
│   ├── Routes.js ---------- Routing
│   ├── styles
│   │   ├── index.css ------ Other Global Styles
│   │   └── tailwind.css --- Default Tailwind modules
│   └── util
│       └── index.js ------- Helpful utils
└── tailwind.config.js ----- Entire theme config, colors, fonts etc.
```

## Installed Dependency

The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with `npm`:


   1. @tailwindcss/forms - `0.4.0`,
   2. @testing-library/jest-dom - `^5.15.1`,
   3. @testing-library/react - `^11.2.7`,
   4. @testing-library/user-event" - `^12.8.3`,
   5. axios - `^0.27.2`,
   6. moment - `^2.29.4`,
   7. prop-types - `^15.8.1`,
   8. react - `17.0.2`,
   9. react-datepicker - `^4.5.0`,
   10. react-dom - `17.0.2`,
   11. react-modal - `^3.14.4`,
   12. react-router-dom - `6.0.2`,
   13. react-router-hash-link - `^2.4.3`,
   14. react-scripts - `5.0.0`,
   15. react-select - `^5.2.1`,
   16. react-toastify - `^9.0.1`,
   17. simple-react-hook-form - `^1.0.4`,
   18. web-vitals - `^2.1.0`

# MIT License

Copyright (c) 2022 DhiWise

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
## Community

<a href="https://twitter.com/dhiwise"><img src="https://user-images.githubusercontent.com/35039342/55471524-8e24cb00-5627-11e9-9389-58f3d4419153.png" width="60"></a>
<a href="https://discord.com/invite/rFMnCG5MZ7"><img src="https://user-images.githubusercontent.com/47489894/183043664-b01aac56-0372-458a-bde9-3f2a6bded21b.png" width="60"></a>
<a href="https://www.dhiwise.com/"><img src="https://global-uploads.webflow.com/618e36726d3c0f19c9284e56/62383865d5477f2e4f6b6e2e_main-monogram-p-500.png" width="60"></a>
<a href="https://www.youtube.com/c/DhiWise"><img src="https://www.gstatic.com/youtube/img/promos/growth/e627e007b3838086012608ef9370c211889f46b95b2335af722b53a2e49a0cd6_122x56.webp" width="60"></a>
