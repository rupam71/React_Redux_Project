import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from './../../action/index';
import StreamForm from './streamForm';
import _ from 'lodash';

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id  )
    }

    onSubmit = formValues => {
        console.log(formValues);
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render() {
        // console.log(this.props);
        // console.log(this.props.match.params.id);
        if(!this.props.stream) 
            return <div>    Loading...  </div>
            
        return ( 
            <div>
                <h3>Edit a Stream</h3>
                {/* <StreamForm initialValues={{title:this.props.stream.title,description:this.props.stream.description}} */}
                <StreamForm initialValues={_.pick(this.props.stream, 'title','description')} 
                onSubmit={this.onSubmit} />
            </div>
        );
        // initialValues is preBuild props from redux-form
        // in stram there is 2 object name title and description
        // both will find title and description feild by redux-form
    }
}

const mapStateToProps = (state,ownProps) =>{
    return { stream: state.streams[ownProps.match.params.id] }
}
 
export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit);

 