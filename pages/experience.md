---
layout: page
title: "Experience & Education"
permalink: /experience/
className: experience-page
---

## Education

<div class="experience-item">
  <div class="experience-header">
    <div>
      <div class="organization">University of Chicago</div>
      <div class="role">B.S. Data Science, B.A. Human Rights with Honors</div>
    </div>
    <div class="date">Graduated June 7, 2025</div>
  </div>
  
  <div class="description">
    <p><strong>Thesis:</strong> "The Right to Be Forgotten in the Age of Artificial Intelligence: Meta's Implementation Challenges"</p>
    <p><strong>Faculty Advisor:</strong> Lake Polan, Pozen Center for Human Rights</p>
  </div>
</div>

### Awards and Honors

<div class="awards-section">
  <ul>
    <li><strong>B.A. Human Rights with Honors</strong> (2025) - Graduated with honors in Human Rights major</li>
    <li><strong>Excellence in Data Science Award</strong> (2024-25) - Recognized for outstanding work in the Data Science Clinic</li>
    <li><strong>Pozen Center Human Rights Leader</strong> (2024-25) - Selected for academic and research excellence</li>
  </ul>
</div>

## Current Work

<div class="experience-item" id="sri-international">
  <div class="experience-header">
    <div>
      <div class="organization">SRI International</div>
      <div class="role">Research Analyst</div>
      <div class="subtitle">Supporting the National Science Foundation's Office of the Chief of Research Security Strategy and Policy (OCRSSP)</div>
    </div>
    <div class="date">September 2025 - Present</div>
  </div>

  <div class="description">
    <ul>
      <li>Develop policy implementation frameworks for research security, translating national security and technology policy into practical guidance for federal research funding programs</li>
      <li>Work alongside federal partners to keep research security reviews aligned with evolving national security priorities</li>
      <li>Apply data science and technical analysis skills to research security policy questions, building on prior work in AI/ML and human rights research</li>
    </ul>
  </div>
</div>

## Professional Experience

{% for job in site.data.professional_experience %}
<div class="experience-item" id="{{ job.id }}">
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
<div class="experience-item" id="{{ position.id }}">
  <div class="experience-header">
    <div>
      <div class="organization">{{ position.organization }}</div>
      <div class="role">{{ position.role }}</div>
    </div>
    <div class="date">{{ position.date }}</div>
  </div>

  <div class="description">
      {{ position.description }}
  </div> 
  <br>  
  <div class="subtitle">{{ position.subtitle }}</div>
  <div>{{ position.details }}</div>
</div>
{% endfor %}

## Academic Coursework

<div class="education-details">
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

## Resume

<div class="resume-section">
  <div class="resume-card">
    <h3>Professional Resume</h3>
    <p>Download my professional resume to learn more about my experience in data science, research, and human rights work.</p>
    <a href="{{ site.baseurl }}/assets/docs/Harper_Schwab_Resume_2026.pdf" class="resume-download" download="">Download Resume</a>
  </div>
</div>