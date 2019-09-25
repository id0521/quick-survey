import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key='1'>
            <Link to='/about'>About</Link>
          </li>,
          <li key='2'>
            <a href='auth/google'>Login With Google</a>
          </li>
        ];
      default:
        return [
          <li key='1'>
            <Payments />
          </li>,
          <li key='3' style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key='4'>
            <Link to='/about'>About</Link>
          </li>,
          <li key='2'>
            <a href='/api/logout'>Logout</a>
          </li>
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className='nav-wrapper teal lighten-2'>
          <div className='row'>
            <div className='col s12'>
              <Link
                to={this.props.auth ? '/surveys' : '/'}
                className='left brand-logo'
              >
                QuickSurvey
              </Link>

              <ul className='right'>{this.renderContent()}</ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
