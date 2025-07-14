---
layout: page
title: Publications & Research
permalink: /research/
className: research-page
---

## My Thesis

<div class="thesis-section">
  <div class="activity-pair">
    <div class="activity-card">
      <h3>The Right to Be Forgotten in the Age of Artificial Intelligence</h3>
      <p><strong>Meta's Implementation Challenges</strong></p>
      <p>The right to be forgotten promises individuals control over their digital legacy. Under the General Data Protection Regulation Article 17 and other legal precedents in the European Union, individuals should be able to request deletion of their personal data and companies must comply.</p>
      <p>But artificial intelligence has broken this promise. Large Language Models—ChatGPT, Claude, Meta AI—train on vast datasets where personal information becomes embedded in ways that make traditional erasure meaningless.</p>
      
      <p><strong>Faculty Advisor:</strong> Lake Polan<br>
      <strong>Submitted to:</strong> Pozen Center for Human Rights<br>
      <strong>Completed:</strong> June 2025</p>
      
      <a href="{{ site.baseurl }}/assets/docs/Schwab_Harper_Thesis.pdf" class="resume-download" download="">Download Full Thesis (PDF)</a>
    </div>

    <div class="activity-card">
      <h3>Key Findings & Implications</h3>
      <p>My research examined privacy frameworks in the US and EU, finding both failing in different ways:</p>
      
      <ul>
        <li><strong>United States:</strong> Sectoral approach provides no federal mechanism for AI data erasure</li>
        <li><strong>European Union:</strong> GDPR protections are easily circumvented through legal discretion and technical complexity</li>
      </ul>
      
      <p><strong>The Crisis:</strong> Binary privacy concepts are obsolete. Large Language Models cannot comply with traditional erasure requests because they operate through distributed knowledge representation.</p>
      
      <p><strong>Solution:</strong> Progressive realization of privacy rights—recognizing privacy as something that develops gradually rather than existing as an absolute, shifting responsibility from individuals to organizations.</p>
    </div>
  </div>
</div>

## Publications

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

## Completed Projects

<div class="research-page">
  <div class="projects-grid">
    <div class="project-card">
      <h3>Policy Implementation Paper: Moderation in Transition</h3>
      <div class="project-status"><strong>Status:</strong> Completed 2025</div>
      <div class="project-description">
        Conducted comprehensive case study analyzing Twitter/X's content moderation transformation under Elon Musk's ownership, examining how organizational restructuring and cultural shifts fundamentally altered policy implementation. Applied street-level bureaucracy theory and administrative burden frameworks to reveal how the platform's shift from centralized to community-based moderation affected user safety outcomes, documenting measurable increases in hate speech and changes in platform governance.
      </div>
      <div class="keywords-container">
        <span class="keyword">Policy Implementation</span>
        <span class="keyword">Content Moderation</span>
        <span class="keyword">Street-Level Bureaucracy</span>
        <span class="keyword">Organizational Culture</span>
        <span class="keyword">Digital Governance</span>
        <span class="keyword">Social Media Policy</span>
        <span class="keyword">Administrative Theory</span>
        <span class="keyword">Platform Regulation</span>
      </div>
    </div>
    <div class="project-card">
      <h3>Data and Democracy: Historical Voting Records Dataset</h3>
      <div class="project-status"><strong>Status:</strong> Completed 2024</div>
      <div class="project-description">
        Successfully managed a team of 4 in parsing and compiling diverse voting record data for the United States from 1920 to 2022, utilizing Large Language Models (LLMs) to publish an open source dataset and website for historical data. This project filled a 40-year gap in compiled, parsable voting data, creating a valuable resource for researchers and the public.
      </div>
      <div class="keywords-container">
        <span class="keyword">Large Language Models (LLMs)</span>
        <span class="keyword">Data Pipeline Development</span>
        <span class="keyword">Historical Data Analysis</span>
        <span class="keyword">Open Source Dataset</span>
        <span class="keyword">Team Management</span>
        <span class="keyword">Political Science</span>
      </div>
    </div>

    <div class="project-card">
      <h3>Inclusive Development International (IDI) / PalmWatch Enhancement</h3>
      <div class="project-status"><strong>Status:</strong> Completed 2024</div>
      <div class="project-description">
        Developed automated data pipeline with 12 custom web scrapers generating 1000+ validated human rights records while managing a 6-person team using LLMs for unstructured data processing. Led technical presentations and authored comprehensive documentation for both technical and non-technical stakeholders throughout the project lifecycle. Enhanced PalmWatch, a supply chain transparency tool for the palm oil industry, by integrating human rights grievance mapping with existing supply chain tracking capabilities.
      </div>
      <div class="keywords-container">
        <span class="keyword">Web Scraping</span>
        <span class="keyword">Human Rights Documentation</span>
        <span class="keyword">Supply Chain Transparency</span>
        <span class="keyword">Data Pipeline Development</span>
        <span class="keyword">Team Leadership</span>
        <span class="keyword">LLM Integration</span>
        <span class="keyword">Technical Documentation</span>
      </div>
    </div>
  </div>
</div>

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