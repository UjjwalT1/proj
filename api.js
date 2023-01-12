
//776453bb11mshcd9b098a361c216p1b03b8jsn69df05795d5f :: this is the api key of my second rapid api account  

//Divs that are holding their topic contents
const temp0=document.querySelector(".temp0");
const temp1=document.querySelector(".temp1");
const temp2=document.querySelector(".temp2");
const temp3=document.querySelector(".temp3");
const temp4=document.querySelector(".temp4");
const homedesrcription=document.querySelector(".homedescription")
const heading=document.querySelector(".descriptionDetail")
const bigimage=document.querySelector(".dispimage");
const cardDetail=document.querySelector(".cardDetail");



   async function api(query)
	{var obj=query.toLowerCase();
	try{
		const response=await fetch('https://api.unsplash.com/search/photos/?query='+obj+'&per_page=9&client_id=DhPMl771UObcbpl6HluT541oWEgB1w6JHE4VTTh9RUY', {method:'GET',
				headers:{'X-Ratelimit-Limit': 1000,
						'X-Ratelimit-Remaining': 999
					} })
		const object=await response.json();   
		bigimage.src=object.results[0].urls.full; 
		let grid=document.createElement('div');
		grid.className="supplementgrid";   
		for(let i=1;i<5;i++)
		{

			let image=object.results[i].urls.full;
			let div=document.createElement('div');
			div.className="smallimgcont";
			div.innerHTML='<img class="smallimg" src='+image+'></img>'
			grid.appendChild(div);

		}
		temp0.innerHTML=grid.outerHTML


	}
	catch (err){console.error(err)};
	}












//IMAGE SOURCE PRODUCER
/*
async function apiimage(query,callback)
{
    try{
        const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ba62643559mshd76de80b1e2bacfp1c6943jsn3d9cc846503e',
		'X-RapidAPI-Host': 'google-image-search1.p.rapidapi.com'
	}
};

const respons=await fetch('https://google-image-search1.p.rapidapi.com/v2/?q='+query+'&hl=en', options)
const json=await respons.json()
	 console.log(json.response.images[0].image.url)
	 callback(json.response.images[0].image.url)


}
	catch(err){console.error(err)};
}



async function apiimage(query,callbk)
	{
	try{
		const response=await fetch('https://api.unsplash.com/search/photos/?query='+query+'&per_page=9&client_id=DhPMl771UObcbpl6HluT541oWEgB1w6JHE4VTTh9RUY', {method:'GET',
				headers:{'X-Ratelimit-Limit': 1000,
						'X-Ratelimit-Remaining': 999
					} })
		const object=await response.json();       
		
			let image=object.results[1].urls.full;
			callbk(image);

		
	}
	catch (err){console.error(err)};
	}
*/


async function apiimg(query,callbk)
	{
	try{
		const response=await fetch('https://api.unsplash.com/search/photos/?query='+query+'&per_page=9&client_id=DhPMl771UObcbpl6HluT541oWEgB1w6JHE4VTTh9RUY', {method:'GET',
				headers:{'X-Ratelimit-Limit': 1000,
						'X-Ratelimit-Remaining': 999
					} })
		const object=await response.json();       
		
			let image=object.results[1].urls.full;
			callbk(image);

		
	}
	catch (err){console.error(err)};
	}



//DATA FETCHER

//image via google photos
async function apiimage(query,callback)
{
    try{
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '776453bb11mshcd9b098a361c216p1b03b8jsn69df05795d5f',
				'X-RapidAPI-Host': 'google-image-search1.p.rapidapi.com'
			}
		};

///*
const respons=await fetch('https://google-image-search1.p.rapidapi.com/v2/?q='+query+'&hl=en', options)
if(!respons.ok)
{		apiimg(query,url=>{
		console.log("ER",url)
		callback(url);
	})
}

const json=await respons.json()
	 console.log(json.response.images[0].image.url)
	 callback(json.response.images[0].image.url) // */
//	callback()


}
	catch(query){console.log(query)};
}



