## Standup

<aside>
💡 Don’t forget to complete your [**standup form here**](https://airtable.com/appg2CeX4DA9Y7hDi/shrUyD9aoryvXZgfu)

</aside>

For this assignment, you’re going to create a portfolio that you can use to market your skills and showcase your projects. Please read this guide before getting started.

### 3 Easy Steps:

### 1. [DEVELOP](https://www.notion.so/Creating-Your-Portfolio-fc1b8feb068f4c74a71d899815eb36bf?pvs=21) Your Portfolio Frame

### 2. [DEPLOY](https://www.notion.so/Creating-Your-Portfolio-fc1b8feb068f4c74a71d899815eb36bf?pvs=21) Your Projects

### 3. [REVIEW](https://www.notion.so/Creating-Your-Portfolio-fc1b8feb068f4c74a71d899815eb36bf?pvs=21) With Your SSM (Level 6)

---

# **1. DEVELOP**

Your portfolio will be a dedicated website that highlights and demonstrates your strengths and abilities as a web developer.

For this assignment, you can use any web development technologies you'd like. And, not to worry, you won't have to code your portfolio from scratch! In fact, that's not a good use of your valuable time. You can even use the portfolio app you worked on in Level 3 if you’d like to.

**Start *very* basic**. Resist the temptation to add a lot of bells and whistles right up front. Just because you *can* doesn't mean you *should!* **CLEAR over cute or clever** will always win the day so keep it simple. Hiring managers simply need to be able to glean basic information about you and see your skills in action quickly and easily. **Make the path to hiring you as simple and clean as possible**.

Creating a **minimal**, **well-designed website** that contains your **primary** important information ****is more than sufficient in order to pass this assignment (and get hired).

---

## Pick a Template

You do NOT need to design a portfolio from scratch (remember, you’re a developer, not a designer) so don’t stress at all about coming up with some unique design.

Instead, we recommend using a template as your **starting point** and tweaking it to your liking so you can quickly, simply, and efficiently create a compelling, professional portfolio. Keep it **simple and clean**, and let your projects speak for themselves.

RECOMMENDED PLATFORM: [HTML5 UP](https://html5up.net/)

[HTML5 UP](https://html5up.net/)

---

## Projects to Include

**Less is more.** It’s better to have 2-3 solid, complete projects that are well-built than have 5-6 that don’t showcase your skills or are incomplete. This can include a combination of the following:

1. **Capstone projects** – Include your capstone projects from Levels 4, 5 and 6.
2. **Personal project(s)** – Any project(s) you’ve been working on outside of the course.
3. **Any relevant client work** – If you did any dev work for a business, make sure to add it. 
4. **You can add an ongoing project**. The project does not have to be fully complete with all the features you have planned for it. Once you have the MVP done, you can add it to your portfolio. Add a description of future improvements or features you want to add

You might not have projects to add just yet, and that’s okay! Right now, you’re simply creating the framework with your basic information now. By the time you’re done with this course, all you’ll have to do is plug and link your projects and you’ll be ready!

*Please note… avoid using past assignments as portfolio pieces. The only time where this might be okay is if you used an assignment as a starting point and then extended it with enough features. If you’re unsure, double-check with an instructor.*

---

## Sections to Include

1. **Header**
    - Your name
    - A tagline (what you offer (web development) and how you’ll make your future manager’s life better)
    - A CONTACT NOW button
2. **Projects**
    - **Image** – Clean screenshots work great!
    - **Project Title**
    - **Description** – 2-3 sentences
        - *Developed an app that allows users to x, y, and z.*
        - *Collaborated with a team of 3 people to develop an app that allows users to x, y, and z. Engineered the x, y, and z.*
    - **Technologies** – include any technologies used for each project (text or icons)
    - **Live Links**
        - VIEW LIVE (deployed project)
        - VIEW CODE (GitHub repo)
    - **Login Credentials**
        - If your site includes authentication/login, simply include test credentials after the project description (Username, Password) so people can take your site for a test run!
3. **About**
    - 2-3 sentences (you can use an excerpt from your LinkedIn About Summary!)
4. **Contact**
    - Allow users to submit a form that goes directly to your email (don’t include personal info as it can be scrapped and SPAMMED)
        - You can use a service like **[EmailJS](https://www.emailjs.com/)** or Mailchimp
    - Include external links to your LinkedIn and GitHub profiles

---

# **2. DEPLOY**

While there are many possible ways to deploy your projects, we recommend either using **Github Pages** or **Surge.** These will only work for frontend-only apps.

[Github Pages: HTML, CSS & JS Site](https://www.notion.so/Creating-Your-Portfolio-fc1b8feb068f4c74a71d899815eb36bf?pvs=21)

[Github Pages: React App](https://www.notion.so/Creating-Your-Portfolio-fc1b8feb068f4c74a71d899815eb36bf?pvs=21) 

[Surge](https://www.notion.so/Creating-Your-Portfolio-fc1b8feb068f4c74a71d899815eb36bf?pvs=21)

## 1a. Deploy through Github Pages

https://youtu.be/KaZnY1F8FIw

## 1b. Deploy React App through Github Pages

1. If you haven’t already, initialize a git repo within your app: 
    
    ```jsx
    git init
    git add .
    git commit -m "first-commit"
    ```
    
2. Create a repo on Github with this name: [YOUR-GITHUB-USERNAME.github.io](http://YOUR-GITHUB-USERNAME.github.io)
    
    ```jsx
    git branch -M main
    git remote add origin git@github.com:<USERNAME>/<USERNAME>.github.io.git
    git push -u origin main
    ```
    
3. In your React app run the following command: `npm install gh-pages` 
4. Then in the `package.json` file, add the following `predeploy` and `deploy` properties to the “scripts” object: 
    1. **IMPORTANT:** Depending on what you used to create your app, make sure you specify the correct build folder name for the `deploy` property: 
        1. **Vite: "deploy": "gh-pages -d dist"**
        2. **Create React App: "deploy": "gh-pages -d build"**
    
    ```jsx
    {
    ...
    "scripts": {
      ...
        **"predeploy": "npm run build", 
        "deploy": "gh-pages -d dist"** // "dist" for Vite, "build" for CRA
    	...
      },
    ...
    }
    ```
    
5. Now run `npm run deploy`
6. Go to the repository on Github. **If prompted, do not make a pull request**.
7. Navigate to **Settings > Pages** and change the following settings under the **Build and deployment** section: 
    1. Set `Source` to `Deploy from a branch`
    2. Select `gh-pages` as the branch
    
    ![Untitled (1).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b314a00-613c-4e37-8233-3f84312976a1/Untitled_(1).png)
    
8. It may take a few minutes, but you should be able to see your published portfolio at [YOUR-GITHUB-USERNAME.github.io](http://YOUR-GITHUB-USERNAME.github.io)

## 2. Deploy through Surge

***Note:*** At 1:58, the command `surge dist` targets the build folder, titled “dist”. If you made your react app using create-react-app, the folder is called “build”, so run `surge build` instead.

https://youtu.be/th_V25uB-fY

---

# **3. REVIEW**

You’ll review your portfolio with your SSM in Level 6. For now, continue with the rest of the curriculum. The great news is you now have your portfolio almost ready, and you can plug your projects in once they’re done!