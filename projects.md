---
layout: column
title: Projects
permalink: /projects/
---

Here are some of the projects I have built and some that are currently in development

<div class="grid">

{% for project in site.data.projects.projects %}

<div class="project border">
<div class="container">
<h3>{{ project.title }}</h3>
<img src="{{ site.baseurl }}/{{ project.thumb }}">
<p>{{ project.description }}</p>
<ul>
{% for item in project.technologies %}
<li>{{ item }}</li>
{% endfor %}
</ul>
</div>
<div class="buttons">
<a href="{project.url}" class="border"><span>View Demo</span></a>
<a href="{project.sourceUrl}" class="border"><span>View Source</span></a>
</div>
</div>

{% endfor %}
</div>