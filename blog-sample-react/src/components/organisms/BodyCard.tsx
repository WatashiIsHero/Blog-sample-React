import reactImageSrc from "../../img/contents/React.jpg"; 

const bodyDivStyle ={
  height: "1500px",
}

const smnImageStyle = {
  width: '880px', 
  aspectRatio: '1.6/1', 
  marginTop: "3.5%",
  marginLeft: "3.5%",
}

export const BodyCard = () => {
  return (
    <div style={bodyDivStyle}>
      <img src={reactImageSrc} style={smnImageStyle} alt="React" />
      <h2 style={{ marginLeft: "10px", }}>Reactで技術ブログを作成してみた</h2>
      <br />
      <br />
      <br />
      <p style={{ marginLeft: "30px", }}>皆さんこんにちは</p>
      <br />
      <p style={{ marginLeft: "30px", }}>今回はReactを使って簡単にブログのサンプルを作成してみました</p>
    </div>
  )
}