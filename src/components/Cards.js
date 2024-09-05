import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from "./CardsData";
import  "./style.css";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slice/CartSlice";

function Cards() {
  const [data, setData] = useState(Cardsdata);
  const dispatch = useDispatch();
  const addCart = (payload)=>{
    dispatch(addItem(payload));
  }
  return (
    <div className="container mt-3">
      <h2 className="text-center">Add To Card </h2>
      <div className="row d-flex justify-content-center align-items-center">
          {data.map((element, id) => {
          return (
            <>
              <Card style={{ width: "22rem", border:"none" }} className="mx-2 mt-4 card_style">
                <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-" />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>
                    Price : ₹{element.price}
                  </Card.Text>
                  <Button variant="primary" className="col-lg-12"  onClick={()=>{addCart(element)}} >Add To Cart</Button>
                </Card.Body>
              </Card>
            </>
          );
        })} 
      </div>
    </div>
  );
}

export default Cards;
