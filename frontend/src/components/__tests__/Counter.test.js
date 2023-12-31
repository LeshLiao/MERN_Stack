import { fireEvent, getByTestId, render } from "@testing-library/react"
import Counter from "../Counter";

describe(Counter, () => {
  it("counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  })

  it("counter should increment by 1 if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementBttn = getByRole("button", { name: "Increment"});
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);

    fireEvent.click(incrementBttn);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  })
})

