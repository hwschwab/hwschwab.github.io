---
layout: home
title: Home
permalink: /
className: home-page
---

<div class="profile-section">
  <img src="{{ site.baseurl }}/assets/images/Profile_picture.jpg" alt="Harper Schwab" class="profile-picture">
  <div class="profile-content">
    <h2>About Me</h2>
    {{ site.data.about.content }}
  </div>
</div>

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