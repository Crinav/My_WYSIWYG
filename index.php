<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<link rel="stylesheet" type="text/css" href="./my_wysiwyg.css">

	<title>My WYSIWYG</title>

</head>
<body>
	<h1>My Wysiwyg</h1>

	<a href="upload.php">Upload</a>

	<textarea></textarea>
	
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script type="text/javascript" src="script.js"></script>
	<script>
	$(document).ready(function() 
	{
		//par defaut : 'gras', 'italic', 'strikeThrough', 'ForeColor','fontSize'
		//optionnel : 'justifyLeft', 'justifyRight', 'justifyCenter', 'justifyFull','createLink'
		$("textarea").my_wysiwyg('justifyLeft', 'justifyRight', 'justifyCenter', 'justifyFull','createLink');
	});
	</script>
</body>
</html>
