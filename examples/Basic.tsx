import React from "react";
import { Button } from "xy-button";
import "xy-button/assets/index";
import "./index.scss";

export default function() {
    return (
        <div className="button-demo">
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <Button type="danger">Danger</Button>
        </div>
    );
}
