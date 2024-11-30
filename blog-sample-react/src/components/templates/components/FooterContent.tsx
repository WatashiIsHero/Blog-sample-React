import { Grid2 } from "@mui/material";
import { grid2Sx, footerSpanStyle } from "../../../styles/FooterStyles";

type PropsType = {
  footerContentList:Array<{
    tilte: string, 
    firstCnt: string, 
    secondCnt: string, 
    thirdCnt: string,
  }>,
}

export const FooterContent = (props: PropsType) => {
  const { footerContentList } = props;
  return (
    <>
      {footerContentList.map(data => (
        <Grid2 size={{ md: 2.3 }} sx={grid2Sx} >
        <span style={footerSpanStyle}>{data.tilte}</span>
        <ul style={{ listStyle: "none", }}>
          <li>{data.firstCnt}</li>
          <li style={{ marginTop: "10px", }}>{data.secondCnt}</li>
          <li style={{ marginTop: "10px", }}>{data.thirdCnt}</li>
        </ul>
        </Grid2>
      ))}
    </>
  )
}