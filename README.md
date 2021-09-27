# BloGet (with Next.js and typescript)

## Introduction

BloGet is a blog rendering application.BloGet fetches the Blogs from content management system i.e from Contentstack and renders them when the application Loads. Navigating between Blogs is made possible with Next.js daynamic routing. 

This Application stack comprises of node.js ,next.js and typescript. Here Contentstack is used as CMS.

## Set-up Project

To Setup this project locally follow below mentioned steps:

#### Installation and Run

 1. Installation : you need to have git and node.js in your local machine.
 
   - Clone the Repository
   
   ```
    git remote add origin https://github.com/kulsumansari/Blog-Rendering-with-Contentstack.git
  ```
  - navigate to the root folder and run the following commands to install node modules.
   
  ```
   npm install
  ```
  2. Create .env.local file
   
   Create .env.local file containing following variables.
   
   ```
   API_KEY = <API_KEY>
   TOKEN = <TOKEN>
   ENV = <ENVIRONMENT>
   ```
   
  3. Run the Project
  
  ```
   npm run start
  ```
  
   Open http://localhost:3000 in your browser to see the result.

# Routes in the Application

  *  ``` / ``` 
     ![](https://kulsumansari.github.io/webpage-data/bloget-image/bloget-homeroute.png)
     
     
  *  ``` /[Id] ```

     /[Id] route is renders the blog of specified blogId
     
     ![](https://kulsumansari.github.io/webpage-data/bloget-image/bloget-blogIdRoute.png)

    
 # Folders
 
 ```bash
 
 Components
   ├── BlogComponent
   |     ├── BlogComponent.tsx  
   |     └── BlogComponent.module.css 
   ├── BlogTile
   |     ├── BlogTile.tsx    
   |     └── BlogTile.module.css 
   ├── NavBar
   |     ├── BlogTile.jsx    
   |     └── BlogTile.module.css 
   └── Footer
         ├── Footer.jsx    
         └── Footer.module.css 
         
 pages
   ├── _app.tsx
   │   ├── index.tsx
   └── [Id].tsx

 utils
   ├── interface.ts
   └── apiCalls.ts

 styles
   ├── globals.css
   └── Home.module.css
```

# Resources

[Typescript in Next.js](https://nextjs.org/docs/basic-features/typescript)

[Dynamic Routes](https://nextjs.org/docs/routing/dynamic-routes)

[Environment variables](https://nextjs.org/docs/basic-features/environment-variables)

[Custom App](https://nextjs.org/docs/advanced-features/custom-app)