//detail via rapidapi
async function apidata(locan,callback)
	{
	try{
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'ba62643559mshd76de80b1e2bacfp1c6943jsn3d9cc846503e',
				'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
			}
		};

		const response=await fetch('https://hotels4.p.rapidapi.com/locations/v2/search?query='+locan+'&locale=en_US&currency=USD', options)

		const object=await response.json();     
		let city=object.suggestions[0].entities
		let hotel=object.suggestions[1].entities
		let landmark=object.suggestions[2].entities
		let transport=object.suggestions[3].entities

		city.forEach(i => {
			let { name,latitude,longitude,caption } =i;
			callback(  0,name,latitude,longitude,caption );
			
		});
		hotel.forEach(i => {
			let { name,latitude,longitude,caption } =i;
			callback(  1,name,latitude,longitude,caption );
			
		});
		landmark.forEach(i => {
			let { name,latitude,longitude,caption } =i;
			callback(  2,name,latitude,longitude,caption );
			
		});
		transport.forEach(i => {
			let { name,latitude,longitude,caption } =i;
			callback(  3,name,latitude,longitude,caption );
			
		});
		
	}
	catch (err){console.error(err)};
	}

	//ARGUMENT
const search=document.querySelector(".search");
search.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {

		api(search.value);
		var locan=search.value;

					//Element Creation
					let cityyy=document.createElement('div');
					let gadi=document.createElement('div');
					let jamin=document.createElement('div');
					let hotell=document.createElement('div');
					let count=1;


					
			
					//Class Name
					cityyy.className="containerapi cityyy";
					gadi.className="containerapi gadi";
					jamin.className="containerapi jamin";
					hotell.className="containerapi hotell";


	//CALLING 
	apidata(locan,callback=( group,name,latitude,longitude,caption  )=>{
		//Removing extra span and words from caption
		let anchor="</span>";
		let comma=",";
		caption=caption.slice(caption.indexOf(anchor)+7)
		caption=caption.slice(caption.indexOf(comma)+1)

		if(group===0)
		{apiimage(name,callbk=(imagesource)=>{
			
			if(name.toLowerCase()===locan.toLowerCase() && count===1)
			{heading.innerHTML=locan+"<br><span class="+"location"+">"+caption+"</span>"
				count--;
			}
			

			else{
			//Element Creation
			let div1=document.createElement('div');
			
			//Class Name
			div1.className="subcontainer";

			//Feeding
			div1.innerHTML='<div class="dispimagecontainer"><img class="dispimag" src='+imagesource+'></div><div  class="descriptioncontainer"><p class="imagedescription">'+name+'<br><span class="location">'+caption+'</span></p></div> <div class="ordinate">Co-ordinates:<br><a href="https://maps.google.com" target="_blank">'+latitude+','+longitude+'</a></div>'					
			cityyy.appendChild(div1);
			temp1.innerHTML=cityyy.outerHTML;
	
			}
		} )
		}

		if(group===1)
		{setTimeout(()=>
			{apiimage(name,callbk=(imagesource)=>{
				
				//Element Creation
				let div1=document.createElement('div');
		
		
				//Class Name
				div1.className="subcontainer";
			
		
				//Feeding
				div1.innerHTML='<div class="dispimagecontainer"><img class="dispimag" src='+imagesource+'></div><div  class="descriptioncontainer"><p class="imagedescription">'+name+'<br><span class="location">'+caption+'</span></p></div><div class="ordinate">Co-ordinates:<br><a href="https://maps.google.com" target="_blank">'+latitude+','+longitude+'</a></div>'				
		
				hotell.appendChild(div1);
				temp2.innerHTML=hotell.outerHTML;
			} )
			},1100);
		}

		if(group===2)
		{setTimeout(()=>
			{apiimage(name,callbk=(imagesource)=>{
				
				//Element Creation
				let div1=document.createElement('div');
			
		
				//Class Name
				div1.className="subcontainer";
			
		
				//Feeding
				div1.innerHTML='<div class="dispimagecontainer"><img class="dispimag" src='+imagesource+'></div><div  class="descriptioncontainer"><p class="imagedescription">'+name+'<br><span class="location">'+caption+'</span></p></div><div class="ordinate">Co-ordinates:<br><a href="https://maps.google.com" target="_blank">'+latitude+','+longitude+'</a></div>'				
		
				jamin.appendChild(div1);
				temp3.innerHTML=jamin.outerHTML;
			} )
			},2050);
		}

		if(group===3)
		{setTimeout(()=>
			{apiimage(name,callbk=(imagesource)=>{
				
				//Element Creation
				let div1=document.createElement('div');
				
		
				//Class Name
				div1.className="subcontainer";
			
	
				//Feeding
				div1.innerHTML='<div class="dispimagecontainer"><img class="dispimag" src='+imagesource+'></div><div  class="descriptioncontainer"><p class="imagedescription">'+name+'<br><span class="location">'+caption+'</span></p></div><div class="ordinate">Co-ordinates:<br><a href="https://maps.google.com" target="_blank">'+latitude+','+longitude+'</a></div>'				
				gadi.appendChild(div1);
				temp4.innerHTML=gadi.outerHTML;
			} )
			},3100);
		}
	

	});



		cardDetail.classList.remove("inactive");
		homedesrcription.classList.remove("active");
		tabcontents.forEach(a=>{
            a.classList.remove("active");
        })
    }
});



