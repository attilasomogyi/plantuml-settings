$(".wy-nav-content").on("swipeleft", function (event) {
  const prev_url = document.querySelector("a[rel=prev]").href;
  if (prev_url) {
    document.url = prev_url;
  }
});

$(".wy-nav-content").on("swiperight", function (event) {
  const next_url = document.querySelector("a[rel=next]").href;
  if (next_url) {
    document.url = next_url;
  }
});
