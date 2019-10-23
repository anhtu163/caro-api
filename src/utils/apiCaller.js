import axios from 'axios'

const URL = 'http://localhost:4000'// 'https://restfulapi1612839.herokuapp.com'

export default function callApi(body){
    return axios({
        method: 'POST',
        url: `${URL}/user/login`,
        data: {
            username: body.txtEmail,
            password: body.txtPassword

        }
    }).catch(err=>{
        console.log(err)
    })
}