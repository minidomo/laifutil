module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    env: {
        'es2022': true,
        'node': true,
    },
    rules: {
        'no-misleading-character-class': 'off',
    },
};
