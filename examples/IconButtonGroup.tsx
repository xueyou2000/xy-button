import { faAudioDescription, faEye, faFlag, faHourglass } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button, ButtonGroup } from "../src";
import "../src/assets/index";

export default function() {
    return (
        <div className="button-demo">
            <h1>图标按钮组</h1>
            <ButtonGroup>
                <Button icon={faEye} />
                <Button icon={faFlag} />
                <Button icon={faAudioDescription} />
                <Button icon={faHourglass} />
            </ButtonGroup>

            <h1>椭圆形状按钮组</h1>
            <ButtonGroup shape="circle">
                <Button icon={faEye} />
                <Button icon={faFlag} />
            </ButtonGroup>

            <h1>垂直按钮组</h1>
            <ButtonGroup vertical={true}>
                <Button icon={faEye} />
                <Button icon={faFlag} />
                <Button icon={faAudioDescription} />
                <Button icon={faHourglass} />
            </ButtonGroup>
        </div>
    );
}
