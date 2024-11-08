import { usestate } from "react";
import {link} from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Login(){
  const [name, setName] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result => {console.log(result) 

    navigate('/home')
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit = {handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Name</strong>
            
            </label>
            <input 
            type="text" 
            placeholder="Enter name"
            autoComplete="off"
            name="email"
            className="form-control rounded-0"
            onChanges={(e) => setName(e.target.value)}
            />
            <div>
              <div className="mb=3">
                <label htmlFor="email">
                <strong>Email</strong>
                </label>
                <input
                type="email"
                placeholder="Enter email"
                autoComplete="off"
                name="email"
                className="form-control rounded=0"
                onChanges={(e) => setemail(e.target.value)}
                />
                <div>
                  <div className="mb-3">
                    <label htmlFor="email">
                      <strong><Password></Password></strong>
                    </label>
                    <input
                    type="password"
                    placeholder="enter password"
                    name="password"
                    className="form-control rounded-0"
                    />
                    onChanges={(e) => setpassword(e.target.value)}
                    <div>
                      <button type="submit" className="btn btn-success w-100 rounded-0">
                        REGISTER 
                        </button>
                      <p>Alreay have a account</p>
                      <button/> <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decorartion-none">
                        Login
                      </Link>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}
export default signup;