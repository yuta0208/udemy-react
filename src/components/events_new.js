import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';

import { postEvent } from '../actions'

class EventsNew extends Component{
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }
  renderField(field){
    const{ input, label, type, meta: {touched, error} } = field
    // console.log("これがfield")
    // console.log(field)
    // console.log({...input})
    return(
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
    )
  }
  
  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
  } 
  render(){
    const { handleSubmit, pristine, submitting } = this.props
    console.log(this.props)
    return(
      <React.Fragment>
        <form onSubmit={ handleSubmit(this.onSubmit) }>
          <div>
            <Field label="Title" name="title" type="text" component={ this.renderField } />
          </div>
          <div>
            <Field label="Body"  name="body" type="text" component={ this.renderField } />
          </div>
          <div>
            <input type="submit" value="Submit" disabled={pristine || submitting} />
            <Link to="/">cancel</Link>
            
          </div>
        </form>
      </React.Fragment>
      )
  }
}

const validate = values => {
  const error = {}
  if( !values.title ) error.title = "Enter a title please"
  if( !values.body ) error.body = "Enter a body please"
  return error
}

const mapDispatchToProps = ({ postEvent })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form:'eventNewForm' })(EventsNew)
  )

