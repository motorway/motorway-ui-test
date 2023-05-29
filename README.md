# Nikhil test submission

## Browser

I chose to use the latest version of Chrome (v113) when building this test.

## TypeScript

I chose to use install and use TypeScript for this test, TypeScript allowed me to accurately use the images data after fetching it from the server and speed up my development.

## ESLint + Prettier

I installed ESLint and Prettier to help me write consistent code, avoid errors and improve my code quality and readability. Due to the 2 hour time constraint I added some industry standard recommended rule sets and moved on.

## UI Development

For the first section of this task, I decided to render each image in a card with some basic information utilising the data from the server. As I am rendering multiple cards it made sense to leverage flex and ensure it works responsively for mobile and tablets too. To add a different means of displaying the images, I decided to build a “Gallery view” which allows the users to open a HTML dialog modal and navigate between the images within the modal preventing the need to open/close the modal to view all the images in a larger size.

Instead of using a react portal for my modal, I chose to use a HTML dialog which has the ability to show a modal (.showModal). The HTML dialog modal is far more semantic and comes with a bunch of accessibility features for free. The only pitfall I encountered was when writing my unit tests, JSDOM lacks support for the dialog element so I had to mock the `.showModal` functionality.

## Performance

I wanted to be able to measure the performance on the app without having to look at the network tab, so using the performance API, I calculated and displayed how long the images request took.

After noticing the images request was taking around 2000 milliseconds to fetch the images, I had a look on the server and noticed there was unnecessary throttling via the use of a set timeout. Removing this meant the images were now loading in around 40-50ms!

I also noticed that the images.json file was sitting within the clients src folder. I did wonder whether the images.json file the server was fetching was being bundled with the client and if we could delete the server entirely. Unfortunately I stopped myself there and did not investigate further as I was concerned about the 2 hour time constraint.

## Form

I saw no need for this form to be made up of controlled components. A basic form which doesn’t submit anywhere with some error validation could be achieved using modern HTML. I opted to use a combination of `required`, `pattern`, `onInput` and `onInvalid` for the form validation of my inputs.

The only problem with this again was JSDOM lacked support for `onInvalid` and due to time constraints I did not have time to mock this feature so I left out that unit test.

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
