import { Routes, Route, useParams } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Monthly from "./(pages)/monthly/Monthly";
import Sell from "./(pages)/sell/Sell";
import Daily from "./(pages)/dailySell/Daily";
import NewProduct from "./(pages)/newProduct/NewProduct";
import AllProducts from "./(pages)/Allproducts/AllProducts";
import { getPosts } from "./libs/getPosts";

function App(props) {
  
  const data = getPosts();
  console.log(data);

  const resultValues = {
    daily: {
      birinci: "Günlük qazanc",
      ikinci: "Günlük alış",
      ucuncu: "Günlük satış",
    },
    monthly: {
      birinci: "Aylıq qazanc",
      ikinci: "Aylıq alış",
      ucuncu: "Aylıq satış",
    },
    total: {
      birinci: "Ümumi qazanc",
      ikinci: "Ümumi alış",
      ucuncu: "Ümumi satış",
    },
  };
  const { daily, monthly, total } = resultValues;

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllProducts total={total} />} />
          <Route path="sell" element={<Sell />} />
          <Route path="daily" element={<Daily daily={daily} />} />
          <Route path="monthly" element={<Monthly monthly={monthly} />} />
          <Route path="newproduct" element={<NewProduct />} />
          <Route path="*" element={"OMAR 1234"} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
