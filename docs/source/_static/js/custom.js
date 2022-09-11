const touchEvents = () => {
  const content = document.querySelector(".wy-nav-content");
  content.addEventListener("swiped-left", function (e) {
    const prev_url = document.querySelector("a[rel=prev]").href;
    if (prev_url) {
      window.location.href = prev_url;
    }
  });

  content.addEventListener("swiped-right", function (e) {
    const next_url = document.querySelector("a[rel=next]").href;
    if (next_url) {
      window.location.href = next_url;
    }
  });
};
touchEvents;
