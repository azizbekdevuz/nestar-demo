import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";

const Community: NextPage = () => {
    return (
        <div> 
            COMMUNITY(" ")
            <button onClick={() => alert ('Hello, MIT')} style={{ margin: "15px" }}>
                PressMe
            </button>
        </div>
    );
};

export default withLayoutBasic(Community);