import java.util.List;

/**
 * Interface to report what supplement have the products in Market.
 */
public interface SupplementMarketInterface {
    /**
     * Get tax of product in percentage.
     *
     * @param product
     * @return integer
     */
    int getTax(String product);

    /**
     * Get offer of product if exists.
     * <p/>
     * If the product has offer, it will return a array where will indicate what offer apply. Ej. 2x1 -> List(2, 1), 3x2 -> List(3,2).
     * If the product does not have offer, it will return null.
     *
     * @param product
     * @return List
     */
    List getOffer(String product);
}
