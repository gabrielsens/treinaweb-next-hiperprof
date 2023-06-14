import { Box, Button, styled } from "@mui/material";

export const ButtonStyled = styled(Button)`
  &.MuiButton-outlined {
    color: ${({ theme }) => theme.palette.primary.contrastText };
    background-color: ${({ theme }) => theme.palette.primary.dark };
  }
`;

export const BoxDrawer = styled(Box)`
  .linkImage {
    background-color: ${({ theme }) => theme.palette.primary.main };
    padding: ${({ theme }) => theme.spacing(1)};
    margin-bottom: ${({ theme }) => theme.spacing(1)};
  }
`;
