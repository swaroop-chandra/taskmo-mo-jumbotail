<div className="nin_table">
              <div className="icon-container">
              {searchText.trim().length>0?<>
                <div className="filterText">Filtered</div>
                
                  <div className="myRow result-count">
                  {/* <div>Count : </div> */}
                  <div>
                    {api.length > 0 ? (
                      <>
                        {
                          api.filter(
                            ({
                              driver_contact,
                              driver_name,
                              fse_name,
                              fse_number,
                              city,
                              lead_id,
                              activity_date,
                              user_id,
                            }) => {
                              const pattern1 = new RegExp(searchText, "i");
                              return (
                                pattern1.test(driver_contact) ||
                                pattern1.test(driver_name) ||
                                pattern1.test(fse_name) ||
                                pattern1.test(fse_number) ||
                                pattern1.test(city) ||
                                pattern1.test(lead_id) ||
                                pattern1.test(activity_date) ||
                                pattern1.test(user_id)
                              );
                            }
                          ).length
                        }
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                </>:<></>}
                <div className="search-container">
                  <input
                    placeholder="Search"
                    className="searchInput"
                    onChange={(e) => {
                      const str = e.target.value.trim();
                      setSearchText(str);
                    }}
                  />
                  <img
                    src={window.location.origin + "/images/search.svg"}
                    alt="search"
                  />
                </div>
                <div
                  className="more-options"
                  onClick={() => {
                    setMoreFocus(!moreFocus);
                  }}
                  onBlur={() => {
                    setMoreFocus(false);
                  }}
                >
                  <img
                    src={window.location.origin + "/images/more.svg"}
                    alt="more"
                  />
                </div>
                {moreFocus ? (
                  <>
                    <div className={`options`}>
                      <a href={admin?leadReportAdminUrl:leadReportClientUrl}><div className="option-item">
                        <div className="option-item-text">Lead Report</div>
                        <div>
                          <img
                            src={
                              window.location.origin + "/images/download1.svg"
                            }
                            height="33px"
                          />
                        </div>
                      </div></a>
                      {admin? <a href="https://isp.taskmo.in/fse/rapido/download/checkin">
                      <div  className="option-item">
                        <div className="option-item-text">Check-in Report</div>
                        <div>
                          <img
                            src={
                              window.location.origin + "/images/download1.svg"
                              
                            }
                            height="33px"
                          />
                        </div>
                      </div>
                      </a>:<></> }
                      
                      {/* <div className="option-item">
                        <div className="option-item-text">Upload Report</div>
                        <div>
                          <img
                            src={
                              window.location.origin + "/images/upload.svg"
                            }
                            height="37px"
                          />
                        </div>
                      </div> */}
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {/* old Download Btn */}
                {/* <a href={DownloadUrl}>
                  <img
                    src={window.location.origin + "/images/download1.svg"}
                    height="40px"
                    alt="download"
                  />
                </a> */}
              </div>
              <div className="n_t_row1">
                <p className="myLeadId">Leads ID</p>

                <p className="myDate">Date</p>
                {admin?<>
                  <p className="fseId">FSE ID</p>
                <p className="fseName">FSE Name</p>
                <p className="fseContact">FSE Contact</p>
                </>:<></>}
                <p className="driverName">Driver Name</p>

                <p className="driverContact">Driver Contact</p>
                {/* <p className="vehicleNumber">Vehicle Number</p> */}
                <p className="myCity">City</p>
                <p className="pAddStatus">Partner Add Status</p>
                <p className="rideStatus">Ride Status</p>

                <div
                  className="nin_card1"
                  id="list-items"
                  style={{ display: "none" }}
                >
                  <div className="ncard_row1">
                    <p className="nin_from">From Date: __________</p>
                    <p className="nin_from">To Date: __________</p>
                    <div className="nin_box">
                      <p className="nin_p8">City</p>
                      <img
                        src={window.location.origin + "/images/FVector.svg"}
                        alt="call"
                        className="nin_filter"
                      />
                    </div>
                  </div>
                  <div className="ncard_row2">
                    <p className="nin_download_b">Download</p>
                  </div>
                </div>
              </div>
              {api.length > 0 ? (
                <>
                  {api
                    .filter(
                      ({
                        driver_contact,
                        driver_name,
                        fse_name,
                        fse_number,
                        city,
                        lead_id,
                        activity_date,
                        user_id,
                      }) => {
                        const pattern1 = new RegExp(searchText, "i");
                        return (
                          pattern1.test(driver_contact) ||
                          pattern1.test(driver_name) ||
                          pattern1.test(fse_name) ||
                          pattern1.test(fse_number) ||
                          pattern1.test(city) ||
                          pattern1.test(lead_id) ||
                          pattern1.test(activity_date) ||
                          pattern1.test(user_id)
                        );
                      }
                    )
                    .map(
                      (
                        {
                          lead_id,
                          activity_date,
                          user_id: fseId,
                          fse_name,
                          fse_number,
                          driver_name,
                          driver_contact,
                          vehicle_number,
                          city,
                          stage1_status,
                          ride1_date,
                          ride2_date,
                          ride3_date,
                          ride4_date,
                          ride5_date,
                        },
                        idx
                      ) => {
                        return (
                          <>
                            <div className="n_t_row2" key={idx}>
                              <p style={{ minWidth: "50px", maxWidth: "50px" }}>
                                {lead_id}
                              </p>

                              <p
                                style={{ minWidth: "100px", maxWidth: "100px" }}
                              >
                                {activity_date}
                              </p>
                              {admin?<>
                                <p style={{ minWidth: "70px", maxWidth: "70px" }}>
                                TM{fseId}
                              </p>
                              <p
                                style={{
                                  padding: "0px 10px",
                                  minWidth: "140px",
                                  maxWidth: "140px",
                                }}
                              >
                                {fse_name}
                              </p>
                              <p style={{ minWidth: "82px", maxWidth: "82px" }}>
                                <b>{fse_number}</b>
                              </p>
                              </>:<></>}
                              <p
                                style={{
                                  minWidth: "150px",
                                  maxWidth: "150px",
                                  padding: "0px 10px",
                                }}
                              >
                                {driver_name}
                              </p>

                              <p
                                style={{
                                  minWidth: "116px",
                                  maxWidth: "116px",
                                  fontWeight: "bold",
                                }}
                              >
                                {driver_contact}
                              </p>

                              <p
                                style={{ minWidth: "115px", maxWidth: "115px" }}
                              >
                                {city}
                              </p>
                              <p
                                style={{ minWidth: "138px", maxWidth: "138px" }}
                              >
                                <div className={stage1_status}>
                                  {stage1_status}
                                </div>
                              </p>

                              <p>
                                <StatusBar
                                  o1={ride1_date}
                                  o2={ride2_date}
                                  o3={ride3_date}
                                  o4={ride4_date}
                                  o5={ride5_date}
                                />{" "}
                              </p>
                            </div>
                          </>
                        );
                      }
                    )}
                </>
              ) : (
                <></>
              )}
              {/* <div className="nin_footer">
                <p className="nin_p9">Last report updated on:</p>
                <p className="nin_p10">25/05/2021</p>
                <p className="nin_p11">09:30 am</p>
              </div> */}
            </div>