import React from "react";
import { shallow, mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";

import * as ReactReduxHooks from "../../utils/react-redux-hooks";
import { mockStore } from "../store";
import { user } from "../fixtures/user";

import Nav from "../../components/nav/Nav";
import { width } from "../fixtures/news";
import Search from "../../components/search/Search";

// Test it with width smaller than 768 and bigger than 768
// Check if StoryTopicHeaders and Search has been rendered

describe("Testing Nav component", () => {
  let wrapper;
  let store;

  beforeEach(() => {
    jest
      .spyOn(ReactReduxHooks, "useSelector")
      .mockImplementation((state) => store.getState());

    jest
      .spyOn(ReactReduxHooks, "useDispatch")
      .mockImplementation(() => store.dispatch);
  });

  describe("Testing the component without user components", () => {
    beforeEach(() => {
      store = mockStore({
        user: {},
      });

      wrapper = shallow(<Nav store={store} />);
    });

    test("Should render the component without user components", () => {
      expect(wrapper).toHaveLength(1);
    });
    test("Should match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("Should render the component with user components and state", () => {
    beforeEach(() => {
      store = mockStore({
        user,
        width: 700,
      });

      wrapper = mount(
        <Router>
          <Nav store={store} />
        </Router>
      );
    });
    test("Should render the component", () => {
      expect(wrapper).toHaveLength(1);
    });
    test("Should match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
    test("Should get the state", () => {
      const state = store.getState();

      expect(state).toEqual({ user, width: 700 });
    });
    test("Should render components based on width change", () => {
      store = mockStore({
        width: 900,
      });

      wrapper.update();

      console.log(wrapper.debug());

      expect(wrapper).toMatchSnapshot();
    });
  });
});