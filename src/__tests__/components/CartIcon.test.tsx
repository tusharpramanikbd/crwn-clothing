import { screen } from "@testing-library/react";
import CartIcon from "../../components/CartIcon/CartIcon";
import { renderWithProviders } from "../../utils/tests/testUtils";

describe("Cart icon component tests", () => {
  test("Verify that component uses preloaded state to render", () => {
    const initialCartItems = [
      {
        id: 1,
        name: "Item A",
        imageUrl: "test",
        price: 10,
        quantity: 1,
      },
      {
        id: 2,
        name: "Item B",
        imageUrl: "test",
        price: 20,
        quantity: 2,
      },
    ];

    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems,
          isCartOpen: false,
        },
      },
    });

    const cartIconElement = screen.getByText("3");
    expect(cartIconElement).toBeInTheDocument();
  });
});
