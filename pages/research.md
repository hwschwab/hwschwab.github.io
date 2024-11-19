---
layout: page
title: Publications & Research
permalink: /research/
className: research-page
---
{% for publication in site.data.publications %}
<div class="publication-card">
  <div class="chicago-citation">
    {% assign authors_array = publication.authors %}
    {% assign author_count = authors_array | size %}
    
    {% for author in authors_array %}
      {% if forloop.last and author_count > 1 %}and {% endif %}
      {{ author }}{% unless forloop.last and author_count == 2 %}{% if forloop.last %}.{% else %}, {% endif %}{% endunless %}
    {% endfor %}
    
    "{{ publication.title }}." 
    <em>{{ publication.venue }}</em> 
    ({{ publication.date }}){% if publication.link %}, 
    {{ publication.link }}{% endif %}.
  </div>

  <div class="publication-tags">
    {% for tag in publication.tags %}
    <span class="tag">{{ tag }}</span>
    {% endfor %}
  </div>
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
