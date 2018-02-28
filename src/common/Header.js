import React from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs , { Tab } from 'material-ui/Tabs';

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            value: 0
        };
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Tabs value={this.state.value}>
                        <Tab label="Home" />
                        <Tab label="Animals" />
                    </Tabs>
                </AppBar>
            </div>
        );
    }
}

export default Header;