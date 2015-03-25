# Using Mocks with Mockito

[Mockito documentation](http://site.mockito.org/#how)

```java
...
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.runners.MockitoJUnitRunner;
import static org.mockito.Mockito.*;
...
@RunWith(MockitoJUnitRunner.class)
public class SuperMarketTest
{
    @Mock
    private SupplementMarketInterface supplementMarket;

    @Before
    public void setUp()
    {
        MockitoAnnotations.initMocks(this);

        ...
    }

    @Test
    public void shouldCallSupermarketInterface()
    {
        when(supplementMarket.getTax(anyString())).thenReturn(11);

        ...
    }
}
```
