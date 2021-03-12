<?php

namespace authentication;

require_once 'authentication.php';

class Editor extends Authentication
{
    private string $license;

    public function __construct(
        string $firstName,
        string $lastName,
        string $email,
        string $password,
        string $license
    ) {
        parent::__construct($firstName, $lastName, $email, $password);
        $this->license = $license;
    }

    final public function register()
    {
        var_dump($this);
    }

    final public function login()
    {
    }
}

$editor = new Editor(
    'Nam',
    'Nguyen',
    'nam.nguyen@nam.com',
    'Abc@123',
    'VNE0002839'
);
$editor->register();