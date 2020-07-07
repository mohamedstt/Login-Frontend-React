import React from "react";

import Layouts from '../../../Layouts/Manage'

const Edit = () => {
  return (
    <Layouts>
      <h1>Edit a Link</h1>
      <div>
        <form>
          <div className="form-group">
            <label>Label</label>
            <input type="text" className="form-control"></input>
          </div>
          <div className="form-group">
            <label>Url</label>
            <input type="text" className="form-control"></input>
          </div>
          <div>
            <div className="form-group form-check">
              <label className="form-check-label">
                <input type="checkbox" name="isSocial" />
                <span className="form-check-sign"></span>
              isSocial
            </label>
            </div>
            <button className="btn btn-primary btn-round">Submit</button>
          </div>
        </form>
      </div>
    </Layouts>
  );
};

export default Edit;
