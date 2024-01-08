import React from "react";

export default function BoardCard(props) {
  const { data } = props;
  let cardStyle;
  if (data.image === "") {
    cardStyle = {
      backgroundColor: "gray",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100px",
      width: "200px",
      color: "white",
      borderRadius: "8px",
      padding: "10px",
      margin: "10px 5px",
      cursor: "pointer",
      fontSize: "12px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
  } else {
    cardStyle = {
      backgroundImage: `url(${data.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100px",
      width: "200px",
      color: "white",
      borderRadius: "8px",
      padding: "10px",
      margin: "10px 5px",
      cursor: "pointer",
    };
  }
  return (
    <>
      {data.image === "" ? (
        <div className="board-card" style={cardStyle}>
          <h3 style={{padding:"5px"}}>{data.name}</h3>
        </div>
      ) : (
        <div className="board-card" style={cardStyle}>
          <h3>{data.name}</h3>
        </div>
      )}
    </>
  );
}
