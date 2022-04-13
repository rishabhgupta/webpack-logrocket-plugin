const path = require("path");
module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    rules: {
        indent: [0, "tab"],
        "no-tabs": 0,
        "import/order": 0,
        "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
        "no-param-reassign": 0,
        "import/no-named-as-default": 0,
        "import/prefer-default-export": 0,
        "max-len": [0, { code: 140 }],
        camelcase: [0, { properties: "always" }],
        "no-console": [0, { allow: ["warn"] }],
        "react/no-multi-comp": 0,
        "import/no-cycle": 0,
        "no-underscore-dangle": 0,
        "import/no-extraneous-dependencies": 0,
        "react/sort-comp": 0,
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/no-angle-bracket-type-assertion": 0,
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-explicit-any": 0
    },
    parser: "@typescript-eslint/parser",
    settings: {
        "import/resolver": {
            webpack: {
                config: path.resolve(__dirname, "config", "webpack.config.js")
            }
        },
        react: {
            pragma: "React",
            version: "detect"
        }
    },
    globals: {
        document: true,
        window: true,
        fetch: true
    },
    parserOptions: {
        ecmaFeatures: {
            legacyDecorators: true
        },
        parser: "@typescript-eslint/parser"
    },
    overrides: [
        {
            files: ["**/*{interfaces,interface}.ts"],
            parser: "@typescript-eslint/parser",
            rules: {
                "no-undef": 0
            }
        }
    ]
};
