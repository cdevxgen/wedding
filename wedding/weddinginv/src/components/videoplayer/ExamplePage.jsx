import Player from "./Player";

const ExamplePage = () => {
  const url = "/a/babyv.mp4"; // Ensure this path is correct
  const cover = "a/papu/svg"; // Optional: path to a cover image

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Player url={url} cover={cover}/>
    </div>
  );
};

export default ExamplePage;
