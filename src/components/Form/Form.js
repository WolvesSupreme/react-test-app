import React, { useState }  from 'react';
import { Container } from '../../globalStyles';
import {
    FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormLabel,
	FormInputRow,
	FormMessage,
	FormButton,

} from '../../styles/FromStyled';
import ValidateForm from './ValidateForm';

export const Form = () => {
    const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

    const handleSubmit = (e) => {
		e.preventDefault();
		const resultError = ValidateForm({ name, email, phone, message });

		if (resultError !== null) {
			setError(resultError);
			return;
		}
		setName('');
		setEmail('');
		setPhone('');
		setMessage('');
		setError(null);
		setSuccess('Application was sent!');
	};

    const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

    const formData = [
		{ label: 'Name', value: name, onChange: (e) => setName(e.target.value), type: 'text' },
		{ label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },
		{
			label: 'Phone',
			value: phone,
			onChange: (e) => setPhone(e.target.value),
			type: 'phone',
		},
		{
			label: 'Message',
			value: message,
			onChange: (e) => setMessage(e.target.value),
			type: 'message',
		},
	];

    return (
        <FormSection>
            <Container>
                <FormRow>
                    <FormColumn small>
                        <FormWrapper onSubmit={handleSubmit}>
                            {formData.map((el, index) => (
                                <FormInputRow key={index}>
                                    <FormLabel>{el.label}</FormLabel>
                                    <FormInput
                                        type={el.type}
                                        placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
                                        value={el.value}
                                        onChange={el.onChange}
                                    />
                                </FormInputRow>
                            ))}

                            <FormButton type="/reversaciones">Send</FormButton>
                        </FormWrapper>
                        {error && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
								error
							>
								{error}
							</FormMessage>
						)}
						{success && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
							>
								{success}
							</FormMessage>
						)}
                    </FormColumn>
                </FormRow>
            </Container>
        </FormSection>
    )
}
