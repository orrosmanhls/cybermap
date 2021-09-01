import React, { Component } from "react";
import "../style/foldable.css";

export default function Foldable(props) {
  return (
    <div className="category-foldable">
      <button
        className="btn foldable-text turquoise-background turquoise-hover turquoise-focus"
        onClick={props.onFold}
      >
        <span className="bold valign-middle">{props.category}&nbsp;</span>
        <span className="black-text weight-200 valign-middle">
          {" "}
          {props.subcategory}
        </span>
        <i className="material-icons valign-middle no-margin">
          &nbsp;{props.folded ? "expand_more" : "expand_less"}
        </i>
      </button>
      <span className="foldable-company-count">
        {props.length} {props.length > 1 ? "companies" : "company"}
      </span>
    </div>
  );
}
