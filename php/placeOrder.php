<?php 
require_once dirname(__FILE__) . '/midtrans-php-master/Midtrans.php';

// Konfigurasi Sandbox Midtrans
\Midtrans\Config::$serverKey = 'SB-Mid-server-Oi4YWju2PsNlqPL0Z_hjOST6'; // Ganti dengan Server Key Sandbox kamu
\Midtrans\Config::$isProduction = false; // <<== WAJIB FALSE untuk sandbox
\Midtrans\Config::$isSanitized = true;
\Midtrans\Config::$is3ds = true;

// Parameter dari frontend
$params = array(
    'transaction_details' => array(
        'order_id' => rand(), // Idealnya pakai UUID atau kombinasi waktu
        'gross_amount' => $_POST['total'],
    ),
    'item_details' => json_decode($_POST['items'], true),
    'customer_details' => array(
        'first_name' => $_POST['name'],
        'email' => $_POST['email'],
        'phone' => $_POST['phone'],
    ),
);

// Ambil Snap Token
$snapToken = \Midtrans\Snap::getSnapToken($params);
echo $snapToken;
