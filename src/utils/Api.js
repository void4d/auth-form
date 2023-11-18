function signin() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = {
        id: 0,
        email: 'mail@mail.ru',
      };

      resolve(data);
    });
  });
}

function signup() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = {
        id: 0,
        email: 'mail@mail.ru',
      };

      resolve(data);
    });
  });
}

export { signin, signup };
