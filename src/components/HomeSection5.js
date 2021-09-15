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

const HomeSection5 = () => {
  const [title, setTitle] = useState("");

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   getData();
  // }, []);

  //update states
  const [title_up, setTitleUp] = useState("");

  useEffect(() => {
    getData();
  }, []);

  //update states useEffect
  useEffect(() => {
    setTitleUp(data.homesection5_title);
  }, [data]);

  function getData() {
    axios
      .get(AppUrl.base_url + "homesection5Get")
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

    let result = await fetch(AppUrl.base_url + "homesection5Add", {
      method: "POST",
      body: formData,
    });

    result = await result.json();

    if (result.success) {
      toast.success(result.success);
      setTitle("");
    } else {
      toast.error(result.error);
    }

    getData();
  }

  //delete data
  async function deleteData(id) {
    let result = await fetch(AppUrl.base_url + "homesection5Delete/" + id, {
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

    let result = await fetch(AppUrl.base_url + "homesection5Update/" + id, {
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
          <h4>Section 5</h4>
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

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.homesection5_id !== undefined ? (
              <>
                <tr>
                  <td>{data.homesection5_title}</td>

                  <td>
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="home_section_edit"
                      onClick={() => openUpdateModal(data.homesection5_id)}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="home_section_delete"
                      onClick={() => openDeleteModal(data.homesection5_id)}
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
            <p>Add Section 5 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeModal(data.homesection5_id)}
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
        id={"home_section_modal_update" + data.homesection5_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Update Section 5 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeUpdateModal(data.homesection5_id)}
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

            <div className="form-group">
              <button
                className="btn btn-success form-control"
                type="button"
                onClick={() => updateData(data.homesection5_id)}
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
        id={"home_section_modal_delete" + data.homesection5_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Delete Section 5 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeDeleteModal(data.homesection5_id)}
            />
          </div>
          <div className="card-body">
            <label>Do you want to delete it?</label>

            <div className="form-group">
              <button
                className="btn btn-danger form-control"
                type="button"
                onClick={() => deleteData(data.homesection5_id)}
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
        onClick={() => closeModal(data.homesection5_id)}
      ></div>
    </>
  );
};

export default HomeSection5;
