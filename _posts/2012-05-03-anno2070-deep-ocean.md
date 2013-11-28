---
title:       Anno 2070 Addon
layout:      game
categories:  games
description: The mother of all economic strategy games hits the future.
banner_url:  /img/banner/anno.png

work_in_progress: false

gallery_path:   /img/games/anno2070/gallery
gallery_prefix: annoAddon
picture_count:  5
---
role: __intern system game design__  
responsibilities: __character mission dialogues, character mission design, conquest mode maps__  
genre: __real time strategy__   
platform: __PC__  
realization: __own engine__  
language: __various__  
developer: __related designs__  
publisher: __ubisoft__  
 
 
 
<img class="float left"
       src="/img/games/anno2070/deep-ocean-logo-ger.png"
       alt="Anno Artwork showing the game world"
     title="Anno Artwork">

__Anno 2070: Deep Ocean__ is the addon for the award winning strategy game __Anno 2070__ and is currently under
development by [Related Designs][relatedHomepage] and will be published by [Ubisoft][ubiHomepage] in fall 2012. 
I'm glad I got the chance to join their design team as an intern in march this year, integrating new features 
and content into the game since then.

<a href="/img/games/anno2070/annoArtwork-original-1.png">
  <img src="/img/games/anno2070/annoArtwork-preview-1.png" alt="Anno Artwork">
</a>


As the title suggests __Anno 2070__ is set in the near future and features the struggle between 
three globally acting factions fighting for their vision of human future. Players embark different kinds
of ships and submarines to claim the remaining land, the rising ocean has not yet devoured. Speading on
these islands, players build up gigantic and vital cities powered by complex ware chains and trading routes.

They discover old and new energy sources and possibilities to increase the eco balance of their settlements manually.
And when it's neccessary they fight with newly developed vehicles and use powerfull Items against the henchmen of
other factions. Or they peacefully try to convince them by the use of diplomatic actions.

__Deep Ocean__ pushes the underwater aspect of the game forward by providing underwater trading routes, new scenarios, 
powerfull vehicles and a new population level for the Tech faction.

Get an impression of the game watching the trailer and the gallery below. You can buy the game on [amazon][amazonAnno]
or purchase it via [steam][steamAnno].


<iframe 
    src="http://player.vimeo.com/video/41607191?title=0&amp;byline=0&amp;portrait=0&amp;color=c5c533" 
    width="520" 
    height="293" 
    webkitAllowFullScreen="true"
    mozallowfullscreen="true"
    allowFullScreen="true">
</iframe>


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
    <a href="{{ page.gallery_path }}/{{ page.gallery_prefix }}-original-1.png">Download Original Size</a>
  </div>
</div>
{% endif %}
<!-- gallery snippet -->

[relatedHomepage]: http://www.related-designs.com
[ubiHomepage]: http://www.ubi.com
[steamAnno]: http://store.steampowered.com/app/48240/
[amazonAnno]: http://www.amazon.com/Anno-2070/dp/0700026657/ref=sr_1_3?ie=UTF8&qid=1336231745&sr=8-3
