import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Content extends Component {
    state = {
        pageSeleceted: 1
    };
    
    componentDidMount() {
        this.showSlide(this.props.defaultPage);
    }
    
    componentWillReceiveProps(newProps) {
        this.showSlide(newProps.defaultPage);
    }
    
    showSlide = async (n) => {
        await this.setState({slideSelected: n});
        this.slider.style.marginLeft = '-' + (100 * (n-1)) + '%';
    };
    
    render() {
        let slideSelected = this.props.slideSelected;
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
                {/*<div className={slideSelected === 1 ? ' active' : ''} onClick={this.showSlide.bind(this, 1)}>Home</div>*/}
                {/*<div className={slideSelected === 2 ? ' active' : ''} onClick={this.showSlide.bind(this, 2)}>About me</div>*/}
                {/*<div className={slideSelected === 3 ? ' active' : ''} onClick={this.showSlide.bind(this, 3)}>Portfolio</div>*/}
                {/*<div className={slideSelected === 4 ? ' active' : ''} onClick={this.showSlide.bind(this, 4)}>Contacts</div>*/}
            </div>
        </div>
    }
}
export default Content