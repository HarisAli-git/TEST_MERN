import React, {Component} from "react"
import Main from '../components/Main'
import { useEffect, useState} from "react";
import { PaginatedItems } from "../components/paginate";
import { Dropdown } from "react-bootstrap"
import { Post_SignUpMongo, Fetch_cat_Mongo } from "../middleware/RESTapi_caller";

const FilterBar = () =>
{
  const [categories, setcategories] = useState(' ');
  const [currentCat, setcurrentCat] = useState(false);

    const FetchCategories = async (e) => {
      const resp = await Fetch_cat_Mongo()
      setcategories(resp.data)
    }

    useEffect(() => {
        console.log("Mongo Categories Mounted in Filter Categories!!!!!!");
        FetchCategories();
    }, []);

    return(
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter By Category
        </Dropdown.Toggle>

        <Dropdown.Menu>
        <Dropdown.Item onClick={() => {setcurrentCat(false)}}>Any Category</Dropdown.Item>
        {Object.values(categories).map((cats) => (
          <Dropdown.Item onClick = {(e) => setcurrentCat(cats.name)}>{cats.name}</Dropdown.Item>))}
        </Dropdown.Menu>
      </Dropdown>
      <br />
      <br />
      
      <Main value={currentCat}></Main>
    </div>);
  }

export default FilterBar;