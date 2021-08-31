import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import {
  leadReportAdminUrl,
  leadReportClientUrl,
  downloadCheckinReportUrl,
} from "../../utils";
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
  return (
    <>
      {admin ? (
        <>
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} />
            <Dropdown.Menu size="sm" title="">
              {/* <Dropdown.Header>Options</Dropdown.Header> */}
              <Dropdown.Item
                href={admin ? leadReportAdminUrl : leadReportClientUrl}
              >
                Lead Report{" "}
              </Dropdown.Item>
              {admin ? (
                <>
                  <Dropdown.Item href={downloadCheckinReportUrl}>
                    Check In Report
                  </Dropdown.Item>

                    <div className="upload-container">
                      <div className ="uploadReportTitle">Upload Report</div>
                      <form
                        // onSubmit={submitForm}
                        id="testForm"
                        className={"uploadReport"}
                      >
                        {/* <input type="text" id="testName" /> */}
                        <input type="file" name="test" id="testFile" />
                        <button type="submit">Submit</button>
                      </form>
                    </div>

                </>
              ) : null}
              {/* <Dropdown.Item>Upload</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
//https://stackoverflow.com/questions/60123638/use-three-dots-span-to-trigger-dropdown/60127027#60127027
