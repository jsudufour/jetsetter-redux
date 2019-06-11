import React from "react";
import { connect } from "react-redux";
import { undoItemAction, redoItemAction } from "../actions/items-actions";
import { bindActionCreators } from "redux";

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      undo: undoItemAction,
      redo: redoItemAction
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(({ undo, redo }) => (
  <div
    style={{
      margin: "1em 0"
    }}
  >
    <button onClick={undo}>Undo</button>
    <button onClick={redo}>Redo</button>
  </div>
));
