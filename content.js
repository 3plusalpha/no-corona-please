chrome.storage.sync.onChanged.addListener(function ({ on }) {
  if (on.newValue) {
    hideCorona();
  } else {
    revealCorona();
  }
});

const blackList = ["corona", "covid", "pandemie", "virus", "maske"].reduce(
  (prev, term) => [...prev, term, term.charAt(0).toUpperCase() + term.slice(1)],
  []
);

function createQuery() {
  const query = blackList
    .map((term) => `span:contains(${term}), p:contains(${term})`)
    .join(", ");
  return jQuery(query).parents(
    "article, li, .swiper-slide, .bg-shade-darkest, .x-teaser-standard"
  );
}

const CoronaQuery = createQuery();

function revealCorona() {
  CoronaQuery.css("opacity", 1);
}

function hideCorona() {
  CoronaQuery.css("opacity", 0);
}

function initial() {
  chrome.storage.sync.get("on", function ({ on }) {
    if (on) {
      hideCorona();
    } else {
      revealCorona();
    }
  });
}

initial();
