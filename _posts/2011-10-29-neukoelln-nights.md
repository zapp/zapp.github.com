---
title:       Neukoelln Nights
layout:      game
categories:  games
description: A tiny point and click adventure.
banner_url:  /img/banner/neukoelln_nights.png

work_in_progress: false

gallery_path:   /img/games/neukoelln-nights/gallery
gallery_prefix: neukoelln
picture_count:  3
---
content coming soon.

<img src="/img/games/neukoelln-nights/neukoelln-inline1.png"
     alt="Neukoelln">

more content.


<img src="/img/games/neukoelln-nights/neukoelln-inline2.png"
     alt="Neukoelln">

even more content

Go visit [the ludum dare project page][ludum-dare-entry] for more information or
play the game right [here][neukoelln-nights-game].


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