import React from "react";
//import DataTable from "react-data-table-component";
import "./css/homeSection1.css";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";

const HomeSection1 = () => {
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

  function closeModal() {
    let element = document.getElementById("home_section_modal");
    ReactDOM.findDOMNode(element).classList.add("inactive_home_section_modal");
    ReactDOM.findDOMNode(element).classList.remove("active_home_section_modal");

    let element1 = document.getElementById("modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");

    closeUpdateModal();
    closeDeleteModal();
  }

  function openUpdateModal() {
    let element = document.getElementById("home_section_modal_update");
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

  function closeUpdateModal() {
    let element = document.getElementById("home_section_modal_update");
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

  function openDeleteModal() {
    let element = document.getElementById("home_section_modal_delete");
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

  function closeDeleteModal() {
    let element = document.getElementById("home_section_modal_delete");
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
        <table class="table table-responsive table-striped table-bordered">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <FontAwesomeIcon
                  icon={faEdit}
                  className="home_section_edit"
                  onClick={() => openUpdateModal()}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className="home_section_delete"
                  onClick={() => openDeleteModal()}
                />
              </td>
            </tr>
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
              onClick={() => closeModal()}
            />
          </div>
          <div className="card-body">
            <label>Title:</label>
            <div className="form-group">
              <input type="text" placeholder="Title" className="form-control" />
            </div>

            <label>Description:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Description"
                className="form-control"
              />
            </div>

            <label>Image1:</label>
            <div className="form-group">
              <input type="file" className="form-control" />
            </div>

            <label>Image2:</label>
            <div className="form-group">
              <input type="file" className="form-control" />
            </div>

            <label>Image3:</label>
            <div className="form-group">
              <input type="file" className="form-control" />
            </div>

            <label>Image4:</label>
            <div className="form-group">
              <input type="file" className="form-control" />
            </div>

            <div className="form-group">
              <button className="btn btn-primary form-control" type="button">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* update data modal */}
      <div
        className="home_section_modal_update inactive_home_section_modal_update"
        id="home_section_modal_update"
      >
        <div className="card">
          <div className="card-header">
            <p>Update Section 1 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeUpdateModal()}
            />
          </div>
          <div className="card-body">
            <label>Title:</label>
            <div className="form-group">
              <input type="text" placeholder="Title" className="form-control" />
            </div>

            <label>Description:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Description"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <button className="btn btn-success form-control" type="button">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* delete data modal */}
      <div
        className="home_section_modal_delete inactive_home_section_modal_delete"
        id="home_section_modal_delete"
      >
        <div className="card">
          <div className="card-header">
            <p>Delete Section 1 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeDeleteModal()}
            />
          </div>
          <div className="card-body">
            <label>Do you want to delete it?</label>

            <div className="form-group">
              <button className="btn btn-danger form-control" type="button">
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
        onClick={() => closeModal()}
      ></div>
    </>
  );
};

export default HomeSection1;
