---
layout: home
title: Home
permalink: /
---

## About Me

{{ site.data.about.content }}

## Current Activities

<div class="activities-intro">
{{ site.data.activities.intro }}
</div>

{% for activity in site.data.activities.items %}
<div class="activity-pair">
  <div class="activity-card">
    <h3>{{ activity.title }}</h3>
    {{ activity.description }}
  </div>

  <div class="activity-card">
    <h3>{{ activity.subtitle }}</h3>
    {{ activity.details }}
  </div>
</div>
{% endfor %}

## Contact

Currently I am looking for full time positions or impactful internships, I would love to connect!

<div class="social-links">
  <a href="https://github.com/hwschwab" aria-label="GitHub">{% include icon-github.html %}</a>
  <a href="https://www.linkedin.com/in/harper-schwab/" aria-label="LinkedIn">{% include icon-linkedin.html %}</a>
  <a href="mailto:hwschwab@uchicago.edu" aria-label="Email">{% include icon-email.html %}</a>
</div>