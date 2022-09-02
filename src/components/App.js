import React from "react"

export default function App() {
    const [formData, setFormData] = React.useState(
        {
            email: "",
            password: "",
            confirmPassword: "",
            join: false
        }
    )
    
    function handleChange(event) {
        const {type, value, name, checked} = event.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (formData. password === formData.confirmPassword) {
            if (formData.join) {
                console.log("Thanks for signing up for our newsletter!")
            }
            console.log("Successfully signed up.")
        } else {
            console.log("Passwords do not match.")
        }
    }
    console.log(formData.email, formData.password, formData.confirmPassword, formData.join)
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    value={formData.password}
                    name="password"
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    value={formData.confirmPassword}
                    name="confirmPassword"
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        checked={formData.join}
                        name="join"
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
