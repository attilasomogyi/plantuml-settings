if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches
) {
  let theme = localStorage.getItem("theme");

  if (theme !== null) {
    if (theme === "dark")
      document.documentElement.setAttribute("data-theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  }
}
