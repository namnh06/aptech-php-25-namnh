<?php

namespace authentication;

require_once 'authentication.php';

class Admin extends Authentication
{
    private string $identifier;

    public function __construct(
        string $firstName,
        string $lastName,
        string $email,
        string $password,
        string $identifier
    ) {
        parent::__construct($firstName, $lastName, $email, $password);
        $this->identifier = $identifier;
    }

    public function register()
    {
        // var_dump('hello');
        var_dump($this->firstName);
    }

    public function login()
    {
    }
}
// var_dump($_POST);
$admin = new Admin(
    $_POST['firstName'],
    $_POST['lastName'],
    $_POST['email'],
    $_POST['password'],
    $_POST['identifier'],
);
$admin->register();