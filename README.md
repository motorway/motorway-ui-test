
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

There are two stages to this task, if doing a live challenge for the hour, the first one should be achievable. If doing the take home test we appreciate that your time is valuable and recommend you not spend more than 2 hours on these tasks.

### 1. Realtime search
We have an api endpoint at `http://localhost:3001/images?limit=10` which returns a series of results in the format:

```
[
    {
        "id": "m3m-lnR90uM",
        "created_at": "2017-04-14T00:59:12-04:00",
        "updated_at": "2020-04-14T01:05:34-04:00",
        "color": "#E0E4EF",
        "description": "I shot this while doing a job for a luxury automotive storage facility in Baltimore, MD. I wanted to create an ominous sense of intrigue, giving the feeling of a space that was both expansive and enclosed. I enjoy the journey my eyes take from the focal point of the headlamps to the contours of the Camero’s body, and then to the backdrop of stacked automobiles.",
        "alt_description": "white car",
        "categories": [],
        "likes": 995,
        "user": {
            "id": "9aTMQdp_Djo",
            "updated_at": "2020-04-20T01:34:56-04:00",
            "username": "peterbroomfield",
            "name": "Peter Broomfield",
            "first_name": "Peter",
            "last_name": "Broomfield",
            "bio": "Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody.",
            "location": "Baltimore, MD",
            "profile_image": "https://motorway-ui-test.s3.eu-west-2.amazonaws.com/avatars/warmachine",
            "total_collections": 36,
            "total_likes": 126,
            "total_photos": 1
        },
        "url": "https://motorway-ui-test.s3.eu-west-2.amazonaws.com/car-images/m3m-lnR90uM"
    }
    ...
]
```


## Notes

The goal of the test is to prove your understanding of the concepts of modern HTML/CSS/JS, but not to produce something production ready or pixel perfect.
Your work will be tested in the browser of your choice, so please specify this when submitting. This can include pre-release browsers such as Chrome Canary or Safari Technology Preview if you want to work with experimental features.
