import { fittydata } from './Api'

function Fitnessdata2(){
    return(
        <>
         <div className='bd3'>
        <img src={fittydata[1].ImageAsset} alt="" className='ltimg1' />
        
        </div>
        <h3><p >{fittydata[1].BlogContent}</p></h3>
        </>
       
    )
}
export default Fitnessdata2