import React, { Component } from "react";
import LinkItem from "./LinkItem";

class LinkList extends Component {
  render() {
    return (
      <section>
        <h1 className="tab-name">Apps</h1>
        <div
          id="quick-item-wrapper"
          className="flex wrap center vertical-center"
        >
          {this.props.apps.map((app, i) => {
            return (
              <LinkItem
                key={i}
                name={app.name}
                url={app.web}
                img={app.image}
                port={app.port}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default LinkList;
