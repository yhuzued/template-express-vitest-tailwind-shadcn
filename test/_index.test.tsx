import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { createRemixStub } from "@remix-run/testing";
// import userEvent from "@testing-library/user-event";
import Index from "~/routes/_index";
import { json } from "@remix-run/node";

describe("App component", () => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      Component: Index,
      loader() {
        return json({ umur: 27 });
      },
      action() {
        return json({});
      },
    },
  ]);

  it("renders correct heading", async () => {
    render(<RemixStub />);
    await waitFor(() =>
      expect(screen.getByRole("heading").textContent).toBe(
        "Remix dengan express, vitest, tailwind, shadcn"
      )
    );
  });

  it("renders tombol login", async () => {
    render(<RemixStub />);
    await waitFor(() =>
      expect(screen.getByRole("button").textContent).toBe("Login")
    );
  });

  // it("ketika tombol login diklik, muncul keterangan 'Sukses' ", async () => {
  //   render(<RemixStub />);
  //   const user = userEvent.setup();

  //   await waitFor(() => {
  //     const tombolLogin = screen.getByRole("button");
  //     user.click(tombolLogin);

  //     return expect(screen.getByRole("h1").textContent).toBe("Sukses");
  //   });
  // });
});
