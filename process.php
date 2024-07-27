<center>
<br />
<?php
if (isset($_POST['select1'])) 
{
    $selector = htmlspecialchars($_POST['select1']);
    if($selector=="name")
    {
    	?>
        <strong>Name:</strong> Fatimah
        <?php
    }
    elseif($selector=="year")
    {
    	?>
        <strong>Year:</strong> 2024
        <?php
    }
    else
    {
    	?>
        <strong>Animal:</strong> Rabbit
        <?php
    }
    echo '<br />This is your Ajax response.';
}
?>
</center>