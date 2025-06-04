<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Contact Us - Little Yellow Bee</title>
  <link rel="stylesheet" href="../styles.css" />
  <style>
    main {
      text-align: center;
    }

    canvas {
      background-color: #e0f7fa;
      display: block;
      margin: 2rem auto;
      border: 2px solid #fdd835;
      border-radius: 12px;
    }

    .navbar .logo img {
      height: 40px;
    }

    .navbar .logo {
      display: flex;
      align-items: center;
    }
  </style>
</head>
<body>

  <nav class="navbar">
    <div class="logo">
      <img src="../bee-logo.png" alt="Bee Logo">
    </div>
    <ul class="nav-links">
      <li><a href="../index.html">Home</a></li>
      <li><a href="../about.html">About Us</a></li>
      <li><a href="../contact_us/contact.html">Contact Us</a></li>
      <li><a href="../index.html#services">Our Services</a></li>
    </ul>
  </nav>

  <header>
    <h1>Contact Us</h1>
  </header>

  <main>
    <section>
      <h2>Let's Connect</h2>
      <p>Email us at <strong>info@littleyellowbee.co.uk</strong> or reach us via WeChat below.</p>
    </section>

    <canvas id="flappyBee" width="400" height="500"></canvas>
  </main>

  <footer>
    <p>&copy; 2025 Little Yellow Bee Tutoring. All rights reserved.</p>
  </footer>

  <script src="flappy-bee.js"></script>
</body>
</html>
