import { PageSubtitleStyled, PageTitleContainer, PageTitleStyled } from "./styles";

interface PageTitleProps{
  title: string
  subtitle?: string
}

export default function PageTitle({ title, subtitle }: PageTitleProps ) {
  return (
  <PageTitleContainer>
    <PageTitleStyled color="primary">
      {title}
    </PageTitleStyled>
    <PageSubtitleStyled>
      {subtitle}
    </PageSubtitleStyled>
  </PageTitleContainer>);
}
