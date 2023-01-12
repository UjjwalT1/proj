//Hotels in the neighbourhood
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

if(!respons.ok)
{		apiimg(query,url=>{
		console.log("ER",url)
		callback(url);
	})
}

const obj=await respons.json()
	obj.data.forEach(element => {
		if(element.result_type==='geos')
		callback(element.result_object.location_id);
			
		
	});



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
/*
if(!respons.ok)
{		apiimg(query,url=>{
		console.log("ER",url)
		callback(url);
	})
}
*/
const obj=await respons.json()
	console.log(obj)
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
				'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
			}
		};
		
		const respons=await	fetch('https://hotels4.p.rapidapi.com/properties/get-details?id=424023&checkIn=2020-01-08&checkOut=2020-01-15&adults1=1&currency=USD&locale=en_US', options)

const obj=await respons.json()
	console.log(obj)
	callback(obj)


}
	catch(err){console.log(err)};
}

hoteldata3('424023',callbac=(obj)=>{
	console.log(obj);
});

//MAIN FN
/*
hoteldata("san andreas",callback=(location_id)=>{
	//console.log(location_id);
	hoteldata2(location_id,callbac=(arr)=>{
		console.log(arr);
	});
	
	hoteldata3('939892',callbac=(obj)=>{
		console.log(obj);
	});
});

*/

/*
INSIDE DATA ARRAY-> INSIDE A SINGLE OBJECT

location_id:"125785"
name:"The Robin's Nest"
latitude:"38.19754"
longitude:"-120.68575"
num_reviews:"79"
timezone:"America/Los_Angeles"
location_string:"San Andreas, Calaveras County, California"
photo:
awards:
preferred_map_engine:"default"
autobroaden_type:"category_integrated"
autobroaden_label:"San Andreas Places to Stay"
raw_ranking:"3.792074203491211"
ranking_geo:"San Andreas"
ranking_geo_id:"33006"
ranking_position:"1"
ranking_denominator:"5"
ranking_category:"hotel"
ranking:"#1 Best Value of 5 places to stay in San Andreas"
subcategory_type:"hotel"
subcategory_type_label:"Hotel"
distance:"0.24532205486735884"
distance_string:null
bearing:"west"
rating:"5.0"
is_closed:false
is_long_closed:false
price_level:"$$"
price:"$157 - $179"
hotel_class:"3.0"
hotel_class_attribution:"This property is classified according to Giata."
business_listings:
special_offers:
listing_key:"ae8f8328-1960-4bc4-8b1a-98235b74ed99"
*/