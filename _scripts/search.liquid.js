---
permalink: /assets/js/search-data.js
---
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
      window.location.href = "{{ '/' | relative_url }}";
    },
  },
  {
    id: "nav-publications",
    title: "publications",
    section: "Navigation",
    handler: () => {
      window.location.href = "{{ '/publications/' | relative_url }}";
    },
  },
  {
    id: "nav-projects",
    title: "projects",
    section: "Navigation",
    handler: () => {
      window.location.href = "{{ '/projects/' | relative_url }}";
    },
  },
  {
    id: "nav-cv",
    title: "cv",
    section: "Navigation",
    handler: () => {
      window.location.href = "{{ '/cv/' | relative_url }}";
    },
  },
  {
    id: "nav-blog",
    title: "blog",
    section: "Navigation",
    handler: () => {
      window.location.href = "{{ '/blog/' | relative_url }}";
    },
  },

  // Blog posts
  {% if site.posts_in_search %}
  {% for post in site.posts %}
  {
    id: "{{ post.url }}",
    title: "{{ post.title | escape }}",
    section: "Posts",
    handler: () => {
      window.location.href = "{{ post.url | relative_url }}";
    },
  },
  {% endfor %}
  {% endif %}
];
