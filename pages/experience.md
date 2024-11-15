---
layout: page
title: Experience
permalink: /experience/
---

## Resume

<div class="resume-section">
  <div class="resume-card">
    <h3>Professional Resume</h3>
    <p>Download my professional resume to learn more about my experience in data science, research, and human rights work.</p>
    <a href="{{ site.baseurl }}/assets/docs/Schwab_Harper_Resume.pdf" class="resume-download" download="">Download Resume</a>
  </div>

  <div class="resume-card">
    <h3>Federal Resume</h3>
    <p>For federal positions, please download my detailed federal resume which includes comprehensive information about my technical competencies and work experience.</p>
    <a href="{{ site.baseurl }}/assets/docs/Schwab_Resume_Federal.docx" class="resume-download" download="">Download Federal Resume</a>
  </div>
</div>

<div class="education-details">
  <h3>Education Highlights</h3>
  
  {% for category in site.data.courses %}
  <div class="course-category">
    <h4>{{ category.title }}</h4>
    <ul>
      {% for course in category.courses %}
      <li>{{ course }}</li>
      {% endfor %}
    </ul>
  </div>
  {% endfor %}
</div>

## Professional Experience

{% for job in site.data.professional_experience %}
<div class="experience-item">
  <div class="experience-header">
    <div>
      <div class="organization">{{ job.organization }}</div>
      <div class="role">{{ job.role }}</div>
    </div>
    <div class="date">{{ job.date }}</div>
  </div>

  <div class="description">
    <ul>
      {% for item in job.description %}
      <li>{{ item }}</li>
      {% endfor %}
    </ul>
  </div>
</div>
{% endfor %}

## Leadership Experience

{% for position in site.data.leadership_experience %}
<div class="experience-item">
  <div class="experience-header">
    <div>
      <div class="organization">{{ position.organization }}</div>
      <div class="role">{{ position.role }}</div>
    </div>
    <div class="date">{{ position.date }}</div>
  </div>

  <div class="description">
    <ul>
      {% for item in position.description %}
      <li>{{ item }}</li>
      {% endfor %}
    </ul>
  </div>
</div>
{% endfor %}