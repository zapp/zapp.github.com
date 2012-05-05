---
title:       Spectaculum
layout:      game
categories:  games
description: A four player coop action adventure with circus artists.
banner_url:  /img/banner/spectaculum.png

work_in_progress: false

gallery_path:   /img/games/spectaculum/gallery
gallery_prefix: spectaculum
picture_count:  16
---
__Spectaculum__ is a cooperative action-adventure game for four players.
Slip into the roles of four circus artists- each with their own unique
abilities to fight different kinds of enemies while protecting a caravan
and solving puzzles cooperatively.

<iframe 
    src="http://player.vimeo.com/video/37593358?title=0&amp;byline=0&amp;portrait=0&amp;color=c5c533" 
    width="520" 
    height="293" 
    webkitAllowFullScreen="true"
    mozallowfullscreen="true"
    allowFullScreen="true" />


Let destiny guide you through uncharted lands, as you'll experience a
world in which bureaucratic clerks want to take away the only thing that
matters to you… your freedom.

__Spectaculum__ is designed as a "couch game" for friends and families. Battle
tactics, puzzle solutions and even the control over your caravan require
you to communicate. So listen carefully and act thoughtfully as you're
heading down a giant canyon with 180 km/h!

<img src="/img/games/spectaculum/spectaculum-inline2.png"
     alt="Rendering by Hoa Olliges">

The game is a student project currently developed by a ten-strong team
of both Game Design and Media & Computer Science students at University
of Applied Sciences (HTW) Berlin.

Go visit [homunculusgames.com][homunculus] for more information or take a look
in the [feature PDF][specConcept] of the game now.

Watch an older proof-of-concept prototype video or
browse other pictures and artworks of the game:

<iframe 
    width="640px" 
    height="360px" 
    src="http://player.vimeo.com/video/31747997?title=0&amp;byline=0&amp;portrait=0&amp;color=c5c533" 
    allowFullScreen="true" />

## Gallery:

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

[homunculus]: http://homunculusgames.com
[specConcept]: /assets/specConcept.pdf
