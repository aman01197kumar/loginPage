import React from "react";
import { useParams } from "react-router-dom";
function Profile({ data }) {
  const { id } = useParams();
  const newId = Number(id) - 1;
  console.log(data[newId]);
  // console.log(data.media);
  return (
    <div style={{ margin: "2rem" }}>
      <img className="picture" src={data[newId].picture} alt="" />
      <div style={{ display: "flex" }}>
        <div className="content">
          <div className="name">
            Name: <span className="title">{data[newId].name}</span>
          </div>
          <div className="name">
            Relation: <span className="title">{data[newId].relation}</span>
          </div>
          <div className="name">
            Something to say:{" "}
            <span className="title">{data[newId].content}</span>
          </div>
        </div>
        <div className="media">
          <div style={{ fontFamily: "cursive" }}>Some Memories of us</div>

          {/* {data &&
            data.map((item) => {
              return (
                <div>
                  <img src={media.item} alt="" />
                </div>
              );
            })} */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {data[newId].media.map((item) => {
              return (
                <div>
                  {item ? <img src={item} alt="" /> : <p>Will create later</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
