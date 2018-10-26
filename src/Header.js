import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';

class Header extends Component {
    render() {
        
        return (
            <div>
                <h1>Banner from Header</h1>
                {this.props.testBanner}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        testBanner: state.testReducer.test,
    };
};

const mapDispatchToProps = { doTest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);