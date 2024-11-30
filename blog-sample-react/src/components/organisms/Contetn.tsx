import { BodyCard } from "./BodyCard"

const contentDivStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  marginTop: "2%",
  marginBottom: "2%"
}

export const Content = () => {
  return (
    <div style={contentDivStyle}>
      <BodyCard />
    </div>
  )
}