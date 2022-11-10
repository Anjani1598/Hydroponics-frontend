import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const [listofItems, setListofItems] = useState([]);
  const [renders, setRenders] = useState(false);

  const loggedInDetails = JSON.parse(
    window.localStorage.getItem("loginDetails")
  );

  const uuidKey = loggedInDetails.uuid;

  const getAllCartItems = () => {
    return axios
      .get(
        `http://localhost:8881/cart?key=${uuidKey}


        `
      )
      .then((response) => response.data);
  };

  const getAllItems = () => {
    getAllCartItems()
      .then((res) => {
        console.log(res);
        setListofItems(res);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400) {
          alert(err.response.data.message);
        }
      });
  };

  const decQtyHandler = (id) => {
    return axios
      .put(
        `http://localhost:8881/cart/reduceqty?itemId=${id}&key=${uuidKey}


    `
      )
      .then((response) => response.data);
  };

  const decQty = (id) => {
    console.log(id);

    decQtyHandler(id)
      .then((res) => {
        console.log(res);
        setRenders(!renders);
      })
      .catch((err) => {
        console.log(err);
        // if (err.response.status === 400) {
        //   alert(err.response.data.message);
        // }
      });
  };

  const incQtyHandler = (id) => {
    return axios
      .put(
        `http://localhost:8881/cart/increaseqty?customerItemId=${id}&key=${uuidKey}

    `
      )
      .then((response) => response.data);
  };
  const incQty = (id) => {
    incQtyHandler(id)
      .then((res) => {
        console.log(res);
        setRenders(!renders);
      })
      .catch((err) => {
        console.log(err);
        // if (err.response.status === 400) {
        //   alert(err.response.data.message);
        // }
      });
  };

  const removeItemHandler = (id) => {

    return axios.delete(`http://localhost:8881/cart/removeItem?customerItemId=${id}&key=${uuidKey}

    `).then((response) => response.data);

  }
  const removeItem = (id) => {
    removeItemHandler(id)
      .then((res) => {
        console.log(res);
        setRenders(!renders)
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400) {
          alert(err.response.data.message);
        }
      });
  };


  useEffect(() => {
    getAllItems();
  }, [renders]);
  return (
    <div style={{ margin: "60px" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Item Name</th>
            <th>Item Cost</th>
            <th>Quantity</th>
            <th>Total Cost</th>
          </tr>
        </thead>
        <tbody>
          {listofItems.map((eachItem, index) => {
            const { customerItemId, quantity, item } = eachItem;
            const { itemThumbnail, itemName, cost } = item;
            return (
              <tr key={customerItemId}>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      width: "200px",
                      height: "200px",
                    }}
                    src={itemThumbnail}
                    alt=""
                  />
                </td>
                <td>
                  <div>
                    <div>{itemName}</div>
                    Price-Rs-{cost}
                  </div>
                </td>
                <td>{cost}</td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      onClick={() => {
                        decQty(customerItemId);
                      }}
                      variant="outline-primary"
                    >
                      <h4>-</h4>
                    </Button>
                    {quantity}
                    <Button
                      onClick={() => {
                        incQty(customerItemId);
                      }}
                      variant="outline-primary"
                    >
                      <h4>+</h4>
                    </Button>
                  </div>
                </td>
                <td>
                    {quantity*cost}
                </td>
                <td>
                <Button
                      onClick={() => {
                        removeItem(customerItemId);
                      }}
                      variant="danger"
                    >
                      <h6>Remove</h6>
                    </Button>

                </td>
              </tr>
            );
          })}

          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
