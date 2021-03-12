<?php

namespace authentication;

abstract class Authentication
{
    protected string $firstName, $lastName, $email, $password;

    public function __construct(
        string $firstName,
        string $lastName,
        string $email,
        string $password
    ) {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->email = $email;
        $this->password = $password;
    }

    abstract function register();
    abstract function login();
}