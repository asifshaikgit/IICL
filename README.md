# IICL
IICL Software Engineer Hiring Challenge

# Backend Service 
This is a Node.js backend service for managing blogs. It provides RESTful APIs to create, read, update, and delete blogs. The service uses Express.js, Knex.js, and PostgreSQL.

    ## Features

    - Create, Read, Update, Delete (CRUD) operations for blogs
    - PostgreSQL database integration using Knex.js
    - Input validation using custom middleware
    - Error handling with custom error classes
    - RESTful API structure
    - ESM module support

    ## Installation
        1. Clone the repository
            git clone <repository_url>
            cd backend

        2. Install dependencies
            npm install

        3. Run migrations
            npm run migrate:latest
        
        4. Run seeders
            npx knex seed:run

        4. Running the Server
            npm start

    ## Running the Backend with Docker
        1. Build the Docker image
            /backend> docker build -t backend-service .

        2. Run the Docker container
            /backend> docker run -p 9000:9000 backend-service


# Frontend Service 
This is the frontend application for Blog Managementrequest_id built using request_idReactrequest_id, request_idViterequest_id, and request_idMaterial-UI (MUI)request_id. It integrates with the backend APIs to perform CRUD operations on blog posts.

    ## Installation
    1. Clone the repository
        git clone <repository_url>
        cd frontend

    2. Install dependencies
        npm install
    
    3. Run development server
        npm run dev

    4. Build for Production
        npm run build

    ## Docker Deployment
        docker build -t frontend-service .
        docker run -p 5173:5173 frontend-service

