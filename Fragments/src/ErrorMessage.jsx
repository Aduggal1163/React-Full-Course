const ErrorMessage=({items})=>{
    return(
      <>
        {items.length===0 ? <h1>I'm still hungry</h1> : null}
    </>
    )
}
export default ErrorMessage