<html>
<head>
    <title>Cla-Cms</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
          integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="../grid.css">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
    <script src="//code.jquery.com/jquery-1.10.2.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <script src="../js/vendor/jquery.ui.widget.js"></script>
    <script src="../js/jquery.iframe-transport.js"></script>
    <script src="../js/jquery.fileupload.js"></script>

</head>
<body>
<?php
include '../envronment_test.php';

?>
<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="../index.php">Cairns Luxury Apartments App CMS</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li ><a href="../index.php">Home</a></li>
                <li class="active" ><a  href="booking.php">Accept Deposit</a></li>
                <li><a href="#contact">Logout</a></li>
            </ul>
        </div><!--/.nav-collapse -->
    </div>
</nav>

<div class=" row headingSection ">
    <div class=" col">
    <table class="customer" border="1" >
        <tr>
        <th>Name </th>
        <th>email </th>
        <th>Phone   </th>
        <th>Address </th>
        <th>Location </th>
        <th>Room Type</th>
        <th>Check-In </th>
        <th>Check-Out </th>
        <th>Late booking </th>
        <th>Price Paid </th>
        <th>Confirm </th>
        </tr>
    </table>
    </div>
</div>
<script src="PullDetails.js"></script>
</body>
</html>