//--------------------------------------------JS part that is disconnected from above part------------------------------------------------------------------

//Creating an array that contains 52 strings that will be used for random id's
let id_Array=['aa']
for(let i=1;i<=500;i++){
	 if(id_Array[i-1][1]!='z')
	 id_Array[i]=(id_Array[i-1][0]+String.fromCharCode((id_Array[i-1].charCodeAt(1))+1 ))
	 else if(id_Array[i-1][1]==='z')
	 id_Array[i]=(String.fromCharCode((id_Array[i-1].charCodeAt(0))+1 )+'a')
}


// This function fetches the Location id that we pass to another fetch fn to obtain hotels list and their prices.
async function hoteldata(query,callback)
{
    try{
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'ba62643559mshd76de80b1e2bacfp1c6943jsn3d9cc846503e',
				'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
			}
		};

const respons=await fetch('https://travel-advisor.p.rapidapi.com/locations/search?query='+query+'&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US', options)

const obj=await respons.json()
let index=0;
		while(obj.data[index].result_type!='geos'){
			index++;
		}
		callback(obj.data[index].result_object.location_id);
	


}
	catch(err){console.log(err)};
}


//This fun returns an array that contain all hotels around that location
async function hoteldata2(locn_id,callback)
{
    try{
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'ba62643559mshd76de80b1e2bacfp1c6943jsn3d9cc846503e',
				'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
			}
		};

const respons=await fetch('https://travel-advisor.p.rapidapi.com/hotels/list?location_id='+locn_id+'&adults=1&rooms=1&nights=2&offset=0&currency=USD&order=asc&limit=30&sort=recommended&lang=en_US', options)


const obj=await respons.json()
	
	callback(obj.data)


}
	catch(err){console.log(err)};
}

async function hoteldata3(locn_id,callback)
{
    try{
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'ba62643559mshd76de80b1e2bacfp1c6943jsn3d9cc846503e',
				'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
			}
		};

const respons=await fetch('https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id='+locn_id+'&adults=1&lang=en_US&currency=USD&nights=2', options)

const obj=await respons.json()
	
	callback(obj.data[0])


}
	catch(err){console.log(err)};
}

async function attraction(query,callback)
{
    try{
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'ba62643559mshd76de80b1e2bacfp1c6943jsn3d9cc846503e',
				'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
			}
		};

const respons=await fetch('https://travel-advisor.p.rapidapi.com/attractions/list?location_id='+query+'&currency=INR&lang=en_US&lunit=km&sort=recommended', options)

const obj=await respons.json()

if(obj.data !=undefined)
obj.data.forEach(element => {
	if(Object.keys(element).length!=8)
	{callback(element);}
		
	
});
		


}
	catch(err){console.log(err)};
}

