export function Time()
{
    function CurrentTime(){
        let time=new Date();
        return time.toLocaleTimeString();
    }
    function CurrentDate(){
        let date=new Date();
        return date.toLocaleDateString();
    }
    return(
        <div>
            <p>
                This is the current time : {CurrentDate()} - {CurrentTime()}
            </p>
        </div>
    )
}