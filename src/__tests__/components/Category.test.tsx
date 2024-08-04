import { screen } from "@testing-library/react";
import Category from "../../routes/Category/Category";
import { renderWithProviders } from "../../utils/tests/testUtils";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    category: "mens",
  }),
}));

describe("Category component tests", () => {
  test("Verify that spinner is rendering if isLoading is true", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: true,
          categories: [],
        },
      },
    });

    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();
  });

  test("Verify that spinner is not rendering if isLoading is false", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: false,
          categories: [],
        },
      },
    });

    const spinnerElement = screen.queryByTestId("spinner");
    expect(spinnerElement).toBeNull();
  });

  test("Verify that category is rendering if isLoading is false", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: false,
          categories: [
            {
              title: "mens",
              imageUrl: "test",
              items: [
                {
                  id: 1,
                  name: "Product 1",
                  imageUrl: "test",
                  price: 10,
                },
                {
                  id: 2,
                  name: "Product 2",
                  imageUrl: "test",
                  price: 20,
                },
              ],
            },
          ],
        },
      },
    });

    const spinnerElement = screen.queryByTestId("spinner");
    expect(spinnerElement).toBeNull();

    expect(screen.getByText("Product 1")).toBeInTheDocument();
  });
});
