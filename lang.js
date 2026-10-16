(function () {
  var q = new URLSearchParams(location.search).get("lang");
  var lang = q === "en" || q === "ja" ? q : (navigator.language || "ja").slice(0, 2) === "ja" ? "ja" : "en";
  document.documentElement.lang = lang;
  document.querySelectorAll(".content").forEach(function (el) { el.classList.toggle("on", el.id === lang); });
  document.querySelectorAll(".lang a").forEach(function (a) { a.classList.toggle("on", a.dataset.lang === lang); });
})();
