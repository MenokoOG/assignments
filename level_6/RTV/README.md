# RTV VSchool Project
## L. "Menoko OG" Jefferson II

March 2024

# Project Specs

### 1. User Authentication:
    - Create a login/signup page, which is required to access any part of the application.
### 2. Issue List:
    - Develop a web page displaying a list of political issues.
    - Each issue should include a title and description.
    - Users can upvote or downvote each issue.
    - Users are limited to one upvote and one downvote per issue.
    - Sort issues based on the number of upvotes, with the most upvoted issues at the top.
    - Display the total number of votes for each issue.
### 3. User Interaction:
    - Include a page for logged-in users to add new posts.
    - Implement a page where logged-in users can view all the posts they've created.
    - Allow users to comment on posts with an unlimited number of comments per post.
### 4. Backend Configuration:
    - Create backend models and routes for persisting topics, comments, and votes.
    - Utilize React for the front-end.
    - Employ Node/Express for the back-end.
    - Use MongoDB and Mongoose for your database and models.
    - Manage user authentication with dotenv, jsonwebtoken, and expressJwt.
### 5. API Operations:
    - Implement GET, POST, PUT, and DELETE functionalities for issues and comments.

### 6. Manage one-to-many and many-to-many database relationships:
    - One-to-many relationships connect users to issues and comments to issues.
    - Many-to-many relationships are crucial for the upvote/downvote process. This allows issues to be upvoted or downvoted by multiple users, and users to upvote or downvote multiple issues. Ensure that each issue can be upvoted or downvoted only once per user