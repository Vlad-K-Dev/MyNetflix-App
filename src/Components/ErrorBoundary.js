import React from "react"

class ErrorBoundary extends React.Component{
  constructor(props) {
    super(props);
    this.state = {hasError: false, errorInfo: null}
  }

  static getDerivedStateFromError(error,errorInfo) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      errorInfo: errorInfo
    };
  }

  render(){
    if(this.state.hasError){
      return (
        <div className="error">
          <h2 className="error__title">
            Oops? Shit happens
          </h2>
          <p className="error__text">Something is wrong. Please try again</p>
        </div>
      )
    }
    return this.props.children
  }

}


// const ErrorBoundary = (props,error) => {
//   if(error) {
//     return (
//       <div className="error">
//         <h2 className="error__title">
//           Oops? Shit happens
//         </h2>
//         <p className="error__text">Something is wrong. Please try again</p>
//       </div>
//     )
//   } else {
//     return props
//   }
// }

export default ErrorBoundary
