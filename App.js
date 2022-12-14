import * as React from "react";
import { useRef, useState } from "react";
import "@progress/kendo-theme-material/dist/all.css";

import {
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartLegend,
  Chart,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-react-charts";

import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport } from "@progress/kendo-react-pdf";

import "./index.css";
import "hammerjs";

function App() {
  const categories = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"];
  const series = [
    {
      data: [86, 78, 74, 56, 78, 48, 89],
    },
  ];

  const ddData = [
    { text: "A4", value: "size-a4" },
    { text: "Letter", value: "size-letter" },
    { text: "Executive", value: "size-executive" },
  ];

  const [layoutSelection, setLayoutSelection] = useState({
    text: "A4",
    value: "size-a4",
  });

  const updatePageLayout = (event) => {
    setLayoutSelection(event.target.value);
  };

  const pdfExportComponent = useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  return (
    <div id="example">
      <div className="box wide hidden-on-narrow">
        <div className="box-col">
          <h4>Select a Page Size</h4>
          <DropDownList
            data={ddData}
            textField="text"
            dataItemKey="value"
            value={layoutSelection}
            onChange={updatePageLayout}
          />
        </div>
        <div className="box-col">
          <h4>Export PDF</h4>
          <Button primary={true} onClick={handleExportWithComponent}>
            Export
          </Button>
        </div>
      </div>
      <div className="page-container hidden-on-narrow">
        <div className="col-md-12">
          <PDFExport ref={pdfExportComponent}>
            <div className={`pdf-page ${layoutSelection.value}`}>
              <h5 style={{ textDecoration: "underline", marginTop: "-37px" }}>
                FORM YA TATHMINI YA MAENDELEO YA KITAALUMA YA MWANAFUNZI
              </h5>
              <h6 style={{ fontSize: "11.5px" }}>
                JINA: <span className="dotted-underline">SHEDRACK GODSON</span>{" "}
                DARASA: <span className="dotted-underline">CLASS SIX</span>{" "}
                TAREHE: <span className="dotted-underline">25/12/2022</span>{" "}
                WASTANI WA DARASA: <span className="dotted-underline">85%</span>
              </h6>
              <p
                style={{
                  fontSize: "12px",
                  textDecoration: "underline",
                  marginTop: "-10px",
                }}
              >
                <strong>
                  JEDWALI A: WASTANI WA JUMLA WA MWANAFUNZI. (JANUARY-JULY)
                </strong>
              </p>
              <table className="table table-border">
                <tr>
                  <th style={{border: "1px solid black"}}>JAN</th>
                  <th style={{border: "1px solid black"}}>FEB</th>
                  <th style={{border: "1px solid black"}}>MAR</th>
                  <th style={{border: "1px solid black"}}>APR</th>
                  <th style={{border: "1px solid black"}}>MAY</th>
                  <th style={{border: "1px solid black"}}>JUN</th>
                  <th style={{border: "1px solid black"}}>JUL</th>
                  <th style={{border: "1px solid black"}}>AVG</th>
                </tr>
                <tr>
                  <td style={{border: "1px solid black"}}>87</td>
                  <td style={{border: "1px solid black"}}>76</td>
                  <td style={{border: "1px solid black"}}>56</td>
                  <td style={{border: "1px solid black"}}>98</td>
                  <td style={{border: "1px solid black"}}>56</td>
                  <td style={{border: "1px solid black"}}>98</td>
                  <td style={{border: "1px solid black"}}>78</td>
                  <td style={{border: "1px solid black"}}>96</td>
                </tr>
              </table>

              <p
                style={{
                  fontSize: "12px",
                  textDecoration: "underline",
                }}
              >
                <strong>JEDWALI B: MAENDELEO YA MASOMO</strong>
              </p>
              <p
                style={{
                  fontSize: "12px",
                  textDecoration: "underline",
                }}
              >
                <strong>1. COMMUNICATION</strong>
              </p>
              <table
                className="table table-border"
                style={{ marginTop: "-15px" }}
              >
                <tr>
                  <th>FEB</th>
                  <th>JAN</th>
                  <th>MAR</th>
                  <th>APR</th>
                  <th>MAY</th>
                  <th>JUN</th>
                  <th>JUL</th>
                  <th>AVG</th>
                </tr>
                <tr>
                  <td>87</td>
                  <td>76</td>
                  <td>56</td>
                  <td>98</td>
                  <td>56</td>
                  <td>98</td>
                  <td>78</td>
                  <td>96</td>
                </tr>
              </table>

              <p
                style={{
                  fontSize: "12px",
                  textDecoration: "underline",
                }}
              >
                <strong>2. RELATION</strong>
              </p>
              <table
                className="table table-border"
                style={{ marginTop: "-15px" }}
              >
                <tr>
                  <th>JAN</th>
                  <th>FEB</th>
                  <th>MAR</th>
                  <th>APR</th>
                  <th>MAY</th>
                  <th>JUN</th>
                  <th>JUL</th>
                  <th>AVG</th>
                </tr>
                <tr>
                  <td>87</td>
                  <td>76</td>
                  <td>56</td>
                  <td>98</td>
                  <td>56</td>
                  <td>98</td>
                  <td>78</td>
                  <td>96</td>
                </tr>
              </table>

              <p
                style={{
                  fontSize: "12px",
                  textDecoration: "underline",
                }}
              >
                <strong>3. READING</strong>
              </p>
              <table
                className="table table-border"
                style={{ marginTop: "-15px" }}
              >
                <tr>
                  <th>JAN</th>
                  <th>FEB</th>
                  <th>MAR</th>
                  <th>APR</th>
                  <th>MAY</th>
                  <th>JUN</th>
                  <th>JUL</th>
                  <th>AVG</th>
                </tr>
                <tr>
                  <td>87</td>
                  <td>76</td>
                  <td>56</td>
                  <td>98</td>
                  <td>56</td>
                  <td>98</td>
                  <td>78</td>
                  <td>96</td>
                </tr>
              </table>

              <p
                style={{
                  fontSize: "12px",
                  textDecoration: "underline",
                }}
              >
                <strong>4. ARTHMETICS</strong>
              </p>
              <table
                className="table table-border"
                style={{ marginTop: "-15px" }}
              >
                <tr>
                  <th>JAN</th>
                  <th>FEB</th>
                  <th>MAR</th>
                  <th>APR</th>
                  <th>MAY</th>
                  <th>JUN</th>
                  <th>JUL</th>
                  <th>AVG</th>
                </tr>
                <tr>
                  <td>87</td>
                  <td>76</td>
                  <td>56</td>
                  <td>98</td>
                  <td>56</td>
                  <td>98</td>
                  <td>78</td>
                  <td>96</td>
                </tr>
              </table>

              <p
                style={{
                  fontSize: "12px",
                  textDecoration: "underline",
                }}
              >
                <strong>5. HEALTH CARE</strong>
              </p>
              <table
                className="table table-border"
                style={{ marginTop: "-15px" }}
              >
                <tr>
                  <th>JAN</th>
                  <th>FEB</th>
                  <th>MAR</th>
                  <th>APR</th>
                  <th>MAY</th>
                  <th>JUN</th>
                  <th>JUL</th>
                  <th>AVG</th>
                </tr>
                <tr>
                  <td>87</td>
                  <td>76</td>
                  <td>56</td>
                  <td>98</td>
                  <td>56</td>
                  <td>98</td>
                  <td>78</td>
                  <td>96</td>
                </tr>
              </table>

              <p
                style={{
                  fontSize: "12px",
                  textDecoration: "underline",
                }}
              >
                <strong>6. DICTATION</strong>
              </p>
              <table
                className="table table-border"
                style={{ marginTop: "-15px" }}
              >
                <tr>
                  <th>JAN</th>
                  <th>FEB</th>
                  <th>MAR</th>
                  <th>APR</th>
                  <th>MAY</th>
                  <th>JUN</th>
                  <th>JUL</th>
                  <th>AVG</th>
                </tr>
                <tr>
                  <td>87</td>
                  <td>76</td>
                  <td>56</td>
                  <td>98</td>
                  <td>56</td>
                  <td>98</td>
                  <td>78</td>
                  <td>96</td>
                </tr>
              </table>

              <p
                style={{
                  fontSize: "12px",
                  textDecoration: "underline",
                }}
              >
                <strong>7. ARTS</strong>
              </p>
              <table
                className="table table-border"
                style={{ marginTop: "-15px" }}
              >
                <tr>
                  <th>JAN</th>
                  <th>FEB</th>
                  <th>MAR</th>
                  <th>APR</th>
                  <th>MAY</th>
                  <th>JUN</th>
                  <th>JUL</th>
                  <th>AVG</th>
                </tr>
                <tr>
                  <td>87</td>
                  <td>76</td>
                  <td>56</td>
                  <td>98</td>
                  <td>56</td>
                  <td>98</td>
                  <td>78</td>
                  <td>96</td>
                </tr>
              </table>

              <div className="col-6">
                <div className="k-card">
                  <Chart
                    style={{
                      height: 250,
                    }}
                  >
                    <ChartLegend position="top" orientation="horizontal" />
                    <ChartCategoryAxis>
                      <ChartCategoryAxisItem
                        categories={categories}
                        startAngle={45}
                      />
                    </ChartCategoryAxis>
                    <ChartSeries>
                      {series.map((item, idx) => (
                        <ChartSeriesItem
                          key={idx}
                          type="line"
                          tooltip={{
                            visible: true,
                            format: `${item.name}: ${item.data}`
                          }}
                          data={item.data}
                          name={item.name}
                        />
                      ))}
                    </ChartSeries>
                  </Chart>
                </div>
              </div>
            </div>
          </PDFExport>
        </div>
      </div>
    </div>
  );
}

export default App;
