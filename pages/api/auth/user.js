import axios from "axios";
import cookie from 'cookie'

export default async (req, res) =>  {
    if(req.method === 'GET'){
        const cookies = cookie.parse(req.headers.cookie || '') //if cookie then parse token or if there is no cookie then null

        const access = cookies.access || false // if there is not access (token) inside cookie then assign false
        
        if(!access){
            return res.status(401).json({
                error: 'Login first to load user'
            })
        }

        

        try{
            const response = await axios.get(`${process.env.API_URL}api/me/`, 
            {
                headers: {
                    'Authorization': `Bearer ${access}`,
                }
            })

            if (response.data){
                console.log(response.data)
                return res.status(200).json({
                    user: response.data
                })
            }

            

        }
        catch(error){
            
           

            res.status(error?.response.status).json({
                error: 'something went wrong while retrieving user'
            })

        }
    }

}