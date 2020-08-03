import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.handleShowEditForm = this.handleShowEditForm.bind(this);
    this.state = {
      isDisplay: 0
    }
    console.log("Content: Constructore chạy");
  }

  componentWillMount() {
    console.log('Content: componentWillMount chạy.');
  }
  componentDidMount() {
    console.log('Content: componentDidMount chạy.');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Content: shouldComponentUpdate chạy.');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
     
    console.log('Content: componentWillUpdate chạy.', nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Content: componentDidUpdate chạy.', prevState);
  }

  ButtonForm() {
    return (
      <div className="btn-group col-lg-4" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary btn-sm" onClick={this.handleShowEditForm}>Add</button>
        <button type="button" className="btn btn-secondary btn-sm" >Edit</button>
      </div>
    )
  }

  EditForm() {
    return (
      <div className='col-lg-12'>
        <input className="form-control form-control-sm" type="text" placeholder="Title" />
        <input className="form-control form-control-sm" type="text" placeholder="Content" />
        <button type="button" className="btn btn-primary btn-sm">Save</button>
        <button type="button" className="btn btn-secondary btn-sm" onClick={() => this.handleHideEditForm()}>Cancel</button>
      </div>
    )
  }

  CheckDisplay() {
    return (
      this.state.isDisplay === 0 ? this.ButtonForm() : this.EditForm()
    )
  }

  handleShowEditForm() {
    this.setState(
      {
        isDisplay: 1
      }
    );
  }

  handleHideEditForm() {
    this.setState(
      {
        isDisplay: 0
      }
    );
  }

  render() {
    return (
      <div className={"col-lg-4 "}>
        <div className={"row "}>
          <div className={"col-lg-4 "}>
            <div className="p-1">
              <img className="img-fluid rounded-circle" src={"img/" + this.props.img} alt="" />
            </div>
          </div>
          <div className={"col-lg-8"}>
            <div className="p-8">
              <h5>{this.props.title}</h5>
              <p>{this.props.content} </p>
            </div>
          </div>
          {this.CheckDisplay()}
        </div>
        <hr />
      </div>
    );
  }
}

export default Content;