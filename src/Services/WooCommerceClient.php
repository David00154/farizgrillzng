<?php

namespace App\Services;

use Automattic\WooCommerce\Client;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Contracts\HttpClient\ResponseInterface;

class WooCommerceClient
{
    private HttpClientInterface $client;
    private string $url = "https://farizgrillzng.com/-/wp-json/wc/v3";
    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client->withOptions([
            'auth_basic' => "{$_ENV['CONSUMER_KEY']}:{$_ENV['CONSUMER_SECRET']}"
        ]);
    }


    public function get(string $endpoint, ?array $params = null): ResponseInterface
    {
        return $this->client->request("GET", $this->url . $endpoint, [
            'query' => $params,
        ]);
    }
    public function post(string $endpoint, ?array $params = null, ?array $body = null): ResponseInterface
    {
        return $this->client->request("POST", $this->url . $endpoint, [
            'query' => $params,
            'json' => $body,
        ]);
    }
}