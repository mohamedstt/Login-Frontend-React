import React, { useEffect } from "react";
import Layouts from "../../Layouts/Manage";
import { Link } from "react-router-dom";
import { linkList } from "../../../actions/LinkActions";
import { connect } from "react-redux";

const Links = ({ links, linkList }) => {
  useEffect(() => {
    linkList();
  }, [linkList]);

  return (
    <Layouts>
      <div className="row">
        <div className="col">
          <h1>Links</h1>
        </div>
        <div className="col text-right allign-self-bottom pt-2">
          <Link to="/manage/links/create" className="btn btn-primary">
            Add
          </Link>
        </div>
      </div>

      {links && links.length
        ? links.map((link) => {
            return (
              <div className="pb-2 pt-2 pl-3 pr-3 d-flex flex-row justify-content-between">
                <div className="pr-3">
                  <img src="http://via.placeholder.com/100" alt="Link icon" />
                </div>
                <div className="align-self-center">
                  <span className="text-primary clearfix">{link.label}</span>
                  <span className="text-primary clearfix">{link.url}</span>
                </div>
                <div className="ml-auto p-2 clearfix">
                  <span>Edit</span>
                  <span>Delete</span>
                </div>
              </div>
            );
          })
        : null}
    </Layouts>
  );
};

const mapStateToProps = (state) => {
  return { links: state.link.links };
};

export default connect(mapStateToProps, { linkList })(Links);
