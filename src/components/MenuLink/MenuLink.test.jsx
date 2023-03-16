import "jest-styled-components";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import renderTheme from "../../style/renderTheme";
import MenuLink from "./MenuLink";

describe("<MenuLink/>", () => {
  test("should render MenuLink with default values", () => {
    renderTheme(
      <MenuLink children link="http://google.com">
        children
      </MenuLink>
    );
    // eslint-disable-next-line jest/valid-expect
    expect(screen.getByRole("link", { name: "children" })).toHaveAttribute(
      "target",
      "_self"
    );
  });
  test("should render MenuLink in new tab", () => {
    renderTheme(
      <MenuLink children link="http://google.com" newTab={false}>
        children
      </MenuLink>
    );
    // eslint-disable-next-line jest/valid-expect
    expect(screen.getByRole("link", { name: "children" })).toHaveAttribute(
      "target",
      "_self"
    );
  });
  test("should MenuLink match snapshot", () => {
    const { container } = renderTheme(
      <MenuLink children link="http://google.com" newTab={true}>
        children
      </MenuLink>
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        color: #333333;
        font-size: 1.6rem;
        padding: 1.6rem;
        -webkit-text-decoration: none;
        text-decoration: none;
        position: relative;
      }

      .c0:before {
        content: '';
        background: #54b3d6;
        display: block;
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 3px;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0.75rem;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: white;
        -webkit-transform: scaleX(0);
        -ms-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform-origin: center;
        -ms-transform-origin: center;
        transform-origin: center;
        -webkit-transition: -webkit-transform 0.3s ease;
        -webkit-transition: transform 0.3s ease;
        transition: transform 0.3s ease;
      }

      .c0:hover::after {
        -webkit-transform: scaleX(1);
        -ms-transform: scaleX(1);
        transform: scaleX(1);
      }

      <a
        class="c0"
        href="http://google.com"
        target="_blank"
      >
        children
      </a>
    `);
  });
});
