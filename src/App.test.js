/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-debugging-utils */
import { shallow, mount } from "enzyme";
import App from "./App";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetupsPage";

/**
 * Factory funcion to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test]='${val}'`);

describe('render', () => {
  test("App without crashing", () => {
    const wrapper = setup();
    // console.log(wrapper.debug());
    expect(wrapper.exists()).toBe(true);
  });
  
  test("the navigation component", () => {
    const wrapper = setup();
    expect(wrapper.find(MainNavigation).length).toBe(1);
  });
  
  test("the All Meetups page", () => {
    const wrapper = setup();
    expect(wrapper.find(AllMeetupsPage).length).toBe(1);
  });

})
