import React from "react";
import { shallow } from "enzyme";
import NotFoundFage from "../../components/NotFound";


test('should render NotFoundFage', () => {
    const wrapper = shallow(<NotFoundFage />)
    expect(wrapper).toMatchSnapshot()
})