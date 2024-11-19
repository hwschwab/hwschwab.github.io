---
layout: page
title: Publications & Research
permalink: /research/
className: research-page
---

{% for publication in site.data.publications %}
<div class="publication-card">
  <h3 class="publication-title">{{ publication.title }}</h3>
  
  <div class="publication-authors">
    {{ publication.authors | join: ", " }}
  </div>
  
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

<div class="research-page">
  <div class="projects-grid">
    {% if site.data.projects %}
      {% for project in site.data.projects %}
        <div class="project-card">
          <h3>{{ project.title }}</h3>
          <div class="project-description">
            {{ project.description }}
          </div>
          {% if project.keywords %}
            <div class="keywords-container">
              {% for keyword in project.keywords %}
                <span class="keyword">{{ keyword }}</span>
              {% endfor %}
            </div>
          {% endif %}
        </div>
      {% endfor %}
    {% else %}
      <p>No projects found.</p>
    {% endif %}
  </div>
</div>


## Thesis

<div class="activity-pair">
  {% if site.data.thesis %}
    <div class="activity-card">
      <h3>My Thesis</h3>
      {{ site.data.thesis.description }}
    </div>

    <div class="activity-card">
      <h3>Why is this Important?</h3>
      {{ site.data.thesis.importance }}
    </div>
  {% else %}
    <p>Thesis information not found.</p>
  {% endif %}
</div>
