import React, { Component } from "react";
import Profile from "../../components/Chatlist/profile";

export default class chatlistitem extends Component {
  constructor(props) {
    super(props);
  }
  selectChat = (e) => {
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  };

  render() {
    return (
      <div
        style={{ animationDelay: `0.${this.props.animationDelay}s` }}
        onClick={this.selectChat}
        className={`chatlist__item ${
          this.props.active ? this.props.active : ""
        } `}
      >
        <Profile
          image={
            this.props.image ? this.props.image : "http://placehold.it/80x80"
          }
          isOnline={this.props.isOnline}
        />

        <div className="userMeta">
          <p>{this.props.name}</p>
          <span className="activeTime">24 mins ago</span>
        </div>
      </div>
    );
  }
}