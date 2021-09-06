import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import {
  leadReportAdminUrl,
  downloadCheckinReportUrl,
} from "../../utils";
import { getElementError } from "@testing-library/react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import moment from "moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { THISMONTH_CITY_WISE_LEAD_URL } from "../../utils";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

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

  const date = new Date();

  const classes = useStyles();

  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [cityList, setCityList] = useState("");

  const [upload, setUpload] = useState("");
  const [uploadShow, setUploadShow] = useState("");
  const [formaDate, setFormData] = useState(
    moment(new Date()).format("YYYY-MM-DD")
  );
  const [toDate, setToData] = useState(moment(new Date()).format("YYYY-MM-DD"));

  const handleDateChange = (date) => {
    let formatted_date = moment(date).format("YYYY-MM-DD");
    setFormData(formatted_date);
    console.log(formatted_date, date, "inside handle");
  };

  const handleDateChangeto = (date) => {
    let formatted_date = moment(date).format("YYYY-MM-DD");
    setToData(formatted_date);
    console.log(formatted_date, date, "inside handle");
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const cityList = await axios
          .get(THISMONTH_CITY_WISE_LEAD_URL)
          .then((res) => {
            console.log(res.data, "inside useffect city");
            setCityList(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
  }, []);

  const submitHandle = (event) => {
    event.preventDefault();
  };

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

  const handleCity = (e) => {
    console.log(e.target.value, "e.target.value");
    setCity(e.target.value);
  };
  const handleCategory = (e) => {
    console.log(e.target.value, "e.target.categoty");
    setCategory(e.target.value);
  };

  // const DownloadButton = () => {
  //   console.log(category, "input value");
  //   console.log(formaDate, "uploaded value");
  //   console.log(toDate, "value");
  //   console.log(city, "city");
  // };

  // const checkinDownloadMoto = () => {
  //     const datesData = {
  //       "from": formaDate,
  //       "to": toDate
  //     }
  //     console.log(datesData,"inside moto download")

  //     const formData = axios.post("https://isp.taskmo.in/fse/uber/download/checkin",datesData)
  //     .then(res=>{
  //       console.log(res.data,"success")
  //     })
  //     .catch(err=>{
  //       console.log(err)
  //     })
  //     console.log("inside moto")
  // }
  // const checkinDownloadAuto = async() => {
  //   try {
  //     const datesData = {
  //       from: formaDate,
  //       to: toDate
  //     }
  //     const formData = await axios.post("https://isp.taskmo.in/fse/uber_bike/download/checkin",datesData)
  //     .then(res=>{
  //       console.log(res.data,"success")
  //     })
  //     .catch(err=>{
  //       console.log(err)
  //     })

  //   }
  //   catch (err){
  //     console.log(err)
  //   }
  // }
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

              {/* <Dropdown.Item onClick={handleUpload}>
                Upload report
                <img
                  src={window.location.origin + "/images/upload.svg"}
                  alt="upload"
                  className="drop_image_download"
                />
              </Dropdown.Item> */}
            </Dropdown.Menu>
            <div
              size="sm"
              title=""
              id="form_date_picker"
              style={{ display: "none" }}
            >
              <form onSubmit={submitHandle}>
                <div className="title_download">
                  <p className="down_title_p1">Download Lead report</p>
                  <img
                    src={window.location.origin + "/images/close.svg"}
                    alt="download"
                    className="close_button"
                    onClick={handleClose}
                  />
                </div>
                {/* <div className="subtitle_download">Fill the below details</div> */}
                <div className="input_row_download">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      label="From"
                      value={formaDate}
                      className={classes.textField}
                      onChange={handleDateChange}
                    />
                    <KeyboardDatePicker
                      label="to"
                      value={toDate}
                      className={classes.textField}
                      onChange={handleDateChangeto}
                    />
                  </MuiPickersUtilsProvider>
                </div>
                {/* <div className="city_row_download">
                  <p className="download_p1">city</p>
                  <select
                    className="select_download"
                    name="city"
                    onChange={handleCity}
                    required
                  >
                    <option value="" selected disabled>
                      city
                    </option>
                    {cityList &&
                      cityList.map((cit) => <option>{cit.name}</option>)}
                  </select>
                </div> */}
                {/* <div className="city_row_download">
                  <p className="download_p1"> category</p>
                  <select
                    className="select_download"
                    name="category"
                    onChange={handleCategory}
                    required
                  >
                    <option value="" selected disabled>
                      Category
                    </option>
                    <option value="Auto">Auto Ride</option>
                    <option value="Moto">Moto Ride</option>
                  </select>
                </div> */}
                {/*onClick={DownloadButton}  UBER_DOWNLOAD_REPORT*/}
                <div className="flex_download">
                  <div
                    className="button_download"
                    // onclick="window.open('https://w3docs.com','mywindow');"
                  >
                    <a
                      href={leadReportAdminUrl}
                      target="_blank"
                    >
                      <img
                        src={window.location.origin + "/images/download.svg"}
                        alt="download"
                        className="drop_image_download"
                      />
                      Download
                    </a>
                  </div>
                </div>
              </form>
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
              {/* <div className="subtitle_download">Fill the below details</div> */}
              <div className="input_row_download">
                <form className={classes.container} noValidate>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      label="From"
                      value={formaDate}
                      className={classes.textField}
                      onChange={handleDateChange}
                    />
                    <KeyboardDatePicker
                      label="to"
                      value={toDate}
                      className={classes.textField}
                      onChange={handleDateChangeto}
                    />
                  </MuiPickersUtilsProvider>
                </form>
              </div>
              {/* <div className="city_row_download">
                <p className="download_p1">city</p>
                <select
                  className="select_download"
                  name="city"
                  onChange={handleCity}
                  required
                >
                  <option value="" selected disabled>
                    city
                  </option>
                  {cityList &&
                    cityList.map((cit) => <option>{cit.name}</option>)}
                </select>
              </div> */}
              {/* <div className="city_row_download">
                <p className="download_p1"> category</p>
                <select
                  className="select_download"
                  name="category"
                  onChange={handleCategory}
                  required
                >
                  <option value="" selected disabled>
                    Category
                  </option>
                  <option value="Auto">Auto Ride</option>
                  <option value="Moto">Moto Ride</option>
                </select>
              </div> */}
              <div className="flex_download">
                <div
                  className="button_download"
                >
                  <a href={`https://isp.taskmo.in/fse/jumbotail/download/checkin?from=${formaDate}&to=${toDate}`} target="_blank">
                    <img
                      src={window.location.origin + "/images/download.svg"}
                      alt="download"
                      className="drop_image_download"
                    />
                    Download
                  </a>
                </div>
                {/* <div
                  className="button_download1"
                >
                  <a href={`https://isp.taskmo.in/fse/uber_bike/download/checkin?from=${formaDate}&to=${toDate}`} target="_blank">
                    <img
                      src={window.location.origin + "/images/download.svg"}
                      alt="download"
                      className="drop_image_download"
                    />
                    Download Moto
                  </a>
                </div> */}
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
                  {uploadShow.length === 0 ? (
                    <></>
                  ) : (
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
