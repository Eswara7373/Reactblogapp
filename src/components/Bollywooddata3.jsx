import { bollydata } from './Api'

function Bollywooddata3(){
    return(
        <>
        <div className='bd3'>
        <img src={bollydata[1].ImageAsset} alt="" className='ltimg1' />
       
        </div>
         <h3><p >{bollydata[1].BlogContent}</p></h3>
        </>
        
    )
}
export default Bollywooddata3

