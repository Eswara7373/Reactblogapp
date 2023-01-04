import { techdata } from "./Api"

function Technologydata(){
    return(
        <>
        <div className='tech'>
        <img src={techdata[0].ImageAsset} alt="" className='ltimg1' />
       
        </div>
         <h3><p >{techdata[0].BlogContent}</p></h3>
        </>
    )
}
export default Technologydata