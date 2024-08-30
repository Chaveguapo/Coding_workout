import { test, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import QuotesBreakingBad from "../assets/Components/QuotesBreakingBad";
import "@testing-library/jest-dom"; // For better matchers like toBeInTheDocument

test("Fetch data from API and display info", async () => {
  //1.mock the fetch function (vi)
  global.fetch = vi.fn(() =>
    Promise.resolve({
      JSON: () =>
        Promise.resolve([
          {
            author: "Walter white",
            quote: "I'm the one who knocks",
          },
        ]),
    })
  ) as jest.Mock;

  //2. Stored the response and converted into a Json
  //3. catch the error
});
