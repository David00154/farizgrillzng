<?php

namespace App\Twig\Components;

use App\Services\WooCommerceClient;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent]
class Product
{
    public function __construct(private WooCommerceClient $wooCommerceClient, private HttpClientInterface $client)
    {

    }

    public function getProducts()
    {
        try {
            $res = $this->wooCommerceClient->get('/products');
            $chunks = "";
            /**
             * @var array $data
             */
            $data = [];
            if ($res->getStatusCode() == 200) {
                foreach ($this->client->stream($res) as $chunk) {
                    $chunks .= $chunk->getContent();
                }
                $data = json_decode($chunks, true);
            }
            if (count($data) > 0) {
                $categories = array();
                foreach ($data as $item) {
                    /**
                     * @var string
                     */
                    $_category = "";
                    foreach ($item['categories'] as $category) {
                        $_category = $category['name'];
                        if (!isset($categories[$_category])) {
                            $categories[$category['name']] = array();
                        }
                    }
                    $categories[$_category][] = $item;
                }
                // dd($categories);
                return $categories;
            }
            return [];
        } catch (\Throwable $th) {
            return [];
        }
    }
}