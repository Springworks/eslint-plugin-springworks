/**
 * @fileoverview Convert var to let
 * @author Springworks
 * @copyright 2015 Springworks. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/fixable-no-var"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("fixable-no-var", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "var x = 1;",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
