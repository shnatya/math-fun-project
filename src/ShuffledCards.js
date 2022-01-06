import Card from "./Card"

function ShuffledCards({ shuffledArray, checkTotal, resetOn, handleReset }) {
    function sendData(answer, obj) {
        checkTotal(answer, obj)
    } 
    return (
        <div className='flex-container'>
            {shuffledArray.map((obj, index) =>
                <Card obj={obj} key={index} sendData={sendData} resetOn={resetOn} handleReset={handleReset}/>)}
        </div>
    )
}
export default ShuffledCards;
