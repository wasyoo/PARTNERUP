import React from "react";

export default class Rating extends React.Component {
  constructor(props){
    super(props)
    this.state={
      rating : this.props.rating || 3
    }
  }
  render() {
    return Array(Number(this.state.rating))
      .fill(<span style={{ color: "#ffd700" }}>★</span>)
      .concat(Array(5).fill(<span style={{ color: "#ababab" }}>☆</span>))
      .slice(0, 5);
    /*("★".repeat(this.props.rating)
      .concat("☆".repeat(5))
      .slice(0, 5))*/
  }
}