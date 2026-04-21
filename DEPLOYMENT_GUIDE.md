# DesaiArts Deployment & Management Guide

This document explains how to update your products using the separate database mechanism and how to deploy your website so that the whole world can see it. 

## 1. How to Update Products (The Separate Mechanism)

For security and simplicity, the admin panel has been entirely removed from the website. Normal users will never see it. Instead, your "database" is handled completely separately from the public website via a local data file.

Your database is located here:
`data/products.json`

**To add or update products:**
1. Open the file `data/products.json` in your code editor (like VS Code) or directly on GitHub.
2. The file contains a list of products. Each product is wrapped in `{ ... }`.
3. You can edit the `price`, `availability`, `image`, or add a completely new product block.
4. Example product block:
   ```json
   {
     "id": "makhar-new",
     "name": "New Premium Makhar",
     "description": "A beautifully handcrafted makhar.",
     "price": 12000,
     "availability": "In Stock",
     "image": "https://example.com/image.jpg",
     "tags": ["Eco-friendly", "Premium"]
   }
   ```
5. Save the file.
6. Commit and push your changes to GitHub. Vercel will automatically update your live website with the new data!

## 2. How to Deploy to Vercel

Vercel is the recommended and easiest platform to host Next.js websites for free.

### Step 1: Push your code to GitHub
If you haven't already, make sure all your recent code changes are pushed to your GitHub repository (`cyphlia/desaiarts`).

### Step 2: Sign up for Vercel
1. Go to [Vercel.com](https://vercel.com/) and create a free account.
2. Choose "Continue with GitHub" so Vercel can access your repositories.

### Step 3: Deploy your Project
1. Once logged into Vercel, click the **"Add New..."** button and select **"Project"**.
2. You will see a list of your GitHub repositories. Find **`cyphlia/desaiarts`** and click **"Import"**.
3. In the "Configure Project" screen:
   - Framework Preset should automatically be detected as **Next.js**.
   - Root Directory should be `./`.
   - You don't need to change any build commands.
4. Click **"Deploy"**.

### Step 4: You are Live!
Vercel will take a minute or two to build your website. Once finished, you will be given a live URL (e.g., `desaiarts.vercel.app`). You can visit this URL to see your live store!

**Note on Future Updates:**
Whenever you want to add a new product or change a price, you just edit `data/products.json` on your computer, and push that change to GitHub (`git add .`, `git commit -m "Update products"`, `git push origin main`). Vercel will automatically see the change and update your live website!
