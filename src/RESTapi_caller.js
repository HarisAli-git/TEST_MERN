import axios from "axios"

function Fetch_prod_Mongo(param) {
    return axios({ method: "GET", url: "http://localhost:3000/products/" });
}

function Fetch_cat_Mongo(param) {
    return axios({ method: "GET", url: "http://localhost:3000/categories/" });
}

function Post_SignUpMongo(param) {

    const product = { category: param.category, name: param.name, price: param.price, img_src: param.img_src};

    return axios({
        method: "POST", url: "http://localhost:3000/addProduct/",
        data: product
    });
}

export { Post_SignUpMongo, Fetch_prod_Mongo, Fetch_cat_Mongo};