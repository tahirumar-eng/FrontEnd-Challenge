import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const AddItems = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios.post("http://localhost:3000/items", { name, price });
      history.push("/items");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Put Item Up For Sale</h2>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div class="mb-4">
              <label for="price" class="form-label">
                Price
              </label>
              <input
                type="text"
                class="form-control"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            {/* <div class="mb-3">
              <input
                class="form-control"
                type="text"
                id="formFile"
                onChange={(e) => setImage(e.target.value)}
              />
            </div> */}
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        <div className="col-md-6">
          <img
            src="https://media.istockphoto.com/photos/shopping-online-concept-shopping-service-on-the-online-web-with-by-picture-id1133980246?k=6&m=1133980246&s=612x612&w=0&h=FeSvkjQBjMhru74vd2Y7o66QG7xtlG9j3pxpw9mb-BQ="
            alt="add-product-image"
          ></img>
        </div>
      </div>

      <div className="view_items">
        <Link to="/items">
          <button className="btn btn-secondary">View Items</button>
        </Link>
      </div>
    </div>
  );
};
export default AddItems;
