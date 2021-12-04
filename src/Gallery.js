import React, {useState} from 'react';
import './App.css'
import Img1 from './components/image1.jpeg'
import Img2 from './components/image2.jpeg'
import Img3 from './components/image3.jpeg'
import Img4 from './components/image4.jpeg'
import Img5 from './components/image5.jpeg'
import Img6 from './components/image6.jpeg'
import Img7 from './components/image7.jpeg'
import Img8 from './components/image8.jpeg'
import Img9 from './components/image9.jpeg'
import Img10 from './components/image10.jpeg'
import './gallery.css'




const Gallery=()=>{

	let data=[
		{
			id:1,
			imgSrc:Img1,

		},
		{
			id:2,
			imgSrc:Img2,

		},
		{
			id:3,
			imgSrc:Img3,

		},
		{
			id:4,
			imgSrc:Img4,

		},
		{
			id:5,
			imgSrc:Img5,

		},
		{
			id:6,
			imgSrc:Img6,

		},
		{
			id:7,
			imgSrc:Img7,

		},
		{
			id:8,
			imgSrc:Img8,

		},
				{
			id:9,
			imgSrc:Img9,

		},
		{
			id:10,
			imgSrc:Img10,

		},


	]

	
	const [ids,setIds] = useState(data[0].imgSrc)
	return(
		<>
		  	<div className="head">
    		<h1 >IMAGE GALLERY</h1>
    		</div>
    		
		<div className="container">
		
			<img src={ids} alt="sel" className="selected" />
			{data.map((item,index)=>{
				return(
					
					<div className="imgcontainer">
					<button onClick={()=>{
						setIds(item.imgSrc);
						
					}}><img src={item.imgSrc}  /></button>
					</div>
						
					)

			})}

		 
		
		</div>


		</>
		)			

}
export default Gallery;