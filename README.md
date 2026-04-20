# DesaiArts E-Commerce & Admin Dashboard

Welcome to the DesaiArts E-Commerce project! This application is built with Next.js and Tailwind CSS. It serves as both the public storefront for selling Makhars and the minimal admin software to manage products.

## Features

- **Public Storefront**: Modern, festive, and responsive design.
- **Makhars Listing**: Filter and sort products easily.
- **Admin Dashboard**: Accessible at `/admin`. Allows adding, editing, and managing product inventory.
- **Local Data Storage**: Uses a local JSON file (`data/products.json`) as a simple database for local development.

## Running Locally

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Open your terminal and navigate to the project directory:
   ```bash
   cd desaiarts-ecommerce
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.
6. Open [http://localhost:3000/admin](http://localhost:3000/admin) to manage your products.

## Important Note on Production Deployment (Vercel)

This application uses a local JSON file (`data/products.json`) to store product data. This is perfectly fine for running the software locally on your computer. 

However, when you deploy to a serverless environment like **Vercel**, the file system is read-only. Changes made via the Admin Dashboard in production will *not* persist. To make this work in production, you will need to replace the API logic in `src/app/api/products/route.ts` to connect to a real database (like Supabase, Firebase, or MongoDB). 

For the purposes of this zip-file deliverable, the local JSON approach keeps everything 100% free and self-contained without requiring external account setups.

## Pushing to GitHub

To store your code on GitHub:

1. Create a new empty repository on [GitHub](https://github.com/new).
2. Open your terminal in the project directory.
3. Initialize git and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of DesaiArts"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   git push -u origin main
   ```

## Deploying to Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform.

1. Go to [Vercel](https://vercel.com/) and sign up or log in.
2. Click "Add New..." and select "Project".
3. Import the GitHub repository you just created.
4. Click "Deploy". Vercel will automatically build and deploy your project.
