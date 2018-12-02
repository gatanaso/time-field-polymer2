module.exports = {
  verbose: false,
  plugins: {
    local: {
      browsers: ["chrome"],
      browserOptions: {
        chrome: [
          "headless",
          "disable-gpu",
          "no-sandbox"
        ],
      }
    }
  }
};
