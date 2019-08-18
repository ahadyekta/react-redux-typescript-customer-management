module.exports =  {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    env: {
        es6: true,
        node: true,
        browser:true,
    },
    "plugins": ["jest"],
    extends: [ 
      'plugin:jest/recommended',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
      'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
      'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions:  {
      ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
      sourceType:  'module',  // Allows for the use of imports
      ecmaFeatures: {
        "jsx": true
      }
    },
    rules:{ 
        "@typescript-eslint/no-unused-vars": "off",
        '@typescript-eslint/interface-name-prefix': 'off',
        "semi": ["error", "never"],
        '@typescript-eslint/consistent-type-assertions': 'off'
    }
  };