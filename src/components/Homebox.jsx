import { datas } from "./Api"
import { Link } from "react-router-dom"
import {fooddata} from "./Api"
import {fittydata} from "./Api"
const Homebox = () => {
  return (
    <>
      <img src={datas[0].ImageAsset} className='p1'  alt='??'/>
      <span className='sp1'>{datas[0].PublishedDate}</span>
      <img src={fittydata[2].ImageAsset} className='p2'  alt='??'/>
      <span className='sp2'> {fittydata[2].PublishedDate}</span>
      <img src={fooddata[1].ImageAsset} className='p3' alt='??' />
      <span className='sp3'>{fooddata[1].PublishedDate}</span>


      <p style={{ fontSize: '40px', position: 'absolute', top: '700px', left: '110px' }}>The Latest
        <hr style={{ width: '200px', height: '3px', backgroundColor: 'lightblue' }} /></p>

      <div className='container'>
        <div className='boxdetails'>
          <img src={datas[0].ImageAsset} alt="" height='250px' width='300px' />
          <h4><Link to='/bollywooddata'>{datas[0].Title}</Link></h4>
          <p>{datas[0].BlogContent}</p>
          <p>{datas[0].PublishedDate}</p>
        </div>
      </div>
      <div className='container2'>
        <div className='boxdetails2'>
          <img src={datas[1].ImageAsset} alt="" height='250px' width='300px' />
          <h4><Link to='/bollywooddata2'>{datas[1].Title}</Link></h4>
          <p>{datas[1].BlogContent}</p>
          <p>{datas[1].PublishedDate}</p>
        </div>
      </div>
      <div className='container3'>
        <div className='boxdetails3'>
          <img src={fooddata[2].ImageAsset} alt="" height='250px' width='300px' />
          <h4><Link to='/Fooddata'>{fooddata[2].Title}</Link></h4>
          <p>{fooddata[2].BlogContent}</p>
          <p>{fooddata[2].PublishedDate}</p>
        </div>
      </div>

      <p style={{ fontSize: '40px', position: 'absolute', top: '1260px', left: '120px' }}>Latest Articles
        <hr style={{ width: '200px', height: '3px', backgroundColor: 'lightblue' }} /><br /></p>


      <div id='hr1'>
        <img src={datas[1].ImageAsset} alt="" className='ltimg1' />
        <div className="latbox">
          <p >{datas[1].BlogContent}</p>
        </div>
      </div>
      <div id='hr2'>
        <img src={datas[2].ImageAsset} alt="" className='ltimg2' />
        <div className="latbox2">
          <p >{datas[2].BlogContent}</p>
        </div>
      </div>
      <div id='hr3'>
        <img src={datas[0].ImageAsset} alt="" className='ltimg2' />
        <div className="latbox2">
          <p >{datas[0].BlogContent}</p>
        </div>
      </div>
      <div id='hr4'></div>

       <div className='mazapic'>
         <img src="data:image/jpeg;base64,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" alt=""  width='300px' height='590'  />
       </div>
   
       <p style={{ fontSize: '30px', position: 'absolute', top: '1980px', left: '960px' }}>Top Posts
        <hr style={{ width: '200px', height: '3px', backgroundColor: 'lightblue' }} /><br /></p>
         <div className='sidebox' >
         <img src={datas[0].ImageAsset} alt=""  width='250px'  height='150px' />
         <p>{datas[0].BlogContent}</p>
         <p>{datas[0].PublishedDate}</p>

       </div>
    </>
  )
}
export default Homebox