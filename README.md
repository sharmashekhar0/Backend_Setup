# Setting Up backend Project

### Step 1: Create package.json file

**Command**

```
npm init
```

### Step 2: Setup git configuration

**Command**

```
git init
git add filename
git commit -m "commit message"
git branch -M main
git remote add origin repo_url
git push -u origin main
```

### Step 3: Create public/temp folder in root directory

Note: Create empty file .gitkeep to push folders to remote repo

### Step 4: Create .gitignore file in root directory

Use .gitignore generator [Link](https://mrkandreev.name/snippets/gitignore-generator/#Node)

### Step 5: Create .env and .env.sample file in root dir

### Step 6: Create src folder

### Step 7: Create these file in src folder

-   app.js
-   constants.js
-   index.js

### Step 8: Add type module in package.json file

`"type": "module"`

### Step 9: Install nodemon to avoid restarting server again and again

```
npm i -D nodemon
```

Note: -D is use to install packages as dev dependencies

### Step 10: Add a script in package.json file

```"dev": "nodemon src/index.js"```

### Step 11: create these folders in src

-   controllers
-   db
-   middlewares
-   routes
-   utils
-   models

### Step 12: Install prettier and create these two files

```
node -i -D prettier
```

-   .prettierrc
-   .prettierignore
