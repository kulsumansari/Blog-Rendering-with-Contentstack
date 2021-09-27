# BloGet

## Introduction

BloGet fetches the Blogs from server and renders them when the application Loads. Navigating between Blogs is made possible with react routing. 

## Set-up Project

To Setup this project locally follow below mentioned steps:

#### Installation and Run

 1. Installation
 
   - Clone the Repository
   
   ```
    git remote add origin https://github.com/kulsumansari/Blog-Rendering-with-Contentstack.git
  ```
  - navigate to the root folder and run the following commands to install node modules.
   
  ```
  npm install
  ```
   
  2. Run the Project
  
  ```
  npm run start
  ```
   The Next.js Application is now Up and Running
   Open http://localhost:3000 with your browser to see the result.

# Routes in the Application

  *  ``` / ``` 
     ![](https://kulsumansari.github.io/webpage-data/bloget-image/Homepage.png)
     
     
  *  ``` /blogId ```

     /blogId route is renders the blog of specified blogId
     ![](https://kulsumansari.github.io/webpage-data/bloget-image/Blog-blogId.png)

    
 # Folder Structure
 
 ```bash

├── Components
│   ├── BlogComponent
│   |     ├── BlogComponent.tsx  
│   |     └── BlogComponent.module.css 
│   ├── BlogTile
│   |     ├── BlogTile.tsx    
│   |     └── BlogTile.module.css 
│   ├── NavBar
│   |     ├── BlogTile.jsx    
│   |     └── BlogTile.module.css 
│   └── Footer
│         ├── Footer.jsx    
│         └── Footer.module.css 
|
├── pages
│   ├── _app.tsx
│   ├── index.tsx
|   └── [Id].tsx
|
├── utils
│   ├── interface.ts
│   └── apiCalls.ts

  
```

# Resources

[React Component & Props](https://reactjs.org/docs/components-and-props.html)

[React Routing](https://reactrouter.com/web/guides/quick-start)

[React Hooks](https://reactjs.org/docs/hooks-overview.html)

[React Router API](https://reactrouter.com/web/api/)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
