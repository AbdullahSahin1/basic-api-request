import ImageItem from "./ImageItem";

function ImagesList({imagesPlaceholder}) {
    return (<div className="imageList">
        {imagesPlaceholder.map((image,index)=>{
          return <ImageItem key ={index} image={image}/>
        })}
    </div>  );
}

export default ImagesList;