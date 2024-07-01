import React, { useContext } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";


const Item = ({id, nombre, descripcion, img, precio, stock}) => {
         
    return (      
        <Card style={{ width: '305px', margin: '10px'}}>
          <Card.Img style={{ width: '301px', height: '350px'}} variant="top" src={img} />
          <Card />
          <Card.Body>
            <Card.Title className="text-center">{nombre}</Card.Title>
            <Card.Text>
              <Link to={`/producto/${id}`}>Ver Detalles</ Link>
            </Card.Text>
            <Card.Title>
                {precio}
            </Card.Title>
            <ItemCount id={id} nombre={nombre} img={img} precio={precio} initialValue={1} stock={stock}></ItemCount>
          </Card.Body>
        </Card>
      );
}

export default Item