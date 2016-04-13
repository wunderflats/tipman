'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const Tooltip = require('../dist')

class Button extends React.Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  }

  render () {
    return (
      <button>{this.props.children}</button>
    )
  }
}

class Tooltipped extends React.Component {
  static propTypes = {
    preferPosition: React.PropTypes.object.isRequired
  }

  render () {
    return (
      <Tooltip
        {...this.props}
        around={<Button>hover me</Button>}
      >
        <span>hello mr. tooltip</span>
      </Tooltip>
    )
  }
}

class Example extends React.Component {
  render () {
    return (
      <div>
        <h1>tipman</h1>
        <h2>top left</h2>
        <Tooltipped preferPosition={{ y: 'top', x: 'left' }} />
        <h2>top right</h2>
        <Tooltipped preferPosition={{ y: 'top', x: 'right' }} />
        <h2>top center</h2>
        <Tooltipped preferPosition={{ y: 'top', x: 'center' }} />

        <h2>bottom left</h2>
        <Tooltipped preferPosition={{ y: 'bottom', x: 'left' }} />
        <h2>bottom right</h2>
        <Tooltipped preferPosition={{ y: 'bottom', x: 'right' }} />
        <h2>bottom center</h2>
        <Tooltipped preferPosition={{ y: 'bottom', x: 'center' }} />

        <h2>center left</h2>
        <Tooltipped preferPosition={{ y: 'center', x: 'left' }} />
        <h2>center right</h2>
        <Tooltipped preferPosition={{ y: 'center', x: 'right' }} />
        <h2>center center</h2>
        <Tooltipped preferPosition={{ y: 'center', x: 'center' }} />
      </div>
    )
  }
}

ReactDOM.render(<Example />, document.querySelector('#root'))
