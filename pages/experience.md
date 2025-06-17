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

<div class="experience-item">
  <div class="experience-header">
    <div>
      <div class="organization">The World Bank</div>
      <div class="role">Data Science and Human Rights Research Specialist</div>
      <div class="subtitle">Data and Analytics Global Solutions Group, Social Development Global Department</div>
    </div>
    <div class="date">June 2025 - Present</div>
  </div>

  <div class="description">
    <ul>
      <li>Leading research to define and scope the human rights economy through interdisciplinary legal and economic analysis</li>
      <li>Applying advanced AI/ML methodologies to analyze female government participation patterns using regional barometer data (Latinobarómetro, Arab Barometer)</li>
      <li>Contributing to the World Bank's mission of fostering inclusive growth for 2.3+ billion people globally facing social exclusion</li>
      <li>Developing evidence-based interventions to combat gender discrimination in political participation</li>
    </ul>
  </div>
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
    <a href="{{ site.baseurl }}/assets/docs/Schwab_Harper_Resume.pdf" class="resume-download" download="">Download Resume</a>
  </div>
</div>