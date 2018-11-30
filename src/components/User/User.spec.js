import React from "react";
import { shallow } from "enzyme";
import { User } from "./User";

const data = {id: 1, first_name: "Janet", last_name: "Weaver", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"};
const deleteUser = jest.fn();
const key = 6;

describe('Inside User', () => {
    const setup = () => shallow(
    <User
      data={data}
      key={key}
      deleteUser={deleteUser}
    />
  );

  it('should define User Component', () => {
    const wrapper = setup();
    expect(wrapper.find('User')).toBeDefined();
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