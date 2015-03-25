function SupplementMarketInterface()
{};

/**
 * Get tax of product in percentage.
 *
 * @return integer
 */
SupplementMarketInterface.prototype.getTax = function(product)
{
    throw Error('Implement the method getTax');
};

/**
 * Get offer of product if exists.
 *
 * If the product has offer, it will return a array where will indicate what offer apply. Ej. 2x1 -> array(2, 1), 3x2 -> array(3,2).
 * If the product does not have offer, it will return null.
 *
 * @return array|null
 */
SupplementMarketInterface.prototype.getOffer = function(product)
{
    throw Error('Implement the method getOffer');
};
