const home = async (req,res) => {
    try {
        res.status(200).send("WELCOME");
    }
    catch (error) {
        console.log(error);
    }
};

const register = async (req, res) => {
    try{
    res.status(200).send("WELCOME TO REGISTER");
  }
  catch(error){
    console.log(error);
  }};

module.exports = { home, register }