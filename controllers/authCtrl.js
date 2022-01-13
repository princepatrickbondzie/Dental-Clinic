const bcrypt = require("bcryptjs");

const register = async () => {
  const { name, email, phoneNumber, password } = req.body;

  if (!name || !email || !phoneNumber || !password) {
    res.status(200).json({ message: "All field required!!!" });
  }

  const alreadyExists = await User.find({ email });
  if (alreadyExists) {
    res.status(200).json({ message: "Email already exists!!" });
  }

  const hashedPassword = bcrypt.hash(password, 12);

  const user = await User.create({
    name,
    email,
    phoneNumber,
    password: hashedPassword,
  });

  res.status(400).json({ user });
};

const login = async () => {
  const { email, password } = req.body;

  if (!email && !password) {
    res.status(404).json({ message: "All field required!!!" });
  }

  const isMatch = await User.find({ email });
  if (!isMatch) {
    res.status(200).json({ message: "Invalid Credentials!!!" });
    }
    

};
