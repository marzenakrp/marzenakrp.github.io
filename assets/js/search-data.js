// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add only the navigation items that exist in the site
ninja.data = [
  // Navigation items only
  {
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },
  {
    id: "nav-publications",
    title: "publications",
    section: "Navigation",
    handler: () => {
      window.location.href = "/publications/";
    },
  },
  {
    id: "nav-projects",
    title: "projects",
    section: "Navigation",
    handler: () => {
      window.location.href = "/projects/";
    },
  },
  {
    id: "nav-cv",
    title: "cv",
    section: "Navigation",
    handler: () => {
      window.location.href = "/cv/";
    },
  },


  // Blog posts
  
];
