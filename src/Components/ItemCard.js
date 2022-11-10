import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemCard = ({categoryId, cost, itemId, itemName, itemThumbnail }) => {

   

    const addItemToCartHandler = () => {
      const loggedInDetails = JSON.parse(
        window.localStorage.getItem("loginDetails")
      );
    
      const uuidKey = loggedInDetails.uuid;

        return axios.post(`http://localhost:8881/cart?itemId=${itemId}&key=${uuidKey}
        `).then((response) => response.data);
    
      }
    
      const addItemToCart = (id) => {
        

        const loggedInDetails = null || JSON.parse(
            window.localStorage.getItem("loginDetails")
          );
          if(loggedInDetails == null ){
            alert("Please Login First to add items in your cart")
            window.location.href="/login"
          }
        
         
        
    
        
    
        addItemToCartHandler().then((res) => {
          console.log(res);
          alert("added successfully");
          
          
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 400) {
            alert(err.response.data.message);
          }
        });
    
    
    
       
      };
    
    
  return (
    <Card style={{ width: "18rem", height: "auto" }}>
      <Card.Img style={{ height: "18rem" }} variant="top" src={itemThumbnail} />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>{itemName}</Card.Title>
        <Card.Text>Price-Rs-{cost}</Card.Text>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop:'20px' }}>
          <Button variant="warning" onClick={addItemToCart}>Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
