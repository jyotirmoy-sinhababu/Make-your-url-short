# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

This was a challenge from frontend mentor. I have used ReactJs and css3.
I have used Axios to fetch data from api.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Links

Live Site URL: [Add live site URL here](https://sprightly-capybara-9a747b.netlify.app)

### Built with

- CSS custom properties
- [React](https://reactjs.org/) - JS library

### What I learned

const handleSubmit = () => {
if (inputData.length) {
axios
.get(`api url`)
.then((res) => {
const newData = { ...res.data.result, id: idGenerator() };
setApiData([...apiData, newData]);
});
} else setErr('This field is required');
};

i built this function according to need of this project.
