export default function validateForm({ name, email, phone, message }) {
	if (!name.trim()) {
		return 'Name required';
	}
	// else if (!/^[A-Za-z]+/.test(name.trim())) {
	//   errors.name = 'Enter a valid name';
	// }

	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!email.trim()) {
		return 'Email required';
	} else if (regex.test(email.toLocalLowerCase)) {
		return 'Email address is invalid';
	}
	if (!phone.trim()) {
		return 'Phone is required';
	} else if (phone.length < 9) {
		return 'Phone needs to be 9 characters or more';
	}

	if (!message.trim()) {
		return 'Message is required';
	} else if (message.length < 15) {
		return 'Message minimum Required is 15';
	}
	return null;
}