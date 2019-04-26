import React from "react";
import { addParameters, configure, storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import readme from "../README.md";
import Markdown from "./component/MyMarkdown";
import { Button } from "../src/Button";
import "./index.css";
import "../src/assets";

function createExamplesStories() {
    const exampleStories = storiesOf("Examples", module);
    const req = require.context("../examples", true, /.tsx$/);
    req.keys().forEach((filename) => {
        const Example = req(filename).default;
        const name = filename.replace(".tsx", "").replace("./", "");
        exampleStories.add(name, () => <Example />);
    });
}

function loadStories() {
    storiesOf("Introduction", module).add("ReadMe", () => <Markdown source={readme} />);

    storiesOf("Api", module)
        .addDecorator(withInfo)
        .addParameters({ info: { inline: true, source: false } })
        .add("Props", () => <Button>按钮</Button>);

    createExamplesStories();
}

addParameters({
    options: {
        showPanel: false,
    },
});
configure(loadStories, module);