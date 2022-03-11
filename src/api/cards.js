const endpointKushki = require("../endpoint-kushki");
const allowCors = require("../allowCors");

const handler = async (req, res) => {
  const amount = req.body.amount;
  const token = req.body.token;

  if (!amount || !token) {
    return res
      .status(422)
      .send({ status: "error", message: "missing parameter(s)" });
  }

  return endpointKushki()
    .post("/card/v1/charges", {
      token: token,
      amount: {
        subtotalIva: 0,
        subtotalIva0: Number(amount),
        ice: 0,
        iva: 0,
        currency: "USD",
      },
      fullResponse: true,
    })
    .then((response) => {
      return res.status(200).json(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
      const data = error.response.data;
      return res.status(400).json(data);
    });
};

module.exports = allowCors(handler);
