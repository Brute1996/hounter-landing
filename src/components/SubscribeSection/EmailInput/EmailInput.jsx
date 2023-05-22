import { ConvertIcon } from "../../../icons"
import { EmaiInputWrapper } from "./EmaiInput.styled";

export const EmailInput = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        

        form.email.value = ""
    }

    return (
        <EmaiInputWrapper>
        <form onSubmit={handleSubmit}>
            <label>
                <span><ConvertIcon /></span>
                    <input
                        name="email"
                    type="email"
                    placeholder="Your email here"
                />
                <button type="submit">Subsribe Now</button>
            </label>
        </form>
    </EmaiInputWrapper>
)
};