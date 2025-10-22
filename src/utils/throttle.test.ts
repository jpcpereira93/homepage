import { throttle } from "./throttle";

describe("throttle", () => {
  test("should only exec the provided function 1 time within throttle limit", async () => {
    vi.useFakeTimers();

    const func = vi.fn();
    const t = throttle(func, 1000);

    t();
    t();
    t();

    await vi.runAllTimersAsync();

    expect(func).toBeCalledTimes(1);
  });

  test("should only exec the provided function when outside throttle limit", async () => {
    vi.useFakeTimers();

    const func = vi.fn();
    const t = throttle(func, 1000);

    t();
    t();
    t();

    await vi.advanceTimersByTimeAsync(2000);

    t();
    t();
    t();

    await vi.advanceTimersByTimeAsync(2000);

    expect(func).toBeCalledTimes(2);
  });
});
