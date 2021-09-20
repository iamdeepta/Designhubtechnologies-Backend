import React from "react";
//import { faTimes } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AppUrl from "../classes/AppUrl";
import { toast } from "react-toastify";
//import { ToastContainer, toast } from "react-toastify";

const AboutSection2MainEdit = ({
  title_data_faq,
  description_data_faq,
  id_data_faq,
  edit_data_faq,
  get_data_faq,
  index_data_faq,
  close_update_modal_faq,
}) => {
  //update states
  const [main_title_up_faq, setMainTitleUpFaq] = useState(title_data_faq);

  //update data
  async function updateMainDataFaq(id) {
    const formData = new FormData();
    formData.append("main_title_up_faq", main_title_up_faq);

    let result_faq = await fetch(
      AppUrl.base_url + "aboutsection2MainUpdate/" + id,
      {
        method: "POST",
        body: formData,
      }
    );

    result_faq = await result_faq.json();

    if (result_faq.success) {
      toast.success(result_faq.success);

      get_data_faq();
      close_update_modal_faq(id);
    } else {
      toast.error(result_faq.error);
    }
    //console.log(id);
  }

  return (
    <>
      {/* <ToastContainer /> */}

      <div className="card-body">
        <label>List Name:</label>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            className="form-control"
            value={main_title_up_faq}
            onChange={(e) => setMainTitleUpFaq(e.target.value)}
          />
        </div>

        <div className="form-group">
          <button
            className="btn btn-success form-control"
            type="button"
            onClick={() => updateMainDataFaq(id_data_faq)}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutSection2MainEdit;
