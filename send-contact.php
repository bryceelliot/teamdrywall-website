<?php
header('Content-Type: application/json');

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid input']);
    exit;
}

$name    = strip_tags(trim($input['name']    ?? ''));
$phone   = strip_tags(trim($input['phone']   ?? ''));
$email   = strip_tags(trim($input['email']   ?? 'Not provided'));
$message = strip_tags(trim($input['message'] ?? ''));

$to      = 'teamdrywall@shaw.ca';
$subject = "Contact Form Message — {$name}";
$body    = "Name:    {$name}\r\n"
         . "Phone:   {$phone}\r\n"
         . "Email:   {$email}\r\n"
         . "Message:\r\n{$message}";

$headers  = "From: noreply@teamdrywall.ca\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$ok = mail($to, $subject, $body, $headers);
echo json_encode(['ok' => (bool)$ok]);
