import React from "react";
import { Fetch_prod_Mongo} from '../middleware/RESTapi_caller'
import Paginate from "./paginate";
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import { Card, Button, Alert } from "react-bootstrap"

const Main = ({value}) => { 

    const [Products, setProd] = useState(' ');
    const [currentPage, SetcurrentPage] = useState(1);
    const [productPerPage] = useState(3);

    useEffect(() => {
        console.log("Mongo Project_Mounted!!!");
        FetchProjects();
    }, [value])

    const FetchProjects  = async() => {
        const response = await Fetch_prod_Mongo();
        !value && setProd(response.data); 
        value && setProd(Object.values(response.data).filter(p => p.category === value));
    }

    const paginate = (number) => {
        SetcurrentPage(number)
    }

    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = Products.slice(indexOfFirstProduct, indexOfLastProduct);        

    return (<div>
      {!currentProducts &&
        <Alert variant="secondary"> Loading!!! </Alert>}
        <div class="container" className="b-co">
        <div>{<Display products={currentProducts}></Display>}</div>
        <div><Paginate productsPerPage={productPerPage} totalProducts={Products.length} paginate={paginate}/></div>
        </div>
      </div>)
}

const Display = ({products}) => {
    let a2 = Object.values(products).map((myprod) => (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={myprod.img_src} style={{ 'max-width': '200px', 'max-height': '280px' }}/>
        <Card.Body>
          <Card.Title>{myprod.name}</Card.Title>
          <p>{myprod.price}</p>
          <Card.Text>
            The Product Falls in the {myprod.category} category.
          </Card.Text>
          <Link to={`/${myprod._id}`}>
          <Button variant="primary">View Details!</Button>
          </Link>
        </Card.Body>
      </Card>
      <br />
    </div>
    ))

    return <ul>{a2}</ul>;
}

export default Main;