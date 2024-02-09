import { useState } from 'react'


function App() {
  // Create state object for form values
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    okayToEmail: false
  })

  // manage form state function
  const handleChange = (event) => {
    const {name, value, type, checked} = event.target;
    const newValue = type === "checkbox" ? checked: value;
    setFormData({
      ...formData,
      [name]: newValue
    })
  }
  // check passwords and log messages
  function handleSubmit(event) {
    event.preventDefault()
    if (formData.password === formData.confirmPassword) {
      console.log("Successfully signed up!")
    } else {
      console.log("Password do not match idiot!!")
    }

    if (formData.okayToEmail) {
      console.log("Thanks for signing up for our propoganda!!! HA! HA!!")
    }
}

return (
    <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email address"
                className="form--input"
                name='email'
                value={formData.email}
                onChange={handleChange}
            />
            <input 
                type="password" 
                placeholder="Password"
                className="form--input"
                name='password'
                value={formData.password}
                onChange={handleChange}
            />
            <input 
                type="password" 
                placeholder="Confirm password"
                className="form--input"
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
            />
            
            <div className="form--marketing">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    name='okayToEmail'
                value={formData.okayToEmail}
                onChange={handleChange}
                    
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button 
                className="form--submit"
            >
                Sign up
            </button>
        </form>
    </div>
  )
}

export default App
