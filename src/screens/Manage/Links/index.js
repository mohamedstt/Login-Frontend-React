import React, { useEffect } from "react";
import Layouts from "../../Layouts/Manage";
import { Link } from "react-router-dom";
import { linkList, setLinkToRemove } from "../../../actions/LinkActions";
import { connect } from "react-redux";

const Links = ({ links, linkToRemove, linkList, setLinkToRemove }) => {
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
          const deleteClick = (e) => setLinkToRemove(link);
          const border = (linkToRemove && linkToRemove.id === link.id) ? 'border border-danger rounded' : 'border border-transparent';
            return (
              <div
                key={link.id}
                className={`pb-2 pt-2 pl-3 pr-3 d-flex flex-row justify-content-between ${border}`}
              >
                <div className="pr-3">
                  <img src="http://via.placeholder.com/100" alt="Link icon" />
                </div>
                <div className="align-self-center">
                  <span className="text-primary clearfix">{link.label}</span>
                  <span className="text-primary clearfix">{link.url}</span>
                </div>
                <div className="ml-auto p-2 clearfix">
                  <Link to={`/manage/links/edit/${link.id}`}>
                    <span>Edit</span>
                  </Link>
                  <button className="btn btn-clear" onClick={deleteClick}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        : null}
    </Layouts>
  );
};

const mapStateToProps = (state) => {
  return {
    links: state.link.links,
    linkToRemove: state.link.linkToRemove,
  };
};

export default connect(mapStateToProps, { linkList, setLinkToRemove })(Links);
