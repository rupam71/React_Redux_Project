import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from './../../action/index';
import StreamForm from './streamForm';

class StreamCreate extends Component {
    
    onSubmit = formValue => {
        this.props.createStream(formValue);
    }

    render() { 
        return ( 
            <div>
               <h3>Create a Stream</h3>
               <StreamForm onSubmit={this.onSubmit} />
            </div>
         );
    }
}



export default connect(null, {createStream})(StreamCreate)