async function restraunt(query,callback)
{
    try{
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'ba62643559mshd76de80b1e2bacfp1c6943jsn3d9cc846503e',
				'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
			}
		};

const respons=await fetch('https://travel-advisor.p.rapidapi.com/restaurants/list?location_id='+query+'&restaurant_tagcategory=10591&restaurant_tagcategory_standalone=10591&currency=INR&lunit=km&limit=30&open_now=false&lang=en_US', options)

const obj=await respons.json()

if(obj.data !=undefined)
obj.data.forEach(element => {
	if(Object.keys(element).length!=8)
	{callback(element);}
		
	
});
		


}
	catch(err){console.log(err)};
}

//MAIN FN
search.addEventListener('keypress', function (ee) {
	if (ee.key === 'Enter') {	
hoteldata(search.value,callback=(location_id)=>{
	let tempo=document.createElement('div');
	//console.log(location_id);
	let i=0;

	attraction(location_id,callback=(e)=>{

		
		let div1=document.createElement('div');
		
		div1.innerHTML='<div class="Ddwn" data-scrol="#'+id_Array[i]+'">'+e.name+'<div class="subdiv inact" id="'+id_Array[i++]+'"><div class="Detail"><p>Type :<span style="margin-left: 35px;">'+e.subtype[0].name+'</span></p><p>Location :<span style="margin-left: 20px;">'+e.location_string+'</span></p><p>Address :<span style="margin-left: 27px;">'+e.address+'</span></p><p>Rating :<span style="margin-left: 45px;">'+e.rating+'</span></p><p>Contact :<span style="margin-left: 35px;">'+e.phone+'</span></p><p>Email :<span style="margin-left: 50px;">'+e.email+'</span></p><p>Official Page :<a style="margin-left: 35px;" href="'+e.website+'">Click here to Redirect</a></p></div><div class="Detailpic"><img src="'+e.photo.images.large.url+'"></div></div></div>'
			
		tempo.appendChild(div1)
		document.querySelector("#three").innerHTML=tempo.outerHTML;

		const scroll=document.querySelectorAll("[data-scrol]")

		scroll.forEach(e=>{
			e.addEventListener("click",()=>{
				const tget=document.querySelector(e.dataset.scrol)
				tget.classList.toggle('act');       
		
			})
		})
		


	})

	let tempp=document.createElement('div');

	restraunt(location_id,callback=(e)=>{

		
		let div1=document.createElement('div');
		
		div1.innerHTML='<div class="Ddwn" data-scrol="#'+id_Array[i]+'">'+e.name+'<div class="subdiv inact" id="'+id_Array[i++]+'"><div class="Detail"><p>Price Range :<span style="margin-left: 10px;">'+e.price+'</span></p><p>Location :<span style="margin-left: 20px;">'+e.location_string+'</span></p><p>Address :<span style="margin-left: 27px;">'+e.address+'</span></p><p>Rating :<span style="margin-left: 45px;">'+e.rating+'</span></p><p>Contact :<span style="margin-left: 35px;">'+e.phone+'</span></p><p>Email :<span style="margin-left: 50px;">'+e.email+'</span></p><p>Official Page :<a style="margin-left: 35px;" href="'+e.website+'">Click here to Redirect</a></p></div><div class="Detailpic"><img src="'+e.photo.images.large.url+'"></div></div></div>'
			
		tempp.appendChild(div1)
		document.querySelector("#one").innerHTML=tempp.outerHTML;

		const scroll=document.querySelectorAll("[data-scrol]")

		scroll.forEach(e=>{
			e.addEventListener("click",()=>{
				const tget=document.querySelector(e.dataset.scrol)
				tget.classList.toggle('act');       
		
			})
		})
		


	})


	/*
	hoteldata2(location_id,callbac=(arr)=>{
		console.log(arr);
	});
	
	hoteldata3('939892',callbac=(obj)=>{
		console.log(obj);
	});
	*/



}); 

search.value=null
	}
})








	
