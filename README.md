# practical-nextjs-tasks

## Getting Started

1. Clone or download the project.  
2. Run `npm install` to install dependencies.  
3. Start the development server:  
   `npm run dev`  
4. Open `http://localhost:3000` in your browser.

---

## Features Completed

- Static blog page with 3 posts using `getStaticProps`.  
- Dynamic route for each blog post using `[slug]`.  
- Contact form with client-side validation.  
- Client-side data fetching from JSONPlaceholder API.  
- Server-side rendering with `getServerSideProps`.  
- API route `/api/contact` to handle POST submissions.  
- Navigation bar with shared layout across pages.  
- Cart system using React Context for global state management.  
- Real-time search filter as user types.  
- Protected route `/dashboard` simulating authentication.

---

## How to Use

- Blog: `/blog` to view all posts, `/blog/[slug]` to view a single post.  
- Contact form: `/contact` with client-side validation.  
- Cart system: add/remove items on relevant pages, shared state.  
- Search filter: filter visible items as you type.  
- Dashboard: `/dashboard` simulates a protected route.  
- API: test `/api/contact` with a POST request using Postman:
  ```json
  {
    "name": "John",
    "email": "john@example.com",
    "message": "Hello from Postman!"
  }
