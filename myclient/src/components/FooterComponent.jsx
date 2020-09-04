import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer class="footer fixed-bottom">
                    <span className="text-muted">Thank You For Trying Out the App!</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;