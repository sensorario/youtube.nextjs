<?php

header('Access-Control-Allow-Origin: http://localhost:3000');

sleep(1);

echo json_encode([
    'foo' => 'doooo',
]);