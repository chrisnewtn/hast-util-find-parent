/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Parent} Parent
 * @typedef {import('hast').RootContent} RootContent
 */

/**
 * Predicate function for ensuring the passed element is a {@link Parent}
 * @param {Parent | RootContent} element
 *  The node to be tested.
 * @returns {element is Parent}
 *  Whether the node is a {@link Parent} or not.
 */
function isParent(element) {
  return element && "children" in element && Array.isArray(element.children);
}

/**
 * Finds the parent of the given {@link Element} in the given `tree`.
 * @param {Element} element
 *  The {@link Element} to find the parent of.
 * @param {Parent | RootContent} tree
 *  The tree to find the parent of the `element` in.
 * @returns {Parent | null}
 *  The parent of `element`.
 */
export function findParent(element, tree) {
  if (!isParent(tree)) {
    return null;
  }
  if (tree.children.includes(element)) {
    return tree;
  }
  for (const childTree of tree.children) {
    const parent = findParent(element, childTree);

    if (parent !== null) {
      return parent;
    }
  }
  return null;
}
