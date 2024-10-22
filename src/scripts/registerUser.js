const registerUser = async () => {
  const form = document.querySelector("#form-data");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (event.submitter.id == "login") {
      window.location.href = "/src/pages/login.html";
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);

    try {
      const response = await axios.post(
        "http://localhost:3333/users/create",
        data
      );
      console.log(response);
      data.reset();

      const toast = document.querySelector("#tooltip-login");

      setTimeout(() => { toast.classList.remove("hidden");
        toast.classList.add("block");
       }, 3000);

    } catch (error) {
      console.log(error.response.status);
    }
  });
};

registerUser();
