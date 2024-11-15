---
layout: page
title: Publications & Research
permalink: /research/
---

## Publications & Research

{% for publication in site.data.publications %}
<div class="publication-card">
  <h3 class="publication-title">{{ publication.title }}</h3>
  
  <div class="publication-meta">
    {{ publication.date }} {{ publication.venue }}
  </div>
  
  <div class="publication-tags">
    {% for tag in publication.tags %}
    <span class="publication-tag">{{ tag }}</span>
    {% endfor %}
  </div>
  
  {% if publication.link %}
  <a href="{{ publication.link }}" class="publication-link" target="_blank">View Publication</a>
  {% endif %}
</div>
{% endfor %}

## Notable Course Projects

<div class="projects-grid">
  {% for project in site.data.projects %}
    <!-- Projects will be populated from _data/projects.yml -->
  {% endfor %}
</div>

## Thesis

<div class="activity-pair">
  <div class="activity-card">
    <h3>My Thesis</h3>
    {{ site.data.thesis.description }}
  </div>

  <div class="activity-card">
    <h3>Why is this Important?</h3>
    {{ site.data.thesis.importance }}
  </div>
</div>