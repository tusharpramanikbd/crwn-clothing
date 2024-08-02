import { render, screen } from "@testing-library/react";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/Button/Button";

describe("Button component tests", () => {
  test("Verify Base Button component render successfully", () => {
    render(<Button>Test</Button>);
    const buttonElement = screen.getByText("Test");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle("background-color: black;");
  });

  test("Verify GoogleSignIn Button component render successfully", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google}>Test</Button>);
    const buttonElement = screen.getByText("Test");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle("background-color: #4285f4;");
  });

  test("Verify Inverted Button component render successfully", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Test</Button>);
    const buttonElement = screen.getByText("Test");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle("background-color: white;");
  });

  test("Verify loading button component is disabled", () => {
    render(<Button isLoading={true} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeDisabled();
  });
});
