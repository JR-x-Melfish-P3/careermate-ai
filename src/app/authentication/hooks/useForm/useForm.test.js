import { renderHook } from "@testing-library/react";
import useForm from "./useForm";
import { act } from "react";

describe("useForm", () => {
  test("updates data on change", () => {
    const { result } = renderHook(() =>
      useForm({
        fields: ["username"],
        validation: {},
      }),
    );

    expect(result.current.data.username).toBe("");

    act(() => {
      result.current.onChange("username")({ target: { value: "test" } });
    });

    expect(result.current.data.username).toBe("test");
  });

  test("validates data", () => {
    const { result } = renderHook(() =>
      useForm({
        fields: ["username"],
        validation: {
          username: (value) => !value && "Username is required",
        },
      }),
    );

    expect(result.current.error.username).toBe("Username is required");

    act(() => {
      result.current.onChange("username")({ target: { value: "test" } });
    });

    expect(result.current.error.username).toBeUndefined();
  });

  test("handles form submit with error", () => {
    const { result } = renderHook(() =>
      useForm({
        fields: ["username"],
        validation: {
          username: (value) => !value && "Username is required",
        },
      }),
    );

    expect(result.current.isSubmitted).toBe(false);

    const handleSubmit = vi.fn();

    act(() => {
      result.current.onSubmit(handleSubmit)({ preventDefault: () => {} });
    });

    expect(result.current.isSubmitted).toBe(true);
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  test("handles form submit without error", () => {
    const { result } = renderHook(() =>
      useForm({
        fields: ["username"],
        validation: {
          username: (value) => !value && "Username is required",
        },
      }),
    );

    act(() => {
      result.current.onChange("username")({ target: { value: "test" } });
    });

    const handleSubmit = vi.fn();

    act(() => {
      result.current.onSubmit(handleSubmit)({ preventDefault: () => {} });
    });

    expect(handleSubmit).toHaveBeenCalled();
  });
});
