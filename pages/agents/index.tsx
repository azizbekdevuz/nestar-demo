import React from "react";
import { NextPage } from "next";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import ComingSoon from "@/libs/components/ComingSoon";
import { Stack } from "@mui/material";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const AgentList: NextPage = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack className="container">AGENTS PAGE MOBILE</Stack>;
  } else {
    return (
      <div id={"agents-page"}>
        <ComingSoon
          pageTitle="Agents"
          description="Our elite real estate agents platform is being developed with cutting-edge AI matching technology to connect you with the perfect property professionals."
          className="agents-coming-soon"
        />
      </div>
    );
  }
};

export default withLayoutBasic(AgentList);
