function configOTP(email, otp) {
  const config = {
    from: process.env.USER,
    to: email,
    subject: "OTP",
    html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
        <div style="margin:50px auto;width:70%;padding:20px 0">
          <div style="border-bottom:1px solid #eee">
            <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Your Brand</a>
          </div>
          <p style="font-size:1.1em">Hi ${email},</p>
          <p>Gunakan OTP berikut untuk menyelesaikan Login Anda. OTP berlaku selama 5 menit</p>
          <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
          <p style="font-size:0.9em;">Regards,<br />Your Brand</p>
          <hr style="border:none;border-top:1px solid #eee" />
        </div>
      </div>`,
  };

  return config;
}

export default configOTP;
