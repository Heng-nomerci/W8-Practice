import { Carousel } from "./components/Carousel";

import { ALL_IMAGES } from "./data/imagesData";

function App() {
  return (
    <>
      <header>
        <h1>Statue Game at PNV !</h1>
        <p>Browse images using the arrows</p>
      </header>
      <main>
        {ALL_IMAGES.length > 0 ? (
          <Carousel images={ALL_IMAGES} />
        ) : (
          <p>No images to display</p>
        )}
      </main>
    </>
  );
}

export default App;
