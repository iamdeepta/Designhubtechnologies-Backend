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

const ContactDetail = () => {
  //   const [address, setAddress] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [web_address, setWebAddress] = useState("");

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   getData();
  // }, []);

  //update states
  const [address_up, setAddressUp] = useState("");
  const [phone_up, setPhoneUp] = useState("");
  const [web_address_up, setWebAddressUp] = useState("");

  useEffect(() => {
    getData();
  }, []);

  //update states useEffect
  useEffect(() => {
    setAddressUp(data.contact_detail_address);
    setPhoneUp(data.contact_detail_phone);
    setWebAddressUp(data.contact_detail_web_address);
  }, [data]);

  function getData() {
    if (JSON.parse(localStorage.getItem("admin-info")) === "Login Successful") {
      axios
        .get(AppUrl.base_url + "contactDetailGet")
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
        .get(AppUrl.base_url + "contactDetailGet")
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
  //   async function addData() {
  //     const formData = new FormData();
  //     formData.append("address", address);
  //     formData.append("phone", phone);
  //     formData.append("web_address", web_address);

  //     let result = await fetch(AppUrl.base_url + "homesection4Add", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     result = await result.json();

  //     if (result.success) {
  //       toast.success(result.success);
  //       setTitle("");
  //       setCategory("");
  //     } else {
  //       toast.error(result.error);
  //     }

  //     getData();
  //   }

  //delete data
  //   async function deleteData(id) {
  //     let result = await fetch(AppUrl.base_url + "homesection4Delete/" + id, {
  //       method: "POST",
  //     });

  //     result = await result.json();

  //     if (result.success) {
  //       toast.success(result.success);
  //     } else {
  //       toast.error(result.error);
  //     }

  //     getData();
  //     closeDeleteModal(id);
  //   }

  //approve data
  //   async function approveData(id) {
  //     let result = await fetch(AppUrl.base_url + "homesection4Approve/" + id, {
  //       method: "POST",
  //     });

  //     result = await result.json();

  //     if (result.success) {
  //       toast.success(result.success);
  //     } else {
  //       toast.error(result.error);
  //     }

  //     getData();
  //     closeApproveModal(id);
  //   }

  //decline data
  //   async function declineData(id) {
  //     let result = await fetch(AppUrl.base_url + "homesection4Decline/" + id, {
  //       method: "POST",
  //     });

  //     result = await result.json();

  //     if (result.success) {
  //       toast.success(result.success);
  //     } else {
  //       toast.error(result.error);
  //     }

  //     getData();
  //     closeDeclineModal(id);
  //   }

  // let title1;
  // data.map((item) => (title1 = item.homesection1_title));

  //console.log(title_up);

  //update data
  async function updateData(id) {
    const formData = new FormData();
    formData.append("address_up", address_up);
    formData.append("phone_up", phone_up);
    formData.append("web_address_up", web_address_up);

    let result = await fetch(AppUrl.base_url + "contactDetailUpdate/" + id, {
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

  //   function openModal() {
  //     let element = document.getElementById("home_section_modal");
  //     ReactDOM.findDOMNode(element).classList.add("active_home_section_modal");
  //     ReactDOM.findDOMNode(element).classList.remove(
  //       "inactive_home_section_modal"
  //     );

  //     let element1 = document.getElementById("modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  //   }

  function closeModal(id) {
    // let element = document.getElementById("home_section_modal");
    // ReactDOM.findDOMNode(element).classList.add("inactive_home_section_modal");
    // ReactDOM.findDOMNode(element).classList.remove("active_home_section_modal");

    let element1 = document.getElementById("modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");

    closeUpdateModal(id);
    // closeDeleteModal(id);
    // closeApproveModal(id);
    // closeDeclineModal(id);
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

  //   function openDeleteModal(id) {
  //     let element = document.getElementById("home_section_modal_delete" + id);
  //     ReactDOM.findDOMNode(element).classList.add(
  //       "active_home_section_modal_delete"
  //     );
  //     ReactDOM.findDOMNode(element).classList.remove(
  //       "inactive_home_section_modal_delete"
  //     );

  //     let element1 = document.getElementById("modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  //   }

  //   function closeDeleteModal(id) {
  //     let element = document.getElementById("home_section_modal_delete" + id);
  //     ReactDOM.findDOMNode(element).classList.add(
  //       "inactive_home_section_modal_delete"
  //     );
  //     ReactDOM.findDOMNode(element).classList.remove(
  //       "active_home_section_modal_delete"
  //     );

  //     let element1 = document.getElementById("modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  //   }

  //   function openApproveModal(id) {
  //     let element = document.getElementById("home_section_modal_approve" + id);
  //     ReactDOM.findDOMNode(element).classList.add(
  //       "active_home_section_modal_delete"
  //     );
  //     ReactDOM.findDOMNode(element).classList.remove(
  //       "inactive_home_section_modal_delete"
  //     );

  //     let element1 = document.getElementById("modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  //   }

  //   function closeApproveModal(id) {
  //     let element = document.getElementById("home_section_modal_approve" + id);
  //     ReactDOM.findDOMNode(element).classList.add(
  //       "inactive_home_section_modal_delete"
  //     );
  //     ReactDOM.findDOMNode(element).classList.remove(
  //       "active_home_section_modal_delete"
  //     );

  //     let element1 = document.getElementById("modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  //   }

  //   function openDeclineModal(id) {
  //     let element = document.getElementById("home_section_modal_decline" + id);
  //     ReactDOM.findDOMNode(element).classList.add(
  //       "active_home_section_modal_delete"
  //     );
  //     ReactDOM.findDOMNode(element).classList.remove(
  //       "inactive_home_section_modal_delete"
  //     );

  //     let element1 = document.getElementById("modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  //   }

  //   function closeDeclineModal(id) {
  //     let element = document.getElementById("home_section_modal_decline" + id);
  //     ReactDOM.findDOMNode(element).classList.add(
  //       "inactive_home_section_modal_delete"
  //     );
  //     ReactDOM.findDOMNode(element).classList.remove(
  //       "active_home_section_modal_delete"
  //     );

  //     let element1 = document.getElementById("modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  //   }

  return (
    <>
      <ToastContainer />
      <div className="container home_section_div">
        <div className="home_sections_title">
          <h4>Contact Us Details</h4>
          {/* <button
            className="btn btn-primary btn-sm home_sections_btn_add"
            onClick={() => openModal()}
          >
            Add
          </button> */}
        </div>
        <table className="table table-responsive table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Web Address</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.contact_detail_id !== undefined ? (
              <>
                <tr>
                  <td>{data.contact_detail_address}</td>
                  <td>{data.contact_detail_phone}</td>
                  <td>{data.contact_detail_web_address}</td>

                  <td>
                    {JSON.parse(localStorage.getItem("admin-info")) ===
                    "Login Successful" ? (
                      <>
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="home_section_edit"
                          onClick={() =>
                            openUpdateModal(data.contact_detail_id)
                          }
                        />
                        {/* <FontAwesomeIcon
                          icon={faTimes}
                          className="home_section_delete"
                          onClick={() => openDeleteModal(data.homesection4_id)}
                        /> */}
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="home_section_edit"
                          onClick={() =>
                            openUpdateModal(data.contact_detail_id)
                          }
                        />
                        {/* <FontAwesomeIcon
                          icon={faCheck}
                          className="home_section_edit"
                          onClick={() => openApproveModal(data.homesection4_id)}
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className="home_section_delete"
                          onClick={() => openDeclineModal(data.homesection4_id)}
                        /> */}
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
      {/* <div
        className="home_section_modal inactive_home_section_modal"
        id="home_section_modal"
      >
        <div className="card">
          <div className="card-header">
            <p>Add Section 4 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeModal(data.homesection4_id)}
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
      </div> */}

      {/* update data modal */}
      <div
        className="home_section_modal_update inactive_home_section_modal_update"
        id={"home_section_modal_update" + data.contact_detail_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Update Details</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeUpdateModal(data.contact_detail_id)}
            />
          </div>
          <div className="card-body">
            <label>Address:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Address"
                className="form-control"
                value={address_up}
                onChange={(e) => setAddressUp(e.target.value)}
              />
            </div>

            <label>Phone:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Phone"
                className="form-control"
                value={phone_up}
                onChange={(e) => setPhoneUp(e.target.value)}
              />
            </div>

            <label>Web Address:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Category"
                className="form-control"
                value={web_address_up}
                onChange={(e) => setWebAddressUp(e.target.value)}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-success form-control"
                type="button"
                onClick={() => updateData(data.contact_detail_id)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* delete data modal */}
      {/* <div
        className="home_section_modal_delete inactive_home_section_modal_delete"
        id={"home_section_modal_delete" + data.homesection4_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Delete Section 4 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeDeleteModal(data.homesection4_id)}
            />
          </div>
          <div className="card-body">
            <label>Do you want to delete it?</label>

            <div className="form-group">
              <button
                className="btn btn-danger form-control"
                type="button"
                onClick={() => deleteData(data.homesection4_id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* approve data modal */}
      {/* <div
        className="home_section_modal_delete inactive_home_section_modal_delete"
        id={"home_section_modal_approve" + data.homesection4_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Approve Section 4 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeApproveModal(data.homesection4_id)}
            />
          </div>
          <div className="card-body">
            <label>Do you want to approve it?</label>

            <div className="form-group">
              <button
                className="btn btn-success form-control"
                type="button"
                onClick={() => approveData(data.homesection4_id)}
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* decline data modal */}
      {/* <div
        className="home_section_modal_delete inactive_home_section_modal_delete"
        id={"home_section_modal_decline" + data.homesection4_id}
      >
        <div className="card">
          <div className="card-header">
            <p>Decline Section 4 Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeDeclineModal(data.homesection4_id)}
            />
          </div>
          <div className="card-body">
            <label>Do you want to decline it?</label>

            <div className="form-group">
              <button
                className="btn btn-danger form-control"
                type="button"
                onClick={() => declineData(data.homesection4_id)}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* blur bg overlay */}
      <div
        className="modal_blur_bg inactive_modal_blur_bg"
        id="modal_blur_bg"
        onClick={() => closeModal(data.contact_detail_id)}
      ></div>
    </>
  );
};

export default ContactDetail;
