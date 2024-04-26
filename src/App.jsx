import { useState, useEffect } from "react";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import RoundedTable from "./RoundedTable";
import Body from "./Body";

function App() {
  const [ubikeData, setUbikeData] = useState([]);
  const [areaData, setAreaData] = useState([]);
  const [selected, setIsSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");

  const fetchUbikeData = async () => {
    try {
      const res = await fetch(
        "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
      );
      const jsonData = await res.json();
      const newJsonData = jsonData.map((item) => item.sarea);
      const area = [...new Set(newJsonData)];

      setUbikeData(jsonData);
      setAreaData(area);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUbikeData();
  }, []);

  useEffect(() => {
    setIsSelected(areaData);
  }, [areaData, city]);

  return (
    <>
      <Header setSearch={setSearch} setCity={setCity} />
      {city === "台北市" ? (
        <Container>
          <Body
            selected={selected}
            areaData={areaData}
            setIsSelected={setIsSelected}
          />

          <RoundedTable
            ubikeData={ubikeData}
            selectArea={selected}
            search={search}
          />
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;

// sno(站點代號)、sna(中文場站名稱)、tot(場站總停車格)、sbi(可借車位數)、sarea(中文場站區域)、mday(資料更新時間)、
// lat(緯度)、lng(經度)、ar(中文地址)、sareaen(英文場站區域)、snaen(英文場站名稱)、aren(英文地址)、bemp(可還空位數)、act(場站是否暫停營運)
