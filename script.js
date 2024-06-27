<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Survival in the Wild</title>
    <style>
        /* Reset CSS */
        body, h1, h2, h3, p, ul, li {
            margin: 0;
            padding: 0;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }

        header {
            background-color: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }

        .container {
            max-width: 800px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        h1, h2 {
            color: #333;
            text-align: center;
            margin-bottom: 10px;
        }

        p {
            line-height: 1.6;
            color: #666;
            margin-bottom: 15px;
        }

        ul {
            list-style-type: none;
            padding: 0;
            margin-bottom: 15px;
            text-align: center;
        }

        ul li {
            display: inline-block;
            margin-right: 10px;
        }

        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <header>
        <h1>Survival in the Wild</h1>
    </header>
    
    <div class="container">
        <h2>Welcome to Survival in the Wild</h2>
        <p>Explore the wilderness, gather resources, and survive against nature's challenges.</p>
        <p>Stay tuned for updates and news about the game!</p>

        <h3>Features:</h3>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="news.html">News</a></li>
        </ul>
    </div>
    
    <footer>
        <p>&copy; 2024 Survival in the Wild. All rights reserved.</p>
    </footer>

    <script>
        // JavaScript code to handle news publishing
        document.addEventListener('DOMContentLoaded', function() {
            var newsForm = document.getElementById('newsForm');
            var newsList = document.getElementById('newsList');

            newsForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent form submission

                var title = document.getElementById('newsTitle').value;
                var content = document.getElementById('newsContent').value;
                var date = new Date().toLocaleDateString();
                var newsItem = `<li><strong>${date}:</strong> ${title} - ${content}</li>`;
                newsList.innerHTML += newsItem;
                newsForm.reset(); // Reset form fields
            });
        });
    </script>
</body>
</html>