import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    bgColor: "bg-red-200",
    title: "Digital Agency Website",
    description:
      "List specific digital marketing services offered such as social media marketing, paid advertising and website development.",
    fullDescription:
      "We are a digital marketing agency that helps businesses thrive in the online world. We specialize in a variety of digital marketing services, including SEO, social media marketing, content creation, and email marketing. Our goal is to help our clients build strong online presence, attract targeted customers, and drive measurable results. We offer a range of services tailored to your specific needs, from website optimization to engaging social media campaigns.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Static",
      "Routing",
      "Agency",
    ],
    githubLink: "https://github.com",
    image: "/new-project/p1.png",
    otherImages: [
      {
        oi1: "/new-project/p1-1.png",
        oi2: "/new-project/p1-2.png",
        oi3: "/new-project/p1-3.png",
      },
    ],
  },
  {
    id: "2",
    bgColor: "bg-gray-200",
    title: "Recipe Finder",
    description:
      "A recipe finder application using the TheMealDB API in javascript.",
    fullDescription:
      "We offer recipes tailored to your available ingredients. For instance, if you currently have tomatoes and onions, simply select these two items on our website and press enter. We will then present you with a comprehensive list of recipes that can be prepared using tomatoes and onions. Additionally, we can provide recipes for desserts, lunch, breakfast, fast food, dinner, and more. Our services are designed to be user-friendly.",
    technologies: [
      "Javascript",
      "TheMealDB API",
      "Html",
      "Bootstrap",
      "local storage",
      "Recipes",
    ],
    githubLink: "https://github.com",
    image: "/new-project/Be-Recipe-2.png",
  },
  {
    id: "3",
    bgColor: "bg-green-200",
    title: "Caredac WebApp",
    description:
      "A collaborative appointment schedular with real-time updates , worked on userPanel Webapp.",
    fullDescription:
      "Our web application offers an appointment scheduling feature with real-time updates. For instance, if you need to visit a distant hospital but have limited time, you no longer need to physically go to the hospital hoping the doctors will be available. Instead, by utilizing our web application, you can schedule an appointment with the appropriate doctor. Once the doctor confirms the appointment, it will be officially scheduled. This is a unique web application focused solely on doctor interactions that I have developed.",
    technologies: [
      "React",
      "Material UI",
      "Javascript",
      "live api",
      "Protected Route",
      "doctor-patient",
      "Appointment",
    ],
    githubLink: "https://github.com",
    image: "/new-project/caredac.webp",
    otherImages: [
      {
        oi1: "/new-project/caredac-1.png",
      },
    ],
  },
  {
    id: "4",
    bgColor: "bg-blue-200",
    title: "TrailerVerse",
    description:
      "The Reviewer : user can watch and review the movie, Tvshow ans series.",
    fullDescription:
      "This web application serves as a platform for reviewing movies, series, and television shows, as well as for watching trailers. By searching for a specific movie or TV show title, users can access comprehensive details such as ratings, cast information, watch time, revenue, and more. Additionally, we present users with related and most-watched playlists, facilitating the discovery of similar films they may enjoy. This application is developed using ReactJS, and the API utilized is the Meal API, which has been tested using Postman. Essentially, whenever a new television show or movie is released, users will be promptly informed of its details.",
    technologies: [
      "React",
      "TMDB",
      "Postman",
      "tailwind",
      "Related Movies",
      "Dynamic",
    ],
    githubLink: "https://github.com",
    image: "/new-project/trailerverse.webp",
    otherImages: [
      {
        oi1: "/new-project/p3-1.png",
        oi2: "/new-project/p3-2.png",
        oi3: "/new-project/p2-3.png",
      },
    ],
  },
  {
    id: "5",
    bgColor: "bg-yellow-200",
    title: "Admin Dashboard",
    description:
      "A Dashboard to keep track of user data, orders, and products. Built with next.js and Rechart Library.",
    fullDescription:
      "This comprehensive admin dashboard, built with Next.js and TypeScript, delivers a robust solution for business analytics and management. Leveraging modern web technologies, the platform features interactive data visualization through Recharts, displaying key metrics like company revenue, profit trends, and performance indicators through dynamic line/bar charts. The interface includes sophisticated data tables built with TanStack Table, enabling efficient sorting, filtering, and pagination of business records. Security is prioritized with protected routing using Next-Auth, implementing role-based access control for admin and staff members. The application offers seamless user experience with automatic dark/light mode theming, responsive design across all devices, and optimized performance through Next.js server-side rendering. Additional features include real-time data updates via API integration, customizable dashboards with drag-and-drop widgets, form validations with Zod, and a library of reusable UI components from shadcn/ui. Designed with clean code architecture and TypeScript type safety, this dashboard serves as a powerful tool for business intelligence while maintaining excellent developer experience and scalability potential.",
    technologies: [
      "Next",
      "HeroUI",
      "Tailwind",
      "Authentication",
      "Rechart",
      "Theme Based",
      "Responsive",
      "Typescript",
    ],
    githubLink: "https://github.com",
    image: "/new-project/p3-1.png",
    otherImages: [
      {
        oi1: "/new-project/p3-1.png",
        oi2: "/new-project/p3-2.png",
      },
    ],
  },
  {
    id: "6",
    bgColor: "bg-pink-200",
    title: "E-commerce Platform",
    description:
      "A design of e-commerce platform built with React.js, Tailwind CSS with cartSection.",
    fullDescription:
      "This is a design for an e-commerce platform where users can view a variety of items such as products, vegetables, spices, clothing, and more. The website is entirely user-friendly and visually appealing. However, it does not include features such as payment processing or security measures. Users can add items to their cart, view details, and search for products by name. This platform is built using Tailwind CSS and HTML, and it is static in nature.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Cart", "Static"],
    githubLink: "https://github.com",
    image: "/new-project/p2.png",
    otherImages: [
      {
        oi1: "/new-project/p2-1.png",
        oi2: "/new-project/p2-2.png",
        oi3: "/new-project/p2-3.png",
      },
    ],
  },
];
