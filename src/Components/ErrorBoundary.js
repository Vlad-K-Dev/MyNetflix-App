import React from "react"

const ErrorBoundary = (props,error) => {
  if(error) {
    return (
      <div className="error">
        <h2 className="error__title">
          Oops? Shit happens
        </h2>
        <p className="error__text">Something is wrong. Please try again</p>
      </div>
    )
  } else {
    return props
  }
}

export default ErrorBoundary
