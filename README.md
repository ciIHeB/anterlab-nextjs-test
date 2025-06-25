# Practical Next.js Tasks

A practical Next.js 13+ application demonstrating core features like static generation, dynamic routing, API routes, client/server rendering, and React Context state management.

---

## 🚀 Getting Started

1. **Clone the Repository**

```bash
git clone https://github.com/your-repo/practical-nextjs-tasks.git
cd practical-nextjs-tasks
Install Dependencies

bash
Copier le code
npm install
Start the Development Server

bash
Copier le code
npm run dev
Open in Browser
Visit http://localhost:3000

✅ Features Implemented
Static Blog Page – Uses getStaticProps for static generation.

Dynamic Routing – /blog/[slug] for individual blog posts.

Contact Form – With client-side validation.

Client-side Data Fetching – From JSONPlaceholder API.

Server-side Rendering – With getServerSideProps or Server Components.

API Route – /api/contact accepts POST requests.

Navigation Bar – With next/link and shared layout.

Cart System – Using React Context API.

Search Filter – Real-time filtering of items.

Protected Route – /dashboard with simple auth logic.

🧪 How to Use
Visit /blog to see all blog posts.

Click on a title to view /blog/[slug].

Use /contact to submit a form with validation.

Test route protection by visiting /dashboard.

Use the search bar to filter items live.

Add/remove items to/from the cart and watch the updates.

Send POST requests to /api/contact using Postman or similar tools.

⚙️ Requirements
Node.js 18+

Modern browser

⚠️ Note: Cart state resets on page reload.
