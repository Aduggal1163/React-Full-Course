function Random(){
    let randomNo=()=>{
        let no=Math.floor(Math.random()*10+1)
        return no;
    }
    return(
        <>
            <h2 style={{backgroundColor:"#982"}}>
                Random Number is:{randomNo()} <br/>
            </h2>
        </>
    )
}
export default Random