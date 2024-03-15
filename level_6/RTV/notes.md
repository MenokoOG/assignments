
!<https://coursework.vschool.io/content/images/size/w2000/2020/01/political.jpeg>

# **Project Overview:**

You are tasked with building a full stack application that facilitates user authentication and allows users to post and vote on political issues. This assignment is one of the most challenging at V School. We recommend collaborating with fellow students or friends working on the project.

# **Key Requirements:**

1. **User Authentication:**
    - Create a login/signup page, which is required to access any part of the application.
2. **Issue List:**
    - Develop a web page displaying a list of political issues.
    - Each issue should include a title and description.
    - Users can upvote or downvote each issue.
    - Users are limited to one upvote and one downvote per issue.
    - Sort issues based on the number of upvotes, with the most upvoted issues at the top.
    - Display the total number of votes for each issue.
3. **User Interaction:**
    - Include a page for logged-in users to add new posts.
    - Implement a page where logged-in users can view all the posts they've created.
    - Allow users to comment on posts with an unlimited number of comments per post.
4. **Backend Configuration:**
    - Create backend models and routes for persisting topics, comments, and votes.
    - Utilize React for the front-end.
    - Employ Node/Express for the back-end.
    - Use MongoDB and Mongoose for your database and models.
    - Manage user authentication with dotenv, jsonwebtoken, and expressJwt.
5. **API Operations:**
    - Implement GET, POST, PUT, and DELETE functionalities for issues and comments.
6. **Project Phases:**
    - Divide your project into three phases following Level 6 videos and their associated Git repository.
    - First, set up user authentication based on the provided Git repository.
    - After completing Part 3 of the video series, you should have user authentication and basic routing in place to develop the rest of the application.

# **Suggestions:**

1. **Model Structure:**
    - Consider creating the following models:
        - User.js
        - Issue.js (linked to the user who created it)
        - Comment.js (linked to the issue it was commented on and the user who created the comment).
2. **Database Relationships:**
    - Manage one-to-many and many-to-many database relationships:
        - One-to-many relationships connect users to issues and comments to issues.
        - Many-to-many relationships are crucial for the upvote/downvote process. This allows issues to be upvoted or downvoted by multiple users, and users to upvote or downvote multiple issues. Ensure that each issue can be upvoted or downvoted only once per user.

This project involves building a fully functional front-end and back-end application, complete with a persistent database and user authentication. It will challenge you to create a responsive, user-driven application and provide valuable experience for your future full stack application projects.

# Tips for Comments and Upvotes/Downvotes

[Gameplan for Comments](https://www.notion.so/Gameplan-for-Comments-236f6245603b44a4acb8109fd90978aa?pvs=21)

[Handling Upvotes/Downvotes](https://www.notion.so/Handling-Upvotes-Downvotes-8995fd7d1d334e35bf84d57056f3ee75?pvs=21)

# Up Next

[Level 6 Assessment with Instructor](https://www.notion.so/Level-6-Assessment-with-Instructor-de704e050d2e4785b7a9beb8a89e9bdf?pvs=21)
