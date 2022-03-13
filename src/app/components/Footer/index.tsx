import styled from "styled-components";

const FooterWrapper = styled.div`
        border-radius: 0;
        margin: 10;
`;

function Footer() {
  return (
    <FooterWrapper>
      {/* <Container maxWidth="lg">
        <Box
          py={3}
          display={{ xs: 'block', md: 'flex' }}
          alignItems="center"
          textAlign={{ xs: 'center', md: 'left' }}
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="subtitle1">
              &copy; 2021 - Afitapp Admin Dashboard
            </Typography>
          </Box>
          <Typography sx={{ pt: { xs: 2, md: 0 } }} variant="subtitle1">
            Crafted by <Link href="https://afitapp.com" target="_blank" rel="noopener noreferrer">afitapp.com</Link>
          </Typography>
        </Box>
      </Container> */}
    </FooterWrapper>
  );
}

export default Footer;
