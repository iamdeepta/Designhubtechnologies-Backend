import React from "react";
//import { faTimes } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AppUrl from "../classes/AppUrl";
import { toast } from "react-toastify";
//import { ToastContainer, toast } from "react-toastify";

const HomeSection2Edit = ({
  main_title_data,
  title_data,
  description_data,
  category_data,
  id_data,
  edit_data,
  get_data,
  close_update_modal,
}) => {
  //update states
  const [main_title_up, setMainTitleUp] = useState(main_title_data);
  const [title_up, setTitleUp] = useState(title_data);
  const [description_up, setDescriptionUp] = useState(description_data);
  const [category_up, setCategoryUp] = useState(category_data);

  //update data
  async function updateData(id) {
    const formData = new FormData();
    formData.append("main_title_up", main_title_up);
    formData.append("title_up", title_up);
    formData.append("description_up", description_up);
    formData.append("category_up", category_up);

    let result = await fetch(AppUrl.base_url + "homesection2Update/" + id, {
      method: "POST",
      body: formData,
    });

    result = await result.json();

    if (result.success) {
      toast.success(result.success);

      get_data();
      close_update_modal(id);
    } else {
      toast.error(result.error);
    }
  }

  return (
    <>
      {/* <ToastContainer /> */}

      <div className="card-body">
        <label>Main Title:</label>
        <div className="form-group">
          <input
            type="text"
            placeholder="Main Title"
            className="form-control"
            defaultValue={main_title_up}
            onChange={(e) => setMainTitleUp(e.target.value)}
          />
        </div>

        <label>Title:</label>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            className="form-control"
            defaultValue={title_up}
            onChange={(e) => setTitleUp(e.target.value)}
          />
        </div>

        <label>Description:</label>
        <div className="form-group">
          <input
            type="text"
            placeholder="Description"
            className="form-control"
            defaultValue={description_up}
            onChange={(e) => setDescriptionUp(e.target.value)}
          />
        </div>

        <label>Category:</label>
        <div className="form-group">
          <input
            type="text"
            placeholder="Category"
            className="form-control"
            defaultValue={category_up}
            onChange={(e) => setCategoryUp(e.target.value)}
          />
        </div>

        <div className="form-group">
          <button
            className="btn btn-success form-control"
            type="button"
            onClick={() => updateData(id_data)}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeSection2Edit;
