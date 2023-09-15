# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Projects Features

1. Add course in course list: In every card there is a select button. After click the select button for each card, that particular course name added to the course list.

2. Unique course list: We can't added a course multiple time. Whenever we try to select same course multiple time the webpage show us an error toast.

3. Selected course credit hour: In this webpage the credit hour limit is 20 and every course has a credit hour. So we can select multiple course but the sum of the selected course can't be more than 20 credit hours.

4. Remaining credit hour: As mention previously, total credit hours is 20. So after selected course how many credit hours is remaining also show in the website.

5. Total price: After selecting courses within 20 credit hours the total price of the courses also display in the website.