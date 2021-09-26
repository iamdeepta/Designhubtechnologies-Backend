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

const HomeSection2Header = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   getData();
  // }, []);

  //update states
  const [title_up, setTitleUp] = useState("");
  const [category_up, setCategoryUp] = useState("");

  useEffect(() => {
    getDataHeader();
  }, []);

  //update states useEffect
  useEffect(() => {
    setTitleUp(data.homesection2_header_title);
    setCategoryUp(data.homesection2_header_category);
  }, [data]);

  function getDataHeader() {
    if (JSON.parse(localStorage.getItem("admin-info")) === "Login Successful") {
      axios
        .get(AppUrl.base_url + "homesection2HeaderGet")
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
        .get(AppUrl.base_url + "homesection2HeaderGetSuper")
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
  async function addDataHeader() {
    const formData = new FormData();
    formData.append("title", title);

    formData.append("category", category);

    let result = await fetch(AppUrl.base_url + "homesection2HeaderAdd", {
      method: "POST",
      body: formData,
    });

    result = await result.json();

    if (result.success) {
      toast.success(result.success);
      setTitle("");
      setCategory("");
    } else {
      toast.error(result.error);
    }

    getDataHeader();
  }

  //delete data
  async function deleteDataHeader(id) {
    let result = await fetch(
      AppUrl.base_url + "homesection2HeaderDelete/" + id,
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

    getDataHeader();
    closeDeleteModalHeader(id);
  }

  //approve data
  async function approveDataHeader(id) {
    let result = await fetch(
      AppUrl.base_url + "homesection2HeaderApprove/" + id,
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

    getDataHeader();
    closeApproveModalHeader(id);
  }

  //decline data
  async function declineDataHeader(id) {
    let result = await fetch(
      AppUrl.base_url + "homesection2HeaderDecline/" + id,
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

    getDataHeader();
    closeDeclineModalHeader(id);
  }

  // let title1;
  // data.map((item) => (title1 = item.homesection1_title));

  //console.log(title_up);

  //update data
  async function updateDataHeader(id) {
    const formData = new FormData();
    formData.append("title_up", title_up);
    formData.append("category_up", category_up);

    let result = await fetch(
      AppUrl.base_url + "homesection2HeaderUpdate/" + id,
      {
        method: "POST",
        body: formData,
      }
    );

    result = await result.json();

    if (result.success) {
      toast.success(result.success);

      getDataHeader();
      closeUpdateModalHeader(id);
    } else {
      toast.error(result.error);
    }
  }

  function openModalHeader() {
    let element = document.getElementById("home_section_modal_header");
    ReactDOM.findDOMNode(element).classList.add("active_home_section_modal");
    ReactDOM.findDOMNode(element).classList.remove(
      "inactive_home_section_modal"
    );

    let element1 = document.getElementById("modal_blur_bg_header");
    ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  }

  function closeModalHeader(id) {
    let element = document.getElementById("home_section_modal_header");
    ReactDOM.findDOMNode(element).classList.add("inactive_home_section_modal");
    ReactDOM.findDOMNode(element).classList.remove("active_home_section_modal");

    let element1 = document.getElementById("modal_blur_bg_header");
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");

    closeUpdateModalHeader(id);
    closeDeleteModalHeader(id);
    closeApproveModalHeader(id);
    closeDeclineModalHeader(id);
  }

  function openUpdateModalHeader(id) {
    let element = document.getElementById(
      "home_section_modal_update_header" + id
    );
    ReactDOM.findDOMNode(element).classList.add(
      "active_home_section_modal_update"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "inactive_home_section_modal_update"
    );

    let element1 = document.getElementById("modal_blur_bg_header");
    ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  }

  function closeUpdateModalHeader(id) {
    let element = document.getElementById(
      "home_section_modal_update_header" + id
    );
    ReactDOM.findDOMNode(element).classList.add(
      "inactive_home_section_modal_update"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "active_home_section_modal_update"
    );

    let element1 = document.getElementById("modal_blur_bg_header");
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  }

  function openDeleteModalHeader(id) {
    let element = document.getElementById(
      "home_section_modal_delete_header" + id
    );
    ReactDOM.findDOMNode(element).classList.add(
      "active_home_section_modal_delete"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "inactive_home_section_modal_delete"
    );

    let element1 = document.getElementById("modal_blur_bg_header");
    ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  }

  function closeDeleteModalHeader(id) {
    let element = document.getElementById(
      "home_section_modal_delete_header" + id
    );
    ReactDOM.findDOMNode(element).classList.add(
      "inactive_home_section_modal_delete"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "active_home_section_modal_delete"
    );

    let element1 = document.getElementById("modal_blur_bg_header");
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  }

  function openApproveModalHeader(id) {
    let element = document.getElementById(
      "home_section_modal_approve_header" + id
    );
    ReactDOM.findDOMNode(element).classList.add(
      "active_home_section_modal_delete"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "inactive_home_section_modal_delete"
    );

    let element1 = document.getElementById("modal_blur_bg_header");
    ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  }

  function closeApproveModalHeader(id) {
    let element = document.getElementById(
      "home_section_modal_approve_header" + id
    );
    ReactDOM.findDOMNode(element).classList.add(
      "inactive_home_section_modal_delete"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "active_home_section_modal_delete"
    );

    let element1 = document.getElementById("modal_blur_bg_header");
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  }

  function openDeclineModalHeader(id) {
    let element = document.getElementById(
      "home_section_modal_decline_header" + id
    );
    ReactDOM.findDOMNode(element).classList.add(
      "active_home_section_modal_delete"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "inactive_home_section_modal_delete"
    );

    let element1 = document.getElementById("modal_blur_bg_header");
    ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  }

  function closeDeclineModalHeader(id) {
    let element = document.getElementById(
      "home_section_modal_decline_header" + id
    );
    ReactDOM.findDOMNode(element).classList.add(
      "inactive_home_section_modal_delete"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "active_home_section_modal_delete"
    );

    let element1 = document.getElementById("modal_blur_bg_header");
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  }

  return (
    <>
      <ToastContainer />
      <div className="container home_section_div">
        <div className="home_sections_title">
          <h4>Section 2 Header</h4>
          <button
            className="btn btn-primary btn-sm home_sections_btn_add"
            onClick={() => openModalHeader()}
          >
            Add
          </button>
        </div>
        <table className="table table-responsive table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Title</th>

              <th scope="col">Category</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.homesection2_header_id !== undefined ? (
              <>
                <tr>
                  <td>{data.homesection2_header_title}</td>

                  <td>{data.homesection2_header_category}</td>

                  <td>
                    {JSON.parse(localStorage.getItem("admin-info")) ===
                    "Login Successful" ? (
                      <>
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="home_section_edit"
                          onClick={() =>
                            openUpdateModalHeader(data.homesection2_header_id)
                          }
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className="home_section_delete"
                          onClick={() =>
                            openDeleteModalHeader(data.homesection2_header_id)
                          }
                        />
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="home_section_edit"
                          onClick={() =>
                            openApproveModalHeader(data.homesection2_header_id)
                          }
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className="home_section_delete"
                          onClick={() =>
                            openDeclineModalHeader(data.homesection2_header_id)
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
        id="home_section_modal_header"
      >
        <div className="card">
          <div className="card-header">
            <p>Add Section 2 Header Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeModalHeader(data.homesection2_header_id)}
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

            <div className="form-group">
              <button
                className="btn btn-primary form-control"
                type="button"
                onClick={() => addDataHeader()}
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
        id={"home_section_modal_update_header" + data.homesection2_header_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Update Section 2 Header Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() =>
                closeUpdateModalHeader(data.homesection2_header_id)
              }
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
                onClick={() => updateDataHeader(data.homesection2_header_id)}
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
        id={"home_section_modal_delete_header" + data.homesection2_header_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Delete Section 2 Header Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() =>
                closeDeleteModalHeader(data.homesection2_header_id)
              }
            />
          </div>
          <div className="card-body">
            <label>Do you want to delete it?</label>

            <div className="form-group">
              <button
                className="btn btn-danger form-control"
                type="button"
                onClick={() => deleteDataHeader(data.homesection2_header_id)}
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
        id={"home_section_modal_approve_header" + data.homesection2_header_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Approve Section 2 Header Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() =>
                closeApproveModalHeader(data.homesection2_header_id)
              }
            />
          </div>
          <div className="card-body">
            <label>Do you want to approve it?</label>

            <div className="form-group">
              <button
                className="btn btn-success form-control"
                type="button"
                onClick={() => approveDataHeader(data.homesection2_header_id)}
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
        id={"home_section_modal_decline_header" + data.homesection2_header_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Decline Section 2 Header Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() =>
                closeDeclineModalHeader(data.homesection2_header_id)
              }
            />
          </div>
          <div className="card-body">
            <label>Do you want to decline it?</label>

            <div className="form-group">
              <button
                className="btn btn-danger form-control"
                type="button"
                onClick={() => declineDataHeader(data.homesection2_header_id)}
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
        id="modal_blur_bg_header"
        onClick={() => closeModalHeader(data.homesection2_header_id)}
      ></div>
    </>
  );
};

export default HomeSection2Header;
