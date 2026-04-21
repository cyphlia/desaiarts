# DesaiArts E-Commerce & Admin Dashboard

Welcome to the DesaiArts E-Commerce project! This application is built with Next.js and Tailwind CSS. It serves as both the public storefront for selling Makhars and the minimal admin software to manage products.

## Features

- **Public Storefront**: Modern, festive, and responsive design.
- **Makhars Listing**: Filter and sort products easily.
- **Local Database**: Uses a local JSON file (`data/products.json`) as a simple database.

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

## Important Note on Production Deployment

This application uses a local JSON file (`data/products.json`) to store product data. This acts as your database.
To add new products or change pricing, simply edit this file and push your changes to GitHub. Vercel will automatically deploy your new changes to your live website. 

For full deployment instructions, please read the `DEPLOYMENT_GUIDE.md` file included in this repository.

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
