# Comments from the author (Aleksei Iurchak)

This readme includes:

- [Notes and disclaimers by task](#notes-and-disclaimers-by-task)
    - [UI development](#ui-development)
    - [Performance](#performance)
    - [Forms](#forms)
- [Packages used](#packages-used)
- [Time spent](#time-spent)
- [Further development ideas](#further-development-ideas)
- [Wrap-up](#wrap-up)

Project consists of a single page with a jumbotron banner, a form with validation, a slide-show and a masonry with all the photos, and a modal gallery.

The banner is just a picture to quick start somewhere.

The slide-show component shows all the photos one by one and allows to open the currently shown photo in the gallery.

The gallery takes the whole viewport and allows to view full images one by one. Navigation is available via UI elements or keyboard arrow keys.

The masonry layout shows all the images in one place in a nice way.

The form presents and validates required fields, see the [Form section](#3.-forms) section below for more info.

The layout is responsive in its MVP-style way.

I developed and tested the application in desktop Chrome via responsive mode in devtools. I left mobile-platform-specific things like scrollbars and toolbars taking space outside of scope.

P.S. sorry about the single commit, I had to squash while figuring out the best way to upload results.

## Notes and disclaimers by task

### UI development

In absense of mockups or functional requirements I tried to come up with a design that would enable me to demonstrate the typical way I'm working on frontend tasks.

As there aren't multiple instances of usage of sample components, I didn't try to extract logic or layouts into standalone reusable components, although I understand it's a regular practice.

I didn't set a goal to create a proper design system, so breakpoints and scaling of paddings and font sizes are somewhat arbitrary, please excuse me for that.

As production-level quality wasn't a requirement, I didn't spend a lot of time refactoring and working on project folder structure apart from basic things - I hope you understand :)

### Performance
Performance (especially server-side) is one of the things I haven't really had a chance to work on in my past projects. 

The things I did performance-wise in the past were monitoring function complexity, avoiding redundant re-renders, splitting code into chunks and preloading them, and paying attention to how much data, including media and its resolution, is actually needed in different parts of a project. 

Because the result is a single little page with one set of images, there was no point in splitting code, there also aren't any complex computations. As for image resolution, I coudn't figure out if the provided resources support loading lower-resolution images to display while the full ones are loading.

So, in the end, I was puzzled about what could be done performance-wise.

Increasing expertise in performance is one of the main goals of mine for the near future.

### Forms

Ah, the most fun part! 

In my past projects forms were already set up, so this time has been the first one in a long time that I created a form from scratch.

As far as I know, modern React applications rarely use vanilla HTML forms, so, to reduce boilerplate and gain some real-world experience at the same time, I decided to use an npm package.

I chose one of the most popular packages, Formik v2, as it's pretty lightweight, versatile, and does little magic. I decided not to go with the most concise but abstract variation of its API (<Formik /> HOC), in favor of the more explicit one (with render props and hooks) to get my hands dirty in the process.

## Packages used

* formik (https://www.npmjs.com/package/formik), explained above.

* react-datepicker (https://www.npmjs.com/package/react-datepicker) as it's basic and eliminates the need to implement an in-house datepicker, which I figured was outside of scope of the task.

* react-masonry-css (https://www.npmjs.com/package/react-masonry-css). I wanted to spare some time from css grids to work on more complex things, so I turned to a masonry package. I compared top 5 of them and ended up with this one, because it didn't depend on legacy packages and had the most straightforward API. I was surprised to find out that the author of one of them is my friend from university, so I had a chance to discuss pros and cons of alternative packages.
 

## Time spent

To create enough opportunities to use React, JS, CSS and HTML in their different ways, I planned several features for the page. That required a lot of styling to end up with a minimally aesthetically pleasing result. I also did quite a bit of research in the process.

The whole thing took about 1.5 work days, in proportion of 5/10 parts styling, 3/10 parts researching, and 2/10 parts actually coding, which, I hope, doesn't violate the time limit recommendation too much.

## Further development ideas
- Add Typescript.
- Figure out endpoints and implement loading lower-resolution images.
- Implement lazy loading and fetching additional images on top of starting 10.
- Implement loading indicators for async actions.
- Implement error boundaries and layout error state views.
- Introduce css-modules or css-in-js to remove BEM-style verbose classnames.
- Extract basic UI components and their styles.
- Work on layouts for different viewports (though it's more of a designer's field of expertise).
- Extract style constants and variables.

## Wrap-up

Thank you for the task and your consideration of the result! 

Working on it was as fun as it was educational.

Here goes the initial Readme.


# Motorway UI Test

Welcome to the Motorway UI technical test. This test focuses on user experience, and your skills with HTML, CSS, a11y and leveraging browser APIs.



## Set up

This repo is a slightly modified Create React App and an Express server which serves a JSON feed of images.

- Clone the repo and run `npm install`

- `npm run serve` will run the server

- in another terminal window `npm run start` will start CRA

After this, CRA will open a tab with the app running, usually `localhost:3000`. If you look in `src/App.js` you'll see the API call to the server is already made and will console log out the results.

#### Note

- The server and CRA are watching the relevant files and will hot reload if any changes are made.

- Feel free to modify or install whatever code you feel is necessary. If installing packages which are wrappers for native browsers APIs please leave a comment explaining why.


## Tasks

### 1. UI development

Create a responsive UI to display the images returned by the API.

The aim is to demonstrate your experience and knowledge of HTML, CSS, JS and React features; and demonstrate creative thinking in how images can be presented and manipulated.

Images aren't optimised and their dimensions are varied, there are .jpg and .webp versions on s3, so you will need to take this into account.

#### Inspiration:

https://twitter.com/andybarefoot/status/1251844621262602242

http://www.artist-developer.com/

#### Some ideas to get you started:

Resizable thumbnails

Modal to review full size images

Image effects or filters


### 2. Performance

The API that is returning images is rather slow. Show how it can be sped up, and show how you would measure the improvement in performance.


### 3. Forms

One of the oldest yet trickiest parts of web development is forms, so we’d like to see how you handle them.

Add a form to your app with the following fields. The form doesn't need to submit to anywhere, but must validate on the client.

- [ ] Name
- [ ] Email
- [ ] Date of birth
- [ ] Favourite colour
- [ ] Salary (using a range input)


## Time allowed

We appreciate that your time is valuable and recommend you not spend more than 2 hours on these tasks.


## Notes

The goal of the test is to prove your understanding of the concepts of modern HTML/CSS/JS, but not to produce something production ready or pixel perfect.
Your work will be tested in the browser of your choice, so please specify this when submitting. This can include pre-release browsers such as Chrome Canary or Safari Technology Preview if you want to work with experimental features.
