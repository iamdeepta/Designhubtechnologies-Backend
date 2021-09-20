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

const AboutSection1 = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   getData();
  // }, []);

  //update states
  const [title_up, setTitleUp] = useState("");
  const [description_up, setDescriptionUp] = useState("");

  useEffect(() => {
    getData();
  }, []);

  //update states useEffect
  useEffect(() => {
    setTitleUp(data.aboutsection1_title);
    setDescriptionUp(data.aboutsection1_description);
  }, [data]);

  function getData() {
    axios
      .get(AppUrl.base_url + "aboutsection1Get")
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
    formData.append("title", title);
    formData.append("description", description);

    let result = await fetch(AppUrl.base_url + "aboutsection1Add", {
      method: "POST",
      body: formData,
    });

    result = await result.json();

    if (result.success) {
      toast.success(result.success);
      setTitle("");
      setDescription("");
    } else {
      toast.error(result.error);
    }

    getData();
  }

  //delete data
  async function deleteData(id) {
    let result = await fetch(AppUrl.base_url + "aboutsection1Delete/" + id, {
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
  async function updateData(id) {
    const formData = new FormData();
    formData.append("title_up", title_up);
    formData.append("description_up", description_up);

    let result = await fetch(AppUrl.base_url + "aboutsection1Update/" + id, {
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

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.aboutsection1_id !== undefined ? (
              <>
                <tr>
                  <td>{data.aboutsection1_title}</td>
                  <td>{data.aboutsection1_description}</td>

                  <td>
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="home_section_edit"
                      onClick={() => openUpdateModal(data.aboutsection1_id)}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="home_section_delete"
                      onClick={() => openDeleteModal(data.aboutsection1_id)}
                    />
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
              onClick={() => closeModal(data.aboutsection1_id)}
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
        id={"home_section_modal_update" + data.aboutsection1_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Update Section 1 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeUpdateModal(data.aboutsection1_id)}
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

            <div className="form-group">
              <button
                className="btn btn-success form-control"
                type="button"
                onClick={() => updateData(data.aboutsection1_id)}
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
        id={"home_section_modal_delete" + data.aboutsection1_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Delete Section 1 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeDeleteModal(data.aboutsection1_id)}
            />
          </div>
          <div className="card-body">
            <label>Do you want to delete it?</label>

            <div className="form-group">
              <button
                className="btn btn-danger form-control"
                type="button"
                onClick={() => deleteData(data.aboutsection1_id)}
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
        id="modal_blur_bg"
        onClick={() => closeModal(data.aboutsection1_id)}
      ></div>
    </>
  );
};

export default AboutSection1;
