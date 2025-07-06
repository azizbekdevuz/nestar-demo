import React from "react";
import { NextPage } from "next";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import ComingSoon from "@/libs/components/ComingSoon";

const Community: NextPage = () => {
    return (
        <div id={"community-page"}>
            <ComingSoon 
                pageTitle="Community"
                description="Join our vibrant real estate community where property enthusiasts, investors, and homeowners connect, share insights, and build lasting relationships."
                className="community-coming-soon"
            />
        </div>
    );
};

export default withLayoutBasic(Community);