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
import HomeSection4MainEdit from "./HomeSection4MainEdit";

const HomeSection4Main = () => {
  const [main_title, setMainTitle] = useState("");
  const [main_icon, setMainIcon] = useState("");
  const [main_image1, setMainImage1] = useState("");
  const [main_image2, setMainImage2] = useState("");
  const [main_image3, setMainImage3] = useState("");

  const [main_data, setMainData] = useState([]);

  //update image state
  const [main_icon_up, setMainIconUp] = useState("");
  const [main_image1_up, setMainImage1Up] = useState("");
  const [main_image2_up, setMainImage2Up] = useState("");
  const [main_image3_up, setMainImage3Up] = useState("");

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
        .get(AppUrl.base_url + "homesection4MainGet")
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
        .get(AppUrl.base_url + "homesection4MainGetSuper")
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
    formData.append("main_icon", main_icon);
    formData.append("main_image1", main_image1);
    formData.append("main_image2", main_image2);
    formData.append("main_image3", main_image3);

    let result = await fetch(AppUrl.base_url + "homesection4MainAdd", {
      method: "POST",
      body: formData,
    });

    result = await result.json();

    if (result.success) {
      toast.success(result.success);
      setMainTitle("");
      setMainIcon("");
      setMainImage1("");
      setMainImage2("");
      setMainImage3("");
    } else {
      toast.error(result.error);
    }

    getMainData();
  }

  //update icon
  async function updateMainIcon(name, id) {
    const formData = new FormData();
    formData.append("main_icon_up", main_icon_up);

    let result = await fetch(
      AppUrl.base_url + "homesection4MainUpdateIcon/" + name,
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

  //update image1
  async function updateMainImage1(name, id) {
    const formData = new FormData();
    formData.append("main_image1_up", main_image1_up);

    let result = await fetch(
      AppUrl.base_url + "homesection4MainUpdateImage1/" + name,
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

  //update image2
  async function updateMainImage2(name, id) {
    const formData = new FormData();
    formData.append("main_image2_up", main_image2_up);

    let result = await fetch(
      AppUrl.base_url + "homesection4MainUpdateImage2/" + name,
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

  //update image3
  async function updateMainImage3(name, id) {
    const formData = new FormData();
    formData.append("main_image3_up", main_image3_up);

    let result = await fetch(
      AppUrl.base_url + "homesection4MainUpdateImage3/" + name,
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
    let result = await fetch(AppUrl.base_url + "homesection4MainDelete/" + id, {
      method: "POST",
    });

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
      AppUrl.base_url + "homesection4MainApprove/" + id,
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
      AppUrl.base_url + "homesection4MainDecline/" + id,
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

  function closeModalMain(id, icon, image1, image2, image3) {
    let element1 = document.getElementById("modal_blur_bg" + id);
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");

    closeUpdateModalMain(id);
    closeDeleteModalMain(id);
    closeApproveModalMain(id);
    closeDeclineModalMain(id);
    closeUpdateImageModalMain(icon, id);
    closeUpdateImageModalMain(image1, id);
    closeUpdateImageModalMain(image2, id);
    closeUpdateImageModalMain(image3, id);
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
          <h4>Section 4 Main Content</h4>
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

              <th scope="col">Icon</th>
              <th scope="col">Image1</th>
              <th scope="col">Image2</th>
              <th scope="col">Image3</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {main_data.map((item, index) => (
              <tr key={item.homesection4_main_id}>
                <td>{item.homesection4_main_title}</td>

                <td>
                  <img
                    src={AppUrl.image_url + item.homesection4_main_icon}
                    alt={item.homesection4_main_title + " icon"}
                    onClick={() =>
                      openModalImageMain(
                        item.homesection4_main_icon,
                        item.homesection4_main_id
                      )
                    }
                  />
                </td>

                <td>
                  <img
                    src={AppUrl.image_url + item.homesection4_main_image1}
                    alt={item.homesection4_main_title + " image1"}
                    onClick={() =>
                      openModalImageMain(
                        item.homesection4_main_image1,
                        item.homesection4_main_id
                      )
                    }
                  />
                </td>

                <td>
                  <img
                    src={AppUrl.image_url + item.homesection4_main_image2}
                    alt={item.homesection4_main_title + " image2"}
                    onClick={() =>
                      openModalImageMain(
                        item.homesection4_main_image2,
                        item.homesection4_main_id
                      )
                    }
                  />
                </td>

                <td>
                  <img
                    src={AppUrl.image_url + item.homesection4_main_image3}
                    alt={item.homesection4_main_title + " image3"}
                    onClick={() =>
                      openModalImageMain(
                        item.homesection4_main_image3,
                        item.homesection4_main_id
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
                          openUpdateModalMain(item.homesection4_main_id)
                        }
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          openDeleteModalMain(item.homesection4_main_id)
                        }
                      />
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="home_section_edit"
                        onClick={() =>
                          openApproveModalMain(item.homesection4_main_id)
                        }
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          openDeclineModalMain(item.homesection4_main_id)
                        }
                      />
                    </>
                  )}
                </td>

                {/* update data modal */}
                <div
                  className="home_section_modal_update inactive_home_section_modal_update"
                  id={
                    "home_section_modal_update_main" + item.homesection4_main_id
                  }
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Update Section 4 Main Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          closeUpdateModalMain(item.homesection4_main_id)
                        }
                      />
                    </div>
                    <HomeSection4MainEdit
                      title_data={item.homesection4_main_title}
                      id_data={item.homesection4_main_id}
                      edit_data={main_data}
                      index_data={index}
                      get_data={getMainData}
                      close_update_modal={() =>
                        closeUpdateModalMain(item.homesection4_main_id)
                      }
                    />
                  </div>
                </div>

                {/* icon update modal */}
                <div
                  className="home_section_modal_image_update inactive_home_section_modal_image_update"
                  id={item.homesection4_main_icon}
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Update Icon Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          closeUpdateImageModalMain(
                            item.homesection4_main_icon,
                            item.homesection4_main_id
                          )
                        }
                      />
                    </div>
                    <div className="card-body">
                      <label>Icon:</label>
                      <div className="form-group">
                        <input
                          type="file"
                          placeholder="Icon"
                          className="form-control"
                          onChange={(e) => setMainIconUp(e.target.files[0])}
                        />
                      </div>

                      <div className="form-group">
                        <button
                          className="btn btn-success form-control"
                          type="button"
                          onClick={() =>
                            updateMainIcon(
                              item.homesection4_main_icon,
                              item.homesection4_main_id
                            )
                          }
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
                  id={item.homesection4_main_image1}
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Update Image1 Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          closeUpdateImageModalMain(
                            item.homesection4_main_image1,
                            item.homesection4_main_id
                          )
                        }
                      />
                    </div>
                    <div className="card-body">
                      <label>Image1:</label>
                      <div className="form-group">
                        <input
                          type="file"
                          placeholder="Image1"
                          className="form-control"
                          onChange={(e) => setMainImage1Up(e.target.files[0])}
                        />
                      </div>

                      <div className="form-group">
                        <button
                          className="btn btn-success form-control"
                          type="button"
                          onClick={() =>
                            updateMainImage1(
                              item.homesection4_main_image1,
                              item.homesection4_main_id
                            )
                          }
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
                  id={item.homesection4_main_image2}
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Update Image2 Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          closeUpdateImageModalMain(
                            item.homesection4_main_image2,
                            item.homesection4_main_id
                          )
                        }
                      />
                    </div>
                    <div className="card-body">
                      <label>Image2:</label>
                      <div className="form-group">
                        <input
                          type="file"
                          placeholder="Image2"
                          className="form-control"
                          onChange={(e) => setMainImage2Up(e.target.files[0])}
                        />
                      </div>

                      <div className="form-group">
                        <button
                          className="btn btn-success form-control"
                          type="button"
                          onClick={() =>
                            updateMainImage2(
                              item.homesection4_main_image2,
                              item.homesection4_main_id
                            )
                          }
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
                  id={item.homesection4_main_image3}
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Update Image3 Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          closeUpdateImageModalMain(
                            item.homesection4_main_image3,
                            item.homesection4_main_id
                          )
                        }
                      />
                    </div>
                    <div className="card-body">
                      <label>Image3:</label>
                      <div className="form-group">
                        <input
                          type="file"
                          placeholder="Image3"
                          className="form-control"
                          onChange={(e) => setMainImage3Up(e.target.files[0])}
                        />
                      </div>

                      <div className="form-group">
                        <button
                          className="btn btn-success form-control"
                          type="button"
                          onClick={() =>
                            updateMainImage3(
                              item.homesection4_main_image3,
                              item.homesection4_main_id
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
                    "home_section_modal_delete_main" + item.homesection4_main_id
                  }
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Delete Section 4 Main Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          closeDeleteModalMain(item.homesection4_main_id)
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
                            deleteMainData(item.homesection4_main_id)
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
                    item.homesection4_main_id
                  }
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Approve Section 4 Main Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          closeApproveModalMain(item.homesection4_main_id)
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
                            approveMainData(item.homesection4_main_id)
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
                    item.homesection4_main_id
                  }
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Decline Section 4 Main Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          closeDeclineModalMain(item.homesection4_main_id)
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
                            declineMainData(item.homesection4_main_id)
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
                  id={"modal_blur_bg" + item.homesection4_main_id}
                  onClick={() =>
                    closeModalMain(
                      item.homesection4_main_id,
                      item.homesection4_main_icon,
                      item.homesection4_main_image1,
                      item.homesection4_main_image2,
                      item.homesection4_main_image3
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
            <p>Add Section 6 Main Content Data</p>
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

            <label>Icon:</label>
            <div className="form-group">
              <input
                type="file"
                className="form-control"
                onChange={(e) => setMainIcon(e.target.files[0])}
              />
            </div>

            <label>Image1:</label>
            <div className="form-group">
              <input
                type="file"
                className="form-control"
                onChange={(e) => setMainImage1(e.target.files[0])}
              />
            </div>

            <label>Image2:</label>
            <div className="form-group">
              <input
                type="file"
                className="form-control"
                onChange={(e) => setMainImage2(e.target.files[0])}
              />
            </div>

            <label>Image3:</label>
            <div className="form-group">
              <input
                type="file"
                className="form-control"
                onChange={(e) => setMainImage3(e.target.files[0])}
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

export default HomeSection4Main;
