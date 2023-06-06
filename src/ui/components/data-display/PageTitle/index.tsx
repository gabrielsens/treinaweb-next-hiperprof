import { PageSubtitleStyled, PageTitleContainer, PageTitleStyled } from "./styles";

import { TypographyProps } from '@mui/material'

interface PageTitleProps extends Omit<TypographyProps, "title"> {
  title: string
  subtitle?: string
}

export default function PageTitle({ title, subtitle, color = "primary" }: PageTitleProps ) {
  return (
  <PageTitleContainer>
    <PageTitleStyled color={color}>
      {title}
    </PageTitleStyled>
    <PageSubtitleStyled>
      {subtitle}
    </PageSubtitleStyled>
  </PageTitleContainer>);
}
