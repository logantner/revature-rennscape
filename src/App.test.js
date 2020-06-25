import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import { shallow } from "enzyme";

describe("Testing App", () => {
  const wrapper = shallow(<App />);

  test("renders a single child element", () => {
    expect(wrapper.children().length).toBe(1);
  });

  test("renders 3 routes", () => {
    expect(wrapper.find("Route").length).toBe(3);
  });

  test("check '/' route", () => {
    expect(wrapper.find("Route[path='/']").length).toBe(1);
  });

  test("check '/login' route", () => {
    expect(wrapper.find("Route[path='/login']").length).toBe(1);
  });

  test("check '/directory' corresponding to MotorcycleTable", () => {
    expect(
      wrapper.find("Route[path='/directory']").contains("MotorcycleTable")
    );
  });
});