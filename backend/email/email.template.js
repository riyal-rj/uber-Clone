export const  VERIFY_EMAIL_TEMPLATE=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      background-color: #f5f5f5;
      color: #333;
      line-height: 1.8;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #fff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(to right, #4a00e0, #8e2de2);
      color: white;
      padding: 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 30px;
    }
    .content p {
      margin: 0 0 15px;
    }
    .code-box {
      text-align: center;
      margin: 30px 0;
    }
    .code-box span {
      display: inline-block;
      font-size: 36px;
      font-weight: bold;
      color: #ffffff;
      letter-spacing: 6px;
      padding: 10px 20px;
      background: linear-gradient(to right, #4a00e0, #8e2de2);
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .footer {
      background: #f5f5f5;
      padding: 15px;
      text-align: center;
      font-size: 12px;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to glideGO!</h1>
    </div>
    <div class="content">
      <p>Hello,</p>
      <p>Thank you for signing up with glideGO, <b>{username}</b>! Please use the verification code below to verify your email:</p>
      <div class="code-box">
        <span>{verificationCode}</span>
      </div>
      <p>Enter this code on the verification page to complete your registration and start riding in style!</p>
      <p><strong>Note:</strong> This code will expire in 15 minutes for security purposes.</p>
      <p>If you didn’t sign up for glideGO, please disregard this email.</p>
      <p>Best regards,<br>glideGO Team</p>
    </div>
    <div class="footer">
      <p>This is an automated message. Please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>

`

export const WELCOME_MAIL_TEMPLATE=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome Aboard</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      background-color: #f5f5f5;
      color: #333;
      line-height: 1.8;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #fff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(to right, #4a00e0, #8e2de2);
      color: white;
      padding: 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 30px;
    }
    .content p {
      margin: 0 0 15px;
    }
    .welcome-box {
      text-align: center;
      margin: 30px 0;
    }
    .welcome-box span {
      display: inline-block;
      font-size: 28px;
      font-weight: bold;
      color: #ffffff;
      padding: 10px 20px;
      background: linear-gradient(to right, #4a00e0, #8e2de2);
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .footer {
      background: #f5f5f5;
      padding: 15px;
      text-align: center;
      font-size: 12px;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to glideGO!</h1>
    </div>
    <div class="content">
      <p>Dear {username},</p>
      <p>We are thrilled to have you as part of the glideGO family! Thank you for joining us. We are dedicated to making your journeys smoother and more enjoyable.</p>
      <div class="welcome-box">
        <span>Let’s Glide Together!</span>
      </div>
      <p>Explore our features, book rides effortlessly, and enjoy a premium travel experience. If you have any questions, we’re just a tap away!</p>
      <p>Best regards,<br>glideGO Team</p>
    </div>
    <div class="footer">
      <p>This is an automated message. Please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>

`