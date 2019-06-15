const User = require("../model/mod_user");
const { normalizeErrors } = require("../helper/mongoose");

//register part
exports.Register = function(req, res) {
  User.findOne({ email: req.body.email }, function(err, existingUser) {
    if (err) {
      return res.status(422).send({ errors: normalizeErrors(err.errors) });
    } else {
      if (existingUser) {
        return res.status(422).send({
          errors: [{ title: "Invalid email", details: "email alredy exixt" }]
        });
      } else {
        const user1 = req.body;
        //delete user1.passwordConfirmation;
        const user = new User(user1);
        user.save(function(err) {
          if (err) {
            return res
              .status(422)
              .send({ errors: normalizeErrors(err.errors) });
          } else {
            return res.json({ register: true });
          }
        });
      }
    }
  });
  // res.json({username, email});
};

// login part
exports.Login = function(req, res) {
  const { email, password } = req.body;

  User.findOne({ email: email, password: password }, function(err, user) {
    if (err) {
      console.log(err);
      return res.status(422).send({ errors: normalizeErrors(err.errors) });
    }

    if (!user) {
      return res.status(422).send({
        errors: [
          { title: "Invalid User", details: "Please Check Email or Password" }
        ]
      });
    }
    return res.json({ success: true, data: user });
  });
  // res.json({'success' : true});
};
