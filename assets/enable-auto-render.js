function renderMathInBody() {
  var katexOpts = {
    delimiters: [
      {left: "$$", right: "$$", display: false},
      {left: "\\[", right: "\\]", display: true},
      {left: "\\(", right: "\\)", display: false}
    ]
  };
  window.renderMathInElement(document.body, katexOpts);
}

// Render math when the page is loaded and on subsequent navigations
// (navigations change the content of the DOM)
document.addEventListener("DOMContentLoaded", renderMathInBody);
require(["gitbook"], function(gitbook) {
  gitbook.events.bind("page.change", renderMathInBody);
});
