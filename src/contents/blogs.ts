import { Blog } from "../types";

export const blogs: Blog[] = [
  {
    title: "Getting Started with React 18",
    excerpt: "Learn about React.js and its features and improvements.",
    date: "2024-02-05",
    readTime: "27 min read",
    slug: "getting-started-with-reactjs-18", // Fixed version number
    tasks:
      "React fundamentals, JSX syntax, component lifecycle, React 18 features (concurrent rendering, automatic batching)",
  },
  {
    title: "Mastering JavaScript for React",
    excerpt:
      "A comprehensive guide to using JavaScript with React applications.",
    date: "2024-03-10",
    readTime: "8 min read",
    slug: "mastering-javascript-for-react",
    tasks:
      "ES6+ features (destructuring, spread operator), array methods (map/filter/reduce), promises/async-await, DOM manipulation",
  },
  {
    title: "Building Responsive Layouts with Tailwind CSS and Bootstrap",
    excerpt:
      "Tips and tricks for creating responsive designs using Tailwind CSS and Bootstrap.",
    date: "2024-03-05",
    readTime: "16 min read",
    slug: "building-responsive-layouts-with-tailwind-and-bootstrap",
    tasks:
      "Mobile-first design, flexbox/grid systems, breakpoint customization, utility-first CSS, responsive typography",
  },
  {
    title: "Understanding React Hooks",
    excerpt: "A deep dive into React Hooks and how to use them effectively.",
    date: "2024-03-01",
    readTime: "7 min read",
    slug: "understanding-react-hooks",
    tasks:
      "useState/useEffect, custom hooks, useReducer, useContext, optimization techniques (useMemo/useCallback)",
  },
  {
    title: "Deploying Applications on Vercel",
    excerpt: "Step-by-step guide to deploying Frontend applications on Vercel.",
    date: "2024-02-25",
    readTime: "6 min read",
    slug: "deploying-applications-on-vercel",
    tasks:
      "Vercel project setup,  environment variables, performance optimization",
  },
  {
    title: "Work with RESTful API with React and Next js",
    excerpt: "Learn how to use RESTful API in modern JavaScript Frameworks.",
    date: "2024-01-16",
    readTime: "10 min read",
    slug: "Using-APIs-in-frontend-apps",
    tasks: "Data fetching, pagination, caching, error handling",
  },
];
