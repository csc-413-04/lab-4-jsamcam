import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';
import Header from './Header';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'black',
            banner: 'hello',
            isOpen: false,
        };
        this.buttonHandler = this.buttonHandler.bind(this);
        this.textHandler = this.textHandler.bind(this);
        this.imageHandler = this.imageHandler.bind(this);
        console.log(this.props)
    }

    buttonHandler() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    textHandler(e) {
        this.setState({
            banner: e.target.value,
        })
    }

    imageHandler(){
        this.setState({
            color: 'changed to blue',
        })
    }

    render() {
        let myVariable = <h2>Brian</h2>;
        let myBanner;
        if (this.state.isOpen) {
            myBanner = <Header banner={this.state.banner}/>;
        }
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" onClick={this.imageHandler} />
                    <div>
                        {myVariable}
                        {this.state.color}
                    </div>
                    {this.props.test}

                    {
                        this.state.isOpen &&
                        <Header banner={this.state.banner}/>
                    }
                    <input value={this.state.banner} onChange={this.textHandler}/>
                    <button  onClick={this.buttonHandler} >Click Me</button>
                </header>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        test: state.testReducer.test,
    };
};

const mapDispatchToProps = { doTest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);