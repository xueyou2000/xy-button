import React, { useState } from "react";
import { Button } from "../src";
import { faCaretDown, faSearch, faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Radio, RadioGroup } from "xy-checkbox";
import "./index.scss";
import "xy-checkbox/assets/index.css";

export default function() {
    const [size, setSize] = useState();

    return (
        <div className="button-demo">
            <h1>按钮类型</h1>
            <p>主按钮、次按钮、虚线按钮、文本按钮、危险按钮</p>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <Button type="danger">Danger</Button>

            <h1>2个中文字符</h1>
            <p>当按钮只存在2个中文字符时, 会适当调整间距</p>
            <Button type="primary">确定</Button>
            <Button>取消</Button>
            <Button>
                行动
                <FontAwesomeIcon className="btn-inner-icon" icon={faCaretDown} />
            </Button>

            <h1>按钮形状和图标</h1>
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

            <h1>按钮尺寸</h1>
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
            <br />

            <h1>不可用状态</h1>
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
            <br />

            <h1>加载状态</h1>
            <Button type="primary" loading={true}>
                Loading
            </Button>
            <Button type="primary" size="small" loading={true}>
                Loading
            </Button>
            <Button shape="circle" loading={true} />
            <Button type="primary" shape="circle" loading={true} />

            <h1>幽灵按钮</h1>
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
