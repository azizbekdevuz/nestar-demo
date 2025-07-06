import Advertisement from "@/libs/components/homepage/Advertisement";
import PopularProperties from "@/libs/components/homepage/PopularProperties";
import TopAgents from "@/libs/components/homepage/TopAgents";
import TopProperties from "@/libs/components/homepage/TopProperties";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Stack, Box, Typography } from "@mui/material";
import { NextPage } from "next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home: NextPage = () => {
  return (
    <Stack className={"home-page"}>
      <TrendProperties />
      <PopularProperties />
      <Advertisement />
      <TopProperties />
      <TopAgents />
      
      {/* Publisher Badge */}
      <Stack className="homepage-publisher-section">
        <Stack className="container">
          <Box className="publisher-badge">
            <Stack className="publisher-content">
              <Box className="publisher-glow" />
              <Stack 
                className="publisher-text" 
                direction="row" 
                alignItems="center" 
                spacing={1}
              >
                <Typography className="publisher-main" variant="body2">
                  Published by
                </Typography>
                <Typography className="publisher-highlight" variant="body2">
                  Leo
                </Typography>
                <Typography className="publisher-separator" variant="body2">
                  |
                </Typography>
                <Typography className="publisher-accent" variant="body2">
                  MIT25
                </Typography>
              </Stack>
              <Box className="publisher-particles">
                <Box className="particle" />
                <Box className="particle" />
                <Box className="particle" />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default withLayoutMain(Home);