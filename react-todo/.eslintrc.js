module.exports = {
    plugins: [
        "testing-library"
    ],
    extends: [
        "plugin:testing-library/react"
    ],
    env: {
        browser: true,
        es2021: true
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module"
    },
    rules: {}
};