import React from "react";
import { shallow } from "enzyme";
import { Users } from "./Users";

const data = {id: 1, first_name: "Janet", last_name: "Weaver", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"};
const deleteUser = jest.fn();
const key = 6;

describe('Inside Users', () => {
    const setup = () => shallow(
    <Users
      data={data}
      key={key}
      deleteUser={deleteUser}
    />
  );

  it('should define Users Component', () => {
    const wrapper = setup();
    expect(wrapper.find('Users')).toBeDefined();
  });

  it('should define props', () => {
    const wrapper = setup();
    expect(wrapper.instance().props.data).toBeDefined();
  });

  it('should contain user-column class', () => {
    const wrapper = setup();
    expect(wrapper.find('.user-column')).toHaveLength(1);
  });
});