import React from "react";
import hedy from "../assets/hedylamarr.jpg"

function Profile() {

    const user = {
        name: 'Hedy Lamarr',
        imageUrl: {hedy},
        imageSize: 90,
      };

    return (
<>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={hedy}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>

    )
}

export default Profile