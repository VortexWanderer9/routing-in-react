# React simple movie searching app

This project was created by Me as a practice exercise to enhance my React skills. It demonstrates key concepts such as state management, effect hooks, routing with React Router, and API integration with the OMDB API. The app features a debounced search input to improve performance by limiting the number of API calls made while typing. Users can easily navigate between the Home page, where they can search for movies, and the About page, which provides information about the project. This application serves as a foundational example for building more complex React applications in the future.
useStat is use to manage state in functional components. It allows you to add state variables to your components and update them as needed. In this project, useState is used to manage the search query, movie data, loading state, and error messages.
useEffect is used to perform side effects in functional components. It allows you to run code after the component has rendered. In this project, useEffect is used to fetch movie data from the OMDB API whenever the search query changes, with debouncing to limit the number of API calls.
React Router is used to handle routing in the application. It allows you to create multiple pages and navigate between them without reloading the page. In this project, React Router is used to create a Home page for searching movies and an About page for project information.
OMDB API is a free web service that provides movie data. In this project, the OMDB API is used to fetch movie details based on the user's search query. The API returns data in JSON format, which is then displayed in the application.

## Features

- Movie search functionality with debounced input
- Fetches movie data from the OMDB API
- Displays movie details including title, year, and poster
- Loading and error handling states
- Navigation between Home and About pages using React Router

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-movie-search.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-movie-search
   ```

   ## short quote about the project

   "A simple yet powerful movie search application built with React, showcasing the beauty of state management and API integration." 
   # Technologies Used
- React
- React Router
- OMDB API
- Tailwind CSS for styling
