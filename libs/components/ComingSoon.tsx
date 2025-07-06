import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Container } from "@mui/material";

interface ComingSoonProps {
  pageTitle: string;
  description?: string;
  className?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ 
  pageTitle, 
  description = "This amazing feature is being crafted with cutting-edge technology",
  className = ""
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Container maxWidth={false} className={`coming-soon-page ${className}`}>
      <Stack className="coming-soon-container">
        {/* Background Elements */}
        <Box className="background-grid" />
        <Box className="background-particles">
          {[...Array(12)].map((_, i) => (
            <Box key={i} className={`particle particle-${i + 1}`} />
          ))}
        </Box>
        
        {/* Main Content */}
        <Stack className="content-wrapper" spacing={4}>
          {/* Title Section */}
          <Stack className="title-section" spacing={2}>
            <Typography className="page-title" variant="h1">
              {pageTitle}
            </Typography>
            <Box className="title-underline" />
          </Stack>

          {/* Coming Soon Badge */}
          <Stack className="coming-soon-badge">
            <Box className="badge-glow" />
            <Stack className="badge-content" spacing={1}>
              <Typography className="coming-soon-text" variant="h2">
                Coming Soon
              </Typography>
              <Typography className="construction-text" variant="h6">
                Under Construction
              </Typography>
            </Stack>
            <Box className="badge-particles">
              {[...Array(6)].map((_, i) => (
                <Box key={i} className={`badge-particle badge-particle-${i + 1}`} />
              ))}
            </Box>
          </Stack>

          {/* Description */}
          <Typography className="description-text" variant="body1">
            {description}
          </Typography>

          {/* Progress Indicator */}
          <Stack className="progress-section" spacing={2}>
            <Typography className="progress-label" variant="body2">
              Development Progress
            </Typography>
            <Box className="progress-bar">
              <Box className="progress-fill" />
              <Box className="progress-glow" />
            </Box>
            <Typography className="progress-percentage" variant="body2">
              {mounted ? '75%' : '0%'}
            </Typography>
          </Stack>

          {/* Tech Stack Indicators */}
          <Stack className="tech-stack" direction="row" spacing={2}>
            <Box className="tech-item">
              <Typography variant="caption">Next.js</Typography>
              <Box className="tech-pulse" />
            </Box>
            <Box className="tech-item">
              <Typography variant="caption">TypeScript</Typography>
              <Box className="tech-pulse" />
            </Box>
            <Box className="tech-item">
              <Typography variant="caption">Material-UI</Typography>
              <Box className="tech-pulse" />
            </Box>
            <Box className="tech-item">
              <Typography variant="caption">React</Typography>
              <Box className="tech-pulse" />
            </Box>
          </Stack>

          {/* Publisher Badge */}
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
                  Publisher:
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

        {/* Footer Elements */}
        <Stack className="footer-elements">
          <Box className="laser-line" />
          <Typography className="footer-text" variant="caption">
            Designed with Next Level Engineering
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ComingSoon; 