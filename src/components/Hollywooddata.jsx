import { hollydata } from './Api'

function Hollywooddata(){
    return(
        <>
         <div className='hd'>
        <img src={hollydata[0].ImageAsset} alt="" className='ltimg1' />
        
        </div>
        <h3> <p >{hollydata[0].BlogContent}</p></h3>
        </>
       
    )
}
export default Hollywooddata