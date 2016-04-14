# tipman

Unopinionated and unstyled tooltip component for React, based on [popman](https://github.com/wunderflats/popman). [View example](https://cdn.rawgit.com/wunderflats/tipman/master/examples/index.html).

## Benefits

* Unopinionated
* Unstyled
* Simple API
* Automatic positioning
* Renders tooltips on page body, so it **works inside containers with `overflow: hidden`**

## Installation

```
npm install tipman
```

## Usage

### Example

```javascript
const Tooltip = require('tipman')

<Tooltip open around={<div>Hello</div>}>
  Hello, i am the popover content
</Tooltip>
```

More examples can be found in the [examples](https://github.com/wunderflats/popman/tree/master/examples) directory.

### props

#### className (`string`)

Custom class name for your tooltip.

#### children (`node`)

The content of the popover.

#### around (`node`)

The React component against which the tooltip is positioned.

#### position (`{ y: 'top'|'bottom'|'center', x: 'left'|'right'|'center' }`)

Manually set the position of the tooltip.

#### constrainTo: 'scrollParent'

Make sure the tooltip stays within the bounds of its scroll parent. To constrain `x` and `y`, set `constrainX (bool)` and `constrainY (bool)` props.

### Styling

Since tipman uses popman under the hood, please refer to [its styling documentation](https://github.com/wunderflats/popman#styling).
