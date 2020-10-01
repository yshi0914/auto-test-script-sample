import React from "react";
import { mount } from "enzyme";
import App from "./App";

import {shallow} from "enzyme";

describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test("render the title of this app", () => {
    //const shallowWrapper = shallow(<App/>);
    //console.log(shallowWrapper.debug());
    expect(wrapper.find("h1").text()).toContain("Welcome to this page!");
  });

  test("render a button with text of `Increase the counter`", () => {
    expect(wrapper.find("#increase-one-btn").text()).toBe("Increase By One");
  });

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-val").text()).toBe("1");
  });

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increase-one-btn").simulate("click");
    expect(wrapper.find("#counter-val").text()).toBe("2");
  });

  test("render the click event of double button twice and the corresponding value", () => {
    wrapper.find("#double-btn").simulate("click");
    expect(wrapper.find("#counter-val").text()).toBe("2");
    wrapper.find("#double-btn").simulate("click");
    expect(wrapper.find("#counter-val").text()).toBe("4");
  });
});
