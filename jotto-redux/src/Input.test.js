import React from "react";
import { shallow } from "enzyme";

import Input from "./Input";
import { findByTestAttr, storeFactory } from "../test/testUtils";

/**
 * Factory function to create a ShallowWrapper for the Input component.
 * @function setup
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
};

describe("render", () => {
  describe("word has not been guessed", () => {
    test("renders component without error", () => {});
    test("renders input box", () => {});
    test("renders submit button", () => {});
  });
  describe("word has been guessed", () => {
    test("renders component without error", () => {});
    test("does not render input box", () => {});
    test("does not render submit button", () => {});
  });
});