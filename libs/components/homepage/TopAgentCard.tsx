import { Stack } from "@mui/material";

const TopAgentsCard = () => {
  return (
    <Stack className="top-agent-card">
      <img src="/img/icons/leo.svg" alt="" />
        <strong className="agent-title">LEO</strong>
        <span className="agents-type">Agent</span>
    </Stack>
  );
};

export default TopAgentsCard;