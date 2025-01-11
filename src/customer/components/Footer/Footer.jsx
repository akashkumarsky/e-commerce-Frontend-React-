import { Grid, Typography, Link, Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "black", color: "white", py: 5 }}>
      <Grid container spacing={4} textAlign="center">
        {/* Company Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Company
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <Link href="/about" underline="none" color="inherit">
              About Us
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <Link href="/careers" underline="none" color="inherit">
              Careers
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <Link href="/blog" underline="none" color="inherit">
              Blog
            </Link>
          </Typography>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <Link href="/faq" underline="none" color="inherit">
              FAQs
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <Link href="/support" underline="none" color="inherit">
              Support
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <Link href="/terms" underline="none" color="inherit">
              Terms of Service
            </Link>
          </Typography>
        </Grid>

        {/* Follow Us Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <Link
              href="https://www.facebook.com"
              underline="none"
              color="inherit"
              target="_blank"
            >
              Facebook
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <Link
              href="https://www.twitter.com"
              underline="none"
              color="inherit"
              target="_blank"
            >
              Twitter
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <Link
              href="https://www.instagram.com"
              underline="none"
              color="inherit"
              target="_blank"
            >
              Instagram
            </Link>
          </Typography>
        </Grid>

        {/* Contact Us Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Email: support@example.com
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Phone: +1 234 567 890
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Address: 123, Main Street, City
          </Typography>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          textAlign: "center",
          borderTop: "1px solid gray",
          mt: 3,
          pt: 1,
        }}
      >
        <Typography
          variant="caption" // Smaller font size
          sx={{ fontSize: "0.75rem", color: "gray.400" }} // Adjusted size and color
        >
          © {new Date().getFullYear()} MyCompany. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
