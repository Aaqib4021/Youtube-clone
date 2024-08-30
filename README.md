# YOUTUBE CLONE APP WITH VIDEO WATCHING,COMMENTS,SEARCH AND LIVE CHAT FEATURES

# Overview

- This project is a YouTube clone that replicates key functionalities of the YouTube platform, including video browsing, searching, and watching. The application uses a public API to fetch popular videos, manage searches, and display video details, including comments and replies.

# Features

- Home Page: Displays popular videos fetched from the YouTube API.
- Search Functionality: Allows users to search for videos. When a search suggestion is clicked, the user is directed to the results page.
- Results Page: Displays videos related to the search query. Users can select a video to watch.
- Watch Page: Plays the selected video and displays its comments, including replies fetched using recursion. Additional popular videos are also suggested on this page.
- Comments & Replies: Users can view comments and their nested replies on the watch page.
- Sidebar: A clickable sidebar that can be opened or closed for easy navigation across the application.
- Routing: Used to navigate between different pages of the application seamlessly.
- State Management: Managed using Redux to handle global state across the application.
- Styling: The application is styled using Tailwind CSS for a modern and responsive design.

# Technologies Used

- React: For building the user interface.
- Redux: For state management.
- React Router: For routing between different pages.
- Tailwind CSS: For styling the application.
- JavaScript: For logic and functionality, including recursion for handling nested replies.
- Youtube v3 data Api used

# Usage

- Navigate to the home page to view popular videos.
- Use the search bar to find specific videos.
- Click on a video thumbnail to watch it on the watch page.
- Interact with the sidebar to open or close it for easy access to different sections of the application.

# ScreenShots

![Homepage](../my-youtube/src/images/Screenshot%202024-08-30%20105524.png)
![Homepage with sidebar](../my-youtube/src/images/Screenshot%202024-08-30%20105558.png)
![WatchPage](../my-youtube/src/images/Screenshot%202024-08-30%20105636.png)
![Comments](../my-youtube/src/images/Screenshot%202024-08-30%20105656.png)
![Watchpage SideBar](../my-youtube/src/images/Screenshot%202024-08-30%20105711.png)
![Search Recommandations](../my-youtube/src/images/Screenshot%202024-08-30%20105737.png)
![Search Results](../my-youtube/src/images/Screenshot%202024-08-30%20105831.png)
![Searched item To watch Page](../my-youtube/src/images/Screenshot%202024-08-30%20105849.png)
