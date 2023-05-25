import { useState } from "react";
import { ConvertIcon } from "../../../icons"
import { PrimaryButton } from "../../common/PrimaryButton/PrimaryButton";
import { EmaiInputWrapper } from "./EmaiInput.styled";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


export const EmailInput = () => {

    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        
        if (email.trim() === "") {
            return alert("Please enter email")
        }

        if (!validateEmail(email)) {
            return alert("Incorrect email adress")
        }
        
        
        form.email.value = ""
    }

    return (
        <EmaiInputWrapper>
        <form onSubmit={handleSubmit}>
            <label>
                <span><ConvertIcon /></span>
                    <input
                    onChange={e => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="Your email here"
                />
                <PrimaryButton buttonType="submit">Subsribe Now</PrimaryButton>
            </label>
        </form>
    </EmaiInputWrapper>
)
};