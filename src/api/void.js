const endpointKushki = require("../endpoint-kushki");
const allowCors = require("../allowCors");

const handler = async (req, res) => {
  const ticketNumber = req.params.ticket;
  console.log(req.body);

  return endpointKushki()
    .delete(`/v1/charges/${ticketNumber}`, 
      req.body
      )
    .then((response) => {
      console.log(response);
      console.log(response.data);
      return res.send(response.data);
    })
    .catch((error) => {
      console.log(error.response);
      return res.status(422).send(error.response.data);
    });
};

module.exports = allowCors(handler);
