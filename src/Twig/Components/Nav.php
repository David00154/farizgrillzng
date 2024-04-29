<?php

namespace App\Twig\Components;

use App\Services\WooCommerceClient;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent]
class Nav
{
    public string $title;

    public function __construct(private WooCommerceClient $wooCommerceClient, private HttpClientInterface $client)
    {
    }

    public function getCategories(): array
    {
        try {
            $res = $this->wooCommerceClient->get('/products/categories');
            $chunks = "";
            if ($res->getStatusCode() == 200) {
                foreach ($this->client->stream($res) as $chunk) {
                    $chunks .= $chunk->getContent();
                }
            }
            /**
             * @var array $data
             */
            $data = [];
            $data = json_decode($chunks, true);
            return $data;
        } catch (\Throwable $th) {
            return [];
        }
    }
}