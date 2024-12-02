# hast-util-find-parent

[![Tests Badge][test-badge]][test]

A utility for finding an [Element][hast-element]'s immediate parent in its tree. Useful for when you want to remove or replace an Element in the tree.

If you want to find every ancestor of an Element, rather than just its immediate parent, [unist-util-visit-parents][unist-util-visit-parents] is likely a better fit.

## API

This package exports a single function `findParent`.

### `findParent(element, tree)`

Finds the immediate parent of the passed `element` in the passed `tree`.

###### Parameters

* `element` ([`Element`][element])
  — A hast Element.
* `tree` ([`Parent`][parent])
  — A hast Parent.

###### Returns

The immediate Parent of the passed `element.` This could be `tree` itself.

###### Example

```js
import { h } from 'hastscript';
import { findParent } from 'hast-util-find-parent';

const element = h('h1', 'Hello, world!');

const tree = h('root',
  h('article', [element])
);

console.log(
  findParent(element, tree)
);
```

Yields:

```js
{
  type: 'element',
  tagName: 'article',
  properties: {},
  children: [
    {
      type: 'element',
      tagName: 'h1',
      properties: {},
      children: [Array]
    }
  ]
}
```

[test]: https://github.com/chrisnewtn/hast-util-find-parent/actions/workflows/test.yml
[test-badge]: https://github.com/chrisnewtn/hast-util-find-parent/actions/workflows/test.yml/badge.svg

[hast-element]: https://github.com/syntax-tree/hast#element
[unist-util-visit-parents]: https://github.com/syntax-tree/unist-util-visit-parents
[parent]: https://github.com/syntax-tree/hast?tab=readme-ov-file#parent
[element]: https://github.com/syntax-tree/hast?tab=readme-ov-file#element
