import { beforeEach, describe, expect, test, vi } from "vitest";
import { createDeal, createCompany, createContact } from "./api";
import axios from "axios";

vi.mock("axios");

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

const headers = {
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

beforeEach(() => {
  axios.post.mockReset();
});

describe("Create entity", () => {
  test("create deal", async () => {
    const newDealPayload = {
      userid: 1,
      title: "Сделка",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };

    const newDealMock = {
      id: 1,
      ...newDealPayload,
    };

    axios.post.mockResolvedValue({
      data: newDealMock,
    });

    const newDeal = await createDeal();

    expect(axios.post).toHaveBeenCalledWith(BASE_URL, newDealPayload, headers);
    expect(newDeal).toStrictEqual(newDealMock);
  });

  test("create contact", async () => {
    const newContactPayload = {
      userid: 2,
      title: "Контакт",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    };

    const newContactMock = {
      id: 2,
      ...newContactPayload,
    };

    axios.post.mockResolvedValue({
      data: newContactMock,
    });

    const newContact = await createContact();

    expect(axios.post).toHaveBeenCalledWith(
      BASE_URL,
      newContactPayload,
      headers
    );
    expect(newContact).toStrictEqual(newContactMock);
  });

  test("create company", async () => {
    const newCompanyPayload = {
      userid: 3,
      title: "Компания",
      body: "Lorem ipsum dolor sit amet.",
    };

    const newCompanyMock = {
      id: 3,
      ...newCompanyPayload,
    };

    axios.post.mockResolvedValue({
      data: newCompanyMock,
    });

    const newCompany = await createCompany();

    expect(axios.post).toHaveBeenCalledWith(
      BASE_URL,
      newCompanyPayload,
      headers
    );
    expect(newCompany).toStrictEqual(newCompanyMock);
  });
});
