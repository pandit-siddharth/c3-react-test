import React from "react";
import { shallow } from "enzyme";
import { PearsonUsers } from "./PearsonUsers";

describe("Inside Pearson Users", () => {
  let component;
  const setup = () => shallow(
    <PearsonUsers />
  );

  beforeEach(() => {
    component = shallow(<PearsonUsers />);
  });

  it("renders header text", () => {
    const h1 = component.find("h1");
    expect(h1.text()).toEqual("Pearson User Management");
  });

  it('should contain pearson-users', () => {
    const wrapper = setup();
    expect(wrapper.find('.pearson-users')).toHaveLength(1);
  });
});
