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

const ServicesDetailsSection1 = () => {
  const [title1, setTitle1] = useState("");
  const [description1, setDescription1] = useState("");
  const [image, setImage] = useState("");
  const [title2, setTitle2] = useState("");
  const [description2, setDescription2] = useState("");
  const [list, setList] = useState("");
  const [title3, setTitle3] = useState("");
  const [description3, setDescription3] = useState("");

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   getData();
  // }, []);

  //update states
  const [title1_up, setTitle1Up] = useState("");
  const [description1_up, setDescription1Up] = useState("");
  const [title2_up, setTitle2Up] = useState("");
  const [description2_up, setDescription2Up] = useState("");
  const [list_up, setListUp] = useState("");
  const [title3_up, setTitle3Up] = useState("");
  const [description3_up, setDescription3Up] = useState("");

  const [image_up, setImageUp] = useState("");

  useEffect(() => {
    getData();
  }, []);

  //update states useEffect
  useEffect(() => {
    setTitle1Up(data.servicesdetailssection1_title1);
    setDescription1Up(data.servicesdetailssection1_description1);
    setTitle2Up(data.servicesdetailssection1_title2);
    setDescription2Up(data.servicesdetailssection1_description2);
    setListUp(data.servicesdetailssection1_list);
    setTitle3Up(data.servicesdetailssection1_title3);
    setDescription3Up(data.servicesdetailssection1_description3);
  }, [data]);

  function getData() {
    if (JSON.parse(localStorage.getItem("admin-info")) === "Login Successful") {
      axios
        .get(AppUrl.base_url + "servicesdetailssection1Get")
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
        .get(AppUrl.base_url + "servicesdetailssection1GetSuper")
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
    formData.append("title1", title1);
    formData.append("description1", description1);
    formData.append("image", image);
    formData.append("title2", title2);
    formData.append("description2", description2);
    formData.append("list", list);
    formData.append("title3", title3);
    formData.append("description3", description3);

    let result = await fetch(AppUrl.base_url + "servicesdetailssection1Add", {
      method: "POST",
      body: formData,
    });

    result = await result.json();

    if (result.success) {
      toast.success(result.success);
      setTitle1("");
      setDescription1("");
      setTitle2("");
      setDescription2("");
      setList("");
      setTitle3("");
      setDescription3("");
    } else {
      toast.error(result.error);
    }

    getData();
  }

  //delete data
  async function deleteData(id) {
    let result = await fetch(
      AppUrl.base_url + "servicesdetailssection1Delete/" + id,
      {
        method: "POST",
      }
    );

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
    let result = await fetch(
      AppUrl.base_url + "servicesdetailssection1Approve/" + id,
      {
        method: "POST",
      }
    );

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
    let result = await fetch(
      AppUrl.base_url + "servicesdetailssection1Decline/" + id,
      {
        method: "POST",
      }
    );

    result = await result.json();

    if (result.success) {
      toast.success(result.success);
    } else {
      toast.error(result.error);
    }

    getData();
    closeDeclineModal(id);
  }

  // let title1;
  // data.map((item) => (title1 = item.homesection1_title));

  //console.log(title_up);

  //update data
  async function updateData(id) {
    const formData = new FormData();
    formData.append("title1_up", title1_up);
    formData.append("description1_up", description1_up);
    formData.append("title2_up", title2_up);
    formData.append("description2_up", description2_up);
    formData.append("list_up", list_up);
    formData.append("title3_up", title3_up);
    formData.append("description3_up", description3_up);

    let result = await fetch(
      AppUrl.base_url + "servicesdetailssection1Update/" + id,
      {
        method: "POST",
        body: formData,
      }
    );

    result = await result.json();

    if (result.success) {
      toast.success(result.success);

      getData();
      closeUpdateModal(id);
    } else {
      toast.error(result.error);
    }
  }

  //update image
  async function updateImage(name) {
    const formData = new FormData();
    formData.append("image_up", image_up);

    let result = await fetch(
      AppUrl.base_url + "servicesdetailssection1UpdateImage/" + name,
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
    closeUpdateImageModal(data.servicesdetailssection1_image);
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
              <th scope="col">Title1</th>
              <th scope="col">Description1</th>

              <th scope="col">Image</th>

              <th scope="col">Title2</th>
              <th scope="col">Description2</th>
              <th scope="col">List</th>
              <th scope="col">Title3</th>
              <th scope="col">Description3</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.servicesdetailssection1_id !== undefined ? (
              <>
                <tr>
                  <td>{data.servicesdetailssection1_title1}</td>
                  <td>
                    {data.servicesdetailssection1_description1.substring(
                      0,
                      1000
                    )}
                  </td>

                  <td>
                    <img
                      src={
                        AppUrl.image_url + data.servicesdetailssection1_image
                      }
                      alt={data.servicesdetailssection1_title + " image1"}
                      onClick={() =>
                        openModalImage(data.servicesdetailssection1_image)
                      }
                    />
                  </td>

                  <td>{data.servicesdetailssection1_title2}</td>
                  <td>
                    {data.servicesdetailssection1_description2.substring(
                      0,
                      1000
                    )}
                  </td>
                  <td>{data.servicesdetailssection1_list}</td>

                  <td>{data.servicesdetailssection1_title3}</td>
                  <td>
                    {data.servicesdetailssection1_description3.substring(
                      0,
                      1000
                    )}
                  </td>

                  <td>
                    {JSON.parse(localStorage.getItem("admin-info")) ===
                    "Login Successful" ? (
                      <>
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="home_section_edit"
                          onClick={() =>
                            openUpdateModal(data.servicesdetailssection1_id)
                          }
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className="home_section_delete"
                          onClick={() =>
                            openDeleteModal(data.servicesdetailssection1_id)
                          }
                        />
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="home_section_edit"
                          onClick={() =>
                            openApproveModal(data.servicesdetailssection1_id)
                          }
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className="home_section_delete"
                          onClick={() =>
                            openDeclineModal(data.servicesdetailssection1_id)
                          }
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
              onClick={() => closeModal(data.servicesdetailssection1_id)}
            />
          </div>
          <div className="card-body">
            <label>Title1:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Title1"
                className="form-control"
                value={title1}
                onChange={(e) => setTitle1(e.target.value)}
              />
            </div>

            <label>Description1:</label>
            <div className="form-group">
              <textarea
                type="text"
                placeholder="Description1"
                className="form-control"
                rows="5"
                value={description1}
                onChange={(e) => setDescription1(e.target.value)}
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

            <label>Title2:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Title2"
                className="form-control"
                value={title2}
                onChange={(e) => setTitle2(e.target.value)}
              />
            </div>

            <label>Description2:</label>
            <div className="form-group">
              <textarea
                type="text"
                placeholder="Description2"
                className="form-control"
                rows="5"
                value={description2}
                onChange={(e) => setDescription2(e.target.value)}
              />
            </div>

            <label>List(use comma to separate):</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="List(use comma to separate)"
                className="form-control"
                value={list}
                onChange={(e) => setList(e.target.value)}
              />
            </div>

            <label>Title3:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Title3"
                className="form-control"
                value={title3}
                onChange={(e) => setTitle3(e.target.value)}
              />
            </div>

            <label>Description3:</label>
            <div className="form-group">
              <textarea
                type="text"
                placeholder="Description3"
                className="form-control"
                rows="5"
                value={description3}
                onChange={(e) => setDescription3(e.target.value)}
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
        id={"home_section_modal_update" + data.servicesdetailssection1_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Update Section 1 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeUpdateModal(data.servicesdetailssection1_id)}
            />
          </div>
          <div className="card-body">
            <label>Title1:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Title1"
                className="form-control"
                value={title1_up}
                onChange={(e) => setTitle1Up(e.target.value)}
              />
            </div>

            <label>Description1:</label>
            <div className="form-group">
              <textarea
                type="text"
                placeholder="Description1"
                className="form-control"
                rows="5"
                value={description1_up}
                onChange={(e) => setDescription1Up(e.target.value)}
              />
            </div>

            <label>Title2:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Title2"
                className="form-control"
                value={title2_up}
                onChange={(e) => setTitle2Up(e.target.value)}
              />
            </div>

            <label>Description2:</label>
            <div className="form-group">
              <textarea
                type="text"
                placeholder="Description2"
                className="form-control"
                rows="5"
                value={description2_up}
                onChange={(e) => setDescription2Up(e.target.value)}
              />
            </div>

            <label>List(use comma to separate):</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="List(use comma to separate)"
                className="form-control"
                value={list_up}
                onChange={(e) => setListUp(e.target.value)}
              />
            </div>

            <label>Title3:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Title3"
                className="form-control"
                value={title3_up}
                onChange={(e) => setTitle3Up(e.target.value)}
              />
            </div>

            <label>Description3:</label>
            <div className="form-group">
              <textarea
                type="text"
                placeholder="Description3"
                className="form-control"
                rows="5"
                value={description3_up}
                onChange={(e) => setDescription3Up(e.target.value)}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-success form-control"
                type="button"
                onClick={() => updateData(data.servicesdetailssection1_id)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* image update modal */}
      <div
        className="home_section_modal_image_update inactive_home_section_modal_image_update"
        id={data.servicesdetailssection1_image}
      >
        <div className="card">
          <div className="card-header">
            <p>Update Image Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() =>
                closeUpdateImageModal(data.servicesdetailssection1_image)
              }
            />
          </div>
          <div className="card-body">
            <label>Image:</label>
            <div className="form-group">
              <input
                type="file"
                placeholder="Image"
                className="form-control"
                onChange={(e) => setImageUp(e.target.files[0])}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-success form-control"
                type="button"
                onClick={() => updateImage(data.servicesdetailssection1_image)}
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
        id={"home_section_modal_delete" + data.servicesdetailssection1_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Delete Section 1 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeDeleteModal(data.servicesdetailssection1_id)}
            />
          </div>
          <div className="card-body">
            <label>Do you want to delete it?</label>

            <div className="form-group">
              <button
                className="btn btn-danger form-control"
                type="button"
                onClick={() => deleteData(data.servicesdetailssection1_id)}
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
        id={"home_section_modal_approve" + data.servicesdetailssection1_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Approve Section 1 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeApproveModal(data.servicesdetailssection1_id)}
            />
          </div>
          <div className="card-body">
            <label>Do you want to approve it?</label>

            <div className="form-group">
              <button
                className="btn btn-success form-control"
                type="button"
                onClick={() => approveData(data.servicesdetailssection1_id)}
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
        id={"home_section_modal_decline" + data.servicesdetailssection1_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Decline Section 1 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeDeclineModal(data.servicesdetailssection1_id)}
            />
          </div>
          <div className="card-body">
            <label>Do you want to decline it?</label>

            <div className="form-group">
              <button
                className="btn btn-danger form-control"
                type="button"
                onClick={() => declineData(data.servicesdetailssection1_id)}
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
        onClick={() => closeModal(data.servicesdetailssection1_id)}
      ></div>
    </>
  );
};

export default ServicesDetailsSection1;
