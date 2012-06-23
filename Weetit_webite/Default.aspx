<%@ Page Title="Home Page" Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs"
    Inherits="Weetit_webite._Default" %>

<html xml:lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Weetit- the knowledge engine</title>
    <script src="Scripts/jquery-1.4.1.min.js" type="text/javascript"></script>
    <link href="Styles/default.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <div class="header">
        <div class="topmenu">
            <ul>
                <li class="first">About</li>
                <li>Developers</li>
                <li>Team</li>
                <li>Contact</li>
            </ul>
        </div>
        <div class="clearfix">
        </div>
    </div>
    <div class="maincontainer">
        <div class="logo">
        </div>
        <div class="searcharea">
            <div class="options">
                <span><input type="radio" name="option" id="QA" /><label for="QA">Q&A</label></span>
                <span><input type="radio" name="option" id="compare" /><label for="compare">Compare</label></span>
                <span><input type="radio" name="option" id="relate" /><label for="relate">Relate</label></span>
            </div>
            <div class="searchbox">
                <input type="text" /><a href="#" class="button addbutton"></a><a href="#" class="button searchbutton"></a>
            </div>
            <div class="addedEntitiesBox">
                <span class="title">Relate between:</span> <span class="addedEntity">Batman begins<img
                    src="img/closeIconHover.png" /></span> <span class="addedEntity">how i met your mother
                        <img src="img/closeIcon.png" />
                    </span><span class="addedEntity">assasins creed<img src="img/closeIcon.png" /></span>
                <span class="addedEntity">Hello<img src="img/closeIcon.png" /></span> <span class="addedEntity">
                    anitvirus<img src="img/closeIcon.png" /></span>
            </div>
        </div>
        <div class="footer">
        </div>
</body>
</html>
