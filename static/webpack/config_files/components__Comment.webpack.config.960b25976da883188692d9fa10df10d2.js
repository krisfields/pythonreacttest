var path = require("path");
module.exports = {
  "context": path.join.apply(path, ["/", "Users", "avalaunchit", "Projects", "personal", "pythonreacttest", "static", "components"]),
  "entry": "./Comment.jsx",
  "externals": [
    {
      "react": {
        "commonjs2": path.join.apply(path, ["/", "Users", "avalaunchit", "Projects", "personal", "pythonreacttest", "node_modules", "react"]),
        "root": "React"
      },
      "react/addons": {
        "commonjs2": path.join.apply(path, ["/", "Users", "avalaunchit", "Projects", "personal", "pythonreacttest", "node_modules", "react"]),
        "root": "React"
      }
    }
  ],
  "module": {
    "loaders": [
      {
        "exclude": /node_modules/,
        "loader": "babel-loader",
        "test": /.jsx$/
      }
    ]
  },
  "output": {
    "filename": "components__Comment-[hash].js",
    "library": "components__Comment",
    "libraryTarget": "umd",
    "path": "[bundle_dir]/react-components"
  },
  "resolveLoader": {
    "root": path.join.apply(path, ["/", "Users", "avalaunchit", "Projects", "personal", "pythonreacttest", "node_modules"])
  }
};