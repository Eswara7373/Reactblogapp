import {fooddata} from "./Api"
function Fooddata2(){
    return(
        <>
        <img src={fooddata[1].ImageAsset} alt="" height='250px' width='300px' />
        <h3><p>{fooddata[1].BlogContent}</p></h3>
        </>
    )
}
export default Fooddata2
