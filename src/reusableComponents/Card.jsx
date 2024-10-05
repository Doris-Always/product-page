const Card = ({image,description,price,key}) =>{
 return(
    <>
        <div className="card gap-x-1 mb-4  bg-white  overflow-hidden transform transition-all hover:shadow-2xl max-w-sm" key={key}>
        <div>
         <img src={image} alt={description} className="w-full h-64 object-cover"/> 
        </div>
           <h4 className="text-xl font-semibold mb-2 text-gray-800">{description}</h4>
           <p className="text-lg text-gray-600 mb-4">{price}</p>
        </div>
    </>
 )
}
export default Card;