import { Form } from '../types/Form.ts';

export const saveForm = async (data: Form) => {
  try {
    alert('Thank you for your feedback!');
    const response = await fetch('https://domain.com/api/feedback', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error: any) {
    console.error(error.message);
  }
};
