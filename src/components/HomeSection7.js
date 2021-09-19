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

const HomeSection7 = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [number1_title, setNumber1Title] = useState("");
  const [number1, setNumber1] = useState("");
  const [number2_title, setNumber2Title] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3_title, setNumber3Title] = useState("");
  const [number3, setNumber3] = useState("");

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   getData();
  // }, []);

  //update states
  const [title_up, setTitleUp] = useState("");
  const [description_up, setDescriptionUp] = useState("");
  const [number1_title_up, setNumber1TitleUp] = useState("");
  const [number1_up, setNumber1Up] = useState("");
  const [number2_title_up, setNumber2TitleUp] = useState("");
  const [number2_up, setNumber2Up] = useState("");
  const [number3_title_up, setNumber3TitleUp] = useState("");
  const [number3_up, setNumber3Up] = useState("");

  useEffect(() => {
    getData();
  }, []);

  //update states useEffect
  useEffect(() => {
    setTitleUp(data.homesection7_title);
    setDescriptionUp(data.homesection7_description);
    setNumber1TitleUp(data.homesection7_number1_title);
    setNumber1Up(data.homesection7_number1);
    setNumber2TitleUp(data.homesection7_number2_title);
    setNumber2Up(data.homesection7_number2);
    setNumber3TitleUp(data.homesection7_number3_title);
    setNumber3Up(data.homesection7_number3);
  }, [data]);

  function getData() {
    axios
      .get(AppUrl.base_url + "homesection7Get")
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
    formData.append("number1_title", number1_title);
    formData.append("number1", number1);
    formData.append("number2_title", number2_title);
    formData.append("number2", number2);
    formData.append("number3_title", number3_title);
    formData.append("number3", number3);

    let result = await fetch(AppUrl.base_url + "homesection7Add", {
      method: "POST",
      body: formData,
    });

    result = await result.json();

    if (result.success) {
      toast.success(result.success);
      setTitle("");
      setDescription("");
      setNumber1Title("");
      setNumber1("");
      setNumber2Title("");
      setNumber2("");
      setNumber3Title("");
      setNumber3("");
    } else {
      toast.error(result.error);
    }

    getData();
  }

  //delete data
  async function deleteData(id) {
    let result = await fetch(AppUrl.base_url + "homesection7Delete/" + id, {
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
    formData.append("number1_title_up", number1_title_up);
    formData.append("number1_up", number1_up);
    formData.append("number2_title_up", number2_title_up);
    formData.append("number2_up", number2_up);
    formData.append("number3_title_up", number3_title_up);
    formData.append("number3_up", number3_up);

    let result = await fetch(AppUrl.base_url + "homesection7Update/" + id, {
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
          <h4>Section 7</h4>
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
              <th scope="col">Num1 Title</th>
              <th scope="col">Num1</th>
              <th scope="col">Num2 Title</th>
              <th scope="col">Num2</th>
              <th scope="col">Num3 Title</th>
              <th scope="col">Num3</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.homesection7_id !== undefined ? (
              <>
                <tr>
                  <td>{data.homesection7_title}</td>
                  <td>{data.homesection7_description}</td>
                  <td>{data.homesection7_number1_title}</td>
                  <td>{data.homesection7_number1}</td>
                  <td>{data.homesection7_number2_title}</td>
                  <td>{data.homesection7_number2}</td>
                  <td>{data.homesection7_number3_title}</td>
                  <td>{data.homesection7_number3}</td>

                  <td>
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="home_section_edit"
                      onClick={() => openUpdateModal(data.homesection7_id)}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="home_section_delete"
                      onClick={() => openDeleteModal(data.homesection7_id)}
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
            <p>Add Section 7 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeModal(data.homesection7_id)}
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

            <label>Number1 Title:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Number1 Title"
                className="form-control"
                value={number1_title}
                onChange={(e) => setNumber1Title(e.target.value)}
              />
            </div>

            <label>Number1:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Number1"
                className="form-control"
                value={number1}
                onChange={(e) => setNumber1(e.target.value)}
              />
            </div>

            <label>Number2 Title:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Number2 Title"
                className="form-control"
                value={number2_title}
                onChange={(e) => setNumber2Title(e.target.value)}
              />
            </div>

            <label>Number2:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Number2"
                className="form-control"
                value={number2}
                onChange={(e) => setNumber2(e.target.value)}
              />
            </div>

            <label>Number3 Title:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Number3 Title"
                className="form-control"
                value={number3_title}
                onChange={(e) => setNumber3Title(e.target.value)}
              />
            </div>

            <label>Number3:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Number3"
                className="form-control"
                value={number3}
                onChange={(e) => setNumber3(e.target.value)}
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
        id={"home_section_modal_update" + data.homesection7_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Update Section 7 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeUpdateModal(data.homesection7_id)}
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

            <label>Number1 Title:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Number1 Title"
                className="form-control"
                value={number1_title_up}
                onChange={(e) => setNumber1TitleUp(e.target.value)}
              />
            </div>

            <label>Number1:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Number1"
                className="form-control"
                value={number1_up}
                onChange={(e) => setNumber1Up(e.target.value)}
              />
            </div>

            <label>Number2 Title:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Number2 Title"
                className="form-control"
                value={number2_title_up}
                onChange={(e) => setNumber2TitleUp(e.target.value)}
              />
            </div>

            <label>Number2:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Number2"
                className="form-control"
                value={number2_up}
                onChange={(e) => setNumber2Up(e.target.value)}
              />
            </div>

            <label>Number3 Title:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Number3 Title"
                className="form-control"
                value={number3_title_up}
                onChange={(e) => setNumber3TitleUp(e.target.value)}
              />
            </div>

            <label>Number3:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Number3"
                className="form-control"
                value={number3_up}
                onChange={(e) => setNumber3Up(e.target.value)}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-success form-control"
                type="button"
                onClick={() => updateData(data.homesection7_id)}
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
        id={"home_section_modal_delete" + data.homesection7_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Delete Section 7 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeDeleteModal(data.homesection7_id)}
            />
          </div>
          <div className="card-body">
            <label>Do you want to delete it?</label>

            <div className="form-group">
              <button
                className="btn btn-danger form-control"
                type="button"
                onClick={() => deleteData(data.homesection7_id)}
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
        onClick={() => closeModal(data.homesection7_id)}
      ></div>
    </>
  );
};

export default HomeSection7;
