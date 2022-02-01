import { useParams } from "react-router-dom";
import {Fetch_Product_Mongo, Delete_Product_Mongo} from "./RESTapi_caller";
import { useEffect, useState} from "react";
import { Route } from "react-router-dom";


const ViewProduct = () => {

    const { id } = useParams();

    const [prod, setProd] = useState(' ');

    const FetchProduct = (e) => {
        Fetch_Product_Mongo(id).then((response) => {
            console.log("Here is response: ", response.data.product);
            setProd(response.data.product)
            console.log("Here is product: ", prod);
        });
        return [];
    }

    useEffect(() => {
        console.log("Mongo Single Product Mounted!!!");
        FetchProduct();
    }, []);

    const deleteProduct = () => {
        Delete_Product_Mongo(id);
        return (<Route render={({ history}) => (
        history.push("/") )} />)
    } 

    return (  
        <div className="ViewArticle">
            <h1>Product Details:- </h1>
            { prod && (<div>
                <h2>{prod.name}</h2>
                <h4>{prod.category}</h4>
                <p><strong>Price:</strong> {prod.price}</p>
                <img className="img-src-single" src={prod.img_src}/>
                <button 
                onClick={deleteProduct}> Delete Product!</button>
            </div>)
            }
        </div>
    );
}
 
export default ViewProduct;