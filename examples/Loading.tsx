import React from "react";
import { Button } from "xy-button";
import "xy-button/assets/index";
import "./index.scss";

export default function() {
    return (
        <div className="button-demo">
            <Button type="primary" loading={true}>
                Loading
            </Button>
            <Button type="primary" size="small" loading={true}>
                Loading
            </Button>
            <Button shape="circle" loading={true} />
            <Button type="primary" shape="circle" loading={true} />
        </div>
    );
}
