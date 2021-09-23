import React from "react";
//import DataTable from "react-data-table-component";
import "./css/homeSection1.css";
import { faEdit, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import AppUrl from "../classes/AppUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const HomeSection1 = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   getData();
  // }, []);

  //update states
  const [title_up, setTitleUp] = useState("");
  const [description_up, setDescriptionUp] = useState("");
  const [category_up, setCategoryUp] = useState("");

  const [image1_up, setImage1Up] = useState("");
  const [image2_up, setImage2Up] = useState("");
  const [image3_up, setImage3Up] = useState("");
  const [image4_up, setImage4Up] = useState("");

  useEffect(() => {
    getData();
  }, []);

  //update states useEffect
  useEffect(() => {
    setTitleUp(data.homesection1_title);
    setDescriptionUp(data.homesection1_description);
    setCategoryUp(data.homesection1_category);
  }, [data]);

  function getData() {
    if (JSON.parse(localStorage.getItem("admin-info")) === "Login Successful") {
      axios
        .get(AppUrl.base_url + "homesection1Get")
        .then(function (response) {
          if (response) {
            setData(response.data);

            //console.log(response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .get(AppUrl.base_url + "homesection1GetSuper")
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
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("image1", image1);
    formData.append("image2", image2);
    formData.append("image3", image3);
    formData.append("image4", image4);

    let result = await fetch(AppUrl.base_url + "homesection1Add", {
      method: "POST",
      body: formData,
    });

    result = await result.json();

    if (result.success) {
      toast.success(result.success);
      setTitle("");
      setDescription("");
      setCategory("");
      setImage1("");
      setImage2("");
      setImage3("");
      setImage4("");
    } else {
      toast.error(result.error);
    }

    getData();
  }

  //delete data
  async function deleteData(id) {
    let result = await fetch(AppUrl.base_url + "homesection1Delete/" + id, {
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

  //approve data
  async function approveData(id) {
    let result = await fetch(AppUrl.base_url + "homesection1Approve/" + id, {
      method: "POST",
    });

    result = await result.json();

    if (result.success) {
      toast.success(result.success);
    } else {
      toast.error(result.error);
    }

    getData();
    closeApproveModal(id);
  }

  //decline data
  async function declineData(id) {
    let result = await fetch(AppUrl.base_url + "homesection1Decline/" + id, {
      method: "POST",
    });

    result = await result.json();

    if (result.success) {
      toast.success(result.success);
    } else {
      toast.error(result.error);
    }

    getData();
    closeDeclineModal(id);
  }

  //update data
  async function updateData(id) {
    const formData = new FormData();
    formData.append("title_up", title_up);
    formData.append("description_up", description_up);
    formData.append("category_up", category_up);

    let result = await fetch(AppUrl.base_url + "homesection1Update/" + id, {
      method: "POST",
      body: formData,
    });

    result = await result.json();

    if (result.success) {
      toast.success(result.success);

      getData();
      closeUpdateModal(id);
    } else {
      toast.error(result.error);
    }
  }

  //update image1
  async function updateImage1(name) {
    const formData = new FormData();
    formData.append("image1_up", image1_up);

    let result = await fetch(
      AppUrl.base_url + "homesection1UpdateImage1/" + name,
      {
        method: "POST",
        body: formData,
      }
    );

    result = await result.json();

    if (result.success) {
      toast.success(result.success);

      getData();
      closeUpdateImageModal(name);
    } else {
      toast.error(result.error);
    }
  }

  //update image2
  async function updateImage2(name) {
    const formData = new FormData();
    formData.append("image2_up", image2_up);

    let result = await fetch(
      AppUrl.base_url + "homesection1UpdateImage2/" + name,
      {
        method: "POST",
        body: formData,
      }
    );

    result = await result.json();

    if (result.success) {
      toast.success(result.success);

      getData();
      closeUpdateImageModal(name);
    } else {
      toast.error(result.error);
    }
  }

  //update image3
  async function updateImage3(name) {
    const formData = new FormData();
    formData.append("image3_up", image3_up);

    let result = await fetch(
      AppUrl.base_url + "homesection1UpdateImage3/" + name,
      {
        method: "POST",
        body: formData,
      }
    );

    result = await result.json();

    if (result.success) {
      toast.success(result.success);

      getData();
      closeUpdateImageModal(name);
    } else {
      toast.error(result.error);
    }
  }

  //update image4
  async function updateImage4(name) {
    const formData = new FormData();
    formData.append("image4_up", image4_up);

    let result = await fetch(
      AppUrl.base_url + "homesection1UpdateImage4/" + name,
      {
        method: "POST",
        body: formData,
      }
    );

    result = await result.json();

    if (result.success) {
      toast.success(result.success);

      getData();
      closeUpdateImageModal(name);
    } else {
      toast.error(result.error);
    }
  }

  function openModal() {
    let element = document.getElementById("home_section_modal");
    ReactDOM.findDOMNode(element).classList.add("active_home_section_modal");
    ReactDOM.findDOMNode(element).classList.remove(
      "inactive_home_section_modal"
    );

    let element1 = document.getElementById("modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  }

  function closeModal(id) {
    let element = document.getElementById("home_section_modal");
    ReactDOM.findDOMNode(element).classList.add("inactive_home_section_modal");
    ReactDOM.findDOMNode(element).classList.remove("active_home_section_modal");

    let element1 = document.getElementById("modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");

    closeUpdateModal(id);
    closeDeleteModal(id);
    closeApproveModal(id);
    closeDeclineModal(id);
    closeUpdateImageModal(data.homesection1_image1);
    closeUpdateImageModal(data.homesection1_image2);
    closeUpdateImageModal(data.homesection1_image3);
    closeUpdateImageModal(data.homesection1_image4);
  }

  function openUpdateModal(id) {
    let element = document.getElementById("home_section_modal_update" + id);
    ReactDOM.findDOMNode(element).classList.add(
      "active_home_section_modal_update"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "inactive_home_section_modal_update"
    );

    let element1 = document.getElementById("modal_blur_bg");
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

    let element1 = document.getElementById("modal_blur_bg");
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

    let element1 = document.getElementById("modal_blur_bg");
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

    let element1 = document.getElementById("modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  }

  function openApproveModal(id) {
    let element = document.getElementById("home_section_modal_approve" + id);
    ReactDOM.findDOMNode(element).classList.add(
      "active_home_section_modal_delete"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "inactive_home_section_modal_delete"
    );

    let element1 = document.getElementById("modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  }

  function closeApproveModal(id) {
    let element = document.getElementById("home_section_modal_approve" + id);
    ReactDOM.findDOMNode(element).classList.add(
      "inactive_home_section_modal_delete"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "active_home_section_modal_delete"
    );

    let element1 = document.getElementById("modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  }

  function openDeclineModal(id) {
    let element = document.getElementById("home_section_modal_decline" + id);
    ReactDOM.findDOMNode(element).classList.add(
      "active_home_section_modal_delete"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "inactive_home_section_modal_delete"
    );

    let element1 = document.getElementById("modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  }

  function closeDeclineModal(id) {
    let element = document.getElementById("home_section_modal_decline" + id);
    ReactDOM.findDOMNode(element).classList.add(
      "inactive_home_section_modal_delete"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "active_home_section_modal_delete"
    );

    let element1 = document.getElementById("modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  }

  function openModalImage(id) {
    let element = document.getElementById(id);
    ReactDOM.findDOMNode(element).classList.add(
      "active_home_section_modal_image_update"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "inactive_home_section_modal_image_update"
    );

    let element1 = document.getElementById("modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  }

  function closeUpdateImageModal(id) {
    let element = document.getElementById(id);
    ReactDOM.findDOMNode(element).classList.add(
      "inactive_home_section_modal_image_update"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "active_home_section_modal_image_update"
    );

    let element1 = document.getElementById("modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  }
  return (
    <>
      <ToastContainer />
      <div className="container home_section_div">
        <div className="home_sections_title">
          <h4>Section 1</h4>
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
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Image1</th>
              <th scope="col">Image2</th>
              <th scope="col">Image3</th>
              <th scope="col">Image4</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.homesection1_id !== undefined ? (
              <>
                <tr>
                  <td>{data.homesection1_title}</td>
                  <td>{data.homesection1_description}</td>
                  <td>{data.homesection1_category}</td>
                  <td>
                    <img
                      src={AppUrl.image_url + data.homesection1_image1}
                      alt={data.homesection1_title + " image1"}
                      onClick={() => openModalImage(data.homesection1_image1)}
                    />
                  </td>
                  <td>
                    <img
                      src={AppUrl.image_url + data.homesection1_image2}
                      alt={data.homesection1_title + " image2"}
                      onClick={() => openModalImage(data.homesection1_image2)}
                    />
                  </td>
                  <td>
                    <img
                      src={AppUrl.image_url + data.homesection1_image3}
                      alt={data.homesection1_title + " image3"}
                      onClick={() => openModalImage(data.homesection1_image3)}
                    />
                  </td>
                  <td>
                    <img
                      src={AppUrl.image_url + data.homesection1_image4}
                      alt={data.homesection1_title + " image4"}
                      onClick={() => openModalImage(data.homesection1_image4)}
                    />
                  </td>

                  <td>
                    {JSON.parse(localStorage.getItem("admin-info")) ===
                    "Login Successful" ? (
                      <>
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="home_section_edit"
                          onClick={() => openUpdateModal(data.homesection1_id)}
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className="home_section_delete"
                          onClick={() => openDeleteModal(data.homesection1_id)}
                        />
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="home_section_edit"
                          onClick={() => openApproveModal(data.homesection1_id)}
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className="home_section_delete"
                          onClick={() => openDeclineModal(data.homesection1_id)}
                        />
                      </>
                    )}
                  </td>
                </tr>
              </>
            ) : (
              <></>
            )}
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
            <p>Add Section 1 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeModal(data.homesection1_id)}
            />
          </div>
          <div className="card-body">
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

            <label>Image1:</label>
            <div className="form-group">
              <input
                type="file"
                className="form-control"
                onChange={(e) => setImage1(e.target.files[0])}
              />
            </div>

            <label>Image2:</label>
            <div className="form-group">
              <input
                type="file"
                className="form-control"
                onChange={(e) => setImage2(e.target.files[0])}
              />
            </div>

            <label>Image3:</label>
            <div className="form-group">
              <input
                type="file"
                className="form-control"
                onChange={(e) => setImage3(e.target.files[0])}
              />
            </div>

            <label>Image4:</label>
            <div className="form-group">
              <input
                type="file"
                className="form-control"
                onChange={(e) => setImage4(e.target.files[0])}
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

      {/* update data modal */}
      <div
        className="home_section_modal_update inactive_home_section_modal_update"
        id={"home_section_modal_update" + data.homesection1_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Update Section 1 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeUpdateModal(data.homesection1_id)}
            />
          </div>
          <div className="card-body">
            <label>Title:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Title"
                className="form-control"
                value={title_up}
                onChange={(e) => setTitleUp(e.target.value)}
              />
            </div>

            <label>Description:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Description"
                className="form-control"
                value={description_up}
                onChange={(e) => setDescriptionUp(e.target.value)}
              />
            </div>

            <label>Category:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Category"
                className="form-control"
                value={category_up}
                onChange={(e) => setCategoryUp(e.target.value)}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-success form-control"
                type="button"
                onClick={() => updateData(data.homesection1_id)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* image1 update modal */}
      <div
        className="home_section_modal_image_update inactive_home_section_modal_image_update"
        id={data.homesection1_image1}
      >
        <div className="card">
          <div className="card-header">
            <p>Update Image 1 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeUpdateImageModal(data.homesection1_image1)}
            />
          </div>
          <div className="card-body">
            <label>Image1:</label>
            <div className="form-group">
              <input
                type="file"
                placeholder="Image1"
                className="form-control"
                onChange={(e) => setImage1Up(e.target.files[0])}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-success form-control"
                type="button"
                onClick={() => updateImage1(data.homesection1_image1)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* image2 update modal */}
      <div
        className="home_section_modal_image_update inactive_home_section_modal_image_update"
        id={data.homesection1_image2}
      >
        <div className="card">
          <div className="card-header">
            <p>Update Image 2 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeUpdateImageModal(data.homesection1_image2)}
            />
          </div>
          <div className="card-body">
            <label>Image2:</label>
            <div className="form-group">
              <input
                type="file"
                placeholder="Image2"
                className="form-control"
                onChange={(e) => setImage2Up(e.target.files[0])}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-success form-control"
                type="button"
                onClick={() => updateImage2(data.homesection1_image2)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* image3 update modal */}
      <div
        className="home_section_modal_image_update inactive_home_section_modal_image_update"
        id={data.homesection1_image3}
      >
        <div className="card">
          <div className="card-header">
            <p>Update Image 3 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeUpdateImageModal(data.homesection1_image3)}
            />
          </div>
          <div className="card-body">
            <label>Image3:</label>
            <div className="form-group">
              <input
                type="file"
                placeholder="Image3"
                className="form-control"
                onChange={(e) => setImage3Up(e.target.files[0])}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-success form-control"
                type="button"
                onClick={() => updateImage3(data.homesection1_image3)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* image4 update modal */}
      <div
        className="home_section_modal_image_update inactive_home_section_modal_image_update"
        id={data.homesection1_image4}
      >
        <div className="card">
          <div className="card-header">
            <p>Update Image 4 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeUpdateImageModal(data.homesection1_image4)}
            />
          </div>
          <div className="card-body">
            <label>Image4:</label>
            <div className="form-group">
              <input
                type="file"
                placeholder="Image4"
                className="form-control"
                onChange={(e) => setImage4Up(e.target.files[0])}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-success form-control"
                type="button"
                onClick={() => updateImage4(data.homesection1_image4)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* delete data modal */}
      <div
        className="home_section_modal_delete inactive_home_section_modal_delete"
        id={"home_section_modal_delete" + data.homesection1_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Delete Section 1 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeDeleteModal(data.homesection1_id)}
            />
          </div>
          <div className="card-body">
            <label>Do you want to delete it?</label>

            <div className="form-group">
              <button
                className="btn btn-danger form-control"
                type="button"
                onClick={() => deleteData(data.homesection1_id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* approve data modal */}
      <div
        className="home_section_modal_delete inactive_home_section_modal_delete"
        id={"home_section_modal_approve" + data.homesection1_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Approve Section 1 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeApproveModal(data.homesection1_id)}
            />
          </div>
          <div className="card-body">
            <label>Do you want to approve it?</label>

            <div className="form-group">
              <button
                className="btn btn-success form-control"
                type="button"
                onClick={() => approveData(data.homesection1_id)}
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* decline data modal */}
      <div
        className="home_section_modal_delete inactive_home_section_modal_delete"
        id={"home_section_modal_decline" + data.homesection1_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Decline Section 1 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeDeclineModal(data.homesection1_id)}
            />
          </div>
          <div className="card-body">
            <label>Do you want to decline it?</label>

            <div className="form-group">
              <button
                className="btn btn-danger form-control"
                type="button"
                onClick={() => declineData(data.homesection1_id)}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* blur bg overlay */}
      <div
        className="modal_blur_bg inactive_modal_blur_bg"
        id="modal_blur_bg"
        onClick={() => closeModal(data.homesection1_id)}
      ></div>
    </>
  );
};

export default HomeSection1;
