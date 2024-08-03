import { screen } from "@testing-library/react";
import Navigation from "../../routes/Navigation/Navigation";
import { renderWithProviders } from "../../utils/tests/testUtils";

describe("Navigation component tests", () => {
  test("Verify that sign in link is rendered if there is no current user", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });

    const signInLinkElement = screen.getByText(/sign in/i);
    expect(signInLinkElement).toBeInTheDocument();
  });
});
