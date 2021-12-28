/* eslint-disable object-shorthand */
/* eslint-disable no-else-return */
function responeToClient(data, messages, res) {
  if (!data) {
    return res.status(400).json({
      error: messages,
    });
  } else {
    return res.status(200).json({
      data: data,
      message: messages,
    });
  }
}

export default responeToClient;
