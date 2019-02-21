# Data Structures

## Arrays and Linked Lists are both ordered collections of elements. How are they different?

True Arrays (aka C-Like Arrays) are contiguous locations in memory, whereas linked lists are a series of nodes, each pointing to the next node in the list. This difference has a number of implications for their use. For instance, retrieval of an element from an array is very efficient, because you are pulling from a known location in memory, whereas when retrieving from a linked list, you have to traverse the list to find the element you are looking for. However, you must pre-allocate a given amount of space for arrays, whereas linked lists can grow indefinitely.

## What's the difference between a Data Structure and an Abstract Data Type?

An Abstract Data Type is describes the conceptual relationships between elements and the operations you can perform on them. A Data Structure is the concrete implementation of the ADT, describing its physical layout in memory. The Data Structure is what determines the performance of the ADT.

## What's a Stack? A Queue? How are they different?

A Stack is an ordered collection of elements, which implements the Last In, First Out (LIFO) rule. That is, when you add an element to the stack, it is placed on "top". When you remove an element from the stack, you do so from the top and work your way down, so the elements most recently added will be the first returned.

A Queue is like a stack, but it is First In, First Out (FIFO). The first elements added to the queue will be the first elements returned.

## What's a Tree? What makes a tree specifically a _binary search_ tree?

A tree is an ADT, similar to a Linked List, in that it contains nodes pointing to other nodes. The difference is that each node can point to multiple other nodes. A tree has one root node, and child nodes can have only one parent. That is, branches may descend, but never converge

```

     _A_                          A
    / | \    <-- A Tree          / \
   B  H  C                      B   C
  / \   / \      Not a Tree -->  \ /
 D   E F   G                      D
```

A **Binary Search Tree** says that each node can have at most two children, commonly called `left` and `right`, which satisfy the ordering principle. The value of the left node will be less than the value of the parent node, and the value of the right node will be greater than the value of the parent node. Equal values can go to the left or the right, as long as you are consistent throughout the tree.

## What are the four ways to traverse a binary tree?

* Breadth-First - Traverse the tree horizontally, processing a complete layer of the tree before descending to the next.
* Depth-first - Traverse the tree vertically, descending down a branch in its entirety before moving onto the next branch. This method has three sub-methods which dictate in which order you process each parent node vs its children
  - Pre-order - Process the parent node, then process left, then process right
  - In-order - Process the left node, then the parent node, then the right
  - Post-Order - Process the left node, then the right node, then the parent node.


# CSS

## What is CSS normal flow?

CSS normal flow are the default rules a browser rendering engine follows to layout DOM elements in 2 dimensions.

The normal flow of CSS is: top to bottom, left to right.

In normal flow, `block` elements (divs, h1, h2, etc.) the basic rules are:

 - width is 100% of element's parent
 - height is the sum of the content of the element

## What are the four most common css `position`s & how do they interract?

- `static`: Static position corresponds to the normal flow.

Other positions place the element according to the `left`, `top`, `right`, and `bottom` css properties.

- `relative`: Relative elements are offset in their screen position relative to where they would be rendered in the normal flow. Relative positioning does NOT effect the position of other elements in the normal flow.
- `absolute`: Absolute elements are taken out of normal flow. Their position is relative to their layout parent. The layout parent of an absolute element is the nearest non-static element. This can be an relative or absolute element. If all the parents of an absolute element are `position: static`, it is positioned relative to the document body.
- `fixed`: Fixed elements are positioned relative to the browser screen.

## What is flexbox? How do you lay out pages with it?

Flexbox is an alternative to the CSS normal flow. It arranges elements on two axis, the main, and cross axis.

The main axis can be either horizontal or vertical, and can run in reverse. To lay out a page with flexbox, break the design into horizontal and vertical sections. Then use flexbox accordingly.

## What is the Cascade?

The cascade is a set of priority rules to determine which css styles apply to which elements.

At a high level, the cascade follows this order:

`Inline styles` > `User styles` > `CSS Stylesheets` > `Built-in styles`

Within those categories, specificity of css selectors (`tagname`, `.className`, `#id-selector`) also effect priority.


## What is the CSS Box Model? What are it's core constituent parts?

Think of the box model like a item hanging in a gallery:

- `content`: the painting/photograph
- `padding`: matte surrounding the art
- `border`: the physical frame itself
- `margin`: space on the wall between items

Use box-sizing to determine how the `width` and `height` properties interact with these properties.

Suggestion: use `box-sizing: border-box` everywhere.

Under `border-box`, the width of the content area is: `width - borderWidth - paddingWidth`

By default, width of the element is `width + borderWidth + paddingWidth`

(The same is true of height.)

# Pairing & Debugging

## What is a stack trace?

A stack trace is an ordered list of call-sites that traces back through the source code.

It tells you the filename, line number, and the name of the function called.

## How can you step through a javascript program?

Place a breakpoint by clicking on a line number in the sources tab of the dev tools, or enter the keyword `debugger` in your source. The program will pause at this point and you can manually step through the code with the playback controls of the dev tools.

## What is debugging?

Debugging is a process of testing your assumptions of how a program is operating. Once a broken assumption is discovered, a change can be introduced to fix the bug.

# Game of Life

## How can you change styles of a DOM element using JS?

You can add properties to the element's `style` object. You can generally just create use the camelCase name of the CSS property.

For instance:

CSS | JS
----|----
`background-color: blue` | `element.style.backgroundColor = 'blue'`
`width: 100px` | `element.style.width = '100px'`

## How can you add/remove classes to an element using JS?

The [ClassList][mdn-classlist] property of an element is an array-like object that offers some convenience methods for adding, removing, and toggling classes on an element.

[mdn-classlist]: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

## What is event propagation or bubbling?

When an event is fired on a DOM element, any handlers registered on that element for that event are triggered. After that, any handlers registered for that event on that element's *parent* element will be triggered, and so on for the parent's parent, all the way up the DOM tree.

## What is event delegation? Why would you do it?

When you have many elements that have the same event handler, you can take advantage of event propagation by attaching the handler to an ancestor element that contains all of the elements in question. This is known as event delegation. This lowers memory usage by only creating a single handler, and removes the need to manually attach and detach handlers to elements as they are created or destroyed.
