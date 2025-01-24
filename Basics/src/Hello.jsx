export function Hello(){
    let myName="Abhishek";
    let lastName=()=>{
        return " Duggal"
    }
    return(
        <>
            <h3>Hello this is the future speaking {myName}{lastName()}</h3>
        </>
    )
}
