const path = require("path")

module.exports = {
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        react: path.join(process.cwd(), "node_modules/react"),
        nodemailer: path.join(process.cwd(), "node_modules/nodemailer"),
        "react-dom": path.join(process.cwd(), "node_modules/react-dom"),
        "react/jsx-dev-runtime": path.join(
          process.cwd(),
          "node_modules/react/jsx-dev-runtime"
        ),
      },
    }

    return config
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    externalDir: true,
  },
}
