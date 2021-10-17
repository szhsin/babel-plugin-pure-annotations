"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helperAnnotateAsPure = require("@babel/helper-annotate-as-pure");

var _default = ({
  types: t
}) => ({
  visitor: {
    CallExpression(path) {
      if (path.getFunctionParent()) return;
      const {
        parent
      } = path;

      if (t.isVariableDeclarator(parent) || t.isAssignmentExpression(parent) || t.isObjectProperty(parent) || t.isArrayExpression(parent) || t.isCallExpression(parent)) {
        (0, _helperAnnotateAsPure.default)(path);
      }
    }

  }
});

exports.default = _default;