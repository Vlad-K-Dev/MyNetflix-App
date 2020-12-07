import React from "react"

class ErrorBoundary extends React.Component{
  constructor(props) {
    super(props);
    this.state = {hasError: '', errorInfo: null}
  }

  static getDerivedStateFromError(error,errorInfo) {
    this.setState({
          hasError: error,
          errorInfo: errorInfo
        })
  }

  render(){
    if(this.props.error){
      return (
        <div className="error">
          <h2 className="error__title">
            Oops? Shit happens
          </h2>
          <span>{this.state.errorInfo}</span>
          <p className="error__text">Something is wrong. Please try again</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
