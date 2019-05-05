import { faAudioDescription, faEye, faFlag, faHourglass } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button, ButtonGroup } from "../src";
import "../src/assets/index";

export default function() {
    return (
        <div className="button-demo">
            <h1>文本按钮组</h1>
            <ButtonGroup>
                <Button>Cancel</Button>
                <Button>Today</Button>
                <Button>Yesterday</Button>
                <Button>Confirm</Button>
            </ButtonGroup>

            <h1>禁用按钮组</h1>
            <ButtonGroup>
                <Button disabled={true}>L</Button>
                <Button disabled={true}>N</Button>
                <Button disabled={true}>R</Button>
            </ButtonGroup>
        </div>
    );
}
