import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../action';

class GoogleAuth extends Component {
    
   componentDidMount() {
       window.gapi.load('client:auth2', ()=>{
        window.gapi.client.init({
            clientId: '883789436849-o7dbodqgijtf1rjinghgd6jmnga587vf.apps.googleusercontent.com',
            scope: 'email'
        })
        .then(()=>{
            this.auth = window.gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
          //  console.log(this.auth.currentUser.get())
        })
       });
   }

   onSignInClick = () => { this.auth.signIn() }
   onSignOutClick = () => { this.auth.signOut() }

   renderAuthButton() {
       if(this.props.isSignedIn === null) {
           return null;
       } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} 
                className='ui red google button'>
                    <i className='google icon' />
                    Sign Out          <br />    <br/>  {this.auth.currentUser.get().Ut.Bd}
                </button>
            )
       } else {
            return (
                <button onClick={this.onSignInClick} 
                className='ui red google button'>
                    <i className='google icon' />
                    Sign In With Google 
                </button>
        )
       }
   }

   onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            // this.props.signIn();
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    render() { 
        // console.log(this.auth.currentUser.get())
        return ( 
            <div>
                {this.renderAuthButton()}
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return { 
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
     };
}
 
export default connect(mapStateToProps, {signIn, signOut }) (GoogleAuth);