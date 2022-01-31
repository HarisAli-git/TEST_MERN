import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Fetch_prod_Mongo} from './RESTapi_caller'
import { PaginatedItems } from './paginate'

class Main extends Component {

    constructor(props)
    {
        super(props);

        this.state={
            Products: [],
        };

    }

    render(){ 
    {
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
        <div>{ this.props.flag && <Display products={this.state.Products.filter(p => p.category === this.props.value)}></Display>}</div>
        <div>{ !this.props.flag && <Display products={this.state.Products}></Display>}</div>
        {/* <div><PaginatedItems itemsPerPage={1}/>,</div> */}
        </div>
        </div>)
}

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

};

function Display(param) {
    let a1 = param.products;
    let a2 = a1.map((myprod) => (
        <div class="container-fluid" className="open-cont">
            <div class="container" className="course-cont">
            <img className="course-img" src = {myprod.img_src}></img>
            <div className="cpc">
                <p className="cp">{myprod.name}</p>
                <p className="cp-l">{myprod.price}</p>
                <p className="cp1">{myprod.category}</p>
            </div>
            </div>
        </div>
    ))

    return <ul>{a2}</ul>;
}

function upMenu()
{
    <div classNameName="cont1">
        <div classNameName="b-h">
            <div classNameName="b-h1">
                <h2 classNameName="b-h1e">Results</h2>
            </div>
            <div classNameNamw="b-h2">
                <h2 classNameName="b-h2e">Sort By</h2>
            </div>
        </div>
    </div>
}



export default Main;