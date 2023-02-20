---
layout: column
title: Projects
permalink: /projects/
---

Here are some of the projects I have built and some that are currently in development

<div class="grid">

{% for project in site.data.projects.projects %}

<div class="project card column">
<div class="container">
<h2>{{ project.title }}</h2>
<img src="/{{ project.thumb }}">
<p>{{ project.description }}</p>
<ul>
{% for item in project.technologies %}
<li>{{ item }}</li>
{% endfor %}
</ul>
</div>
<div class="buttons">
{%- if project.url -%}
    <a href="{project.url}" class="border"><span>View Demo</span></a>
{%- else -%}
    <a href="javascript:void(0)" class="border unavailable"><span>Demo Unavailable</span></a>
{%- endif -%}

{%- if project.sourceUrl -%}
    <a href="{project.sourceUrl}" class="border"><span>View Source Code</span></a>
{%- else -%}
    <a href="javascript:void(0)" class="border unavailable"><span>Source Code Unavailable</span></a>
{%- endif -%}
</div>
</div>

{% endfor %}
</div>