import React, { useState, useEffect } from "react";
import { PhotoContainer, PhotoInfo, LikeButton, PhotoTitle } from "../styles";

export default function Photo({ photo }) {
  const [liked, setLiked] = useState();

  useEffect(() => {
    setLiked(getStoredLikes().includes(photo.id));
  }, [photo.id]);

  const getStoredLikes = () => {
    return JSON.parse(window.localStorage.getItem("photo-ids")) || [];
  };
  const setStoreLikes = (likes) => {
    window.localStorage.setItem("photo-ids", JSON.stringify(likes));
  };

  const likeHandler = () => {
    const photoId = photo.id;
    const likedStatus = !liked;
    const storedLikes = getStoredLikes();

    setLiked(likedStatus);

    if (likedStatus) {
      setStoreLikes([...storedLikes, photoId]);
    } else {
      const updatedLiked = storedLikes.filter((element) => element !== photoId);
      setStoreLikes([...updatedLiked]);
    }
  };

  return (
    <PhotoContainer>
      <div>
        <img src={photo.img_src} alt={photo.camera.full_name} />
      </div>
      <PhotoInfo>
        <PhotoTitle>
          <h5>
            {photo.rover.name} - {photo.camera.full_name}
          </h5>
          <p>{photo.earth_date}</p>
        </PhotoTitle>

        <LikeButton onClick={likeHandler} liked={liked} aria-label="Like">
          {liked ? "liked" : "not liked"}
        </LikeButton>
      </PhotoInfo>
    </PhotoContainer>
  );
}
