import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const LoaderExampleText = () => (
  <div>
    <Dimmer active inverted>
      <Loader inverted>Loading...</Loader>
    </Dimmer>
  </div>
);

export default LoaderExampleText;
