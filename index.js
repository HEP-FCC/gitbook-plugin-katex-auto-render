module.exports = {
  website: {
    assets: "./assets",
    css: [
      "katex.min.css"
    ],
    js: [
      "katex.min.js",
      "auto-render.min.js",
      "enable-auto-render.js"
    ]
  },
  blocks: {
    math: {
      shortcuts: {
        parsers: ["markdown", "asciidoc", "restructuredtext"],
        start: "$$",
        end: "$$"
      },
      process: function(block) {
        // No need for any processing, just let KaTeX auto-detect
        // the fragment on the client
        return "$$" + block.body + "$$";
      }
    }
  }
};
