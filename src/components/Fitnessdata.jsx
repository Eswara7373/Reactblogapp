import { fittydata } from './Api'

function Fitnessdata(){
    return(
        <>
         <div className='bd3'>
        <img src={fittydata[0].ImageAsset} alt="" className='ltimg1' />
        
        </div>
        <h3><p >{fittydata[0].BlogContent}</p></h3>
        </>
       
    )
}
export default Fitnessdata