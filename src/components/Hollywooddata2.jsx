import { hollydata } from './Api'

function Hollywooddata2(){
    return(
        <>
         <div className='hd'>
        <img src={hollydata[1].ImageAsset} alt="" className='ltimg1' />
        
        </div>
        <h3> <p >{hollydata[1].BlogContent}</p></h3>
        </>
       
    )
}
export default Hollywooddata2