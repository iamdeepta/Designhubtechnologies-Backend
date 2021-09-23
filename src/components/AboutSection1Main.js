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
import AboutSection1MainEdit from "./AboutSection1MainEdit";

const AboutSection1Main = () => {
  const [main_title, setMainTitle] = useState("");
  const [main_description, setMainDescription] = useState("");
  const [main_image, setMainImage] = useState("");

  const [main_data, setMainData] = useState([]);

  //update image state
  const [main_image_up, setMainImageUp] = useState("");

  // useEffect(() => {
  //   getData();
  // }, []);

  //update states
  // const [main_title_up, setMainTitleUp] = useState("");
  // const [title_up, setTitleUp] = useState("");
  // const [description_up, setDescriptionUp] = useState("");
  // const [category_up, setCategoryUp] = useState("");

  useEffect(() => {
    getMainData();
  }, []);

  //update states useEffect
  // useEffect(() => {
  //   setDescriptionValue();
  // }, [data]);

  // function setDescriptionValue(des) {
  //   setDescriptionUp(des);
  // }

  function getMainData() {
    if (JSON.parse(localStorage.getItem("admin-info")) === "Login Successful") {
      axios
        .get(AppUrl.base_url + "aboutsection1MainGet")
        .then(function (response) {
          if (response) {
            setMainData(response.data);

            //console.log(response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .get(AppUrl.base_url + "aboutsection1MainGetSuper")
        .then(function (response) {
          if (response) {
            setMainData(response.data);

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
  async function addMainData() {
    const formData = new FormData();
    formData.append("main_title", main_title);
    formData.append("main_description", main_description);
    formData.append("main_image", main_image);

    let result = await fetch(AppUrl.base_url + "aboutsection1MainAdd", {
      method: "POST",
      body: formData,
    });

    result = await result.json();

    if (result.success) {
      toast.success(result.success);
      setMainTitle("");
      setMainDescription("");
      setMainImage("");
    } else {
      toast.error(result.error);
    }

    getMainData();
  }

  //update image
  async function updateMainImage(name, id) {
    const formData = new FormData();
    formData.append("main_image_up", main_image_up);

    let result = await fetch(
      AppUrl.base_url + "aboutsection1MainUpdateImage/" + name,
      {
        method: "POST",
        body: formData,
      }
    );

    result = await result.json();

    if (result.success) {
      toast.success(result.success);

      getMainData();
      closeUpdateImageModalMain(name, id);
    } else {
      toast.error(result.error);
    }
  }

  //delete data
  async function deleteMainData(id) {
    let result = await fetch(
      AppUrl.base_url + "aboutsection1MainDelete/" + id,
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

    getMainData();
    closeDeleteModalMain(id);
  }

  //approve data
  async function approveMainData(id) {
    let result = await fetch(
      AppUrl.base_url + "aboutsection1MainApprove/" + id,
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

    getMainData();
    closeApproveModalMain(id);
  }

  //decline data
  async function declineMainData(id) {
    let result = await fetch(
      AppUrl.base_url + "aboutsection1MainDecline/" + id,
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

    getMainData();
    closeDeclineModalMain(id);
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

  function openModalMain() {
    let element = document.getElementById("home_section_modal_main");
    ReactDOM.findDOMNode(element).classList.add("active_home_section_modal");
    ReactDOM.findDOMNode(element).classList.remove(
      "inactive_home_section_modal"
    );

    let element1 = document.getElementById("modal_blur_bg_add");
    ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  }

  function closeModalAddMain() {
    let element = document.getElementById("home_section_modal_main");
    ReactDOM.findDOMNode(element).classList.add("inactive_home_section_modal");
    ReactDOM.findDOMNode(element).classList.remove("active_home_section_modal");

    let element1 = document.getElementById("modal_blur_bg_add");
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  }

  function closeModalMain(id, id1) {
    let element1 = document.getElementById("modal_blur_bg" + id);
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");

    closeUpdateModalMain(id);
    closeDeleteModalMain(id);
    closeUpdateImageModalMain(id1, id);
  }

  function openUpdateModalMain(id) {
    let element = document.getElementById(
      "home_section_modal_update_main" + id
    );
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

  function closeUpdateModalMain(id) {
    let element = document.getElementById(
      "home_section_modal_update_main" + id
    );
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

  function openDeleteModalMain(id) {
    let element = document.getElementById(
      "home_section_modal_delete_main" + id
    );
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

  function closeDeleteModalMain(id) {
    let element = document.getElementById(
      "home_section_modal_delete_main" + id
    );
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

  function openApproveModalMain(id) {
    let element = document.getElementById(
      "home_section_modal_approve_main" + id
    );
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

  function closeApproveModalMain(id) {
    let element = document.getElementById(
      "home_section_modal_approve_main" + id
    );
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

  function openDeclineModalMain(id) {
    let element = document.getElementById(
      "home_section_modal_decline_main" + id
    );
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

  function closeDeclineModalMain(id) {
    let element = document.getElementById(
      "home_section_modal_decline_main" + id
    );
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

  function openModalImageMain(id, id1) {
    let element = document.getElementById(id);
    ReactDOM.findDOMNode(element).classList.add(
      "active_home_section_modal_image_update"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "inactive_home_section_modal_image_update"
    );

    let element1 = document.getElementById("modal_blur_bg" + id1);
    ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  }

  function closeUpdateImageModalMain(id, id1) {
    let element = document.getElementById(id);
    ReactDOM.findDOMNode(element).classList.add(
      "inactive_home_section_modal_image_update"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "active_home_section_modal_image_update"
    );

    let element1 = document.getElementById("modal_blur_bg" + id1);
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  }

  return (
    <>
      <ToastContainer />
      <div className="container home_section_div">
        <div className="home_sections_title">
          <h4>Section 1 Main Content</h4>
          <button
            className="btn btn-primary btn-sm home_sections_btn_add"
            onClick={() => openModalMain()}
          >
            Add
          </button>
        </div>
        <table className="table table-responsive table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {main_data.map((item, index) => (
              <tr key={item.aboutsection1_main_id}>
                <td>{item.aboutsection1_main_title}</td>
                <td>{item.aboutsection1_main_description}</td>
                <td>
                  <img
                    src={AppUrl.image_url + item.aboutsection1_main_image}
                    alt={item.aboutsection1_main_title + " image"}
                    onClick={() =>
                      openModalImageMain(
                        item.aboutsection1_main_image,
                        item.aboutsection1_main_id
                      )
                    }
                  />
                </td>

                <td>
                  {JSON.parse(localStorage.getItem("admin-info")) ===
                  "Login Successful" ? (
                    <>
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="home_section_edit"
                        onClick={() =>
                          openUpdateModalMain(item.aboutsection1_main_id)
                        }
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          openDeleteModalMain(item.aboutsection1_main_id)
                        }
                      />
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="home_section_edit"
                        onClick={() =>
                          openApproveModalMain(item.aboutsection1_main_id)
                        }
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          openDeclineModalMain(item.aboutsection1_main_id)
                        }
                      />
                    </>
                  )}
                </td>

                {/* update data modal */}
                <div
                  className="home_section_modal_update inactive_home_section_modal_update"
                  id={
                    "home_section_modal_update_main" +
                    item.aboutsection1_main_id
                  }
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Update Section 1 Main Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          closeUpdateModalMain(item.aboutsection1_main_id)
                        }
                      />
                    </div>
                    <AboutSection1MainEdit
                      title_data={item.aboutsection1_main_title}
                      description_data={item.aboutsection1_main_description}
                      id_data={item.aboutsection1_main_id}
                      edit_data={main_data}
                      index_data={index}
                      get_data={getMainData}
                      close_update_modal={() =>
                        closeUpdateModalMain(item.aboutsection1_main_id)
                      }
                    />
                  </div>
                </div>

                {/* image update modal */}
                <div
                  className="home_section_modal_image_update inactive_home_section_modal_image_update"
                  id={item.aboutsection1_main_image}
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Update Image Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          closeUpdateImageModalMain(
                            item.aboutsection1_main_image,
                            item.aboutsection1_main_id
                          )
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
                          onChange={(e) => setMainImageUp(e.target.files[0])}
                        />
                      </div>

                      <div className="form-group">
                        <button
                          className="btn btn-success form-control"
                          type="button"
                          onClick={() =>
                            updateMainImage(
                              item.aboutsection1_main_image,
                              item.aboutsection1_main_id
                            )
                          }
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
                  id={
                    "home_section_modal_delete_main" +
                    item.aboutsection1_main_id
                  }
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Delete Section 1 Main Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          closeDeleteModalMain(item.aboutsection1_main_id)
                        }
                      />
                    </div>
                    <div className="card-body">
                      <label>Do you want to delete it?</label>

                      <div className="form-group">
                        <button
                          className="btn btn-danger form-control"
                          type="button"
                          onClick={() =>
                            deleteMainData(item.aboutsection1_main_id)
                          }
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
                  id={
                    "home_section_modal_approve_main" +
                    item.aboutsection1_main_id
                  }
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Approve Section 1 Main Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          closeApproveModalMain(item.aboutsection1_main_id)
                        }
                      />
                    </div>
                    <div className="card-body">
                      <label>Do you want to approve it?</label>

                      <div className="form-group">
                        <button
                          className="btn btn-success form-control"
                          type="button"
                          onClick={() =>
                            approveMainData(item.aboutsection1_main_id)
                          }
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
                  id={
                    "home_section_modal_decline_main" +
                    item.aboutsection1_main_id
                  }
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Decline Section 1 Main Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          closeDeclineModalMain(item.aboutsection1_main_id)
                        }
                      />
                    </div>
                    <div className="card-body">
                      <label>Do you want to decline it?</label>

                      <div className="form-group">
                        <button
                          className="btn btn-danger form-control"
                          type="button"
                          onClick={() =>
                            declineMainData(item.aboutsection1_main_id)
                          }
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
                  id={"modal_blur_bg" + item.aboutsection1_main_id}
                  onClick={() =>
                    closeModalMain(
                      item.aboutsection1_main_id,
                      item.aboutsection1_main_image
                    )
                  }
                ></div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* add data modal */}
      <div
        className="home_section_modal inactive_home_section_modal"
        id="home_section_modal_main"
      >
        <div className="card">
          <div className="card-header">
            <p>Add Section 1 Main Content Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeModalAddMain()}
            />
          </div>
          <div className="card-body">
            <label>Title:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Title"
                className="form-control"
                value={main_title}
                onChange={(e) => setMainTitle(e.target.value)}
              />
            </div>

            <label>Description:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Description"
                className="form-control"
                value={main_description}
                onChange={(e) => setMainDescription(e.target.value)}
              />
            </div>

            <label>Image:</label>
            <div className="form-group">
              <input
                type="file"
                className="form-control"
                onChange={(e) => setMainImage(e.target.files[0])}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary form-control"
                type="button"
                onClick={() => addMainData()}
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
        onClick={() => closeModalAddMain()}
      ></div>
    </>
  );
};

export default AboutSection1Main;
