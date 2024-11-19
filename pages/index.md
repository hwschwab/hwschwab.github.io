---
layout: home
title: Home
permalink: /
className: home-page
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

Currently I am looking for full time positions or impactful internships, I would love to connect! Click the contact buttons in the footer.

