import React from "react";
import { NextPage } from "next";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import ComingSoon from "@/libs/components/ComingSoon";

const AgentList: NextPage = () => {
    return (
        <div id={"agents-page"}>
            <ComingSoon 
                pageTitle="Agents"
                description="Our elite real estate agents platform is being developed with cutting-edge AI matching technology to connect you with the perfect property professionals."
                className="agents-coming-soon"
            />
        </div>
    );
};

export default withLayoutBasic(AgentList);