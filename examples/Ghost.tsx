import React from "react";
import { Button } from "../src";
import "../src/assets/index";
import "./index.scss";

export default function() {
    return (
        <div className="button-demo">
            <div className="inverted-color">
                <Button type="primary" ghost={true}>
                    Primary
                </Button>
                <Button ghost={true}>Default</Button>
                <Button type="dashed" ghost={true}>
                    Dashed
                </Button>
                <Button type="text" ghost={true}>
                    Text
                </Button>
                <Button type="danger" ghost={true}>
                    Danger
                </Button>
            </div>
        </div>
    );
}
