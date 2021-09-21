import React from "react";
//import { faTimes } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AppUrl from "../classes/AppUrl";
import { toast } from "react-toastify";
//import { ToastContainer, toast } from "react-toastify";

const BlogSectionEdit = ({
  title_data,
  description1_data,
  description2_data,
  tag_data,
  category_data,
  time_data,
  id_data,
  edit_data,
  get_data,
  index_data,
  close_update_modal,
}) => {
  //update states
  const [title_up, setTitleUp] = useState(title_data);
  const [description1_up, setDescription1Up] = useState(description1_data);
  const [description2_up, setDescription2Up] = useState(description2_data);
  const [tag_up, setTagUp] = useState(tag_data);
  const [category_up, setCategoryUp] = useState(category_data);
  const [time_up, setTimeUp] = useState(time_data);

  //update data
  async function updateData(id) {
    const formData = new FormData();
    formData.append("title_up", title_up);
    formData.append("description1_up", description1_up);
    formData.append("description2_up", description2_up);
    formData.append("tag_up", tag_up);
    formData.append("category_up", category_up);
    formData.append("time_up", title_up);

    let result = await fetch(AppUrl.base_url + "blogsectionUpdate/" + id, {
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

        <label>Description1:</label>
        <div className="form-group">
          <textarea
            type="text"
            placeholder="Description1"
            className="form-control"
            rows="7"
            value={description1_up}
            onChange={(e) => setDescription1Up(e.target.value)}
          />
        </div>

        <label>Description2:</label>
        <div className="form-group">
          <textarea
            type="text"
            placeholder="Description2"
            className="form-control"
            rows="7"
            value={description2_up}
            onChange={(e) => setDescription2Up(e.target.value)}
          />
        </div>

        <label>Tag:</label>
        <div className="form-group">
          <input
            type="text"
            placeholder="Tag"
            className="form-control"
            value={tag_up}
            onChange={(e) => setTagUp(e.target.value)}
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

        <label>Time:</label>
        <div className="form-group">
          <input
            type="text"
            placeholder="Time"
            className="form-control"
            value={time_up}
            onChange={(e) => setTimeUp(e.target.value)}
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

export default BlogSectionEdit;
