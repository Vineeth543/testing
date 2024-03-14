module.exports = {
    env: {
        browser: true,
        es2022: true,
        node: true,
    },
    root: true,
    ignorePatterns: [],
    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                project: ['tsconfig.json', 'e2e/tsconfig.json'],
                createDefaultProgram: true,
            },
            plugins: ['rxjs', 'simple-import-sort'],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@angular-eslint/recommended',
                'plugin:@angular-eslint/template/process-inline-templates',
                'plugin:prettier/recommended',
            ],
            rules: {
                '@angular-eslint/directive-selector': [
                    'error',
                    {
                        type: 'attribute',
                        prefix: 'app',
                        style: 'camelCase',
                    },
                ],
                '@angular-eslint/component-selector': [
                    'error',
                    {
                        type: 'element',
                        prefix: 'app',
                        style: 'kebab-case',
                    },
                ],
                // TODO in 6.0 Consider replacing "on" prefix from events with "ux"
                '@angular-eslint/no-output-on-prefix': 'off',
                '@angular-eslint/no-input-rename': 'off',
                'no-duplicate-imports': 'error',
                'simple-import-sort/imports': 'error',
                'simple-import-sort/exports': 'error',
                '@typescript-eslint/no-unused-vars': 'error',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/ban-ts-comment': 'off',
                '@typescript-eslint/no-use-before-define': [
                    'error',
                    {
                        functions: false,
                    },
                ],
                'rxjs/no-compat': 'error',
                'rxjs/no-create': 'error',
                'rxjs/no-internal': 'error',
                'rxjs/no-subject-unsubscribe': 'error',
                'rxjs/no-async-subscribe': 'error',
                'rxjs/no-ignored-observable': 'error',
                'rxjs/no-nested-subscribe': 'error',
                'rxjs/no-unbound-methods': 'error',
                'rxjs/no-ignored-subscription': 'error',
                'no-useless-escape': 'off',
            },
        },
        {
            files: ['*.html'],
            extends: ['plugin:@angular-eslint/template/recommended'],
            rules: {
                'max-len': [
                    'error',
                    {
                        code: 140,
                    },
                ],
            },
        },
        {
            files: ['*.html'],
            excludedFiles: ['*inline-template-*.component.html'],
            extends: ['plugin:prettier/recommended'],
            rules: {
                'prettier/prettier': [
                    'error',
                    {
                        parser: 'angular',
                    },
                ],
            },
        },
        {
            files: ['*.spec.ts'],
            rules: {
                'rxjs/no-ignored-subscription': 'off',
                '@typescript-eslint/no-empty-function': 'off',
            },
        },
    ],
};
