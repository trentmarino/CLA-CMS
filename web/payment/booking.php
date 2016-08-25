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
    <script src="booking%20table.css"></script>

</head>
<body>
<?php
include '../db_connect_production.php';
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
            <a class="navbar-brand" href="#">Cairns Luxury Apartments App CMS</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li><a href="../index.php">Home</a></li>
                <li class="active"><a href="booking.php">Accept Deposit</a></li>
                <li><a href="#contact">Logout</a></li>
            </ul>
        </div><!--/.nav-collapse -->
    </div>
</nav>

<div class=" tableHeading">
    <div class=" customerTable">
    <table class="customer table table-striped table-hover table-condensed table-responsive table-bordered" align="center">
        <tr>
        <th class="custName">No. </th>
        <th class="custName">ID# </th>
        <th class="custName">Name </th>
        <th class="custEmail">email </th>
        <th class="custPhone">Phone   </th>
        <th class="custAddress">Address </th>
        <th class="custLocation ">Location </th>
        <th class="custRoomType">Room Type</th>
        <th class="custCheckIn">Check-In </th>
        <th class="custCheckout">Check-Out </th>
        <th class="LateBooking">Late booking </th>
        <th class="pricePaid">Price Paid </th>
        <th class="confirm">Confirm </th>
        </tr>
        <tbody>
        
        </tbody>
    </table>
    </div>
</div>
<script src="PullDetails.js"></script>
</body>
</html>