<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Data</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="main">
        <h2>Form Data</h2>
        <table>
            <thead>
                <tr>
                    <th>Fields</th>
                    <th>Field Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name </td>
                    <td><?php echo $_POST['name']; ?></td>
                </tr>
                <tr>
                    <td>Email:- </td>
                    <td><?php echo $_POST['email']; ?></td>
                </tr>
                <tr>
                    <td>Portfolio </td>
                    <td><?php echo $_POST['portfolio']; ?></td>
                </tr>
                <tr>
                    <td>Birth Date </td>
                    <td><?php echo $_POST['birth']; ?></td>
                </tr>
                <tr>
                    <td>Salary Expectation </td>
                    <td><?php echo $_POST['salary']; ?></td>
                </tr>
                <tr>
                    <td>Password </td>
                    <td><?php echo $_POST['password']; ?></td>
                </tr>
                <tr>
                    <td>Skill </td>
                    <td><?php
                        // Get multiple input field's value 
                        $skill_array = $_POST['skill'];
                        foreach ($skill_array as $key => $value) {
                            echo $value;
                            if ($key !== array_key_last($skill_array)) {
                                echo ', ';
                            }
                        }
                        ?></td>
                </tr>
            </tbody>
        </table>
    </div>

</body>

</html>