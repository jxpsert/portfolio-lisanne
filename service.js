const LoadService = () => {
    const serviceURL =
       "https://0v4j861z.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22service%22%5D";
  
    const serviceGrid = document.querySelector("#services-grid");
  
    fetch(serviceURL)
      .then((response) => response.json())
      .then((data) => {
        data.result.forEach((item) => {
          createCard({
            title: item.title,
            title_nl: item.title_nl,
            description: item.description,
            description_nl: item.description_nl,
            fee: item.fee,
            fee_text: item.fee_text,
            fee_text_nl: item.fee_text_nl,
          });
        });
      });
  
    const createCard = (data) => {
      const div = document.createElement("div");
      div.classList.add("service");
  
      const h5Title = document.createElement("h5");
      if (localStorage.getItem("lang") == "nl") {
        h5Title.innerText = data.title_nl;
      } else {
        h5Title.innerText = data.title;
      }
  
      const pDescription = document.createElement("p");
      pDescription.classList.add("mb-auto");
      if (localStorage.getItem("lang") == "nl") {
        pDescription.innerText = data.description_nl;
      } else {
        pDescription.innerText = data.description;
      }

      const spanAmount = document.createElement("span");
        spanAmount.classList.add("service-amount");
        spanAmount.innerText = data.fee;

        const spanAmountText = document.createElement("span");
        spanAmountText.classList.add("service-amount-text");
        if (localStorage.getItem("lang") == "nl") {
          spanAmountText.innerText = data.fee_text_nl;
        } else {
          spanAmountText.innerText = data.fee_text;
        }
  
      div.appendChild(h5Title);
      div.appendChild(pDescription);
        div.appendChild(spanAmount);
        div.appendChild(spanAmountText);

  
      serviceGrid.appendChild(div);
    };
  };
  
  LoadService();
  