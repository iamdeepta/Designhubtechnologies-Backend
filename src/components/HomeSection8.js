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

const HomeSection8 = () => {
  const [left_title1, setLeftTitle1] = useState("");
  const [left_title2, setLeftTitle2] = useState("");
  const [left_description, setLeftDescription] = useState("");
  const [right_title1, setRightTitle1] = useState("");
  const [right_title2, setRightTitle2] = useState("");
  const [right_description, setRightDescription] = useState("");

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   getData();
  // }, []);

  //update states
  const [left_title1_up, setLeftTitle1Up] = useState("");
  const [left_title2_up, setLeftTitle2Up] = useState("");
  const [left_description_up, setLeftDescriptionUp] = useState("");
  const [right_title1_up, setRightTitle1Up] = useState("");
  const [right_title2_up, setRightTitle2Up] = useState("");
  const [right_description_up, setRightDescriptionUp] = useState("");

  useEffect(() => {
    getData();
  }, []);

  //update states useEffect
  useEffect(() => {
    setLeftTitle1Up(data.homesection8_left_title1);
    setLeftTitle2Up(data.homesection8_left_title2);
    setLeftDescriptionUp(data.homesection8_left_description);
    setRightTitle1Up(data.homesection8_right_title1);
    setRightTitle2Up(data.homesection8_right_title2);
    setRightDescriptionUp(data.homesection8_right_description);
  }, [data]);

  function getData() {
    if (JSON.parse(localStorage.getItem("admin-info")) === "Login Successful") {
      axios
        .get(AppUrl.base_url + "homesection8Get")
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
        .get(AppUrl.base_url + "homesection8GetSuper")
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
    formData.append("left_title1", left_title1);
    formData.append("left_title2", left_title2);
    formData.append("left_description", left_description);
    formData.append("right_title1", right_title1);
    formData.append("right_title2", right_title2);
    formData.append("right_description", right_description);

    let result = await fetch(AppUrl.base_url + "homesection8Add", {
      method: "POST",
      body: formData,
    });

    result = await result.json();

    if (result.success) {
      toast.success(result.success);
      setLeftTitle1("");
      setLeftTitle2("");
      setLeftDescription("");
      setRightTitle1("");
      setRightTitle2("");
      setRightDescription("");
    } else {
      toast.error(result.error);
    }

    getData();
  }

  //delete data
  async function deleteData(id) {
    let result = await fetch(AppUrl.base_url + "homesection8Delete/" + id, {
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
    let result = await fetch(AppUrl.base_url + "homesection8Approve/" + id, {
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
    let result = await fetch(AppUrl.base_url + "homesection8Decline/" + id, {
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

  // let title1;
  // data.map((item) => (title1 = item.homesection1_title));

  //console.log(title_up);

  //update data
  async function updateData(id) {
    const formData = new FormData();
    formData.append("left_title1_up", left_title1_up);
    formData.append("left_title2_up", left_title2_up);
    formData.append("left_description_up", left_description_up);
    formData.append("right_title1_up", right_title1_up);
    formData.append("right_title2_up", right_title2_up);
    formData.append("right_description_up", right_description_up);

    let result = await fetch(AppUrl.base_url + "homesection8Update/" + id, {
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
    closeApproveModal(id);
    closeDeclineModal(id);
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

  return (
    <>
      <ToastContainer />
      <div className="container home_section_div">
        <div className="home_sections_title">
          <h4>Section 8</h4>
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
              <th scope="col">Left Title1</th>
              <th scope="col">Left Title2</th>
              <th scope="col">Left Description</th>
              <th scope="col">Right Title1</th>
              <th scope="col">Right Title2</th>
              <th scope="col">Right Description</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.homesection8_id !== undefined ? (
              <>
                <tr>
                  <td>{data.homesection8_left_title1}</td>
                  <td>{data.homesection8_left_title2}</td>
                  <td>{data.homesection8_left_description}</td>
                  <td>{data.homesection8_right_title1}</td>
                  <td>{data.homesection8_right_title2}</td>
                  <td>{data.homesection8_right_description}</td>

                  <td>
                    {JSON.parse(localStorage.getItem("admin-info")) ===
                    "Login Successful" ? (
                      <>
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="home_section_edit"
                          onClick={() => openUpdateModal(data.homesection8_id)}
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className="home_section_delete"
                          onClick={() => openDeleteModal(data.homesection8_id)}
                        />
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="home_section_edit"
                          onClick={() => openApproveModal(data.homesection8_id)}
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className="home_section_delete"
                          onClick={() => openDeclineModal(data.homesection8_id)}
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
            <p>Add Section 8 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeModal(data.homesection8_id)}
            />
          </div>
          <div className="card-body">
            <label>Left Title1:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Left Title1"
                className="form-control"
                value={left_title1}
                onChange={(e) => setLeftTitle1(e.target.value)}
              />
            </div>

            <label>Left Title2:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Left Title2"
                className="form-control"
                value={left_title2}
                onChange={(e) => setLeftTitle2(e.target.value)}
              />
            </div>

            <label>Left Description:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Left Description"
                className="form-control"
                value={left_description}
                onChange={(e) => setLeftDescription(e.target.value)}
              />
            </div>

            <label>Right Title1:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Right Title1"
                className="form-control"
                value={right_title1}
                onChange={(e) => setRightTitle1(e.target.value)}
              />
            </div>

            <label>Right Title2:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Right Title2"
                className="form-control"
                value={right_title2}
                onChange={(e) => setRightTitle2(e.target.value)}
              />
            </div>

            <label>Right Description:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Right Description"
                className="form-control"
                value={right_description}
                onChange={(e) => setRightDescription(e.target.value)}
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
        id={"home_section_modal_update" + data.homesection8_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Update Section 8 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeUpdateModal(data.homesection8_id)}
            />
          </div>
          <div className="card-body">
            <label>Left Title1:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Left Title1"
                className="form-control"
                value={left_title1_up}
                onChange={(e) => setLeftTitle1Up(e.target.value)}
              />
            </div>

            <label>Left Title2:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Left Title2"
                className="form-control"
                value={left_title2_up}
                onChange={(e) => setLeftTitle2Up(e.target.value)}
              />
            </div>

            <label>Left Description:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Left Description"
                className="form-control"
                value={left_description_up}
                onChange={(e) => setLeftDescriptionUp(e.target.value)}
              />
            </div>

            <label>Right Title1:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Right Title1"
                className="form-control"
                value={right_title1_up}
                onChange={(e) => setRightTitle1Up(e.target.value)}
              />
            </div>

            <label>Right Title2:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Right Title2"
                className="form-control"
                value={right_title2_up}
                onChange={(e) => setRightTitle2Up(e.target.value)}
              />
            </div>

            <label>Right Description:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Right Description"
                className="form-control"
                value={right_description_up}
                onChange={(e) => setRightDescriptionUp(e.target.value)}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-success form-control"
                type="button"
                onClick={() => updateData(data.homesection8_id)}
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
        id={"home_section_modal_delete" + data.homesection8_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Delete Section 8 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeDeleteModal(data.homesection8_id)}
            />
          </div>
          <div className="card-body">
            <label>Do you want to delete it?</label>

            <div className="form-group">
              <button
                className="btn btn-danger form-control"
                type="button"
                onClick={() => deleteData(data.homesection8_id)}
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
        id={"home_section_modal_approve" + data.homesection8_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Approve Section 8 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeApproveModal(data.homesection8_id)}
            />
          </div>
          <div className="card-body">
            <label>Do you want to approve it?</label>

            <div className="form-group">
              <button
                className="btn btn-success form-control"
                type="button"
                onClick={() => approveData(data.homesection8_id)}
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
        id={"home_section_modal_decline" + data.homesection8_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Decline Section 8 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeDeclineModal(data.homesection8_id)}
            />
          </div>
          <div className="card-body">
            <label>Do you want to decline it?</label>

            <div className="form-group">
              <button
                className="btn btn-danger form-control"
                type="button"
                onClick={() => declineData(data.homesection8_id)}
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
        onClick={() => closeModal(data.homesection8_id)}
      ></div>
    </>
  );
};

export default HomeSection8;
