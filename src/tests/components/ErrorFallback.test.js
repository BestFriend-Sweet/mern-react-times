import { shallow } from "enzyme";

import * as ReactReduxHooks from "../../utils/react-redux-hooks";
import { mockStore } from "../store";

import { error, errorChart } from "../fixtures/chart";

import ErrorFallback from "../../components/error-fallback/ErrorFallback";

// This component show two types of error
// 1. Errors coming from error boundary; errors regarding app
// 2. Errors coming from chart reducers, fetch errors.
// I first assign errorChart state to store and then check the
// component in both cases
describe("Testing ErrorFallback component", () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = mockStore({
      errorChart,
    });

    jest
      .spyOn(ReactReduxHooks, "useSelector")
      .mockImplementation((state) => store.getState());

    wrapper = shallow(<ErrorFallback store={store} />);
  });

  test("Should render the component successfully", () => {
    expect(wrapper).toHaveLength(1);
  });

  test("Should match the snapshot with chart reducer error", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Should match the snapshot with error-fallback error", () => {
    wrapper = shallow(<ErrorFallback store={store} error={error} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Should get the state from redux store", () => {
    const state = store.getState();

    expect(state).toEqual({ errorChart });
  });
});