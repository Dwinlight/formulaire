<?php
    // You need to install the sendgrid client library so run:
    // composer require sendgrid/sendgrid
    require '/vendor/autoload.php';

    // contains a variable called: $API_KEY that is the API Key.
    // You need this API_KEY created on the Sendgrid website.
    $API_KEY="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";

    $FROM_EMAIL = 'YOUR_EMAIL';
    // they dont like when it comes from @gmail, prefers business
    // emails

    $TO_EMAIL = 'THE_PERSON_YOUR_WANT_TO_CONTACT';
    // Try to be nice. Take a look at the anti spam laws. In most
    // cases, you must have an unsubscribe. You also cannot be
    // misleading.
    $subject = "Nouvelle demande de devis";
    $from = new SendGrid\Email(null, $FROM_EMAIL);
    $to = new SendGrid\Email(null, $TO_EMAIL);
    $htmlContent = '';
    // Create Sendgrid content
    $content = new SendGrid\Content("text/html",$htmlContent);
    // Create a mail object
    $mail = new SendGrid\Mail($from, $subject, $to, $content);

    $sg = new \SendGrid($API_KEY);
    $response = $sg->client->mail()->send()->post($mail);

    if ($response->statusCode() == 202) {
     // Successfully sent
     echo 'done';
    } else {
     echo 'false';
    }
?>
