import React from 'react';
import { connect } from 'react-redux';
import AnimalPageView from './AnimalPageView';

class AnimalPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            animals : [
                {
                    name: "asf",
                    color: "asf",
                    age: "asf"
                },
                {
                    name: "asf2",
                    color: "asf2",
                    age: "asf2"
                },
                {
                    name: "asf3",
                    color: "asf3",
                    age: "asf3"
                }]
        };
    }

    render() {
        return (
            <div>
                <h1>Animals View Title</h1>
                <AnimalPageView animals={this.animals}/> 
            </div>
        );
    }
}

AnimalPage.propTypes = {    

};

function mapStateToProps(state) {
    return {
        animals: Object.assign([], state.animals)
    };
}

function mapDispatchToProps() {
return {

};
} 

export default connect(mapStateToProps, mapDispatchToProps)(AnimalPage);    