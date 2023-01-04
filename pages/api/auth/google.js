import axios from "axios";
import cookie from "cookie";

export default async (req, res) => {
  if (req.method === "POST") {
    const { token } = req.body;
    

    try {
      const res = await axios.post(
        `${process.env.API_URL}api/google-auth/`,
        {
          token,
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
      );

      if (res.data) {
        res.setHeader("Set-Cookie", [
          cookie.serialize("access", res.data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60 * 24 * 15,
            sameSite: "lax",
            path: "/",
          }),
        ]);

        return res.status(200).json({
          success: true,
        });
      } else {
        res.status(response.status).json({
          error: "Authentication Failed",
        });
      }
    } catch (error) {
      console.log(error.response);
      res.status(error.response.status).json({
        error: error.response && error.response.data.error,
      });
    }
  }
};
