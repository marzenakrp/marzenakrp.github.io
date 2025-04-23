---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

<div class="post">
  <div class="header-bar">
    <h1>blog</h1>
  </div>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <h3>
          <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <p class="post-meta">
          {{ post.date | date: '%B %d, %Y' }}
        </p>
      </li>
    {% endfor %}
  </ul>

  {% if page.pagination.enabled %}
    {% include pagination.liquid %}
  {% endif %}
</div>
