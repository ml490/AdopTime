import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

class Header extends React.Component {
    constructor(context) {
        super(context);

        this.state = {
            value: 0
        };

        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(value, url) {
        this.setState({ value: value });
        this.context.router.history.push(url);
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Tabs value={this.state.value} centered>
                        <Tab label="Home" onClick={() => this.handleTabClick(0, '/')} />
                        <Tab label="Animals" onClick={() => this.handleTabClick(1, '/animals')} />
                    </Tabs>
                </AppBar>
            </div>
        );
    }
}

Header.contextTypes = {
    router: PropTypes.object.isRequired
};

export default Header;