import React, { Component } from "react";
import PropTypes from "prop-types";

class LinkItem extends Component {
  getAppLink() {
    const port = this.props.port != null ? `:${this.props.port}` : "";
    const url = this.props.url != null ? this.props.url : "";
    const redirection = `http://${window.location.hostname}${port}/${url}`;
    return redirection;
  }

  render() {
    return (
      <div className="quick-link">
        <a href={this.getAppLink()} target="_blank" rel="noopener noreferrer">
          <figure>
            <img src={`/img/icons/${this.props.img}`} alt={this.props.name} />
            <figcaption>{this.props.name}</figcaption>
          </figure>
        </a>
      </div>
    );
  }
}

LinkItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  port: PropTypes.number,
  url: PropTypes.string
};

export default LinkItem;
