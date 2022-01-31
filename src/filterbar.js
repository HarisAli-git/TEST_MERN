import React, {Component} from "react"
import Main from './main'
import { PaginatedItems } from "./paginate";

class FilterBar extends Component
{
        constructor(props){
                super(props);

                this.state ={
                        currentCat: " ",
                        flag: false
                }
        }
        
        render()
        {
        
                return(<div>
        <div className="cont">
        <ul className="menu">
        <li><a href="#" className="menu-11">Any Category</a>
        <ul>
        <li><button onClick={() => {
            this.allClick();
          }}>All Categories</button></li>
        <li><button onClick={() => {
            this.pdClick();
          }}>TV</button></li>
        <li><button  onClick={() => {
            this.daClick();
          }}>Smartphone</button></li>
        <li><button  onClick={() => {
            this.wtClick();
          }}>HomeAppliance</button></li>
        <li><button  onClick={() => {
            this.asClick();
          }}>Spices</button></li>
        <li><button  onClick={() => {
            this.bfClick();
          }}>Books</button></li>
        
        </ul>
        </li>
        <li>
                <div className="Scont">
                        <input type="text" placeholder="Search Products" name="search"></input>
                </div>
        </li>
        </ul>
        </div>
        {/* <PaginatedItems itemsPerPage={3}> </PaginatedItems> */}
        <Main value={this.state.currentCat} flag={this.state.flag}></Main></div>
        );

        
        }
        pdClick()
        {
                let y = "TV";
                this.setState({ flag: true });
                this.setState({ currentCat: y });
        }
        daClick()
        {
                let y = "Smartphone";
                this.setState({ flag: true });
                this.setState({ currentCat: y });
        }
        wtClick()
        {
                let y = "HomeAppliance";
                this.setState({ flag: true });
                this.setState({ currentCat: y });
        }
        asClick()
        {
                let y = "Spices";
                this.setState({ flag: true });
                this.setState({ currentCat: y });
        }
        bfClick()
        {
                let y = "Books";
                this.setState({ flag: true });
                this.setState({ currentCat: y });
        }
        allClick()
        {
                let y = " ";
                this.setState({ flag: false });
                this.setState({ currentCat: y });
        }
}

export default FilterBar;