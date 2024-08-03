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

  test("Verify that sign out is rendered if there is current user", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {
            createdAt: new Date(),
            displayName: "test",
            email: "test",
          },
        },
      },
    });

    const signInLinkElement = screen.getByText(/sign out/i);
    expect(signInLinkElement).toBeInTheDocument();
  });

  test("Verify that cart is not rendered if isCartOpen is false", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: [],
        },
      },
    });

    const signInLinkElement = screen.queryByText(/your cart is empty/i);
    expect(signInLinkElement).toBeNull();
  });

  test("Verify that cart is rendered if isCartOpen is true", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [],
        },
      },
    });

    const signInLinkElement = screen.queryByText(/your cart is empty/i);
    expect(signInLinkElement).toBeInTheDocument();
  });
});
