const getRoot = (_request, _response) => {};

const getLogin = (request, response) => {
  if (request.isAuthenticated()) {
    const { user } = request;

    console.log('user logueado');

    return response
      .status(200)
      .render('login-ok', {
        usuario: user.username,
        nombre: user.firstName,
        apellido: user.lastName,
        email: user.email,
      });
  }

  console.log('user NO logueado');

  return response
    .status(200)
    .sendFile(`${__dirname}/views/login.html`);
};

const getSignup = (_request, response) => response.sendFile(`${__dirname}/views/signup.html`);

const postLogin = (_request, response) => response.sendFile(`${__dirname}/views/index.html`);

const postSignup = (_request, response) => response.sendFile(`${__dirname}/views/index.html`);

const getFaillogin = (_request, response) => {
  console.log('error en login');

  return response
    .status(500)
    .render('login-error', {});
};

const getFailsignup = (_request, response) => {
  console.log('error en signup');

  return response
    .status(500)
    .render('signup-error', {});
};

const getLogout = (request, response) => {
  request.logout();

  return response
    .status(200)
    .sendFile(`${__dirname}/views/index.html`);
};

const failRoute = (_request, response) => response.status(404).render('routing-error', {});

module.exports = {
  getRoot,
  getLogin,
  postLogin,
  getFaillogin,
  getLogout,
  failRoute,
  getSignup,
  postSignup,
  getFailsignup,
};
