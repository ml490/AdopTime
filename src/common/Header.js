import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react';

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
                <Button onClick={() => this.handleTabClick(0, '/')}>Home</Button> 
                <Button onClick={() => this.handleTabClick(2, '/ManageAnimal')}>Manage</Button>  
             </div>
        );
    }
}

Header.contextTypes = {
    router: PropTypes.object.isRequired
};

export default Header;