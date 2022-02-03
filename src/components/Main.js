import React from "react";
import { FetchProdPaginateMongo} from '../middleware/RESTapi_caller'
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import { Card, Button, Alert } from "react-bootstrap"

const Main = ({value}) => { 

  const [page, setPage] = useState(1);
  const [Products, setProd] = useState([]);
  const [limit, setLimit] = useState(5);
  const [alert, setAlert] = useState(' ');

    useEffect(() => {
      console.log("Mongo Project_Mounted!!!");
      callAxios(1);
      setLimit(5);
    }, [value])

    const FetchProjects  = async() => {
        const response = await FetchProdPaginateMongo(1, 2);
        !value && setProd(response.data.data); 
        value && setProd((response.data.data).filter(p => p.category === value));
    }

    const callAxios = async (p1) => {
      if (p1 > limit)
      {
        p1 = limit;
      }
      if (p1 < 1)
      {
        p1 = 1;
      }
      setPage(p1);
      setAlert(' ')
      if (value)
      {
        console.log(value);
        const result = await FetchProdPaginateMongo(value, p1, 2);
        if(result.data.data.length === 0)
        {
          setLimit(p1);
          setAlert(<Alert variant="warning">
          No More products to Show!
      </Alert>);
        }
        setProd(result.data.data);
      }
      else{
        const result = await FetchProdPaginateMongo(-1, p1, 2);
        if(result.data.data.length === 0)
        {
          setLimit(p1);
          setAlert(<Alert variant="warning">
          No More products to Show!
      </Alert>);
        }
        setProd(result.data.data);
      } 
    }  

    return (<div>
      {!Products &&
        <Alert variant="secondary"> Loading!!! </Alert>}
        <div class="container" className="b-co">
        {alert}
        <div>{<Display products={Products}></Display>}</div>
        <Button variant="light" onClick={() => callAxios(page - 1)}>
          {'<<'} Back
        </Button>
        <Button variant="secondary">
          {page}
        </Button>
        <Button variant="light" onClick={() => callAxios(page + 1)}>
          Next {'>>'}
        </Button>
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

export {Main, Display};