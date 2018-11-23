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

  it('renders the PearsonUsers Component', () => {
    const wrapper = setup();
    expect(wrapper.find('PearsonUsers')).toBeDefined();
  });

  it("ComponentDidMount function to be called", () => {
    const wrapper = setup();
    wrapper.instance().componentDidMount();
    const userData = [{ id: 1, first_name: "George", last_name: "Bluth", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" }, { id: 1, first_name: "Janet", last_name: "Janet", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" }]
    wrapper.setState({ users: userData });
    expect(wrapper.find('div')).toHaveLength(3);
  });

  it('component contain Users component', () => {
    const wrapper = setup();
    const event = { preventDefault: () => { } };
    expect(wrapper.find('Users')).toBeDefined();
    wrapper.instance().deleteUser(event, 1);
  });

  it("deleteDuplicates function to be called", () => {
    const wrapper = setup();
    const event = { preventDefault: () => { } };
    expect(event.preventDefault).toBeDefined();
    expect(wrapper.instance().deleteDuplicates(event, 1)).toBeUndefined();
  });

  it("check delete button length", () => {
    const event = { preventDefault: () => { } };
    const wrapper = setup();
    const userData = [{ id: 1, first_name: "George", last_name: "Bluth", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" }, { id: 1, first_name: "Janet", last_name: "Janet", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" }]
    wrapper.setState({ users: userData });
    expect(wrapper.find('.btn-delete').length).toBe(1);
  });

});
