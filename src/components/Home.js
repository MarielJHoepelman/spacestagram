import React, { useEffect, useState } from "react";
import { fetcher } from "../actions/fetcher";
import Photo from "./Photo";
import { HomeWrapper, Loading, Spinner } from "../styles";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetcher().then((json) => {
      setPhotos(json.photos);
      setLoading(false);
    });
  }, []);

  const displayPhotos = () => {
    return photos.map((photo) => {
      return <Photo key={photo.id} photo={photo} />;
    });
  };

  return loading ? (
    <Loading>
      <Spinner />
      <p>loading content...</p>
    </Loading>
  ) : (
    <HomeWrapper>{displayPhotos()}</HomeWrapper>
  );
}
