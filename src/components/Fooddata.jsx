import {fooddata} from "./Api"
function Fooddata(){
    return(
        <>
        <img src={fooddata[2].ImageAsset} alt="" height='250px' width='300px' />
        <h3><p>{fooddata[2].BlogContent}</p></h3>
        </>
    )
}
export default Fooddata

