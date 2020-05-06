import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from './../actions/index';

class UserHeader extends Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() { 
        const {users} = this.props

        if (!users) return null;

        return ( 
            <div className="header">
                {users.name}
            </div>
         );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {users: state.users.find(user => user.id === ownProps.userId)}
}
// state come from REDUX
// ownProps come from Component Props
 
export default connect(mapStateToProps, {fetchUser})(UserHeader);