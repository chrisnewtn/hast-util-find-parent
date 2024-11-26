import { h } from 'hastscript';
import { it, describe } from 'node:test';
import { equal, deepEqual } from 'node:assert/strict';
import { findParent } from './index.js';

describe('findParent', () => {
  it('returns null when passed a falsey tree', () => {
    const element = h('marquee');

    equal(findParent(element), null);
  });

  it('returns null when passed a tree with no children', () => {
    const element = h('marquee');
    const tree = h('div', []);

    equal(findParent(element, tree), null);
  });

  it('returns null when the element is not present in the tree', () => {
    const element = h('marquee');

    const tree = h('root', [
      h('div.not-the-element'),
      h('div.not-the-element-either')
    ]);

    equal(findParent(element, tree), null);
  });

  it('returns the parent when the element is an immediate child of the root', () => {
    const element = h('marquee');

    const tree = h('root', [
      h('div'),
      element,
      h('div')
    ]);

    deepEqual(findParent(element, tree), tree);
  });

  it('returns the parent when the element is many branches away from the root', () => {
    const leafEl = h('leaf');

    const branchEl = h('branch', [leafEl]);

    const tree = h('root', [
      h('div'),
      h('div', [
        branchEl
      ]),
      h('div')
    ]);

    deepEqual(findParent(leafEl, tree), branchEl);
  });
});
