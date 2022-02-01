import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Fetch_prod_Mongo} from './RESTapi_caller'
import Paginate from "./paginate";
import { Link } from "react-router-dom";

class Main extends Component {

    constructor(props)
    {
        super(props);

        this.state={
            Products: [],
            currentPage: 1,
            productPerPage: 3
        };

    }

componentDidMount() {
    console.log("Mongo Project_Mounted!!!");
    this.FetchProjects();
}

FetchProjects() {
    Fetch_prod_Mongo().then((response) => {
        console.log(response.data);
        this.setState({Products: response.data});
    });
    return [];
}

    render(){ 
    {

    const paginate = (number) => {
        this.setState({
            currentPage: number,
        })
    }

    const indexOfLastProduct = this.state.currentPage * this.state.productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - this.state.productPerPage;
    const currentProducts = this.state.Products.slice(indexOfFirstProduct, indexOfLastProduct);        

    return (<div>
        <div class="container" className="cont1">
        <div class="container" className="b-h">
            <div class="container" className="b-h1">
                <h2 className="b-h1e">Results</h2>
            </div>
            <div class="container" classNamw="b-h2">
                <h2 className="b-h2e">Sort By</h2>
            </div>
        </div>
        </div>
        <div class="container" className="b-co">
        <div>{ this.props.flag && <Display products={currentProducts.filter(p => p.category === this.props.value)}></Display>}</div>
        <div>{ !this.props.flag && <Display products={currentProducts}></Display>}</div>
        <div><Paginate productsPerPage={this.state.productPerPage} totalProducts={this.state.Products.length} paginate={paginate}/></div>
        </div>
        </div>)
}

}

};

function Display(param) {
    let a1 = param.products;
    let a2 = a1.map((myprod) => (
        <div class="container-fluid" className="open-cont">
            <div class="container" className="course-cont">
            <Link to={`/${myprod._id}`}>
            <img className="course-img" src = {myprod.img_src}></img>
            <div className="cpc">
                <p className="cp">{myprod.name}</p>
                <p className="cp-l">{myprod.price}</p>
                <p className="cp1">{myprod.category}</p>
            </div>
            </Link>
            </div>
        </div>
    ))

    return <ul>{a2}</ul>;
}

export default Main;