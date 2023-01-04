import {fooddata} from "./Api"
function Fooddata1(){
    return(
        <>
        <img src={fooddata[0].ImageAsset} alt="" height='250px' width='300px' />
        <h3><p>{fooddata[0].BlogContent}</p></h3>
        </>
    )
}
export default Fooddata1
