import React, { useRef, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import {
  leadReportAdminUrl,
  leadReportClientUrl,
  downloadCheckinReportUrl,
} from "../../utils";
import { getElementError } from "@testing-library/react";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <span className="threedots" />
  </a>
));
export default function TripleDotDropDown({ admin }) {
  const inputFile = useRef(null);

  const [upload, setUpload] = useState("");
  const [uploadShow, setUploadShow] = useState("");

  const handleDownload = () => {
    const display_download = document.getElementById("form_date_picker");

    display_download.style.display = "block";
  };
  const handleCheckin = () => {
    const display_download = document.getElementById(
      "form_date_checkin_picker"
    );

    display_download.style.display = "block";
  };
  const handleUpload = () => {
    const display_download = document.getElementById("modal_full_upload");

    display_download.style.display = "flex";
  };

  const handleClose = () => {
    const display_download = document.getElementById("form_date_picker");
    console.log("inside fandle close");
    display_download.style.display = "none";
  };
  const handleCloseCheckin = () => {
    const display_download = document.getElementById(
      "form_date_checkin_picker"
    );
    console.log("inside fandle close");
    display_download.style.display = "none";
  };

  const handleCloseUpload = () => {
    const display_download = document.getElementById("modal_full_upload");
    console.log("inside fandle close");
    display_download.style.display = "none";
  };

  const handleBrowseUpload = (event) => {
    const file = event.target.files[0];
    setUploadShow(event.target.value);
    setUpload(file);
  };

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  console.log(inputFile, "input value");
  console.log(upload, "uploaded value");
  console.log(uploadShow, "value");

  return (
    <>
      {admin ? (
        <>
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} />
            <Dropdown.Menu size="sm" title="">
              {/* <Dropdown.Header>Options</Dropdown.Header>  {admin ? leadReportAdminUrl : leadReportClientUrl}  href={downloadCheckinReportUrl}*/}
              <Dropdown.Item onClick={handleDownload}>
                Download Lead report
                <img
                  src={window.location.origin + "/images/download.svg"}
                  alt="download"
                  className="drop_image_download"
                />
              </Dropdown.Item>
              {admin ? (
                <Dropdown.Item onClick={handleCheckin}>
                  Download Check-In report
                  <img
                    src={window.location.origin + "/images/download.svg"}
                    alt="download"
                    className="drop_image_download"
                  />
                </Dropdown.Item>
              ) : null}

              <Dropdown.Item onClick={handleUpload}>
                Upload report
                <img
                  src={window.location.origin + "/images/upload.svg"}
                  alt="upload"
                  className="drop_image_download"
                />
              </Dropdown.Item>
            </Dropdown.Menu>
            <div
              size="sm"
              title=""
              id="form_date_picker"
              style={{ display: "none" }}
            >
              <div className="title_download">
                <p className="down_title_p1">Download Lead report</p>
                <img
                  src={window.location.origin + "/images/close.svg"}
                  alt="download"
                  className="close_button"
                  onClick={handleClose}
                />
              </div>
              <div className="subtitle_download">Fill the below details</div>
              <div className="input_row_download">
                <input
                  type="text"
                  className="input_download"
                  placeholder="From"
                />
                <input
                  type="text"
                  className="input_download"
                  placeholder="To"
                />
              </div>
              <div className="city_row_download">
                <p className="download_p1">city</p>
                <select className="select_download" name="city" id="">
                  <option value="bang">bangalore</option>
                </select>
              </div>
              {/* <div className="city_row_download">
                <p className="download_p1"> category</p>
                <select className="select_download" name="category" id="">
                  <option value="footware">Footware</option>
                  <option value="clothes">Clothes</option>
                </select>
              </div> */}
              <div className="flex_download">
                <div
                  className="button_download"
                  href={admin?leadReportAdminUrl:leadReportClientUrl}                >
                  <img
                    src={window.location.origin + "/images/download.svg"}
                    alt="download"
                    className="drop_image_download"
                  />
                  Download
                </div>
              </div>
            </div>
            <div
              size="sm"
              title=""
              id="form_date_checkin_picker"
              style={{ display: "none" }}
            >
              <div className="title_download">
                <p className="down_title_p1">Download Checkin report</p>
                <img
                  src={window.location.origin + "/images/close.svg"}
                  alt="download"
                  className="close_button"
                  onClick={handleCloseCheckin}
                />
              </div>
              <div className="subtitle_download">Fill the below details</div>
              <div className="input_row_download">
                <input
                  type="text"
                  className="input_download"
                  placeholder="From"
                />
                <input
                  type="text"
                  className="input_download"
                  placeholder="To"
                />
              </div>
              <div className="city_row_download">
                <p className="download_p1">city</p>
                <select className="select_download" name="city" id="">
                  <option value="bang">bangalore</option>
                </select>
              </div>
              {/* <div className="city_row_download">
                <p className="download_p1"> category</p>
                <select className="select_download" name="category" id="">
                  <option value="footware">Footware</option>
                  <option value="clothes">Clothes</option>
                </select>
              </div> */}
              <div className="flex_download">
                <div
                  className="button_download"
                >
                  
                  <a href={downloadCheckinReportUrl}>
                  <img
                    src={window.location.origin + "/images/download.svg"}
                    alt="download"
                    className="drop_image_download"
                  />
                  Download
                  </a>
                </div>
              </div>
            </div>
            <div
              className="modal_upload"
              id="modal_full_upload"
              style={{ display: "none" }}
            >
              <div className="modal_card_upload">
                <img
                  src={window.location.origin + "/images/close.svg"}
                  alt="download"
                  className="close_button_upload"
                  onClick={handleCloseUpload}
                />
                <div className="modal_row_upload">
                  <img
                    src={window.location.origin + "/images/document.svg"}
                    alt="document"
                    className="document_upload_image"
                  />
                  <p className="modal_text_p1">Download the report file </p>
                  <div
                    className="button_download_modal"
                    // href={downloadCheckinReportUrl}
                  >
                    <img
                      src={window.location.origin + "/images/download.svg"}
                      alt="download"
                      className="drop_image_download"
                    />
                    Download
                  </div>
                  <p className="modal_text_p4">
                    Choose a file to upload the document
                  </p>
                  <input
                    type="file"
                    ref={inputFile}
                    id="file"
                    style={{ display: "none" }}
                    onChange={handleBrowseUpload}
                  />
                  <p className="modal_text_p2">
                    Click here to
                    <span>
                      <a className="click_browse" onClick={onButtonClick}>
                        Browse
                      </a>
                    </span>
                  </p>
                  {uploadShow.length === 0 ? <></> : (
                    <p className="model_text_p3">{uploadShow}</p>
                  )}
                  <div
                    className="button_download_modal"
                    // href={downloadCheckinReportUrl}
                  >
                    <img
                      src={window.location.origin + "/images/upload.svg"}
                      alt="download"
                      className="drop_image_download"
                    />
                    Upload
                  </div>
                </div>
              </div>
            </div>
          </Dropdown>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
//https://stackoverflow.com/questions/60123638/use-three-dots-span-to-trigger-dropdown/60127027#60127027
