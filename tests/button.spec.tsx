import React from "react";
import { render } from "react-testing-library";
import { Button } from "../src";

describe("Button", () => {
    test("render", () => {
        const wrapper = render(<Button>按钮</Button>);
        const button = wrapper.getByText("按钮");
        expect(button).toBeDefined();
    });

    test("tow chinese char", () => {
        const wrapper = render(<Button>按钮</Button>);
        const button = wrapper.getByText("按钮");
        expect(button.parentElement.classList.contains("two-chinese-chars")).toBeTruthy();
    });
});
