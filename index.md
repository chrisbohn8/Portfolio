---
layout: page
---

<div id="projectsWrapper">
{% assign postsCategory = site.posts | group_by_exp:"post", "post.categories"  %}
{% for category in postsCategory %}
<h4 class="post-teaser__category">
<strong>
 Projects
</strong>
</h4>

{% for post in category.items %}
<ul class="list-posts">
<div class="project container">
<div class="projectInfo">
<a href="{{ post.url | prepend: site.baseurl }}">
<span class="post-title">{{ post.title }}</span>
</a>
<div class="post-technologies">
{% assign postTechnologies = post.technologies | split: ", " %}
{% for each in postTechnologies %}
<i id="tech" class="icon-{{ each }}"></i>
{% endfor %}
</div>
<span class="post-description">{{ post.description }}</span>
</div>
<div class="projectImage">
<a class="image post-image" target="_blank" href="{{ post.urlpath }}"><img src="{{ post.image | absolute_url }}" alt="" /></a>
<div class="projectLinks">
{% if post.urlpath %}
<a class="projectButton" target="_blank" href="{{ post.urlpath }}">
Visit
</a>
{% endif %}
{% if post.github %}
<a class="projectButton" target="_blank" href="{{ post.github }}">
GitHub
</a>
{% endif %}
</div>
</div>
</div>
</ul>
{% endfor %}
{% endfor %}
