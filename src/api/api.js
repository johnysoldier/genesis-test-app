import axios from "axios";

const createDeal = async () => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    {
      userid: 1,
      title: "Сделка",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

  await sleep(500);
  return res.data;
};

const createContact = async () => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    {
      userid: 2,
      title: "Контакт",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

  await sleep(500);
  return res.data;
};

const createCompany = async () => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    {
      userid: 3,
      title: "Компания",
      body: "Lorem ipsum dolor sit amet.",
    },
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

  await sleep(500);
  return res.data;
};

const getData = async (selectEntity) => {
  if (selectEntity === "Сделка") {
    return await createDeal();
  } else if (selectEntity === "Контакт") {
    return await createContact();
  } else if (selectEntity === "Компания") {
    return await createCompany();
  }
};

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export { getData, createDeal, createContact, createCompany };
