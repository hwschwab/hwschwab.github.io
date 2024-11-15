---
layout: page
title: Blog
permalink: /blog/
---

<div class="blog-grid">
  {% for post in site.posts %}
  <div class="blog-content">
    <div class="blog-meta">
      {{ post.date | date: "%B %d, %Y" }}
    </div>
    
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    
    {{ post.excerpt }}
    
    <a href="{{ post.url | relative_url }}" class="read-more">Read More</a>
  </div>
  {% endfor %}
</div>