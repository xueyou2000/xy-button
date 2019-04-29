import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Button } from "xy-button";
import "xy-button/assets/index";
import { Radio, RadioGroup } from "xy-checkbox";
import "xy-checkbox/assets/index.css";
import "./index.scss";

export default function() {
    const [size, setSize] = useState<"small" | "large">("large");
    return (
        <div className="button-demo">
            <RadioGroup value={size} onChange={(v) => setSize(v)}>
                <Radio value="large">large</Radio>
                <Radio value="">default</Radio>
                <Radio value="small">small</Radio>
            </RadioGroup>
            <br />
            <Button type="primary" size={size}>
                Primary
            </Button>
            <Button size={size}>Normal</Button>
            <Button type="dashed" size={size}>
                Dashed
            </Button>
            <Button type="danger" size={size}>
                Danger
            </Button>
            <br />
            <Button type="primary" shape="circle" icon={faCloudDownloadAlt} size={size} />
            <Button type="primary" icon={faCloudDownloadAlt} size={size}>
                Download
            </Button>
        </div>
    );
}
