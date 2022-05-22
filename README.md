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

#### Suggested solution:

1. I used CSS modules and Classnames utility to join the class names to ensure styles are always applied to a correct element.
2. Implemented a modal to review a full size image of a picture.
3. Implemented two types of layout: grid view and gallery view, the preferable view can be chosen on top of the application.
4. Responsive UI with min screen width of 320px.

### 2. Performance

The API that is returning images is rather slow. Show how it can be sped up, and show how you would measure the improvement in performance.

#### Suggested solution:

The loading performace is slowed down by the setTimeout that returns a response from the server after a random interval calculated by the randomInterval function.
Once the timeout is removed, performance is sped up.
Improvement in performance can be measured by checking the time in ms from the moment a request is sent to the servert to the moment a response was returned from the server.

#### Further plans:

1. Add lazy loading
2. Add preloader showing loading progress
3. Add unit and integrations tests

### 3. Forms

One of the oldest yet trickiest parts of web development is forms, so we’d like to see how you handle them.

Add a form to your app with the following fields. The form doesn't need to submit to anywhere, but must validate on the client.

- [ ] Name
- [ ] Email
- [ ] Date of birth
- [ ] Favourite colour
- [ ] Salary (using a range input)

#### Suggested solution:

1. Form is added to the App.
2. Live client-side validation is added to the name, email and date of birth fields via validator util.
3. Submit button is disabled unless all the validated fields are filled correctly.
4. Added custom error text for validated fields.

#### Further plans:

1. Add errors handling for server failure /API responses.
2. Add more detailed custom validation.
3. Style inputs.
4. Move inputs to a separate component.

## Time allowed

We appreciate that your time is valuable and recommend you not spend more than 2 hours on these tasks.

## Notes

The goal of the test is to prove your understanding of the concepts of modern HTML/CSS/JS, but not to produce something production ready or pixel perfect.
Your work will be tested in the browser of your choice, so please specify this when submitting. This can include pre-release browsers such as Chrome Canary or Safari Technology Preview if you want to work with experimental features.
