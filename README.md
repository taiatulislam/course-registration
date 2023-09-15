# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Projects Features

1. __Add course in course list:__ In every card there is a select button. After click the select button for each card, that particular course name added to the course list.

2. __Unique course list:__ We can't added a course multiple time. Whenever we try to select same course multiple time the webpage show us an error toast.

3. __Selected course credit hour:__ In this webpage the credit hour limit is 20 and every course has a credit hour. So we can select multiple course but the sum of the selected course can't be more than 20 credit hours.

4. __Remaining credit hour:__ As mention previously, total credit hours is 20. So after selected course how many credit hours is remaining also show in the website.

5. __Total price:__ After selecting courses within 20 credit hours the total price of the courses also display in the website.


# How I managed the state in this assignment project

In this project, I have used 5 useState and 1 useEffect.

1. __useState__
    - __Fetch:__ Initially website fetching data from json file and store in an array. Here I am use a useState to store that course data.

    - __Course list/Bookmarks:__ For making a course list I used a useState and the initial value is an empty array []. Because it should stores multiple course object and array can do this so I used an empty array as initial value.

    - __Total credit:__ For calculate the total credit hour of selected course I have used a useState. For this, the initial value is 0.

    - __Remaining credit:__ Total credit hour is 20, so for calculate the remaining credit I have used a useState. And the initial value is the limit value 20.

    - __Total price:__ After calculating total price of the selected course I used a useState and the price is initially 0.

2. __useEffect__
    - In this project I used useEffect only one time when initially fetching data from course.json file. In useEffect function the end argument is an empty array [], so that the function call one time and stop.