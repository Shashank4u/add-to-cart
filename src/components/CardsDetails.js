import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addItem, removeItem } from "../store/slice/CartSlice";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);

  const compare = () => {
    const comparedata = cartItems.filter((e) => e.id === parseInt(id));
    setData(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id, cartItems]);

  const addOne = (item) => {
    dispatch(addItem(item));
  };

  const removeOne = (item) => {
    dispatch(removeItem(item));
  };

  const deleteItem = (id) => {
    dispatch(removeItem(id));
    navigate("/");
  };

  if (data.length === 0) {
    return <h2>No item details found!</h2>;
  }

  return (
    <div className="container mt-2">
      <h2 className="text-center">Items Details Page</h2>
      <section className="container mt-3">
        <div className="iteamsdetails">
          {data.map((ele) => (
            <div key={ele.id}>
              <div className="details">
                <table style={{ borderSpacing: "10px" }}>
                  <tbody>
                    <tr>
                      <td>
                        <div className="items_img">
                          <img src={ele.imgdata} alt={ele.rname} />
                        </div>
                      </td>
                      <td>
                        <div style={{ margin: "10px" }}>
                          <p>
                            <strong>Restaurant</strong>: {ele.rname}
                          </p>
                          <p>
                            <strong>Price</strong>: ₹{ele.price}
                          </p>
                          <p>
                            <strong>Dishes</strong>: {ele.address}
                          </p>
                          <p>
                            <strong>Total</strong>: ₹{ele.price * ele.qnty}
                          </p>
                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => removeOne(ele)}
                            >
                              -
                            </span>
                            <span style={{ fontSize: 24 }}>{ele.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => addOne(ele)}
                            >
                              +
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p>
                          <strong>Rating</strong>:{" "}
                          <span
                            style={{
                              background: "green",
                              color: "#fff",
                              padding: "2px 5px",
                            }}
                          >
                            {ele.rating} ☆
                          </span>
                        </p>
                        <p>
                          <strong>Order Review</strong>: {ele.somedata}
                        </p>
                        <p>
                          <strong>Remove</strong>:{" "}
                          <i
                            className="fas fa-trash"
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            onClick={() => deleteItem(ele.id)}
                          ></i>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CardsDetails;
