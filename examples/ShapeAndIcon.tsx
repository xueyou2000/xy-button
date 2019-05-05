import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button } from "../src";
import "../src/assets/index";
import "./index.scss";

export default function() {
    return (
        <div className="button-demo">
            <Button type="primary" shape="circle" icon={faSearch} />
            <Button type="primary" icon={faSearch}>
                Search
            </Button>
            <Button shape="circle" icon={faSearch} />
            <Button icon={faSearch}>Search</Button>
            <br />
            <Button shape="circle" icon={faSearch} />
            <Button icon={faSearch}>Search</Button>
            <Button type="dashed" shape="circle" icon={faSearch} />
            <Button type="dashed" icon={faSearch}>
                Search
            </Button>
        </div>
    );
}
