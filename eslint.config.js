import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            parser: tsParser,
            parserOptions: {
                project: "./tsconfig.json",
                ecmaVersion: 13,
            },
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
            "simple-import-sort": simpleImportSort,
            import: importPlugin,
        },
        ignores: ["build/**/*", "node_modules/*", "*.env", "*.webp", "*.md"],
        rules: {
            ...tsPlugin.configs.recommended.rules,
            "@typescript-eslint/explicit-function-return-type": "error",
            "@typescript-eslint/explicit-module-boundary-types": "error",
            "@typescript-eslint/no-floating-promises": "error",
            "@typescript-eslint/no-misused-promises": "off",
            "@typescript-eslint/no-empty-interface": "off",
            "@typescript-eslint/no-unnecessary-condition": "error",
            "@typescript-eslint/no-namespace": "error",
            "@typescript-eslint/no-unused-vars": [
                "error",
                { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
            ],
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/ban-ts-comment": "error",
            "@typescript-eslint/require-await": "error",
            "@typescript-eslint/indent": "off",
            "@typescript-eslint/array-type": "error",
            "no-return-await": "error",
            "no-negated-condition": "off",
            "no-console": "error",
            "no-multi-spaces": ["error"],
            "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
            "no-trailing-spaces": "error",
            "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
            "prefer-const": "error",
            quotes: ["error", "double"],
            semi: ["error", "always"],
            indent: ["error", 4],
            "padding-line-between-statements": "error",
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            "import/first": "error",
            "import/newline-after-import": "error",
            "import/no-duplicates": "error",
            "comma-style": ["error", "last"],
            "comma-dangle": ["error", "always-multiline"],
            "eol-last": 2,
            "max-len": [
                "error",
                {
                    code: 170,
                    comments: 120,
                    tabWidth: 4,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true,
                },
            ],
        },
    },
];
