import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";

const PrDetail = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack className="container">PROPERTY PAGE MOBILE</Stack>;
  } else {
    return <Container>PROPERTY DETAIL</Container>;
  }
};

export default withLayoutBasic(PrDetail);
