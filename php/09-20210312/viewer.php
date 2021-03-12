<?php

namespace authentication;

require_once 'authentication.php';

class Viewer extends Authentication
{
    public function __construct(
        string $firstName,
        string $lastName,
        string $email,
        string $password
    ) {
        parent::__construct($firstName, $lastName, $email, $password);
    }

    final public function register()
    {
        var_dump($this);
    }

    final public function login()
    {
    }
}

$viewer = new Viewer(
    'Nam',
    'Nguyen',
    'nam.nguyen@nam.com',
    'Abc@123'
);
$viewer->register();