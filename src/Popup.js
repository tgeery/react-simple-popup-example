import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalStyle = {
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,.2)",
  color: "#FFF",
  fontSize: "40px",
};

class Modal extends Component {
  render() {
	return createPortal(
	  <div style={modalStyle} onClick={this.props.onClick}>{this.props.children}</div>,
	  document.getElementById('root')
	);
  }
}

export default class Popup extends Component {
  render() {
	return (
	  <Modal  onClick={() => {this.props.history.push('/');}}>
	    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>Back</div>
	  </Modal>
	);
  }
}
