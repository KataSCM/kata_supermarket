# Using Mocks with PHPUnit

[PHPUnit documentation](https://phpunit.de/manual/current/en/test-doubles.html)

[Vagrant machine to do kata in PHP](https://github.com/mglolmos/vagrant-kata-php)

```php
class SuperMarketTest extends \PHPUnit_Framework_TestCase
{

    private $supplementMarket;

    public function setUp()
    {
        $this->supplementMarket = $this->getMock('SupplementMarketInterface');

        ...
    }

    public function testShouldCallSupermarketInterface()
    {
        $this->supplementMarket->expects($this->once())
            ->method('getTax')
            ->with($this->anything())
            ->will($this->returnValue(11));

        ...
    }
}
```
