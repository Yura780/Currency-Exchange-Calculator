async function convert() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const amount = document.getElementById("amount").value;

  if (!amount) {
    alert("Введи суму!");
    return;
  }

  try {
    const response = await fetch(`https://open.er-api.com/v6/latest/${from}`);
    const data = await response.json();

    const rate = data.rates[to];
    const result = amount * rate;

    document.getElementById("result").innerText =
      ${amount} ${from} = ${result.toFixed(2)} ${to};
  } catch (error) {
    console.error(error);
    document.getElementById("result").innerText = "Помилка 😢";
  }
}