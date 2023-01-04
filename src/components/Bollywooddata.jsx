import {datas } from "./Api"


function Bollywooddata(){
  return(
    <div className="">
    <img src={datas[0].ImageAsset} alt="" height='450px' width='400px' />
    <h3><p>{datas[0].BlogContent}</p></h3>
    
    </div>
  )
}
export default  Bollywooddata
