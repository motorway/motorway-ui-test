# Motorway UI Test

Welcome to the Motorway UI technical test. This test focuses on user experience, and your skills with HTML, CSS, a11y and leveraging browser APIs.

## Set up

This repo is a vite app and an Express server which serves a JSON feed of images.

- Clone the repo and run `npm ci`
- Then run `npm run dev:all` so both the server and vite app run concurrently.

### Note

- The vite client app uses proxy to serve images from the server. You can therefore simply fetch for `/images` and the server will return a JSON object with the image URLs.

- Feel free to modify or install whatever code you feel is necessary. If installing packages which are wrappers for native browsers APIs please leave a comment explaining why.

## Expected Deliverables

For this test, you should provide:

1. An image gallery UI with the features you've implemented
1. A form with the specified fields
1. A brief explanation of your approach and any decisions you made (can be included as comments in your code)
1. Performance and UX considerations

## Evaluation Criteria

Your submission will be evaluated based on:

- Code quality and organization
- UI/UX design and responsiveness
- Performance considerations
- Form implementation
- Accessibility considerations
- Creativity in presenting and manipulating images
- Testing and error handling

## Submission

Please submit your completed test by either:

- Sharing a GitHub repository with your code
- Creating a zip file of your project and sending it to us

## Tasks

### 1. UI development

Create a responsive UI to display the images fetched from locally served API.

The aim is to demonstrate your experience and knowledge of HTML, CSS, JS, data fetching and React features; and demonstrate creative thinking in how images can be presented and manipulated.

Images aren't optimised and their dimensions are varied, there are .jpg and .webp versions on s3, so you will need to take this into account.

#### Some ideas to get you started

- Resizable thumbnails
- Modal to review full size images
- Image effects or filters
- Lazy loading

### 2. Performance

The API that is returning images is deliberately randomly slow to mimic the varied latency of real world Internet. What can you do to mitigate the effects of this for the users? Think as broadly as possible, and consider the whole user experience. You own both the client and the server, so you can make changes to either.

### 3. Forms

One of the oldest yet trickiest parts of web development is forms, so we’d like to see how you handle them.

Add a form to your app with the following fields. The form doesn't need to submit to anywhere, but must validate on the client.

- [ ] Name
- [ ] Email
- [ ] Date of birth
- [ ] Favourite colour
- [ ] Salary (using a range input)

## Time allowed

We appreciate that your time is valuable and recommend you not spend more than 2-3 hours on these tasks.

## Notes

The goal of the test is to prove your understanding of the concepts of modern HTML/CSS/JS, but not to produce something production ready or pixel perfect.
Your work will be tested in the browser of your choice, so please specify this when submitting. This can include pre-release browsers such as Chrome Canary or Safari Technology Preview if you want to work with experimental features.
