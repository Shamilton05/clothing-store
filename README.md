# getting started

this step-by-step guide will help you get the repository cloned, set up the development environment, and pick up an issue from **Linear**. it assumes you already have some tools installed, like **Git**, **Docker**, and **Node.js**.

#### **step 1: set up tools and accounts**

1. **install prerequisites** (if not already installed):
   - **git**: to clone and manage repositories. download it from [git-scm.com](https://git-scm.com/).
   - **docker**: to create containers for development. download from [docker.com](https://www.docker.com/get-started).
   - **node.js** (v18 or later): to run the development environment. download it from [nodejs.org](https://nodejs.org/).
   - **linear account**: set up a **Linear** account if you don’t have one already and make sure you have access to the relevant workspace.

#### **step 2: clone the repository**

1. **get the repository URL**

   - go to the **GitHub** page for the repository: [https://github.com/Shamilton05/clothing-store/](https://github.com/Shamilton05/clothing-store/).
   - click the **"code"** button and copy the repository URL.

2. **clone the repository locally**

   - open your terminal (command prompt, git bash, etc.).
   - navigate to the folder where you want the code to reside:
     ```bash
     cd /path/to/your/projects/folder
     ```
   - clone the repository:
     ```bash
     git clone https://github.com/Shamilton05/clothing-store/
     ```

3. **enter the project directory**

   - move into the newly cloned directory:
     ```bash
     cd clothing-store
     ```

#### **step 3: set up the environment**

1. **install dependencies**

   - use **npm** to install the necessary project dependencies:
     ```bash
     npm install
     ```

2. **verify Docker setup**

   - if the project uses **Docker**, make sure you have Docker running.
   - build and run the Docker container:
     ```bash
     docker-compose up --build
     ```
   - this will create and run the container with the required environment.

#### **step 4: connect with Linear and pick an issue**

1. **log in to Linear**

   - open [Linear.app](https://linear.app/) in your browser.
   - navigate to [our project.](https://linear.app/closetcats/project/cat-closet-bf507114ad1e)

2. **find an issue to work on**

   - look for an issue assigned to you or choose an issue labeled as **"unassigned"**.

3. **assign the issue to yourself**

   - click on the issue to view more details.
   - assign the issue to yourself and move it to **"In Progress"**.

4. **create a feature branch for the issue**

   - in your terminal, create a new branch for the issue you’re working on:
   - use the **Copy Git Branch Name** option (`cmd + shift + .`) in **Linear** to get the correct branch name and save to your clipboard.

   ```bash
     git checkout -b <branch-name>
   ```

#### **step 5: implement and test changes**

1. **make the required code changes**

   - follow the details in the **Linear** issue to make the necessary modifications or additions.

2. **run the development server**

   - after making changes, run the development server to test:
     ```bash
     npm start
     ```
   - verify that everything is working correctly in your browser (usually at **[http://localhost:3000](http://localhost:3000)**).

3. **rebuild with Docker** (if needed)

   - if there are updates affecting the environment or if the project depends on **Docker**, stop the container and rebuild it:
     ```bash
     docker-compose down
     docker-compose up --build
     ```

#### **step 6: commit and push your changes**

1. **stage your changes**

   - stage all files that you have changed:
     ```bash
     git add .
     ```

2. **commit with a meaningful message**

   - include the Linear issue reference in the commit message:
     ```bash
     git commit -m "[lin-123] Implemented initial setup changes and Babylon.js scene setup"
     ```
   - this will help link your commit to the specific **Linear** issue.

3. **push your branch to GitHub**

   - push your changes to **GitHub**:
     ```bash
     git push origin <branch-name>
     ```

#### **step 7: create a pull request**

1. **open GitHub**

   - go to your forked or original repository on **GitHub**.
   - you should see an option to **"Compare & pull request"** after pushing your branch.

2. **create a pull request (PR)**

   - click on **"Compare & pull request"**.
   - add a description for your PR and include details about the **Linear** issue you worked on.
   - assign reviewers if needed.

#### **step 8: review and merge**

1. **address PR comments**

   - if there are any comments from code reviewers, address them and make further commits as needed.

2. **merge the pull request**

   - once the PR is approved, merge it into the **main** branch.

#### **step 9: close the Linear issue**

1. **mark the issue as done**
   - after merging, return to **Linear.app** and mark the issue as **"Done"** to close it.

yippee

