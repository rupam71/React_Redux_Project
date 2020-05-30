import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form'

class StreamForm extends Component {

    renderError = ({error, touched}) => {
        if(touched && error) {
            return (
                <div className='ui error message'>
                    <div className='header'>
                        {error}
                    </div>
                </div>
            )
        }
    }

    renderInput = formProps => { 
        console.log(formProps) //pre build with redux form
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete='off' />
                {/* <div>{formProps.meta.error}</div> */}
                {this.renderError(formProps.meta)}
            </div>
        )
    }

    // if we donnt use error class at form tag, Semantic Ui will not shown any error.

    onSubmit = formValue => {
        this.props.onSubmit(formValue);
    }

    render() { 
        return ( 
            <div>
               <form onSubmit={this.props.handleSubmit(this.onSubmit)} 
               className='ui form error'>   
                   <Field name='title' 
                   component={this.renderInput} 
                   label = 'Enter Title'
                   /> 
                   {/* 
                    name always need 
                    In Component, no prentheses
                    When new props (label) come, its go to renderInput`s like (formProps.label),
                    this.props.handleSubmit come from redux-form
                   */}
                   <Field name='description' 
                   component={this.renderInput} 
                   label = 'Enter Descroption'
                   />
                   <button className='ui button primary' > Submit </button>
               </form>
            </div>
         );
    }
}

const validate = formValue => {
    const errors = {};

    if(!formValue.title) errors.title = 'You Must Enter A Title' ;
    if(!formValue.description) errors.description = 'You Must Enter A Description' ;

    return errors;
} 
 
export default reduxForm({
    form : 'StreamForm' ,
    validate // validate : validate     validate : comr from redux-form
})(StreamForm);

