---
title:       Neukoelln Nights
layout:      game
categories:  games
description: A tiny point and click adventure.
banner_url:  /img/banner/neukoelln_nights.png

work_in_progress: false

gallery_path:   /img/games/neukoelln-nights/gallery
gallery_prefix: neukoelln
picture_count:  2
---
genre: __point and click adventure__  
platform: __web__  
engine: __onw__ (coffee script, canvas)  
language: __english__  
  
  
<img class="float left"
       src="/img/games/neukoelln-nights/neukoelln-inline1.png"
       alt="Neukoelln1"
       title="mhh...couchy">
  

__Neukoelln Nights__ is an adventure game I created with [Robert Böhnke][robb], 
[David Junge][david] and Merlin Bernard making our debut at "ludum dare" #22 this
december. According to the rules of the jam, it took us aproximatly 48h (plus 24h
of sleep) and is based on the competitions theme _alone_. It isn't nearly as complete
as we wanted it to be, but i guess that happens.

<img src="/img/games/neukoelln-nights/neukoelln-inline2.png"
     alt="Neukoelln2"
     title="walking">

Go visit [the ludum dare project page][ludum-dare-entry] for more information or
play the game right [here][neukoelln-nights-game]. You can also take a look at this 
little [post mortem][pm] i wrote.



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

[ludum-dare-entry]: http://www.ludumdare.com/compo/ludum-dare-22/?action=preview&uid=7864
[neukoelln-nights-game]: http://robb.is/ludum-dare/
[robb]: http://robb.is/
[david]: http://djunge.tumblr.com/
[pm]: http://google.de/