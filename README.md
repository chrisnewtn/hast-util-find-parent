# hast-util-find-parent

[![Tests Badge][test-badge]][test]

A utility for finding an [Element][hast-element]'s immediate parent in its tree. Useful for when you want to remove or replace an Element in the tree.

If you want to find every ancestor of an Element, rather than just its immediate parent, [unist-util-visit-parents][unist-util-visit-parents] is likely a better fit.

[test]: https://github.com/chrisnewtn/hast-util-find-parent/actions/workflows/test.yml
[test-badge]: https://github.com/chrisnewtn/hast-util-find-parent/actions/workflows/test.yml/badge.svg

[hast-element]: https://github.com/syntax-tree/hast#element
[unist-util-visit-parents]: https://github.com/syntax-tree/unist-util-visit-parents
