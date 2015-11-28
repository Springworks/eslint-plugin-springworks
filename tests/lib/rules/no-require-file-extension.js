"use strict";

var rule = require("../../../lib/rules/no-require-file-extension");
var RuleTester = require("eslint").RuleTester;


var ruleTester = new RuleTester();
ruleTester.run("no-require-file-extension", rule, {

  valid: [
    { code: "const foo = require('./foo');", ecmaFeatures: { blockBindings: true } },
    { code: "import foo from './foo';", ecmaFeatures: { modules: true } },
    { code: "import * as foo from './foo';", ecmaFeatures: { modules: true } },
    { code: "import { foo } from './foo';", ecmaFeatures: { modules: true } },
    { code: "import { foo as bar } from './foo';", ecmaFeatures: { modules: true } },
  ],

  invalid: [
    {
      code: "const foo = require('./foo.js');",
      output: "const foo = require('./foo');",
      ecmaFeatures: { blockBindings: true },
      errors: [{
        message: "Do not include .js in relative paths",
        type: "Literal"
      }]
    },
    {
      code: "import foo from './foo.js';",
      output: "import foo from './foo';",
      ecmaFeatures: { modules: true },
      errors: [{
        message: "Do not include .js in relative paths",
        type: "Literal"
      }]
    },
    {
      code: "import * as foo from './foo.js';",
      output: "import * as foo from './foo';",
      ecmaFeatures: { modules: true },
      errors: [{
        message: "Do not include .js in relative paths",
        type: "Literal"
      }]
    },
    {
      code: "import { foo } from './foo.js';",
      output: "import { foo } from './foo';",
      ecmaFeatures: { modules: true },
      errors: [{
        message: "Do not include .js in relative paths",
        type: "Literal"
      }]
    },
    {
      code: "import { foo as bar } from './foo.js';",
      output: "import { foo as bar } from './foo';",
      ecmaFeatures: { modules: true },
      errors: [{
        message: "Do not include .js in relative paths",
        type: "Literal"
      }]
    },
  ],
});
