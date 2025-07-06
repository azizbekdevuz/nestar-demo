import React from "react";
import { NextPage } from "next";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import ComingSoon from "@/libs/components/ComingSoon";

const CS: NextPage = () => {
    return (
        <div id={"cs-page"}>
            <ComingSoon 
                pageTitle="Customer Service"
                description="Our advanced customer support system with AI-powered assistance and 24/7 live chat is being crafted to provide exceptional service experience."
                className="cs-coming-soon"
            />
        </div>
    );
};

export default withLayoutBasic(CS);