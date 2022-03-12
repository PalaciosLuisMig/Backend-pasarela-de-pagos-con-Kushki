const endpointKushki = require("../endpoint-kushki");
const allowCors = require("../allowCors");

const handler = async (req, res) => {
  const from = req.body.from;
  const to = req.body.to;

  console.log("From:" + from)
  console.log("To:" + to)

  return endpointKushki()
    .get(`/analytics/v1/transactions-list?from=${from}&to=${to}`)
    .then((response) => {
      console.log("Response.data:" + response.data);
      return res.send(response.data);
    })
    .catch((error) => {
      console.log(error.response);
      return res.status(422).send(error.response);
    });
};

module.exports = allowCors(handler);
