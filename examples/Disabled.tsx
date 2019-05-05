import React from "react";
import { Button } from "../src";
import "../src/assets/index";
import "./index.scss";

export default function() {
    return (
        <div className="button-demo">
            <Button type="primary">Primary</Button>
            <Button type="primary" disabled={true}>
                Primary(disabled)
            </Button>
            <br />
            <Button>Default</Button>
            <Button disabled={true}>Default(disabled)</Button>
            <br />
            <Button type="dashed">Dashed</Button>
            <Button type="dashed" disabled={true}>
                Dashed(disabled)
            </Button>
            <br />
            <Button type="text">Text</Button>
            <Button type="text" disabled={true}>
                text(disabled)
            </Button>
            <br />
            <Button type="danger">Danger</Button>
            <Button type="danger" disabled={true}>
                danger(disabled)
            </Button>
        </div>
    );
}
