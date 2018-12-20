import React from "react";

export default class MovieRating extends React.Component {
  render() {
    return Array(Number(this.props.rating))
      .fill(<span style={{ color: "#ffd700" }}>★</span>)
      .concat(Array(5).fill(<span style={{ color: "#ababab" }}>☆</span>))
      .slice(0, 5);
    /*("★".repeat(this.props.rating)
      .concat("☆".repeat(5))
      .slice(0, 5))*/
  }
}