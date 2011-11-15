---
title:       Mr Sugar Cube
layout:      game
categories:  games
description: A sweet camera-controlled raincatcher game
banner_url:  /img/banner/mrsugarcube.png

gallery_path:   /img/games/mr-sugar-cube/gallery
gallery_prefix: mrsugarcube
picture_count:  4
---

Mr. Sugar Cube is based around the idea of making a game with camera vision.

Since it was one of our first IT projects, it didn't get past the early
prototype state, but told us some valuable lessons.

<img class="float left"
       src="/img/games/mr-sugar-cube/mr-sugar-cube-himself.png"
       alt="Mr. Sugar Cube himself"
     title="Artwork by David Junge">

The project was a cooperative work of my friend David Junge and Me and was made
with [Processing][processing].

It is a little rain catcher game and it is upt to you to protect Mr. Sugar Cube
from getting dissolved with a finger controlled umbrella.

You can download the prototype here and  the latest processing version at
[processing.org][processing] along with [the video library][opencv] that is
needed.

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

[processing]: http://processing.org/download/
[opencv]:     http://ubaa.net/shared/processing/opencv/
