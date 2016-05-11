SystemJS.config({
  transpiler: "plugin-babel",
  packages: {
    "jspm-skip-rollup-issue": {
      "main": "jspm-skip-rollup-issue.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.10"
  },
  packages: {}
});
