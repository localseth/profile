---
layout: column
title: Projects
permalink: /projects/
---

Below are a collection of projects I have built and some that are currently in development

<div class="grid">

    {% for project in site.data.projects.projects %}

        <div class="test">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <ul>
                {% for item in project.technologies %}
                    <li>{{ item }}</li>
                {% endfor %}
            </ul>
        </div>
    {% endfor %}
</div>