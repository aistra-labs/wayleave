import ChatSummaryComponent from "../ChatSummaryComponent";
import Header from "../HeaderComponent";
import images from "../images/images";
import "../WayLeaveDetailsComponent/wayLeaveDetailsComponent.css";
import Skeleton from "@mui/material/Skeleton";
const WayLeaveComponent = ({ wayLeave, summary }) => {
  return (
    <>
      <div className="wayleave-details-wrapper">
        <div>
          <Header title={"Wayleave Detail"} />{" "}
        </div>
        <div className="wayleave-flex-wrapper">
          <Skeleton variant="circular"></Skeleton>
          <div className="wayleave-box-wrapper">
            <div className="details-wrapper">
              <div className="detail-data">
                <div className="details-icon">
                  <img
                    src={images["building.svg"]}
                    loading="lazy"
                    alt="building"
                  />
                </div>
                <div className="details-text">
                  <div className="title">Proprietor Address:</div>
                  <div className="description">
                    {wayLeave && wayLeave.details?.propreitorAddress}
                  </div>
                </div>
              </div>
              <div className="detail-data">
                <div className="details-icon">
                  <img
                    src={images["at-rate.svg"]}
                    loading="lazy"
                    alt="building"
                  />
                </div>
                <div className="details-text">
                  <div className="title">Primary Contact Method:</div>
                  <div className="description">
                    {wayLeave?.details?.primaryContactMethod}
                  </div>
                </div>
              </div>
              <div className="detail-data">
                <div className="details-icon">
                  <img src={images["card.svg"]} loading="lazy" alt="building" />
                </div>
                <div className="details-text">
                  <div className="title">Wayleave ID:</div>
                  <div className="description">
                    {wayLeave?.details?.wayLeaveId}
                  </div>
                </div>
              </div>
              <div className="detail-data">
                <div className="details-icon">
                  <img
                    src={images["connect.svg"]}
                    loading="lazy"
                    alt="building"
                  />
                </div>
                <div className="details-text">
                  <div className="title">Route ID:</div>
                  <div className="description">R3284</div>
                </div>
              </div>
              <div className="detail-data">
                <div className="details-icon">
                  <img src={images["user.svg"]} loading="lazy" alt="building" />
                </div>
                <div className="details-text">
                  <div className="title">Proprietor ID:</div>
                  <div className="description">
                    {wayLeave?.details?.propreitorId}
                  </div>
                </div>
              </div>
              <div className="detail-data bb-none">
                <div className="details-icon">
                  <img
                    src={images["users.svg"]}
                    loading="lazy"
                    alt="building"
                  />
                </div>
                <div className="details-text">
                  <div className="title">Multiple Proprietors:</div>
                  <div className="description">
                    {wayLeave?.details?.multiplePropreitor}
                  </div>
                </div>
              </div>
            </div>
            <div className="details-wrapper">
              <div className="detail-data-status">
                <div className="details-label">Current State:</div>
                <div className="details-value">
                  <span> {wayLeave?.details?.currentState}</span>
                </div>
              </div>
              {/* <div className="detail-data-status">
                <div className="details-label">Contract Open Trigger:</div>
                <div className="details-value">Letter 2</div>
              </div>
              <div className="detail-data-status">
                <div className="details-label">Contract Version:</div>
                <div className="details-value">v3</div>
              </div> */}
              <div className="detail-data-status">
                <div className="details-label">Contract Versions:</div>
                <div className="details-value">
                  <div className="details-pdf">
                    {" "}
                    {wayLeave &&
                      wayLeave.contractVersions &&
                      wayLeave.contractVersions.map((pdf) => (
                        <a href={pdf.contractUrl} target="blank">
                          {pdf.contractType}
                        </a>
                      ))}
                  </div>{" "}
                </div>
              </div>
              <div className="detail-data-status">
                <div className="details-title">Recent Status Updates:</div>
              </div>
              <div className="detail-data-status">
                <div className="details-label">Contract First review:</div>
                <div className="details-value">
                  {wayLeave?.statusUpdates?.contactFirstReviewd}
                </div>
              </div>
              <div className="detail-data-status">
                <div className="details-label">Letter 2 QR Scan:</div>
                <div className="details-value">2023/12/08, 17:52</div>
              </div>
              <div className="detail-data-status bb-none">
                <div className="details-label">Letter 2 Dispatch:</div>
                <div className="details-value">2023/12/06, 08:30</div>
              </div>
            </div>
            <div className="details-wrapper">
              <div className="detail-data-status">
                <div className="details-label">Criticality:</div>
                <div className="details-value">
                  {wayLeave?.details?.criticality}
                </div>
              </div>
              <div className="detail-data-status">
                <div className="details-title">Route Completion Rate:</div>
              </div>
              <div className="detail-data-status">
                <div className="details-label">Total:</div>
                <div className="details-value">
                  {wayLeave?.routeCompletionRate?.total}
                </div>
              </div>
              <div className="detail-data-status">
                <div className="details-label">Critical: </div>
                <div className="details-value">
                  {wayLeave?.routeCompletionRate?.critical}
                </div>
              </div>

              <div className="detail-data-status">
                <div className="details-label">Time to Closure:</div>
                <div className="details-value">
                  {wayLeave?.routeCompletionRate?.timeToClosure}
                </div>
              </div>
              <div className="detail-data-status">
                <div className="details-label">Route Negotiation Rate:</div>
                <div className="details-value">
                  {wayLeave?.routeCompletionRate?.routeNegotiationRate}
                </div>
              </div>
              <div className="detail-data-status bb-none">
                <div className="details-label">Negotiation Closure Rate:</div>
                <div className="details-value">
                  {wayLeave?.routeCompletionRate?.negotiationClosureRate}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChatSummaryComponent summary={summary} />
      </div>
    </>
  );
};
export default WayLeaveComponent;
