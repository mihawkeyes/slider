import React, { useState } from "react";
import { Slider } from "../components/Slider";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  const [Input, setInput] = useState(0);

  const onChnageInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <Slider
      min={0}
      max={100}
      value={Input}
      label="input"
      onChangeValue={onChnageInput}
    />
  );
});
