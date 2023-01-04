import {datas } from "./Api"
function Bollywooddata2(){
    return(
        <>
        <img src={datas[1].ImageAsset} alt="" height='450px' width='400px' />
       <h3> <p>{datas[1].BlogContent}</p></h3>
        </>
    )
}
export default Bollywooddata2
