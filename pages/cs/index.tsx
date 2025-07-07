import React from "react";
import { NextPage } from "next";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import ComingSoon from "@/libs/components/ComingSoon";
import { Stack } from "@mui/material";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const CS: NextPage = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack className="container">CS PAGE MOBILE</Stack>;
  } else {
    return (
      <div id={"cs-page"}>
        <ComingSoon
          pageTitle="Customer Service"
          description="Our advanced customer support system with AI-powered assistance and 24/7 live chat is being crafted to provide exceptional service experience."
          className="cs-coming-soon"
        />
      </div>
    );
  }
};

export default withLayoutBasic(CS);
