import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "202945390934-89h8qhhui4ojagrv8bb8gfdt88l5afl2.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({
            isSignedIn: this.auth.isSignedIn.get()
          });
        });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>i dont know</div>;
    } else if (this.state.isSignedIn) {
      return <div>i am signed in</div>;
    } else {
      return <div>i am not signed in</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
