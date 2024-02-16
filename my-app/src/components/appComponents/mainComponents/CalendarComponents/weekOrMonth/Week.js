function Week(){
    const dayForWeek = ["", "sun", "mon", "tue", "wed", "thu", "fri", "sat"];


    // function generationDayForWeek(){
    //     return(
            
    //     )
        
        
    // }

    let generationDayForWeek = dayForWeek.map((objDayForWeek) => {return (<td>{objDayForWeek}</td>)})

    return(
        <div>
            {generationDayForWeek}
            
        </div>
    )
}
export default Week