import React, { useState } from "react";
import { MainLayout, InnerLayout } from "../Styles/Layouts";
import Title from "../Components/util/Title";
import portfolio from "../Data/portfolios";
import Menu from "../Components/util/Menu";
import Button from "../Components/util/Button";

const allButtons = ["All", ...new Set(portfolio.map((item) => item.category))];

function PortfolioPage() {
  const [menuItem, setMenuItems] = useState(portfolio);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setMenuItems(portfolio);
      return;
    }

    const filteredData = portfolio.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };
  return (
    <MainLayout>
      <Title title={"Portfolio"} span={"portfolio"} />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfolioPage;
