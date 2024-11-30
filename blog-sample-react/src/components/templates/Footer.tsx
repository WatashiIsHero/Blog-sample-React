import { Grid2 } from "@mui/material"
import { fontSize, fontWeight, padding } from "@mui/system"
import { FooterContent } from "./components/FooterContent"
import { 
  footerDivStyle,
  grid2Sx,
  footerSpanStyle,
} from "../../styles/FooterStyles";

const footerContentList = [
  { tilte: "主なカテゴリ", firstCnt: "AWS", secondCnt: "React", thirdCnt: "Java" },
  { tilte: "　", firstCnt: "TypeScript", secondCnt: "JavaScript", thirdCnt: "Spring" },
]

export const Footer = () => {
  return (
    <div style={footerDivStyle}>
      <Grid2 container>
        <Grid2 size={{ md: 2.5 }} />
        <FooterContent footerContentList={footerContentList} />
        <Grid2 size={{ md: 2.3 }} sx={grid2Sx} >
          <span style={footerSpanStyle}>プライバシーポリシー</span>
        </Grid2>
        <Grid2 size={{ md: 2.5 }} />
      </Grid2>
    </div>
  )
}