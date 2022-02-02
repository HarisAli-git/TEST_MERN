import { useEffect, useState} from "react";
import { Post_SignUpMongo, Fetch_cat_Mongo } from "../middleware/RESTapi_caller";

const NewProduct = () => {

    const [name, setName] = useState(' ');
    const [price, setPrice] = useState(' ');
    const [category, setCategory] = useState(' ');
    const [isPending, setIsPending] = useState(false);
    const [img_src, setImgSrc] = useState(' ');
    const [cat, setCat] = useState(' ');

    const FetchCategories = async (e) => {
      const resp = await Fetch_cat_Mongo()
      setCat(resp.data)
    }

    useEffect(() => {
        console.log("Mongo Categories_Mounted!!!");
        FetchCategories();
    }, []);

    const submitForm = async (e) => {
        e.preventDefault();
        const productOBJ = {category, name, price, img_src};
        setIsPending(true);

        const res = await Post_SignUpMongo(productOBJ);
        console.log(res);
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
                {console.log(cat)}
                {<select
                value = {category}
                onChange = {(e) => setCategory(e.target.value)}>
                {Object.values(cat).map((cats) => (
                 <option key={cats._id} value={cats.name}>{cats.name}</option>
                ))}
                </select>}
                {!isPending && <button>Add New Product</button>}
                {isPending && <button disabled>Adding New Product!...</button>}
            </form>
        </div>
        );
    }

export default NewProduct;