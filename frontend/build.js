const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["frontend/entrypoints/index.js"],
  bundle: true,
  outfile: "output/_bridgetown/static/js/app.js",
  loader: { ".js": "jsx" },
  minify: true,
  sourcemap: true,
  target: ["es2017"],
}).catch(() => process.exit(1));
