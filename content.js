jQuery(document).ready(() => {
  jQuery(
    "span:contains(Corona), p:contains(Corona), span:contains(Virus), p:contains(Virus), span:contains(Covid), p:contains(Covid)"
  )
    .parents("article, li, .swiper-slide")
    .css("opacity", 0);
});
