const endpointKushki = require("../endpoint-kushki");
const allowCors = require("../allowCors");

const handler = async (req, res) => {
  const ticketNumber = req.params.ticket;
  const amount = req.body.amount;

  return endpointKushki()
    .delete(`/v1/charges/${ticketNumber}`, {
      amount: {
        subtotalIva: 0,
        subtotalIva0: amount,
        iva: 0,
        ice: 0,
        currency: "USD",
      },
      fullResponse: true,
    })
    .then((response) => {
      console.log(response.data);
      return res.send(response.data);
    })
    .catch((error) => {
      console.log(error.response);
      return res.status(422).send(error.response.data);
    });
};

module.exports = allowCors(handler);
