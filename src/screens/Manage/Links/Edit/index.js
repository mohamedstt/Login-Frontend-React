import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import Layouts from "../../../Layouts/Manage";
import { linkGet, linkUpdate } from "../../../../actions/LinkActions";
import { getFormData } from "../../../../helpers/form";

import FormCheck from "../../../../components/FormCheck";
import FormGroup from "../../../../components/FormGroup";

const Edit = ({ link, linkGet, linkUpdate }) => {
  const { id } = useParams();

  useEffect(() => {
    linkGet(id);
  }, [id, linkGet]);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = getFormData(e);
    linkUpdate(id, data);
  };

  return (
    <Layouts>
      <h1>Edit a Link</h1>
      <div>
        <form onSubmit={submitHandler}>
          <FormGroup label="Label" name="label" data={link} type="text" />
          <FormGroup label="Url" name="url" data={link} type="text" />
          <FormCheck label="Is Social" name="isSocial" data={link} />
          <div>
            <button className="btn btn-primary btn-round">Submit</button>
          </div>
        </form>
      </div>
    </Layouts>
  );
};

const mapStateToProps = (state) => {
  return { link: state.link.link };
};

export default connect(mapStateToProps, { linkGet, linkUpdate })(Edit);
