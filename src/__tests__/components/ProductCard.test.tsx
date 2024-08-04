import { fireEvent, screen } from "@testing-library/react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { renderWithProviders } from "../../utils/tests/testUtils";

describe("Product card component tests", () => {
  test("Verify that cart count is increased when add to cart button is clicked", () => {
    const mockProduct = {
      id: 1,
      name: "test",
      imageUrl: "test",
      price: 10,
    };

    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
            isCartOpen: false,
          },
        },
      }
    );

    const addToCartButtonElement = screen.getByText(/add to cart/i);
    fireEvent.click(addToCartButtonElement);

    expect(store.getState().cart.cartItems.length).toBe(1);
  });
});
