'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const Popover = require('popman')

class Tooltip extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    around: React.PropTypes.element.isRequired
  }

  constructor () {
    super()
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.state = { open: false }
  }

  componentDidMount () {
    const domNode = ReactDOM.findDOMNode(this)
    domNode.addEventListener('mouseenter', this.onMouseEnter)
    domNode.addEventListener('mouseleave', this.onMouseLeave)
    domNode.addEventListener('touchstart', this.onMouseEnter)
    domNode.addEventListener('touchend', this.onMouseLeave)
  }

  componentWillUnmount () {
    const domNode = ReactDOM.findDOMNode(this)
    domNode.removeEventListener('mouseenter', this.onMouseEnter)
    domNode.removeEventListener('mouseleave', this.onMouseLeave)
    domNode.removeEventListener('touchstart', this.onMouseEnter)
    domNode.removeEventListener('touchend', this.onMouseLeave)
  }

  onMouseEnter () {
    this.setState({ open: true })
  }

  onMouseLeave () {
    this.setState({ open: false })
  }

  render () {
    const { children, ...props } = this.props
    const { open } = this.state

    return (
      <Popover
        open={open}
        {...props}
      >
        {children}
      </Popover>
    )
  }
}

module.exports = Tooltip
