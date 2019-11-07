import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';

import { getEvent, deleteEvent, putEvent } from '../actions'

class EventsShow extends Component{
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
   
  }
  renderField(field){
    const{ input, label, type, meta: {touched, error} } = field
   
    return(
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
    )
  }
  async onDeleteClick() {

    const { id } = this.props.match.params
    console.log(id)
    await this.props.deleteEvent(id)
    this.props.history.push('/')
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
            <Link to="/" onClick={this.onDeleteClick}> delete</Link>
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

const mapDispatchToProps = ({ deleteEvent })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form:'eventShowForm' })(EventsShow)
  )

