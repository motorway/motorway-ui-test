# Motorway UI Test

Welcome to the Motorway UI Technical Test. This test focuses on the user experience and your skills with HTML/CSS/a11y and leveraging browser APIs.

# Set up
This repo is a slightly modified Create React App and an express server which serves a JSON feed of images.

### Set up
- Clone the repo and run `npm install`
- `npm run serve` will run the server
- in another terminal window `npm run start` will start CRA

After this, CRA will open a tab with the app running, usually `localhost:3000`. If you look in `src/App.js` you'll see the API call to the server is already made and will console log out the results.

#### Note
- The server and CRA are watching the relevant files and will hot reload if any changes are made.
- Feel free to modify or install whatever code you feel is necessary. If installing packages which are wrappers for native browsers APIs please leave a comment explaining why.


## Time allocated

We appreciate that your time is valuable and recommend you not spend more than 2 hours on these tasks.

## Tasks

- The API returns an array of objects, the main focus of it is the image and user it returns. The task is to create an interesting responsive interface using as many of the latest technologies that browsers provide that you feel are appropriate, this includes HTML, CSS, JS and React features if you're feeling adventurous.
Unfortunately, the images aren't optimised and their dimensions are varied, so this will need to be taken into account.
These do not need to be production ready and pixel perfect design isn't necessarily required, the goal of this task is to show your understanding of the underlying concepts to a good degree.

- The API returning images is rather slow, can it be sped up and can the performance increase be quantified.
- Add a form to the app with at least 5 different input types and validation. It doesn't need to post anywhere specifically, a11y and usability are key here.

## Browser compatibility

It will be tested in the browser of your choice, if you want to use something only supported in Safari or Chrome Canary, then by all means go for it.
