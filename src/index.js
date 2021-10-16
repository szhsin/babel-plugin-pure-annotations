import annotateAsPure from "@babel/helper-annotate-as-pure";

export default ({ types: t }) => ({
  visitor: {
    CallExpression(path) {
      if (path.getFunctionParent()) return;

      const { parent } = path;
      if (
        t.isVariableDeclarator(parent) ||
        t.isAssignmentExpression(parent) ||
        t.isObjectProperty(parent) ||
        t.isArrayExpression(parent) ||
        t.isCallExpression(parent)
      ) {
        annotateAsPure(path);
      }
    },
  },
});
