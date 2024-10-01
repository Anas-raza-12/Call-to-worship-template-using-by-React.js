import React from "react";

const images = [
  "/src/assets/image/galleryimage/429665097_731175425786720_5490258659281181728_n.jpg",
  "/src/assets/image/galleryimage/429677791_731177075786555_7660314550011642305_n.jpg",
  "/src/assets/image/galleryimage/429641863_731176855786577_7776447425103011673_n.jpg",
  "/src/assets/image/galleryimage/408996890_731177169119879_8884699710695398574_n.jpg",
  "/src/assets/image/galleryimage/1c92b337-4719-45fe-8b55-82c56df13ded.jpeg",
  "/src/assets/image/galleryimage/5f4a6217-7f67-4cec-b34e-d5a11c84afd9.jpeg",
  "/src/assets/image/galleryimage/00df3718-6ecc-412a-893e-a788e8296257.jpeg",
  "/src/assets/image/galleryimage/3a7b52e2-23c3-422f-814f-f934664bd2ef.jpeg",
  "/src/assets/image/galleryimage/2a40e8f1-93f1-4c8e-93e9-5f901b362088.jpeg",
  "/src/assets/image/galleryimage/3c073910-52d6-4725-9a0b-8d530c45d84a.jpeg",
  "/src/assets/image/galleryimage/2dbe3eaa-0dea-4d34-a418-e2f2b6f9e7bd.jpeg",
  "/src/assets/image/galleryimage/7f1b4932-d21c-4200-abae-af7549fc363b.jpeg",
  "/src/assets/image/galleryimage/5fd3f1cb-fb11-40f3-a158-74d140715c0a.jpeg",
  "/src/assets/image/galleryimage/8e13b05a-5019-4ead-9f2f-d4b84c382f96.jpeg",
  "/src/assets/image/galleryimage/8a1682fe-5e66-4cf3-9087-a600effb6167.jpeg",
  "/src/assets/image/galleryimage/7d8dbc19-29e2-4cb8-8220-d225a245e228.jpeg",
  "/src/assets/image/galleryimage/018b3fca-8cdd-4945-a6c7-7ba7efd46266.jpeg",
  "/src/assets/image/galleryimage/9c0962a9-2fe0-4fc3-a64a-ae9e880f123d.jpeg",
  "/src/assets/image/galleryimage/067ede22-eb25-4410-962c-e3b2dae970dc.jpeg",
  "/src/assets/image/galleryimage/76f63364-fb5d-426f-98f2-04b17855102b.jpeg",
  "/src/assets/image/galleryimage/97acc9a8-0ddf-4d4f-8745-c8bacdaf6393.jpeg",
  "/src/assets/image/galleryimage/71b291c8-c4f2-4da7-a307-5fe51d6bc7d3.jpeg",
  "/src/assets/image/galleryimage/459b6dd4-7b3b-4651-8e66-11eb45bd3575.jpeg",
  "/src/assets/image/galleryimage/43975e8e-fd05-4e78-8412-79b9272abe2c.jpeg",
  "/src/assets/image/galleryimage/650bdf8a-777d-4342-a413-362d17c63201.jpeg",
  "/src/assets/image/galleryimage/738a1229-5940-4b6f-b8b0-3898caf40d9f.jpeg",
  "/src/assets/image/galleryimage/9802dbd1-3d4d-4cd6-9759-0f8854847792.jpeg",
  "/src/assets/image/galleryimage/2045c2cd-0f3d-433f-bc87-ad7a045b309e.jpeg",
  "/src/assets/image/galleryimage/3312c177-2cdb-4b0d-a620-97ab74ab8121.jpeg",
  "/src/assets/image/galleryimage/0360275e-02e4-43a2-a537-ecb968297a64.jpeg",
  "/src/assets/image/galleryimage/685885c4-068b-4ad5-8d45-ef7e05588ef8.jpeg",
  "/src/assets/image/galleryimage/a2dcc652-231c-4157-9843-91f56e60ee8c.jpeg",
  "/src/assets/image/galleryimage/85226d0c-fb45-4d0e-b51f-52f8348dede7.jpeg",
  "/src/assets/image/galleryimage/7030150f-1b55-4ce6-8493-5b8716300021-2.jpeg",
  "/src/assets/image/galleryimage/26185877-b854-414a-808e-646e0a207479.jpeg",
  "/src/assets/image/galleryimage/a089d29d-e151-413a-8b15-1e4e63d40120.jpeg",
  "/src/assets/image/galleryimage/a7de5d8f-a5be-4ccb-8523-284f79b56e9d.jpeg",
  "/src/assets/image/galleryimage/a14ed67a-b23b-43a6-b460-f77649f9f624.jpeg",
  "/src/assets/image/galleryimage/ae828e8b-d241-465b-8a69-80db6c39fc04.jpeg",
  "/src/assets/image/galleryimage/b7ee1e9d-afb8-48e1-9b7c-15b6e8f28f2c.jpeg",
  "/src/assets/image/galleryimage/ad4cf9b1-30ff-4e8f-9bf3-5c426002998b.jpeg",
  "/src/assets/image/galleryimage/b22c1e0b-5974-493e-bfd0-0e72fce428c6.jpeg",
  "/src/assets/image/galleryimage/b3319b32-1926-4649-a41a-172b71f6ca97.jpeg",
  "/src/assets/image/galleryimage/bb3d11f4-a9eb-4871-bee6-f87ac6fe0590.jpeg",
  "/src/assets/image/galleryimage/b2193864-c98d-41dc-b303-93209a90089d.jpeg",
  "/src/assets/image/galleryimage/bcdd272f-b811-4e3d-a3ea-b0b2e110b7dc.jpeg",
  "/src/assets/image/galleryimage/c4015e29-d34f-4f76-bef1-d5fa779af474.jpeg",
  "/src/assets/image/galleryimage/be563042-93dd-4321-ae06-9dd37221d7ba.jpeg",
  "/src/assets/image/galleryimage/c1434f5c-3cde-4ea3-b255-ef62f3f41b9c.jpeg",
  "/src/assets/image/galleryimage/d203b21d-7924-4d23-a1da-f6c6cbbb1e1c.jpeg",
  "/src/assets/image/galleryimage/df1e9937-3564-48ee-af18-28d32cb6230c.jpg",
  "/src/assets/image/galleryimage/Copy-of-Church-Flyer-Template-1-Made-with-PosterMyWall.jpg",
  "/src/assets/image/galleryimage/DSC_0448.jpeg",
  "/src/assets/image/galleryimage/DSC_0451.jpeg",
  "/src/assets/image/galleryimage/DSC_0440.jpeg",
  "/src/assets/image/galleryimage/DSC_0457.jpeg",
  "/src/assets/image/galleryimage/DSC_0453 (1).jpeg",
  "/src/assets/image/galleryimage/DSC_0459.jpeg",
  "/src/assets/image/galleryimage/DSC_0483.jpeg",
  "/src/assets/image/galleryimage/DSC_0503.jpeg",
  "/src/assets/image/galleryimage/DSC_0495.jpeg",
  "/src/assets/image/galleryimage/DSC_0498.jpeg",
  "/src/assets/image/galleryimage/DSC_0512.jpeg",
  "/src/assets/image/galleryimage/DSC_0514.jpeg",
  "/src/assets/image/galleryimage/DSC_0504.jpeg",
  "/src/assets/image/galleryimage/DSC_0516.jpeg",
  "/src/assets/image/galleryimage/DSC_0515.jpeg",
  "/src/assets/image/galleryimage/DSC_0522.jpeg",
  "/src/assets/image/galleryimage/DSC_0518.jpeg",
  "/src/assets/image/galleryimage/DSC_0519.jpeg",
  "/src/assets/image/galleryimage/DSC_0525.jpeg",
  // last page
  "/src/assets/image/galleryimage/DSC_0523.jpeg",
  "/src/assets/image/galleryimage/DSC_0532.jpeg",
  "/src/assets/image/galleryimage/DSC_0548.jpeg",
  "/src/assets/image/galleryimage/DSC_0541.jpeg",
  "/src/assets/image/galleryimage/DSC_0552.jpeg",
  "/src/assets/image/galleryimage/DSC_0533.jpeg",
  "/src/assets/image/galleryimage/DSC_0550.jpeg",
  "/src/assets/image/galleryimage/DSC_0561.jpeg",
];

const GalleryImage = ({ src }) => (
  <img width={"100%"} src={src} alt="" className="col-lg-3 col-md-6 col-sm" />
);

const Gallery = () => {
  return (
    <div className="Gallery container">
      <h1 className="goldenColor">CALL TO WORSHIP</h1>
      <h1 style={{ marginBottom: "8vh" }} className="grayColor">
        Gallery
      </h1>
      <div className="row">
        {images.map((src, index) => (
          <GalleryImage key={index} src={src} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
