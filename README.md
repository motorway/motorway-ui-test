
# Motorway UI Test

  

Welcome to the Motorway UI Technical Test. This test focuses on the user experience and your skills with HTML/CSS/a11y and leveraging browser APIs.

  

## Set up

This repo is a slightly modified Create React App and an express server which serves a JSON feed of images.

  

- Clone the repo and run `npm install`

- `npm run serve` will run the server

- in another terminal window `npm run start` will start CRA

  

After this, CRA will open a tab with the app running, usually `localhost:3000`. If you look in `src/App.js` you'll see the API call to the server is already made and will console log out the results.

  

#### Note

- The server and CRA are watching the relevant files and will hot reload if any changes are made.

- Feel free to modify or install whatever code you feel is necessary. If installing packages which are wrappers for native browsers APIs please leave a comment explaining why.

  

## Tasks

The goal of this technical test is to prove your understanding of the concepts of modern HTML/CSS/JS and not to produce something production ready or pixel perfect.

  

There is three parts to this test using this repo

  

- The API returns an array of objects mainly an image url and user object returns. The task is to create an interesting responsive interface using as many of the latest technologies that browsers provide that you feel are appropriate, this includes HTML, CSS, JS and React features if you're feeling adventurous.
Unfortunately, the images aren't optimised and their dimensions are varied, so this will need to be taken into account.
Some inspiration for this task:
https://twitter.com/andybarefoot/status/1251844621262602242
http://www.artist-developer.com/

  

- The API returning images is rather slow, can it be sped up and can the performance increase be quantified.

  

- One of the oldest yet trickiest parts of web development involve forms, can you add a form to the app, it doesn't need to submit to anywhere, but must validate on the client. The form should consist of at least:

- [ ] Name
- [ ] Email
- [ ] Date of birth
- [ ] Favourite colour
- [ ] Salary (using a range input)


  

## Browser compatibility

  

It will be tested in the browser of your choice, if you want to use something only supported in Safari or Chrome Canary, then by all means go for it.

  

## Time allocated

  

We appreciate that your time is valuable and recommend you not spend more than 2 hours on these tasks.
