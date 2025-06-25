# Practical Next.js – 10 Tasks Completed

A modern [Next.js 13+](https://nextjs.org/) project demonstrating key real-world features using the **App Router**.  
This repository includes static generation, dynamic routes, API routes, client/server data fetching, protected pages, and more.

---

## 🚀 Getting Started

Follow these steps to run the project locally:

```bash
git clone https://github.com/your-username/practical-nextjs-tasks.git
cd practical-nextjs-tasks
npm install
npm run dev
Then open http://localhost:3000 in your browser to view the app.

✅ Features Completed
1. Static Blog Page
Displays 3 blog posts.

Built using getStaticProps.

2. Dynamic Routing
Each blog post is accessible via /blog/[slug].

3. Contact Form
Validates inputs on the client side (name, email, message).

4. Client-side Data Fetching
Uses fetch() to get data from the JSONPlaceholder API.

5. Server-side Rendering (SSR)
Page fetches data on every request using getServerSideProps.

6. API Route
Custom API endpoint: /api/contact accepts POST requests.

7. Navigation Bar & Shared Layout
Built with next/link.

Layout and navigation shared across all pages.

8. Cart System
Uses React Context API to manage global cart state.

9. Real-time Search Filter
Dynamically filters items as the user types.

10. Protected Route
/dashboard simulates a protected route with fake authentication logic.

💡 How to Use
Blog:
Visit /blog to view a list of blog posts. Click on a title to view the full post via /blog/[slug].

Contact Form:
Go to /contact and submit the form. Fields are validated before sending.

Cart System:
Add or remove items. Cart updates in real-time and is shared across components.

Search Filter:
Search lists using a dynamic filter that updates results instantly.

Protected Route:
Access /dashboard to see route protection in action (mock login check).

API Testing:
Use Postman or any REST client to send a POST request to /api/contact with a JSON body like:

json
Copier le code
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello from Postman!"
}
📦 Requirements
Node.js v18 or newer

npm (comes with Node.js)

