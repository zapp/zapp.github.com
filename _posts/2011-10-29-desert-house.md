---
title:       Desert House
layout:      game
categories:  games
description: 3D arch. assets for an early version of Spectaculum.
banner_url:  /img/banner/desert_house.png

gallery_path:   /img/games/desert-house/gallery
gallery_prefix: deserthouse
picture_count:  6
---

In the course of designing Spectaculum – A Gipsy Adventure i came up with
environmental 3D Assets for the game. They include 2 experimental stone houses
and other adornments like plants, all low poly.

<img src="/img/games/desert-house/desert-house-big.png"
     alt="Desert House">

They were created with 3Ds Max 2012 basically achieved through box modeling
using the standard and graphite modelig tools provided, cloth simulation and
other modifiers like noise and path deformation.

For the unwrap I used the peeling mode and the slate material editor for
applying the maps and textures.

<!-- gallery snippet -->
{% if page.gallery_path %}
<div class="gallery">
  <ul>
    {% for i in (1...page.picture_count) %}
    <li>
      <a {% if i == 1 %}class="active"{% endif %}
         href="{{ page.gallery_path }}/{{ page.gallery_prefix }}-original-{{ i }}.png"
         data-preview-url="{{ page.gallery_path }}/{{ page.gallery_prefix }}-preview-{{ i }}.png">
        <img src="{{ page.gallery_path }}/{{ page.gallery_prefix }}-thumb-{{ i }}.png" />
      </a>
    </li>
    {% endfor %}
  </ul>

  <div class="display-wrapper">
    <img src="{{ page.gallery_path }}/{{ page.gallery_prefix }}-preview-1.png" />
    <a href="{{ page.gallery_path }}/{{ page.gallery_prefix }}-original-1.png">Download Original</a>
  </div>
</div>
{% endif %}
<!-- gallery snippet -->
