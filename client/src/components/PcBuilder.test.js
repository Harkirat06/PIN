import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import PcBuilder from "./PcBuilder";
import { act } from "react-dom/test-utils";

// Mock de context y funciones Axios
const mockContext = {
  listasComponentes: {},
  setListasComponentes: jest.fn(),
  setShow: jest.fn(),
  build: [],
  elementosSeleccionados: [{}],
  setElementosSeleccionados: jest.fn(),
  setBuild: jest.fn(),
  listaComponente: {},
  setListaComponente: jest.fn(),
  nombreLista: "",
  setNombreLista: jest.fn(),
  show: false,
  user: {},
};

jest.mock("./Axios", () => ({
  buildPorPrecio: jest.fn(() => Promise.resolve({})),
  getListas: jest.fn(() => Promise.resolve({ data: {} })),
}));

describe("PcBuilder Component", () => {
  it("renders PcBuilder component correctly", () => {
    render(<PcBuilder context={mockContext} />);
    // Add assertions based on your component structure
    expect(screen.getByText("Pc Builder")).toBeInTheDocument();
    expect(screen.getByText("Autocompletar")).toBeInTheDocument();
  });

  it("opens modal on Autocompletar button click", () => {
    render(<PcBuilder context={mockContext} />);
    fireEvent.click(screen.getByText("Autocompletar"));
    expect(screen.getByText("Presupuesto para completar la build")).toBeInTheDocument();
  });

  it("handles Autocomplete and closes modal", async () => {
    render(<PcBuilder context={mockContext} />);
    fireEvent.click(screen.getByText("Autocompletar"));

    // Simulate entering a budget in the input field
    const budgetInput = screen.getByPlaceholderText("ej: 1000");
    fireEvent.change(budgetInput, { target: { value: "1000" } });

    fireEvent.click(screen.getByText("Save Changes"));

    // Wait for the asynchronous operations (e.g., Axios calls) to complete
    await waitFor(() => {
      expect(mockContext.setBuild).toHaveBeenCalledTimes(1);
      expect(mockContext.setElementosSeleccionados).toHaveBeenCalledTimes(1);
    });

    // Check that the modal is closed
    expect(screen.queryByText("Presupuesto para completar la build")).not.toBeInTheDocument();
  });

  // Add more tests as needed
});
