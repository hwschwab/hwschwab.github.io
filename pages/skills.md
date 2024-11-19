---
layout: skills
title: Skills
permalink: /skills/
className: skills-page
---

## Skills Network

<div id="skills-container" class="skills-visualization-container"></div>

## Technical Competencies

<div class="skills-list">
{% for skill in site.data.skills %}
  <span class="skill-tag">{{ skill.name }} {% if skill.level %}({{ skill.level }}){% endif %}</span>
{% endfor %}
</div>