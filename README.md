**Frontend repository:**
[https://github.com/liron28/Rythmix](https://github.com/liron28/Rythmix-backend)

## Overview

Rythmix is a web application based by Spotify that allows users to access music, create and share playlists, and manage their music preferences. The app leverages the YouTube Data API for music content, featuring a React frontend and a Node.js backend. Data is stored using MongoDB Atlas.

![](./public/imgs/Rythmix1.jpeg)

## Features

- Music Access: Utilize the YouTube Data API to search and play music.
- Playlists: Create, manage, and share playlists.
- Database: Store user data and playlists in MongoDB Atlas.
- User Authentication: Secure user login and registration.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/spotify-web.git
    cd spotify-web
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Technologies Used

- **Frontend**: React, Redux, Axios, Sass
- **Backend**: Node.js, Express
- **Database**: MongoDB Atlas
- **API**: YouTube Data API v3

## Libaries

- **API**: YouTube Data API v3
- **Player**: react-player
  

## Prerequisites

- Node.js (v12.x or later)
- MongoDB Atlas account
- YouTube Data API key


## Project Structure

- **client**: Contains the React frontend
  - **src**
    - **components**: React components
    - **redux**: Redux actions and reducers
    - **services**: API services
    - **styles**: CSS files
    - **App.js**: Main App component
    - **index.js**: Entry point
- **server**:  Contains the Node.js backend
  - **src**
    - **controllers**: Request handlers
    - **routes**: Express routes
    - **middlewares**: Custom middlewares
    - **app.js**: Express app setup
    - **server.js**: Server entry point



