import React, { Component } from "react";
import "./App.css";
import LinkList from "./components/LinkList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apps: null
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("/links.json");
      const apps = await response.json();
      this.setState({ apps: apps.apps });
    } catch (E) {
      console.error(E);
    }
  }

  renderApps() {
    const { apps } = this.state;
    if (apps != null) console.log("apps", apps);

    if (apps != null && apps.length > 0) {
      return <LinkList apps={apps} />;
    } else
      return (
        <section className="error-messages-big">
          <h1>Error loading links.</h1>
        </section>
      );
  }

  render() {
    return (
      <main className="flex center vertical-center">
        <div>{this.renderApps()}</div>
      </main>
    );
  }
}

export default App;
