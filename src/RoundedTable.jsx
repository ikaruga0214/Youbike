import { Fragment, useState } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const RoundedTable = ({ ubikeData, selectArea, search }) => {
  const [sorted, setSorted] = useState({ keyToSort: "縣市", order: "asc" });

  const headers = [
    { label: "縣市", key: "台北市" },
    { label: "區域", key: "sarea" },
    { label: "站點名稱", key: "sna" },
    { label: "可借車輛", key: "sbi" },
    { label: "可還空位", key: "bemp" },
  ];

  const handleHeaderClick = (header) => {
    setSorted({
      keyToSort: header.key,
      order:
        header.key === sorted.keyToSort
          ? sorted.order === "asc"
            ? "desc"
            : "asc"
          : "desc",
    });
  };

  const getSorted = (ubikeData) => {
    if (sorted.order === "asc") {
      return ubikeData.sort((a, b) =>
        a[sorted.keyToSort] > b[sorted.keyToSort] ? 1 : -1
      );
    }
    return ubikeData.sort((a, b) =>
      a[sorted.keyToSort] > b[sorted.keyToSort] ? -1 : 1
    );
  };

  return (
    <Table
      hover
      borderless
      style={{ borderCollapse: "separate", borderSpacing: 0 }}
    >
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className="bg-danger text-light"
              onClick={() => handleHeaderClick(header)}
            >
              {header.label}
              {header.key === sorted.keyToSort && sorted.order === "asc"
                ? "\u2191"
                : "\u2193"}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {getSorted(ubikeData).map((item, index) => (
          <Fragment key={index}>
            {selectArea.includes(item.sarea) && item.sna.includes(search) ? (
              <tr>
                <td>台北市</td>
                <td>{item.sarea}</td>
                <td>{item.sna}</td>
                <td>{item.sbi}</td>
                <td>{item.bemp}</td>
              </tr>
            ) : (
              <></>
            )}
          </Fragment>
        ))}
      </tbody>
    </Table>
  );
};

export default RoundedTable;
