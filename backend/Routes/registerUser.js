import jwt from "jsonwebtoken"
import UserModel from "../model/UserModel.js";

const SECRET_KEY = "supersecretkey123";

const registerUser = async (req, res,io) => {
  const { username, email, password, refrence } = req.body;

  // تحقق من البيانات
  if (!username || !email || !password) {
    return res.status(400).json({ message: "يرجى تعبئة جميع الحقول" });
  }

  try {
    const findUser = await UserModel.findOne({ email });

    if (findUser) {
      return res.status(409).json({ message: "This email already exist " });
    } 

    const newUser = new UserModel({ username, email, password, refrence });
    await newUser.save();

    // أنشئ التوكن بعد الحفظ
    const token = jwt.sign({ username, email, refrence }, SECRET_KEY, { expiresIn: "1h" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,  
      sameSite: "strict",
      maxAge: 3600000
    });

  
    return res.status(201).json({ token, message: "تم إنشاء المستخدم بنجاح" });

  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ message: "حدث خطأ في السيرفر" });
  }
};

export default registerUser;
