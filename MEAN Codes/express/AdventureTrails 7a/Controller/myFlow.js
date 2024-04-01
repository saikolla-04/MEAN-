exports.getPackages = async (req, res) => {
  try {
    res.status(200).json({
      message: 'You can now GET the requested packages for your request',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.bookPackage = async (req, res) => {
  try {
    res.status=201;
    res.status(201).json({
      data: 'New booking added for the POST request',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.errmsg,
    });
  }
};

exports.about = async (req, res) => {
  try {
    res.status(200).json({
      data: 'Server level coding',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.errmsg,
    });
  }
};

exports.contact = async (req, res) => {
  try {
    res.status(200).json({
      data: 'Contact details',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.errmsg,
    });
  }
};

exports.invalid = async (req, res) => {
  res.status(404).json({
    status: 'fail.',
    message: 'Invalid path',
  });
};














