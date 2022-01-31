import { useEffect, useState} from "react";
import { Post_SignUpMongo, Fetch_cat_Mongo } from "./RESTapi_caller";

const NewProduct = () => {

    const [name, setName] = useState(' ');
    const [price, setPrice] = useState(' ');
    const [category, setCategory] = useState(' ');
    const [isPending, setIsPending] = useState(false);
    const [img_src, setImgSrc] = useState(' ');
    const [cat, setCat] = useState(' ');

    const FetchCategories = (e) => {
        Fetch_cat_Mongo().then((response) => {
            console.log(response.data);
            setCat(response.data);
            console.log(cat);
        });
        return [];
    }

    useEffect(() => {
        console.log("Mongo Categories_Mounted!!!");
        FetchCategories();
    }, []);

    const submitForm = (e) => {
        e.preventDefault();
        const productOBJ = {category, name, price, img_src};
        setIsPending(true);

        Post_SignUpMongo(productOBJ).then(response => {
        console.log(response.data)
        }).catch(error => { console.log(error) });
    } 
    return ( 
        <div className="create">
            <h1><strong>Add a new Product</strong></h1>
            <form onSubmit={submitForm}>
                <label>Name: </label>
                <input
                    type = "text"
                    required
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                ></input>
                <label>Image Source: </label>
                <input
                    type = "text"
                    required
                    value = {img_src}
                    onChange = {(e) => setImgSrc(e.target.value)}
                ></input>
                <label>Price: </label>
                <input
                    type = "number"
                    required
                    value = {price}
                    onChange = {(e) => setPrice(e.target.value)}
                ></input>
                <label>Category: </label>
                <select
                value = {category}
                onChange = {(e) => setCategory(e.target.value)}>
                    <option value="TV">TV</option>
                    <option value="Smartphone">Smartphone</option>
                    <option value="Spices">Spices</option>
                    <option value="HomeAppliance">HomeAppliance</option>
                    <option value="Books">Books</option>
                </select>
                {!isPending && <button>Add New Product</button>}
                {isPending && <button disabled>Adding New Product!...</button>}
            </form>
        </div>
        );
    }

export default NewProduct;