module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true, // Enable Jest globals
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:testing-library/react', // Include Testing Library rules
    ],
    parser: '@babel/eslint-parser', // Use Babel as the parser
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'testing-library'], // Add 'testing-library' plugin
    rules: {
        'testing-library/no-render-in-setup': 'off', // Disable the specific rule if needed
    },
    settings: {
        react: {
            version: 'detect', // Automatically detect the React version
        },
    },
};