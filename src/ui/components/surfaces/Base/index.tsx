import Link from "@components/navigation/Link";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  Icon,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { PropsWithChildren, useState } from "react";
import { BoxDrawer, ButtonStyled } from "./styles";

function LinkLogo() {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="logo" width={156} height={26} />
    </Link>
  );
}

export default function Base({ children }: PropsWithChildren) {
  const theme = useTheme();
  const isSmDevice = useMediaQuery(theme.breakpoints.up("sm"));
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          {isSmDevice && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <LinkLogo />

              <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
                <Link href="/" color="inherit">
                  Home
                </Link>
                <Link href="/login" color="inherit">
                  Login
                </Link>
                <ButtonStyled variant="contained">
                  Seja um professor
                </ButtonStyled>
              </Box>
            </Box>
          )}

          {!isSmDevice && (
            <>
              <IconButton
                color="inherit"
                sx={{ mr: 2 }}
                onClick={() => setIsOpenDrawer(true)}
              >
                <Icon>menu</Icon>
              </IconButton>
              <LinkLogo />
              <Drawer
                open={isOpenDrawer}
                onClick={() => setIsOpenDrawer(false)}
                onClose={() => setIsOpenDrawer(false)}
              >
                <BoxDrawer>
                  <div className="linkImage">
                    <LinkLogo />
                  </div>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 3,
                      ml: 3,
                      mr: 5,
                    }}
                  >
                    <Link href="/" color="inherit">
                      Home
                    </Link>
                    <Link href="/login" color="inherit">
                      Login
                    </Link>
                    <Link href="/" color="inherit">
                      Seja um professor
                    </Link>
                  </Box>
                </BoxDrawer>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Container component="main">{children}</Container>
    </Box>
  );
}
