import React from "react";
//import DataTable from "react-data-table-component";
import "./css/homeSection1.css";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import AppUrl from "../classes/AppUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import HomeSection2Edit from "./HomeSection2Edit";

const HomeSection2 = () => {
  const [main_title, setMainTitle] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   getData();
  // }, []);

  //update states
  // const [main_title_up, setMainTitleUp] = useState("");
  // const [title_up, setTitleUp] = useState("");
  // const [description_up, setDescriptionUp] = useState("");
  // const [category_up, setCategoryUp] = useState("");

  useEffect(() => {
    getData();
  }, []);

  //update states useEffect
  // useEffect(() => {
  //   setDescriptionValue();
  // }, [data]);

  // function setDescriptionValue(des) {
  //   setDescriptionUp(des);
  // }

  function getData() {
    axios
      .get(AppUrl.base_url + "homesection2Get")
      .then(function (response) {
        if (response) {
          setData(response.data);

          //console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // async function getData() {
  //   let result = await fetch(AppUrl.base_url + "homesection1Get");

  //   result = await result.json();
  //   setData(result);
  //   console.log(data);
  // }

  //add data
  async function addData() {
    const formData = new FormData();
    formData.append("main_title", main_title);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("image", image);

    let result = await fetch(AppUrl.base_url + "homesection2Add", {
      method: "POST",
      body: formData,
    });

    result = await result.json();

    if (result.success) {
      toast.success(result.success);
      setMainTitle("");
      setTitle("");
      setDescription("");
      setCategory("");
      setImage("");
    } else {
      toast.error(result.error);
    }

    getData();
  }

  //delete data
  async function deleteData(id) {
    let result = await fetch(AppUrl.base_url + "homesection2Delete/" + id, {
      method: "POST",
    });

    result = await result.json();

    if (result.success) {
      toast.success(result.success);
    } else {
      toast.error(result.error);
    }

    getData();
    closeDeleteModal(id);
  }

  // let title1;
  // data.map((item) => (title1 = item.homesection1_title));

  //console.log(title_up);

  //update data
  // async function updateData(id) {
  //   const formData = new FormData();
  //   formData.append("main_title_up", main_title_up);
  //   formData.append("title_up", title_up);
  //   formData.append("description_up", description_up);
  //   formData.append("category_up", category_up);

  //   let result = await fetch(AppUrl.base_url + "homesection2Update/" + id, {
  //     method: "POST",
  //     body: formData,
  //   });

  //   result = await result.json();

  //   if (result.success) {
  //     toast.success(result.success);

  //     getData();
  //     closeUpdateModal(id);
  //   } else {
  //     toast.error(result.error);
  //   }
  // }

  function openModal() {
    let element = document.getElementById("home_section_modal");
    ReactDOM.findDOMNode(element).classList.add("active_home_section_modal");
    ReactDOM.findDOMNode(element).classList.remove(
      "inactive_home_section_modal"
    );

    let element1 = document.getElementById("modal_blur_bg_add");
    ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  }

  function closeModalAdd() {
    let element = document.getElementById("home_section_modal");
    ReactDOM.findDOMNode(element).classList.add("inactive_home_section_modal");
    ReactDOM.findDOMNode(element).classList.remove("active_home_section_modal");

    let element1 = document.getElementById("modal_blur_bg_add");
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  }

  function closeModal(id) {
    let element1 = document.getElementById("modal_blur_bg" + id);
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");

    closeUpdateModal(id);
    closeDeleteModal(id);
  }

  function openUpdateModal(id) {
    let element = document.getElementById("home_section_modal_update" + id);
    ReactDOM.findDOMNode(element).classList.add(
      "active_home_section_modal_update"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "inactive_home_section_modal_update"
    );

    let element1 = document.getElementById("modal_blur_bg" + id);
    ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  }

  function closeUpdateModal(id) {
    let element = document.getElementById("home_section_modal_update" + id);
    ReactDOM.findDOMNode(element).classList.add(
      "inactive_home_section_modal_update"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "active_home_section_modal_update"
    );

    let element1 = document.getElementById("modal_blur_bg" + id);
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  }

  function openDeleteModal(id) {
    let element = document.getElementById("home_section_modal_delete" + id);
    ReactDOM.findDOMNode(element).classList.add(
      "active_home_section_modal_delete"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "inactive_home_section_modal_delete"
    );

    let element1 = document.getElementById("modal_blur_bg" + id);
    ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  }

  function closeDeleteModal(id) {
    let element = document.getElementById("home_section_modal_delete" + id);
    ReactDOM.findDOMNode(element).classList.add(
      "inactive_home_section_modal_delete"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "active_home_section_modal_delete"
    );

    let element1 = document.getElementById("modal_blur_bg" + id);
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  }
  return (
    <>
      <ToastContainer />
      <div className="container home_section_div">
        <div className="home_sections_title">
          <h4>Section 2</h4>
          <button
            className="btn btn-primary btn-sm home_sections_btn_add"
            onClick={() => openModal()}
          >
            Add
          </button>
        </div>
        <table className="table table-responsive table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Main Title</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.homesection2_id}>
                <td>{item.homesection2_main_title}</td>
                <td>
                  <img
                    src={AppUrl.image_url + item.homesection2_image}
                    alt={data.homesection2_title + " image"}
                  />
                </td>

                <td>{item.homesection2_title}</td>
                <td>{item.homesection2_description}</td>
                <td>{item.homesection2_category}</td>

                <td>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="home_section_edit"
                    onClick={() => openUpdateModal(item.homesection2_id)}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="home_section_delete"
                    onClick={() => openDeleteModal(item.homesection2_id)}
                  />
                </td>

                {/* update data modal */}
                <div
                  className="home_section_modal_update inactive_home_section_modal_update"
                  id={"home_section_modal_update" + item.homesection2_id}
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Update Section 2 Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() => closeUpdateModal(item.homesection2_id)}
                      />
                    </div>
                    <HomeSection2Edit
                      main_title_data={item.homesection2_main_title}
                      title_data={item.homesection2_title}
                      description_data={item.homesection2_description}
                      category_data={item.homesection2_category}
                      id_data={item.homesection2_id}
                      edit_data={data}
                      index_data={index}
                      get_data={getData}
                      close_update_modal={() =>
                        closeUpdateModal(item.homesection2_id)
                      }
                    />
                  </div>
                </div>

                {/* delete data modal */}
                <div
                  className="home_section_modal_delete inactive_home_section_modal_delete"
                  id={"home_section_modal_delete" + item.homesection2_id}
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Delete Section 2 Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() => closeDeleteModal(item.homesection2_id)}
                      />
                    </div>
                    <div className="card-body">
                      <label>Do you want to delete it?</label>

                      <div className="form-group">
                        <button
                          className="btn btn-danger form-control"
                          type="button"
                          onClick={() => deleteData(item.homesection2_id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* blur bg overlay */}
                <div
                  className="modal_blur_bg inactive_modal_blur_bg"
                  id={"modal_blur_bg" + item.homesection2_id}
                  onClick={() => closeModal(item.homesection2_id)}
                ></div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* add data modal */}
      <div
        className="home_section_modal inactive_home_section_modal"
        id="home_section_modal"
      >
        <div className="card">
          <div className="card-header">
            <p>Add Section 2 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeModalAdd()}
            />
          </div>
          <div className="card-body">
            <label>Main Title:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Main Title"
                className="form-control"
                value={main_title}
                onChange={(e) => setMainTitle(e.target.value)}
              />
            </div>

            <label>Title:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Title"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <label>Description:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Description"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <label>Category:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Category"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <label>Image:</label>
            <div className="form-group">
              <input
                type="file"
                className="form-control"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary form-control"
                type="button"
                onClick={() => addData()}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* blur bg overlay */}
      <div
        className="modal_blur_bg inactive_modal_blur_bg"
        id="modal_blur_bg_add"
        onClick={() => closeModalAdd()}
      ></div>
    </>
  );
};

export default HomeSection2;
