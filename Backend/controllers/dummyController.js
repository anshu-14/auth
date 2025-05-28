//before hitting the request it goes to middleware and does the verification and then hit the request
 exports.dummyController=(req, res) => {
  res.json({
    message: 'Here is your dummy data!',
    data: [
      { id: 1, item: 'Test' },
    ],
  });
};