import axios from "axios"

function Fetch_prod_Mongo(param) {
    return axios({ method: "GET", url: "http://localhost:3000/products/" });
}

function Fetch_cat_Mongo(param) {
    return axios({ method: "GET", url: "http://localhost:3000/categories/" });
}

function Fetch_Product_Mongo(id) {
    return axios({ method: "GET", url: "http://localhost:3000/" + id });
}

function Delete_Product_Mongo(id) {
    return axios({ method: "DELETE", url: "http://localhost:3000/" + id });
}

function Post_SignUpCatMongo(param)
{
    const category = { name: param.name};
    return axios({
        method: "POST", url: "http://localhost:3000/addCategory/",
        data: category
    });
}

function Post_SignUpMongo(param) {

    const product = { category: param.category, name: param.name, price: param.price, img_src: param.img_src};

    return axios({
        method: "POST", url: "http://localhost:3000/addProduct/",
        data: product
    });
}

export { Post_SignUpMongo, Post_SignUpCatMongo, Fetch_prod_Mongo, Fetch_cat_Mongo, Fetch_Product_Mongo, Delete_Product_Mongo};