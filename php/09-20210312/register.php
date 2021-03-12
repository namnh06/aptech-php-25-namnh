<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form id="form" action="viewer.php" method="POST">
        <select onchange="addAction(this)" name="type" id="registerType">
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer" selected="selected">Viewer</option>
        </select>
        <div>
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName">
        </div>
        <div>
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName">
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email">
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" id="password" name="password">
        </div>

        <div id="identifierInput" style="display:none;">
            <label for="identifier">Identifier</label>
            <input type="text" id="identifier" name="identifier">
        </div>

        <div id="licenseInput" style="display:none;">
            <label for="license">License</label>
            <input type="text" id="license" name="license">
        </div>

        <button type="submit">Dang Ky</button>
    </form>
    <script>
    function addAction(option) {
        switch (option.value.toLowerCase()) {
            case 'admin':
                document.querySelector("#form").action = 'admin.php';
                document.querySelector('#identifierInput').style.display = 'block';
                document.querySelector('#licenseInput').style.display = 'none';
                break;
            case 'editor':
                document.querySelector("#form").action = 'editor.php';
                document.querySelector('#identifierInput').style.display = 'none';
                document.querySelector('#licenseInput').style.display = 'block';
                break
            default:
                document.querySelector("#form").action = 'viewer.php';
                document.querySelector('#identifierInput').style.display = 'none';
                document.querySelector('#licenseInput').style.display = 'none';
        }

    }
    </script>
</body>

</html>