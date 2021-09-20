import React from "react";
//import { faTimes } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AppUrl from "../classes/AppUrl";
import { toast } from "react-toastify";
//import { ToastContainer, toast } from "react-toastify";

const ServiceSection1MainEdit = ({
  title_data,
  description_data,
  id_data,
  edit_data,
  get_data,
  index_data,
  close_update_modal,
}) => {
  //update states
  const [main_title_up, setMainTitleUp] = useState(title_data);
  const [main_description_up, setMainDescriptionUp] =
    useState(description_data);

  //update data
  async function updateMainData(id) {
    const formData = new FormData();
    formData.append("main_title_up", main_title_up);
    formData.append("main_description_up", main_description_up);

    let result = await fetch(
      AppUrl.base_url + "servicesection1MainUpdate/" + id,
      {
        method: "POST",
        body: formData,
      }
    );

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
            value={main_title_up}
            onChange={(e) => setMainTitleUp(e.target.value)}
          />
        </div>

        <label>Lists(use comma to separate):</label>
        <div className="form-group">
          <input
            type="text"
            placeholder="Lists(use comma to separate):"
            className="form-control"
            value={main_description_up}
            onChange={(e) => setMainDescriptionUp(e.target.value)}
          />
        </div>

        <div className="form-group">
          <button
            className="btn btn-success form-control"
            type="button"
            onClick={() => updateMainData(id_data)}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default ServiceSection1MainEdit;
