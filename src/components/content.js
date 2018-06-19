import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Content extends Component {
    componentDidMount() {
        this.showSlide(this.props.defaultPage);
    }
    
    componentWillReceiveProps(newProps) {
        this.showSlide(newProps.defaultPage);
    }
    
    showSlide = (n) => {
        this.slider.style.marginLeft = '-' + (100 * (n-1)) + '%';
    };
    
    render() {
        return <div className="content">
            <div className="slider">
                <div className="slides-container" ref={el => this.slider = el}>
                    <div className="slide">
                        <h1>HOME</h1>
                        <p>Work in progress...</p>
                    </div>
                    <div className="slide">
                        <h1>ABOUT ME</h1>
                        <p>Work in progress...</p>
                    </div>
                    <div className="slide">
                        <h1>PORTFOLIO</h1>
                        <p>Work in progress...</p>
                    </div>
                    <div className="slide">
                        <h1>CONTACTS</h1>
                        <p>Work in progress...</p>
                    </div>
                </div>
            </div>
            <div className="slider-handler">
                <NavLink activeClassName='active' to='/' exact>Home</NavLink>
                <NavLink activeClassName='active' to='/about-me'>About Me</NavLink>
                <NavLink activeClassName='active' to='/portfolio'>Portfolio</NavLink>
                <NavLink activeClassName='active' to='/contacts'>Contacts</NavLink>
            </div>
        </div>
    }
}
export default Content