module.exports = {
  rulesDirectory: ['tslint-microsoft-contrib', 'tslint-plugin-prettier'],

  extends: [
    'tslint-consistent-codestyle',
    'tslint-eslint-rules',
    'tslint-config-prettier',
  ],

  rules: {
    // https://github.com/palantir/tslint
    'adjacent-overload-signatures': true,
    'ban-comma-operator': true,
    'no-empty-interface': true,
    'no-internal-module': true,
    'no-namespace': true,
    'no-non-null-assertion': true,
    'no-reference': true,
    'no-unnecessary-type-assertion': true,
    'prefer-for-of': true,
    'await-promise': true,
    curly: true,
    'no-arg': true,
    'no-conditional-assignment': true,
    'no-construct': true,
    'no-duplicate-super': true,
    'no-duplicate-switch-case': true,
    'no-dynamic-delete': true,
    'no-empty': true,
    'no-eval': true,
    'no-floating-promises': true,
    'no-for-in-array': true,
    // 'no-implicit-dependencies': [true, 'dev', 'optional'],
    'no-invalid-template-strings': true,
    'no-invalid-this': false,
    'no-misused-new': true,
    'no-return-await': true,
    'no-shadowed-variable': true,
    'no-string-literal': true,
    'no-string-throw': true,
    'no-switch-case-fall-through': true,
    'no-this-assignment': true,
    'no-unnecessary-class': true,
    'no-unsafe-finally': true,
    'no-unused-expression': true,
    'no-unused-variable': true,
    'no-var-keyword': true,
    'prefer-object-spread': true,
    radix: true,
    'restrict-plus-operands': true,
    'strict-type-predicates': true,
    'switch-default': true,
    'triple-equals': true,
    'use-default-type-parameter': true,
    'use-isnan': true,
    deprecation: true,
    'no-duplicate-imports': true,
    // 'no-require-imports': true,
    'prefer-const': true,
    'prefer-readonly': true,
    'array-type': [true, 'array'],
    'callable-types': true,
    encoding: true,
    'interface-over-type-literal': true,
    'no-angle-bracket-type-assertion': true,
    'no-boolean-literal-compare': false,
    'no-reference-import': true,
    'no-unnecessary-initializer': true,
    'no-unnecessary-qualifier': true,
    'object-literal-shorthand': true,
    'prefer-method-signature': true,
    'prefer-template': [true, 'allow-single-concat'],
    'prefer-while': true,
    'switch-final-break': true,
    'type-literal-delimiter': true,

    // https://github.com/buzinas/tslint-eslint-rules
    'no-constant-condition': true,
    'no-control-regex': true,
    'no-empty-character-class': true,
    'no-ex-assign': true,
    'no-extra-boolean-cast': true,
    'no-extra-semi': true,
    'no-inner-declarations': true,
    'no-invalid-regexp': true,
    'no-regex-spaces': true,
    'no-unexpected-multiline': true,
    'ter-no-proto': true,
    'ter-no-script-url': true,
    'ter-no-self-compare': true,
    'no-duplicate-case': true,
    'no-irregular-whitespace': true,
    'no-sparse-arrays': true,
    'valid-typeof': true,

    // https://github.com/ajafff/tslint-consistent-codestyle
    // 'early-exit': true,
    'no-accessor-recursion': true,
    'no-collapsible-if': true,
    'no-else-after-return': true,
    'no-return-undefined': true,
    'no-static-this': true,
    'no-unnecessary-else': true,
    // 'no-unnecessary-type-annotation': [true, 'check-return-type'],
    // 'no-unused': [
    //   true,
    //   'unused-function-expression-name',
    //   'unused-class-expression-name',
    //   'unused-catch-binding',
    // ],
    // 'no-var-before-return': true,
    'prefer-const-enum': true,

    // https://github.com/Microsoft/tslint-microsoft-contrib
    'no-banned-terms': true,
    // 'no-delete-expression': true,
    // 'no-document-domain': true,
    // 'no-document-write': true,
    // 'no-for-in': true,
    // 'no-function-constructor-with-string-args': true,
    // 'no-http-string': true,
    // 'no-inner-html': true,
    // 'no-jquery-raw-elements': true,
    // 'no-octal-literal': true,
    // 'no-single-line-block-comment': true,
    // 'no-string-based-set-immediate': true,
    // 'no-string-based-set-interval': true,
    // 'no-string-based-set-timeout': true,
    // 'no-typeof-undefined': true,
    // 'no-unnecessary-bind': true,
    // 'no-unnecessary-override': true,
    // 'no-useless-files': true,
    'no-with-statement': true,
    // 'react-anchor-blank-noopener': true,
    // 'react-iframe-missing-sandbox': true,
    // 'react-no-dangerous-html': true,
    // 'react-this-binding-issue': true,
    // 'react-unused-props-and-state': true,
    // 'underscore-consistent-invocation': true,
    // 'use-named-parameter': true,

    // custom rules
    ban: [
      true,
      { name: 'fdescribe', message: 'no-focused-test' },
      { name: 'fit', message: 'no-focused-test' },
      { name: ['describe', 'only'], message: 'no-focused-test' },
      { name: ['it', 'only'], message: 'no-focused-test' },
      { name: ['test', 'only'], message: 'no-focused-test' },
    ],

    // https://github.com/ikatyang/tslint-plugin-prettier
    prettier: [
      true,
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
