import React, { Component } from "react";

export default class Footer extends Component {


  render() {
    return (
      <footer className="py-4 bg-footer mt-auto main-footer">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between small">
            <div className="text-muted-1" style={{fontSize: "12px"}}>
              © 2020 <b>{process.env.REACT_APP_NAME}</b>. by{" "}
              Bhaskor Jyoti Sarmah
            </div>
            <div className="footer-links">
                Privacy Policy
                Terms &amp; Conditions
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
