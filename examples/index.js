"use strict";

const React = require("react");
const ReactDOM = require("react-dom");
const PropTypes = require("prop-types");
const Tooltip = require("../dist");

class Button extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    return <button>{this.props.children}</button>;
  }
}

class Tooltipped extends React.Component {
  static propTypes = {
    position: PropTypes.object
  };

  render() {
    return (
      <Tooltip {...this.props} around={<Button>hover me</Button>}>
        <span>hello mr. tooltip</span>
      </Tooltip>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <h1>tipman</h1>
        <h2>top left</h2>
        <Tooltipped position={{ y: "top", x: "left" }} />
        <h2>top right</h2>
        <Tooltipped position={{ y: "top", x: "right" }} />
        <h2>top center</h2>
        <Tooltipped position={{ y: "top", x: "center" }} />

        <h2>bottom left</h2>
        <Tooltipped position={{ y: "bottom", x: "left" }} />
        <h2>bottom right</h2>
        <Tooltipped position={{ y: "bottom", x: "right" }} />
        <h2>bottom center</h2>
        <Tooltipped position={{ y: "bottom", x: "center" }} />

        <h2>center left</h2>
        <Tooltipped position={{ y: "center", x: "left" }} />
        <h2>center right</h2>
        <Tooltipped position={{ y: "center", x: "right" }} />
        <h2>center center</h2>
        <Tooltipped position={{ y: "center", x: "center" }} />

        <h2>constrainTo 'scrollParent'</h2>
        <h3>scroll x:</h3>
        <div style={{ overflow: "scroll", border: "1px solid black" }}>
          <div className="scroll-x">
            <span style={{ marginRight: 200 }}>
              <Tooltipped constrainTo="scrollParent" constrainX />
            </span>
          </div>
        </div>
        <h3>scroll x:</h3>
        <div style={{ overflow: "scroll", border: "1px solid black" }}>
          <div className="scroll-x">
            <span style={{ marginLeft: 400 }}>
              <Tooltipped constrainTo="scrollParent" constrainX />
            </span>
          </div>
        </div>
        <h3>scroll y:</h3>
        <div
          style={{
            overflow: "scroll",
            border: "1px solid black",
            height: "6em"
          }}
        >
          <div className="scroll-y">
            <div style={{ marginBottom: 200 }}>
              <Tooltipped constrainTo="scrollParent" constrainY />
            </div>
          </div>
        </div>
        <h3>scroll y:</h3>
        <div
          style={{
            overflow: "scroll",
            border: "1px solid black",
            height: "6em"
          }}
        >
          <div className="scroll-y">
            <div style={{ marginTop: 400 }}>
              <Tooltipped constrainTo="scrollParent" constrainY />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.querySelector("#root"));
