function saveUserData(data) {
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('authToken', data.accessToken);
    sessionStorage.setItem('id', data._id);
  }

  function removeUserData() {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('id');
  }

  function isAuthenticated(){
      return Boolean(sessionStorage.getItem('email'));
  }