<?php
namespace App\Services;

class GlobalTwigFunctions
{
    public function __construct()
    {
    }

    public function remove_tags(?string $item)
    {
        return strip_tags($item);
    }
}