import { useState} from "react";
import { Post_SignUpCatMongo, Fetch_cat_Mongo } from "./RESTapi_caller";

const NewCategory = () => {

    const [name, setName] = useState(' ');
    const [isPending, setIsPending] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        const category = {name};
        setIsPending(true);

        Post_SignUpCatMongo(category).then(response => {
            console.log(response.data)
            }).catch(error => { console.log(error) });
    }

    return ( 
        <div className="create">
        {console.log("I am here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")}
            <h1><strong>Add a new Category</strong></h1>
            <form onSubmit={submitForm}>
                <label>Name: </label>
                <input
                    type = "text"
                    required
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                ></input>
                {!isPending && <button>Add New Category</button>}
                {isPending && <button disabled>Adding New Category!...</button>}
            </form>
        </div>
        );
    }

export default NewCategory;