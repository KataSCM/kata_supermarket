<?php

/**
 * Interface to report what supplement have the products in Market.
 */
interface SupplementMarketInterface
{
	/**
	 * Get tax of product in percentage.
	 *
	 * @return integer
	 */
	public function getTax($product);

	/**
	 * Get offer of product if exists.
	 *
	 * If the product has offer, it will return a array where will indicate what offer apply. Ej. 2x1 -> array(2, 1), 3x2 -> array(3,2).
	 * If the product does not have offer, it will return null.
	 *
	 * @return array|null
	 */
	public function getOffer($product);
}