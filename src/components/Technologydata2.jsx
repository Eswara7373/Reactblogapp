import { techdata } from "./Api"

function Technologydata2(){
    return(
        <>
        <div>
        <img src={techdata[1].ImageAsset} alt="" width='280px' height='200px' />
       
        </div>
         <h3><p >{techdata[1].BlogContent}</p></h3>
        </>
    )
}
export default Technologydata2