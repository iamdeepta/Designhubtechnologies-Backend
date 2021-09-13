import React from "react";
import "./css/homeSection1.css";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BlogSection = () => {
  return (
    <>
      <div className="container home_section_div">
        <div className="home_sections_title">
          <h4>Blogs</h4>
          <button className="btn btn-primary btn-sm home_sections_btn_add">
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
                <FontAwesomeIcon icon={faEdit} className="home_section_edit" />
                <FontAwesomeIcon
                  icon={faTimes}
                  className="home_section_delete"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BlogSection;
