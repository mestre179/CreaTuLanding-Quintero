import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';




const Item = ({id, nombre, img, i}) => {
        
    if (i %2 === 0) {
    return (      
        <Card className= ".item-card-container" style={{ backgroundColor: '#f1d566', height: '300px', margin: '10px'}}>
          
          <Card.Body style={{ height: '90%', margin: '10px', padding: '25px'}}>
          <Card.Img style={{ width: '350px', height: '120px'}} variant="top" src={img} />
          <Card.Title></Card.Title>
            <Button style={{ marginLeft: '120px', marginTop: '30px'}} variant="primary" className='boton-detalle2'><Link to={`/producto/${id}`} style={{ textDecoration: 'none'}}>Comprar</ Link></Button> 
          </Card.Body>
          
        </Card>
      )} else {
        return (      
          <Card className= ".item-card-container" style={{ backgroundColor: '#0a172d', height: '300px', margin: '10px'}}>
            
            <Card.Body style={{ height: '90%', margin: '10px', padding: '25px'}}>
            <Card.Img style={{ width: '350px', height: '120px'}} variant="top" src={img} />
            <Card.Title></Card.Title>
              <Button style={{ marginLeft: '120px', marginTop: '30px'}} variant="primary" className='boton-detalle'><Link to={`/producto/${id}`} style={{ textDecoration: 'none'}}>Comprar</ Link></Button> 
            </Card.Body>
            
          </Card>
        )
      };
}

export default Item