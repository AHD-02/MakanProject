
const Banner = () => 
{
    
    return(
     <div className = "flex flex-row mr-0">


    <div style= {{width: "545px" ,height: "300px"}} className = "bg-no-repeat	bg-cover bg-[url('https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/farm-chalet.jpg')] w-1/2 h-1/2 text-center brightness-75 hover:brightness-100 cursor-pointer">
    <h1 className = "pt-32 text-4xl text-blue font-arial">Farm</h1>
    </div>

    
    <a href = "#" target = "_self">        
    <div style = {{width: "545px", height: "300px"}} className = " bg-no-repeat	 bg-cover bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1200px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg')] text-center brightness-75 hover:brightness-100 cursor-pointer">
    <h1 className = "pt-32 text-center text-white text-3xl font-copperplate">Makan</h1>

    </div>
    </a>

    </div>
    )
}
export default Banner
