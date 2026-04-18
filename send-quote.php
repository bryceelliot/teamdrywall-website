<?php
header('Content-Type: application/json');

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid input']);
    exit;
}

$firstName   = strip_tags(trim($input['firstName']   ?? ''));
$lastName    = strip_tags(trim($input['lastName']    ?? ''));
$phone       = strip_tags(trim($input['phone']       ?? ''));
$email       = strip_tags(trim($input['email']       ?? 'Not provided'));
$projectType = strip_tags(trim($input['projectType'] ?? 'General'));
$location    = strip_tags(trim($input['location']    ?? 'Not provided'));
$details     = strip_tags(trim($input['details']     ?? 'None'));

$to      = 'teamdrywall@shaw.ca';
$subject = "New Quote Request — {$projectType} — {$firstName} {$lastName}";
$body    = "Name:         {$firstName} {$lastName}\r\n"
         . "Phone:        {$phone}\r\n"
         . "Email:        {$email}\r\n"
         . "Project Type: {$projectType}\r\n"
         . "Location:     {$location}\r\n"
         . "Details:\r\n{$details}";

$headers  = "From: noreply@teamdrywall.ca\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$ok = mail($to, $subject, $body, $headers);
echo json_encode(['ok' => (bool)$ok]);
