import axios from "axios";
import cookie from 'cookie'

const UserApi = async (req, res) =>  {
    if(req.method === 'GET'){
        const cookies = cookie.parse(req.headers.cookie || '') //if cookie then parse token or if there is no cookie then null

        const access = cookies.access || false // if there is not access (token) inside cookie then assign false

        console.log(access, "this is access from user.js")
        
        if(!access){
            console.log("no access token")
            return res.status(401).json({
                message: 'Login first to load user'
            })
        }

        

        try{
            const response = await axios.get(`${process.env.NEXT_API_URL}api/me/`, 
            {
                headers: {
                    'Authorization': `Bearer ${access}`,
                }
            })

            console.log("this is response", response)

            if (response.data){
                console.log(response.data)
                return res.status(200).json({
                    user: response.data
                })
            }
            

            

        }
        catch(error){
            console.log("this is catch")
            
           

            res.status(error?.response.status).json({
                error: 'something went wrong while retrieving user'
            })

        }
    }

}

export default UserApi