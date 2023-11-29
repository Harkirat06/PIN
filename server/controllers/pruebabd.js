const {cpu, placas, gpu, ram, disco, monitor, disipador, caja, fuente, raton, teclado, build} = require("./models/Components");
require("./mongoose");

let cpuACargar = [
    {
        marca: "Intel",
        nombre: "Intel Core i9-14900KF",
        gama: "Premium",
        socket: "LGA1700",
        consumo: 253,
        tipoRam: "DDR5",
        ventilador: false,
        gpu: false,
        precio: {
            segundaMano: null,
            amazon: 653.00,
            ebay: 644.95,
        },
        link: {
            amazon: "https://www.amazon.es/Intel%C2%AE-i9-14900KF-Desktop-Processor-P-Cores/dp/B0CHBJXG7G/ref=sr_1_2_mod_primary_new?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2PPOO6DB2YGDW&keywords=i9+14900k&qid=1701165525&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=i9+14900kf%2Caps%2C84&sr=8-2",
            ebay: "https://www.ebay.es/itm/126176097728?hash=item1d60ae75c0:g:5YgAAOSwQollS3Fm&amdata=enc%3AAQAIAAAA4E6hNV0xiF8E0IXgS4HuvEu3%2FXj1fe78T5gOobPPoTB2jn%2FPC6UgP2rVYlPiXDNZEeCWYrHoOL40Cl%2BWN9HfnccfvlMYQQC5B6SYfPfW5DICHtkXYJwkyGkYAlyo7dGf5DIWpNypCuaEiT1diOJpwew188xfa%2BmzR6u7a816e%2BlCvAqACA0jxo0ceCjuhDUdc2okfF5K%2FMZQ9ncvsvEE64dYmdi7gnwZ%2FDKFuRhrshGtbNPw9AQO7aCC0WevhVBoQXpxLVtE2zcA%2FvlEjPuvppeW3TcKsUmii6WddeieDbPQ%7Ctkp%3ABk9SR_ik9NWCYw",
        },
        imagen: "intel.jpg",
    },
    {
        marca: "Intel",
        nombre: "Intel Core i7-14700KF",
        gama: "Alta",
        socket: "LGA1700",
        consumo: 253,
        tipoRam: "DDR5",
        ventilador: false,
        gpu: false,
        precio: {
            segundaMano: null,
            amazon: 470.31,
            ebay: 419.99,
        },
        link: {
            amazon: "https://www.amazon.es/Intel%C2%AE-i7-14700KF-Desktop-Processor-P-Cores/dp/B0C948QQWF/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2Y2O8V73GPMR5&keywords=i7+14700k&qid=1701165837&sprefix=i714700k%2Caps%2C78&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
            ebay: "https://www.ebay.es/itm/355176558164?hash=item52b22c2e54:g:7GIAAOSwRjBlXSb5&amdata=enc%3AAQAIAAAAwAFuFQfi0SbVB2iSTs1Hr6i8VuCkFaxDDOT4RFlKrwXu9Rj%2FXSVQoU2UQkMmipt%2BwRE%2BMclF809Jp6ApENZHVemqzeazKXj4831o%2BGltYQJQHWLpyUJDsiGXubEj1JbFKFfbx%2BlqEGsF03JlzWtZuyR%2BYG5cslaSez4bEh90xMMobuG0IwVfIuD%2FVcqeNA%2BgSi0UTu4aAx9GXq1KQUK%2FIIdp6rTDcZAnU%2F45tDkLr7WctVFUsX73z4%2BB8HWRT%2Bec9w%3D%3D%7Ctkp%3ABk9SR5rhjtaCYw",
        },
        imagen: "intel.jpg",
    },
    {
        marca: "Intel",
        nombre: "Intel Core i5-14600KF",
        gama: "Media",
        socket: "LGA1700",
        consumo: 181,
        tipoRam: "DDR5",
        ventilador: false,
        gpu: false,
        precio: {
            segundaMano: null,
            amazon: 327.36,
            ebay: 309.99,
        },
        link: {
            amazon: "https://www.amazon.es/Intel%C2%AE-i5-14600KF-Desktop-Processor-P-Cores/dp/B0CHBH63YX/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=V38NC9TNU70X&keywords=i5+14600k&qid=1701165966&sprefix=i5+14600kf%2Caps%2C98&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
            ebay: "https://www.ebay.es/itm/355176558210?hash=item52b22c2e82:g:eWcAAOSw3-ZlWn~e&amdata=enc%3AAQAIAAAA4MMgK7oH0aV%2BfE7MUqsx9uOQhjhgGD0nDr1z6yeCx1xc1wu0q%2F8fH9egyhx%2F1B%2FT8cl6CrtzUEluscy9xA%2Bl9U3BKd3HeOjVAAg4yi31aVm15uy1lI%2Fi%2F%2BkXSgiw1juyBw6J4rXK4BXLaNgJgcqFZyRDrghA9terEc98njiH6w2pffizf%2B0SAU5fO6dzaQo5qzSE5atoSLakvGaPatKG4BnoFsOSEAesf%2FOtSZAV7clR3arXUp9gmWDlvwJhO%2FJR7O50xRSoEbvq5%2B2S2om6oihx9XM9ZIDc08xIHfs1mXLr%7Ctkp%3ABk9SR8aMqtaCYw",
        },
        imagen: "intel.jpg",
    },
    {
        marca: "Intel",
        nombre: "Intel Core i9-13900KF",
        gama: "Premium",
        socket: "LGA1700",
        consumo: 253,
        tipoRam: "DDR5",
        ventilador: false,
        gpu: false,
        precio: {
            segundaMano: null,
            amazon: 549.90,
            ebay: 649.99,
        },
        link: {
            amazon: "https://www.amazon.es/Procesador-i9-13900KF-Equipos-sobremesa-n%C3%BAcleos/dp/B0BG66JH7Q/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3BAB93N8TU3NP&keywords=i9+13900k&qid=1701166616&sprefix=i9+13900k%2Caps%2C97&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
            ebay: "https://www.ebay.es/itm/354751582318?hash=item5298d7906e:g:GU8AAOSwkDdlZA9Q&amdata=enc%3AAQAIAAAAwLGxP0DQ91se51Szx8ZGqM3YPv1jCP7914So6rJIfN5WRfdsQYzCJ%2FDZk0Lzz1RvCSAvBb6OfeWmN2YqnCBiilkkWCbKDGVtEYI%2BvVl9rFeyR6ttjGHWroiLGu3loYDuh7R7dVUbc3ZJ28FIy80tAFufww1Lf2kZ7819ho6qiZ7uD5IixUxXEvqEqv4a%2B71G83uERPUaBEG3J61QNbK8cNHB%2FIF1E7NE8qv1xktrPOb6CUDcK5rR75jmY1V2v2SBSg%3D%3D%7Ctkp%3ABk9SR4jk7taCYw",
        },
        imagen: "intel.jpg",
    },
    {
        marca: "Intel",
        nombre: "Intel Core i7-13700KF",
        gama: "MediaAlta",
        socket: "LGA1700",
        consumo: 253,
        tipoRam: "DDR5",
        ventilador: false,
        gpu: false,
        precio: {
            segundaMano: null,
            amazon: 381.99,
            ebay: 420.55,
        },
        link: {
            amazon: "https://www.amazon.es/Intel%C2%AE-i7-13700KF-Desktop-Processor-P-Cores/dp/B0BG65D6Z2/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3H5UZ60SF6UXM&keywords=i7+13700k&qid=1701166414&sprefix=i7+13700k%2Caps%2C98&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
            ebay: "https://www.ebay.es/itm/304645661731?hash=item46ee4be423:g:fpQAAOSwQRxlFHx5&amdata=enc%3AAQAIAAAA4J6H8hlF9u4Y%2BZu7NAfEsVcf4KXe2WwxDFm9ruFTGUdl1z1ooAEjyrKdH4CCNK3O8avrgMj99hSzqSX31ybDBkuX8NB6wjVXLvAEQYGtni5vt2uqbtPJIlQOPRK2nvV5LHTytlXqLBgncA4k2dxfBzmUOgZJfTAQoUWOgqGpuCL9SJpQ0Cy25sU032j1XlzoHxhEdclJePPMpizUaZpvI5PPetOUU6FAtUYcHhtAaHzTjhaJM70sIu9TwB4Ze4yYYWMFh6lWJvYm7pofn2gyGhy02rldEJ%2BzzLlYm%2Fp2nKly%7Ctkp%3ABk9SR8za39aCYw",
        },
        imagen: "intel.jpg",
    },
    {
        marca: "Intel",
        nombre: "Intel Core i5-13600KF",
        gama: "MediaBaja",
        socket: "LGA1700",
        consumo: 181,
        tipoRam: "DDR5",
        ventilador: false,
        gpu: false,
        precio: {
            segundaMano: null,
            amazon: 289.90,
            ebay: 374.35,
        },
        link: {
            amazon: "https://www.amazon.es/Procesador-i5-13600KF-Equipos-sobremesa-n%C3%BAcleos/dp/B0BG64N549/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2RI1TQYXQC6RO&keywords=i5+13600k&qid=1701166305&sprefix=i5+13600kf%2Caps%2C92&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
            ebay: "https://www.ebay.es/itm/334781770391?hash=item4df28c6a97:g:oykAAOSw8vZkCPkk&amdata=enc%3AAQAIAAAA4EFjjjZG2l4jT169eoAaB055ACuyDe2jRXHZMMu4qPjGu6HJ7cGP%2BnwOhqox6%2FO7n6OgN6y%2FgpY4uH0MKzhj8W%2B5BuuAbGnzMOAeySVSEQ4hnyRsEhAjeNjvENqLWzIN3j9%2B5tlbKzlk237us95baB%2Fm%2BcdAuH95K9licTQNEyIHlnTAKJM2omXu%2FlsqlvOenG1t3YS87llLA0fev0JjkOy%2F7FTS7y%2FnHK5HuXVSjhfx1Hdal9fMA4ZwuH1ROj3crqSD0tgMBTdtPBXAzb8e6X0jS7A7w9HG7V5keg9RF1xh%7Ctkp%3ABk9SR4ig1NaCYw",
        },
        imagen: "intel.jpg",
    },
    {
        marca: "Intel",
        nombre: "Intel Core i3-13100",
        gama: "Baja",
        socket: "LGA1700",
        consumo: 110,
        tipoRam: "DDR5",
        ventilador: true,
        gpu: true,
        precio: {
            segundaMano: null,
            amazon: 121.40,
            ebay: 143.88,
        },
        link: {
            amazon: "https://www.amazon.es/Intel%C2%AE-i3-13100-Desktop-Processor-P-Cores/dp/B0BN5Z8MDR/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=S9AQUG2XFG5W&keywords=i3+13100&qid=1701166184&sprefix=i3+13100%2Caps%2C93&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
            ebay: "https://www.ebay.es/itm/134789390914?hash=item1f6212e242:g:eWsAAOSwms5lQsmU&amdata=enc%3AAQAIAAAA4IHuZx1SYk0X0TAk6400bFRWTx3lomBfJ5KJaMvC4BtB%2BJP7bsyyZWkWKC3ymVW3GBhfg0EJcQtywriNMWP6HtYxkE5IAkbAcGCPzSRLQOkvgXXl6t07Ibrx6eCjqRI9mtjMzngs69UpEsQc0csDMtY57GPX1GiMBoNEm3OofXQwCRy5PikZ%2FTLx%2F%2BEkBKjJhT16hhsT%2FWO%2F7VP%2Bn1w1P9qqyi7ymFs3IknXUA6uqtHbIHiIbhyBDAI54isZgQIp7Xk4zkHA7Z46vVH0sNj%2F7%2BDceVRXse%2F3sR0iWzoBiTa2%7Ctkp%3ABFBM_pfE1oJj",
        },
        imagen: "intel.jpg",
    },
    {
        marca: "AMD",
        nombre: "AMD Ryzen 9 7950X3D",
        gama: "Premium",
        socket: "AM5",
        consumo: 120,
        tipoRam: "DDR5",
        ventilador: false,
        gpu: false,
        precio: {
            segundaMano: null,
            amazon: 639.90,
            ebay: 559.90,
        },
        link: {
            amazon: "https://www.amazon.es/AMD-Ryzen-7950X3D-desenfrenados-Arquitectura/dp/B0BTRH9MNS/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2GR1B5K5Q91GD&keywords=AMD+Ryzen+9+7950X&qid=1701167090&sprefix=amd+ryzen+9+7950x%2Caps%2C147&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
            ebay: "https://www.ebay.es/itm/126176041927?hash=item1d60ad9bc7:g:kDkAAOSwj9FlS2WS&amdata=enc%3AAQAIAAAA4GGGVPWdZ%2B%2Bmuoue%2BTFuLZzkDtLS6pGJL0qtwDCesYy%2Fchys9cD4DTtJzspfAwSmcmW3Q0Lo0mNEz%2F%2FzW5W3%2FUR94iZaZTD9nyBndnyYcNzyGr8YKgi6BA4lgXeY0jnMzCcqOGRQGG1rhkobHEgLgE0eUXNXZi2DuXrw%2F4Z%2FaTDU3bRZzSrvHRS%2BHUc236A06AhUXNUhGgdzqqEqlvUi3o6kfo1ISeokR4G14gtlhKXaBqfyF6V8VbkKMWGdfoXb26tStwyfgT0y0K17TBhaPPoE1KWUG4NJbyFaqRvYwVTe%7Ctkp%3ABk9SR9jJx9eCYw",
        },
        imagen: "intel.jpg",
    },
    {
        marca: "AMD",
        nombre: "AMD Ryzen 7 7800X3D",
        gama: "Alta",
        socket: "AM5",
        consumo: 120,
        tipoRam: "DDR5",
        ventilador: false,
        gpu: false,
        precio: {
            segundaMano: null,
            amazon: 385.00,
            ebay: 399.99,
        },
        link: {
            amazon: "https://www.amazon.es/AMD-Ryzen-7800X3D-desenfrenados-Arquitectura/dp/B0BTZB7F88/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10EE0ZM74K8QG&keywords=AMD+Ryzen+7+7800X3D&qid=1701167521&sprefix=amd+ryzen+7+7800x3d%2Caps%2C100&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
            ebay: "https://www.ebay.es/itm/266435328807?hash=item3e08c87b27:g:UTEAAOSwQh9lUoI3&amdata=enc%3AAQAIAAAA4CjqxqbmApS2YK%2BOLByx%2Bbu5SpNJWs0k6rHZ8W5lMI%2F4Uh1rQypEPl01PciL3bkeKDFsonYxM%2FpKH%2BqcWNpxqlxVCrVC3%2BcwWk5wYnwIrvtmxO5YmM5i8CMVsDeCOvolNfMCY7L9ltwIiJ0Pf6BJqCYxKW06ke5LWlX9%2F7KafKGntJAnJScKNZCa9o%2FKb40atvyJdrWZ2X%2F7bfRblCOkT6OZOGzRYevgNGn9CXz08QFyWvGiqmFo8djZd0PEP7%2Bm1iOhGqaaDgJjrzW0ZS%2Bsp0GA1SkjXjo9M6eGr9%2FojEZa%7Ctkp%3ABk9SR6zP9deCYw",
        },
        imagen: "intel.jpg",
    },
    {
        marca: "AMD",
        nombre: "AMD Ryzen 5 7600X",
        gama: "Media",
        socket: "AM5",
        consumo: 105,
        tipoRam: "DDR5",
        ventilador: false,
        gpu: false,
        precio: {
            segundaMano: null,
            amazon: 218.90,
            ebay: 221.00,
        },
        link: {
            amazon: "https://www.amazon.es/AMD-Ryzen-7600-Processor-Negro/dp/B0BMQJWBDM/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2JB6ISUKUKUP3&keywords=AMD+Ryzen+5+7600X&qid=1701167793&sprefix=amd+ryzen+5+7600x%2Caps%2C87&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
            ebay: "https://www.ebay.es/itm/285571541885?hash=item427d63eb7d:g:sjcAAOSw-jNlXlHF&amdata=enc%3AAQAIAAAA4J99uFpg9XI7yBHex8ICx7Dfpeqzn64K4Y2h85UqGT0QsjpBkIOqZdrfikRAnCPKhHEqEHSD6XdSvnoWI4yNderb7q5G9dNr%2BB88sxOfAa30dDcz4KPiW1K8YrCpxaMMIY23UMsq7qC5lTf68SwtpFBV%2Bxp3tL4EoVA%2BlasqjmxfjPNdB%2BuYdnLSrJaQEcqgDHsiqYo4b519I%2B9h1wE5XficMuUcFYscyMUCTTDNCPTNaeplV1SDCB6GvXTUJ5UBesmcoilPDlnBbq4mJYvj3Z7ELspdIl7KIjnwxdKSYLQ7%7Ctkp%3ABFBMsImJ2IJj",
        },
        imagen: "intel.jpg",
    },
    {
        marca: "AMD",
        nombre: "AMD Ryzen 9 5950X",
        gama: "Alta",
        socket: "AM5",
        consumo: 105,
        tipoRam: "DDR4",
        ventilador: false,
        gpu: false,
        precio: {
            segundaMano: null,
            amazon: 479.90,
            ebay: 449.95,
        },
        link: {
            amazon: "https://www.amazon.es/AMD-Ryzen-9-5950X-Box/dp/B0815Y8J9N/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=36QZ0SQ1SU4VW&keywords=AMD+Ryzen+9+5950X&qid=1701168257&sprefix=amd+ryzen+9+5950x%2Caps%2C152&sr=8-1&ufe=app_do%3Aamzn1.fos.0fd54328-1d46-4534-bd0f-16141b40bb5b",
            ebay: "https://www.ebay.es/itm/256117053201?hash=item3ba1c41711:g:mL8AAOSwWxNkkuCj&amdata=enc%3AAQAIAAAA4Mrl2zoGPX4IGAIx1uFG6zB7XH8Fbo73xE5RSuDLsXdtqoDgY4TTSM%2BaRXSCk0831tqFAxwlMUtvQ6yVo0bXDnPQ5r%2BkCKwTNU3SiVFjW9PgVUxG5daV05tsExng0Q7bDcelxix6BaevGpSnngc4m4HGyl1%2F7H12G41UbWwGiBX6bEqGB4sjJN3q5szbLG4E%2BFgxW9A9L5YR5%2FmbxpVlDEqsq%2Bqrz6vQaso5faTqazcZAJF4e9aCmjRGXOX9UTuqosBm9xD22slt1N5ffeeLJEdND0GudSbawR2F%2Bm2qd6qB%7Ctkp%3ABFBMuufA2IJj",
        },
        imagen: "intel.jpg",
    },
    {
        marca: "AMD",
        nombre: "AMD Ryzen 7 5800X",
        gama: "Media",
        socket: "AM5",
        consumo: 105,
        tipoRam: "DDR4",
        ventilador: false,
        gpu: false,
        precio: {
            segundaMano: null,
            amazon: 190.00,
            ebay: 360.79,
        },
        link: {
            amazon: "https://www.amazon.es/AMD-Ryzen-7-5800X-Box/dp/B0815XFSGK/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3JIMB1KVLC24A&keywords=AMD+Ryzen+7+5800X&qid=1701168419&sprefix=amd+ryzen+7+5800x%2Caps%2C89&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
            ebay: "https://www.ebay.es/itm/186178440906?hash=item2b59198eca:g:wyYAAOSw9Q5lX-ir&amdata=enc%3AAQAIAAAA4I%2BwAW0UGkqLcN%2BQmFForHHt9uB%2Fs6Wx995BAmCcG%2B%2FhbQwhnqFNf1Yb%2FgsClEvvjCbzBxgxJt2SB1uZ4fhjLyybRqExT0vVSeBg0gzcAnC1e972x6JUp0Pg5vBZJwqPFocKCMHEHoDlctYNFr3DITupEucGgWBBkwQXiVbfJLaXk9EElTwrNX2xSKT0NHoCMeZbI5IKKsZtlSbN03NlUfa8YHd%2FdRzFyTqB0A2r1WsHPk7LsUtGwKfLov%2FPSbukau2GtwD97N6voOWMIfPJ7q35oOoJ4cnxAXks6z5SHto9%7Ctkp%3ABFBM6qvl2IJj",
        },
        imagen: "intel.jpg",
    },
    {
        marca: "AMD",
        nombre: "AMD Ryzen 5 5600X",
        gama: "Baja",
        socket: "AM4",
        consumo: 65,
        tipoRam: "DDR4",
        ventilador: false,
        gpu: false,
        precio: {
            segundaMano: null,
            amazon: 141.72,
            ebay: 163.34,
        },
        link: {
            amazon: "https://www.amazon.es/AMD-Ryzen-5600-Box-Negro/dp/B09VCHR1VH/ref=sr_1_1_mod_primary_new?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=PQ3BURFYN30&keywords=AMD+Ryzen+5+5600X&qid=1701168760&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=amd+ryzen+5+5600x%2Caps%2C158&sr=8-1",
            ebay: "https://www.ebay.es/itm/133769938956?hash=item1f254f480c:g:etsAAOSwthxgq3iU&amdata=enc%3AAQAIAAAA4HtXup0Pixdty9z9OsdNYYpB0v1audtMtv%2FDOpGktnBuNQhj6tDZQuok5q6uY%2B6lPH8eCWYx7j5FQwOjaMobrjujS2bNUYm3QmsKIEWhiFsDfZHkbr0e4JEROuOnQHUKZLXC92f4eZR8lBgwRsWcVtFh%2BTi3tq3J%2FOlkFspnYb3s9SoByQq1BhhXse8FZT8iM2YUhc7SOgZfspqzy%2F0x3e6zr1LO0K7o1sJAcHMbbsexkEdVlDa1xdfz8vuSSHlXwLEeH0hjv2y7C%2B0LWFK9dVRLYuxDnVLlVKGizQZ9TwmF%7Ctkp%3ABk9SR_Lg_diCYw",
        },
        imagen: "intel.jpg",
    },
]

let gpuACargar = [
    {
        marca: "Nvidia",
        nombre: "Nvidia RTX 4090",
        consumo: 450,
        potenciaRecomendada: 850,
        gama: "Premium",
        precio: {
          segundaMano: null,
            amazon: 2126.05,
            ebay: 2008.73,
        },
        link: {
            amazon: "https://www.amazon.es/MSI-GeForce-GAMING-Tarjeta-Gr%C3%A1fica/dp/B09YCLG5PB/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=171LY0HEIVS1U&keywords=rtx%2B4090&qid=1701169195&sprefix=rtx%2B4090%2Caps%2C116&sr=8-5&th=1",
            ebay: "https://www.ebay.es/itm/134776095022?hash=item1f6148012e%3Ag%3AaaIAAOSwi8FlMyCd&amdata=enc%3AAQAIAAAA4I8YIMYPdD7GWSImTRJOwYlZX5dYFJ5E28vL9rK5zwUU9kYLHLmU0ZB5mHV9yQymn2EOJ89mrO1p%2Bw%2F4bZKlWxjbwCjhlgNOU%2F4%2FQW8I8aUuaKrrepF9Ykxi4Bat4d4jnMBklrJCcnCHhPHp3ck4ZV1D7e2H4DbwChH4P78uxSw0O06m%2F%2FiXFSW%2Bey%2BArliOdErfvL8FoNH%2FlQRGK2rpkoqt4g26cQa8Lynn6W6IeliS4b2dCG446GFkUCOHyqeGOU6dnQIKOJbBRSmAKlRUDQZVHNpE75glvU7Oeo6m3nST%7Ctkp%3ABFBMgoe82YJj&LH_ItemCondition=1000",
        },
        imagen: "gpu.jpg"
    },
    {
        marca: "Nvidia",
        nombre: "Nvidia RTX 4080",
        consumo: 320,
        potenciaRecomendada: 750,
        gama: "Alta",
        precio: {
          segundaMano: null,
            amazon: 1397.90,
            ebay: 1771.00,
        },
        link: {
            amazon: "https://www.amazon.es/Gigabyte-Tarjeta-gr%C3%A1fica-GeForce-Gaming/dp/B0BLT45YZ1/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3AND6U64QVCUO&keywords=rtx+4080&qid=1701169474&sprefix=rtx+4080%2Caps%2C99&sr=8-5",
            ebay: "https://www.ebay.es/itm/364345236792?hash=item54d4ab1d38%3Ag%3AjuMAAOSw-EJktSVd&amdata=enc%3AAQAIAAAA4KvubXjCXPIf%2Bnkgb%2BA%2Bz8M5JKvdVWGQr5IrqpgO7u7PCtmZFpnXf5%2FSYRdsHo%2BhANnpA90C%2B1YhlIdSZIaGsKHPupEfH5y4oNQ2yZjp%2F5%2B%2FR5yRDeJgktIrHu9fXXzC7V5JsywhIWp8V8EYdaGJW4kQMkdpFnsCquAlNCBED7WqhNe62LpIEjm5ohCXlobBTtnVJLVSY0hqpq01jBrAgf5pnQWOZMkI8D8X0cPsZg9nLIi8nmAZdDbRARIqAOIH7VKp0t6fXSo1cxSog%2FXzEHaKK7xDHhZUVLtdq7kCGQI4%7Ctkp%3ABk9SR_j31dmCYw&LH_ItemCondition=1000",
        },
        imagen: "gpu.jpg"
    },
    {
        marca: "Nvidia",
        nombre: "Nvidia RTX 4070",
        consumo: 200,
        potenciaRecomendada: 650,
        gama: "MediaAlta",
        precio: {
          segundaMano: null,
            amazon: 659.90,
            ebay: 619.00,
        },
        link: {
            amazon: "https://www.amazon.es/GIGABYTE-GeForce-WINDFORCE-Targeta-gr%C3%A1fica/dp/B0BZDYZ4V5/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=TA2I8DTXBX0E&keywords=rtx%2B4070&qid=1701175754&sprefix=rtx%2B4070%2Caps%2C105&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&th=1",
            ebay: "https://www.ebay.es/itm/145464737014?hash=item21de5fbcf6%3Ag%3AR4YAAOSw-u5lWNlG&amdata=enc%3AAQAIAAAA4BpG5oPrnCYVek3t3hzB9MKL5Pud0AQF3bHa%2BYkTWSIkQlcCAIq9SHaIpGtNS6VImSkzcA2dbzpdqTXacHlOsOJ2%2BOJtZpM8k%2FJjA%2FymKLARmYeoxL1waKoR425eQ8hH63gxT%2BrRwhIB7mu0iHqQcHsIfpG7JAQBxhXIePV54QjSWEdlZVfY2Pa5UxqvfOZZOuP3lOUIe2YqGihTC3j0DP7PCd3m97%2FJrWBWd7FfQCCfgao5hGy9hh6E6WsrFIkyRWA%2B7eieFwo2KwpIfYeVy86089wetr9nqw%2BnoaW2QCh4%7Ctkp%3ABk9SR-ad1N-CYw&LH_ItemCondition=1000",
        },
        imagen: "gpu.jpg"
    },
    {
        marca: "Nvidia",
        nombre: "Nvidia RTX 4060",
        consumo: 115,
        potenciaRecomendada: 550,
        gama: "Media",
        precio: {
          segundaMano: null,
            amazon: 349.90,
            ebay: 359.99,
        },
        link: {
            amazon: "https://www.amazon.es/ASUS-Dual-GeForce-White-DUAL-RTX4060-O8G-WHITE/dp/B0C9TM6568/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=5W2YN90SS56G&keywords=rtx+4060&qid=1701175857&sprefix=rtx+4060%2Caps%2C101&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
            ebay: "https://www.ebay.es/itm/256319669310?hash=item3badd7c43e%3Ag%3Ad3sAAOSwdJZlZMvG&amdata=enc%3AAQAIAAAAwGLi4TAQpPQfCba2hzE1%2F%2BDLvQHWTkNkuAn1lrK9lSoMeyTi7ZxLvuB1tm2OTbqJTnuwcB%2BpaBg%2Bu5wmmor%2FpalnULcz4mVU88ZYQRQX6%2FOjDqjyj35f7vDOUKHP0YPhlxRCxgXClTklafhpcanp86HAO5WnW8bp30JTH6LQqnVGn4FlFTzwS%2BvMezSkeyC0Zq8TKUFmRlKMaotkPcuAb0tTWNV0cZLDIX0zRjqcRUsu3oC2LANqKV%2Bc6%2F5JXrgpWQ%3D%3D%7Ctkp%3ABk9SR5zE39-CYw&LH_ItemCondition=3",
        },
        imagen: "gpu.jpg"
    },
    {
        marca: "Nvidia",
        nombre: "Nvidia RTX 3090",
        consumo: null,
        potenciaRecomendada: 750,
        gama: "Premium",
        precio: {
          segundaMano: null,
            amazon: 1849.00,
            ebay: 1920.79,
        },
        link: {
            amazon: "https://www.amazon.es/NVIDIA-GeForce-RTX-3090-Founders/dp/B08HR6ZBYJ/ref=sr_1_7?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3PVE8Q7WZFSP7&keywords=rtx+3090&qid=1701176129&sprefix=rtx+3090%2Caps%2C102&sr=8-7",
            ebay: "https://www.ebay.es/itm/375079870918?hash=item575480a1c6%3Ag%3AgisAAOSwbcxlYbOw&amdata=enc%3AAQAIAAAA4Opq%2BDuGYUlV41FJWgscoFcMES9SUTZVrVrtNugyUDk96DDMiedJn4LKta4ZQcNb9ow1XvKtCuRwOPVbZHprDu6nvRxsGobpyElobG02muBKibm9LDrZzuoC4hTjj5ubuFua%2FMR4DS44Uaazk9eFL1od2pFrij5hayeXub6XpUaYDrLNI22m%2Ftfx2YfX%2FuHdCjUYBNYalwxTENFx2oQsAgEyfez%2FHfL3hxRO1z3IQucQoexX45U6lJsra6WJP0odGhySRsXJioujPyrtFROp%2FTp%2F8eLjTbCalYE8AGMv5hTt%7Ctkp%3ABFBMuKSC4IJj&LH_ItemCondition=1000",
        },
        imagen: "gpu.jpg"
    },
    {
        marca: "Nvidia",
        nombre: "Nvidia RTX 3080",
        consumo: null,
        potenciaRecomendada: 850,
        gama: "Alta",
        precio: {
          segundaMano: null,
            amazon: 1123.59,
            ebay: 550.00,
        },
        link: {
            amazon: "https://www.amazon.es/PNY-GeForce-Tarjeta-gr%C3%A1fica-RevelTM/dp/B09VMMRWHM/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1COE1ACYP2M38&keywords=rtx%2B3080&qid=1701176550&sprefix=rtx%2B3080%2Caps%2C138&sr=8-5&th=1",
            ebay: "https://www.ebay.es/itm/126186161552?hash=item1d61480590%3Ag%3Ad0cAAOSwwthlDZMu&amdata=enc%3AAQAIAAAAwCHyp6f2Ya85mRuHx%2F3PyvyPMscqDQJcdc0lB6tvbHX7MguNRdaAClauwYo1hvv2gUQWW39HqVP%2FNhC9PQU4eD0TIaSccHsLVYgTOhCk0W94vgTTAmtEFO1qiF4T9YkFEo5%2FrgTFYDrOB12JVBr9%2BFAFP%2F0xPJ1VWVpEoKgskDutapgZDQoXFg7bVakk89LD0Lq6BATO9bCo1gmC5TdZ63cqc6vDwfRnuYksLB6SSGcqd3Bz%2BmaTYb5DNHE5k%2F4RaA%3D%3D%7Ctkp%3ABk9SR-qhteCCYw&LH_ItemCondition=1000",
        },
        imagen: "gpu.jpg"
    },
    {
        marca: "Nvidia",
        nombre: "Nvidia RTX 3070",
        consumo: null,
        potenciaRecomendada: 650,
        gama: "Media",
        precio: {
          segundaMano: null,
            amazon: 561.93,
            ebay: 492.49,
        },
        link: {
            amazon: "https://www.amazon.es/Gigabyte-Technology-GV-N3070GAMING-OC-8GD-V2/dp/B096Y2NLV4/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3S84MNT1FUARW&keywords=rtx+3070&qid=1701176683&sprefix=rtx+3070%2Caps%2C95&sr=8-5&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
            ebay: "https://www.ebay.es/itm/166398645108?hash=item26be21d374%3Ag%3AmCoAAOSwsINlOtOp&amdata=enc%3AAQAIAAAA4Gt7snwgY%2FsKfmY3LsmzGk0ZEpX6QocAYQSOU8miuceryk4VzsRT8loicHxDkle%2FiY6O7bGLsvmxgwpx%2FqrsTgV6UEG4iRBkPmd%2B2zOdFt6L4a7xzYMj%2FUUXFjL2VDvheU8bSk3ZDM2udguP2pQytPTb4Rea3Z8w5Te9UFretWQA2K9r73WDA4cfWnq0lvroXMo%2FNnjC0RMrHZRvekHSbryUUvDzUjaLaD3scloIc8nXubDLFCN2vJx28zCwu35romEel94Xo4vssHZxoW60z4FlYDGQVnTN2HiwK1tWBiiI%7Ctkp%3ABFBM-OXF4IJj&LH_ItemCondition=1000",
        },
        imagen: "gpu.jpg"
    },
    {
        marca: "Nvidia",
        nombre: "Nvidia RTX 3060",
        consumo: 170,
        potenciaRecomendada: 600,
        gama: "MediaBaja",
        precio: {
          segundaMano: null,
            amazon: 299.90,
            ebay: 309.90,
        },
        link: {
            amazon: "https://www.amazon.es/ASUS-GeForce-DisplayPort-Ventiladores-Axial-Tech/dp/B096658ZWP/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2RD746XZ59OHK&keywords=rtx+3060&qid=1701176960&sprefix=rtx+3060%2Caps%2C103&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
            ebay: "https://www.ebay.es/itm/196092642442?hash=item2da808448a:g:yWEAAOSw4WdlXdNt&amdata=enc%3AAQAIAAAAwLWX%2BBRSTyNmE3VNrbDz3dxc61VdmcDM9G2tlvrR053D0dik1Zz7RUAfFqSS4hctv8tvvrY%2BYnFKuyPqLEYWekuDBihqQSqq3mCxCdARDwWOqgzr9%2B%2F7edGMsd6K2lMU0HeqJeorZODCYwGP9x7pRu1xUQqb60QsiZiS50F%2Fb0kL1tX6G7XdC9TlgMI3LN5ogCnn9WZZoLSXTrwSlYtKSx5%2BrVErWhgJZJvNVobDHgUKgO4rXFItHc0PSKBOVfyDjA%3D%3D%7Ctkp%3ABk9SR9rb-6CDYw",
        },
        imagen: "gpu.jpg"
    },
    {
        marca: "Nvidia",
        nombre: "Nvidia RTX 3050",
        consumo: 115,
        potenciaRecomendada: 500,
        gama: "Baja",
        precio: {
          segundaMano: null,
            amazon: 239.90,
            ebay: 213.20,
        },
        link: {
            amazon: "https://www.amazon.es/MSI-GeForce-RTX-3050-Ventus/dp/B09Y57F1HL/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=262MFVN5QKJA3&keywords=rtx%2B3050&qid=1701244342&sprefix=rtx%2B3050%2Caps%2C95&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&th=1",
            ebay: "https://www.ebay.es/itm/296075779404?hash=item44ef7ddd4c%3Ag%3A5EoAAOSwWA5lXs-%7E&amdata=enc%3AAQAIAAAA4H7UiH5HPGLmsMvy5HjrWar%2B9AaSQMcTC%2B4tdaeDksaW34aPFPDD6MHLu9i7Ba4fPKntnq5oG4J3LNtQOuvrYvvaO4zusAwA457DtZiHJwYcY0TR5b4KtRKpulNmhbtzZlSUKj1ZCX%2FfAoCNB5lDrIw%2B61NgOj88ggn4PCDQaKEF3T07pfDI7EoiRDbNkYqRcGfbViLJm3Ho3Fp2tLqiAXSG6ZbJK0WKGIlZmLtLCe2CirZGpGKsoyDIWyTTe1loznUnTXBu0KiUil3dLKCvq5kzQaMhFIhpMU2sTusUWm25%7Ctkp%3ABk9SR7iKiaGDYw&LH_ItemCondition=1000",
        },
        imagen: "gpu.jpg"
    },
    {
        marca: "AMD",
        nombre: "AMD Radeon RX 7900 XTX",
        consumo: 420,
        potenciaRecomendada: 800,
        gama: "Alta",
        precio: {
          segundaMano: null,
            amazon: 1069.00,
            ebay: 998.99,
        },
        link: {
            amazon: "https://www.amazon.es/SAPPHIRE-Pulse-Radeon-7900-GDDR6/dp/B0BQNCSW3X/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=384HK2HNK47HD&keywords=rx+7900+xt&qid=1701245245&sprefix=rx+7900+xtx%2Caps%2C188&sr=8-2",
            ebay: "https://www.ebay.es/itm/266491008764?hash=item3e0c1a16fc%3Ag%3AAd0AAOSwsMtlR1zW&amdata=enc%3AAQAIAAAA4FfoJz0qVuqsVyf6PXyJndTkKALc0OHtwR%2F41q5LpkczVWLbKfbqoyUEGKaBoVg9BOlXA%2Fb0iNJc44fgslvGXhxzy332KrGSvq1mUpQIg1YxitiZ74B26V98bRtx5szByMtRoBZhPrHyrEZAOvYGGu8cKfUtGPkyd2xVxGw1wBK%2BmYtNus8fxRjFnbNi0WONd%2Br3FGv%2FRxoWLq0xNZu6MApSztzguGJOiXLK9jYYu4nqF%2FdLGl7818ncB8meND1mMFqiy6FfRh0PbedCFOht1AHg6LI6tXzHp6%2BkxiQfuEOh%7Ctkp%3ABk9SR5bOiKKDYw&LH_ItemCondition=1000",
        },
        imagen: "gpu.jpg"
    },
    {
        marca: "AMD",
        nombre: "AMD Radeon RX 7800 XT",
        consumo: 266,
        potenciaRecomendada: 700,
        gama: "MediaAlta",
        precio: {
          segundaMano: null,
            amazon: 599.90,
            ebay: 500.00,
        },
        link: {
            amazon: "https://www.amazon.es/SAPPHIRE-Radeon-Gaming-RX7800XT-Ventiladores/dp/B0CGLYWWKX/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2WT4JITINIBEV&keywords=rx+7800+xt&qid=1701245669&sprefix=rx+7800+xt%2Caps%2C102&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
            ebay: "https://www.ebay.es/itm/404633964638?hash=item5e3610505e%3Ag%3AP48AAOSw2JRlW0aB&amdata=enc%3AAQAIAAAA4O5hTI8F2yQSUAaIjZDt%2B69xwBznYd7q2ZC97zIkIVmew51x1DYvsFD4%2F1zBp%2Be7%2B70CVG9SQfOWhUXVHCpr%2FoUyPci63PoAFRLLc8WpuwKtleH32nt3WPL3eFRNEp7WqO3SaYVGRdbogGUBZiRnar9UWmyahmj0odxdScE2Da61RdrND9rAFZFoWxzkF6JJoSghuUp%2Fsx2qkZ1KMYgWg2JC2UJf8dA7zQ9DXtYzMgqhgePknf8smnEHIV2odOTVzhJmobIvsTVtqJGjHybfPgueeOXzYDWBaAmCKv3zTPuS%7Ctkp%3ABk9SR4ToqaKDYw&LH_ItemCondition=1000",
        },
        imagen: "gpu.jpg"
    },
    {
        marca: "AMD",
        nombre: "AMD Radeon RX 7700 XT",
        consumo: null,
        potenciaRecomendada: 750,
        gama: "MediaAlta",
        precio: {
            segundaMano: null,
              amazon: 540.41,
              ebay: 554.81,
          },
          link: {
              amazon: "https://www.amazon.es/SAPPHIRE-Radeon-Gaming-RX7700XT-Ventiladores/dp/B0CGLYPBHS/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=13KW7AJKOW43A&keywords=rx+7700+xt&qid=1701245793&sprefix=rx+7700+xt%2Caps%2C95&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
              ebay: "https://www.ebay.es/itm/235294245582?hash=item36c8a142ce%3Ag%3AwysAAOSwal1lUDI8&amdata=enc%3AAQAIAAAAwMcCPbiSqThwHFsoTryd0cFXw3bk5lMdKW4OnYAFXSE9eQ7K6zMzo9%2BY705JBTDhpLJVjNjF%2FlM3eZTGC3rbwiUbFbR6EUSsL5WIUMYK0upA61bhnJLoOWjhop3zk%2FZfJEDIcXB8IFVlTa2pTS4wu9aQyHIb2vLGqmijYKicQ71mDmmZexnQZZUqsWDRoz6jjsSOwkoo9xYjz3nP356dM%2BfQICyQ2m7N6rJ8LDPOyDXR9MU0UGWe%2BBauWcmR3AQ6gg%3D%3D%7Ctkp%3ABk9SR8rCwKKDYw&LH_ItemCondition=3",
          },
        imagen: "gpu.jpg"
    },
    {
        marca: "AMD",
        nombre: "AMD Radeon RX 7600",
        consumo: 165,
        potenciaRecomendada: null,
        gama: "Media",
        precio: {
          segundaMano: null,
            amazon: 299.90,
            ebay: 398.88,
        },
        link: {
            amazon: "https://www.amazon.es/Sapphire-Pulse-11324-01-20G-Radeon-7600/dp/B0C49S5R55/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=8G6CE8MDXPQX&keywords=rx+7600+xt&qid=1701246039&sprefix=rx+7600+xt%2Caps%2C87&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
            ebay: "https://www.ebay.es/itm/325900863602?hash=item4be1348872%3Ag%3ATmMAAOSw1ORlYfuQ&amdata=enc%3AAQAIAAAA4ETW%2FKFSTs7a1tRhmOZCrYgiUSskuXcpPv9O%2FxphIyB2gDUvDbxHvR4ciXS2nFK%2B2DEIoceDfF4D3fKiPtzHhaHg0ExXslbhpVtdBU64ZoMWpoORUBtzlOh1jdu6wnc6qBnqvfJLZWAAMAy5EERzey6Iu%2FEBBypyjSLEMgQ8AZ3prS07VvEj3YRXRyKsveNqrSdwKcUVDItWN%2BYPOq2XGyMrUrQ7eLMbsMtxPtF3Ki83DWiviISMx7syX9vMx%2BL%2BWwsLyty9%2FxxRvrFSf52pZYnUTGSgPqbD0LdT1IQRYBzz%7Ctkp%3ABFBMktDXooNj&LH_ItemCondition=1000",
        },
        imagen: "gpu.jpg"
    },
    {
        marca: "AMD",
        nombre: "AMD Radeon RX 6900 XT",
        consumo: null,
        potenciaRecomendada: 900,
        gama: "Alta",
        precio: {
          segundaMano: null,
            amazon: 1024.88,
            ebay: 898.00,
        },
        link: {
            amazon: "https://www.amazon.es/PowerColor-Radeon-Ultimate-Memoria-Alimentado/dp/B09258PCFS/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2GO9XKM6571RI&keywords=rx+6900+xt&qid=1701246488&sprefix=rx+6900+xt%2Caps%2C112&sr=8-3",
            ebay: "https://www.ebay.es/itm/125140333526?hash=item1d22f1f3d6%3Ag%3AtD4AAOSw9r9iA9zT&amdata=enc%3AAQAIAAAA4HOb9p2XeTFMilDmRdwxIUaxicwYbOdDQx2yh%2FCoB0u4RMTBl63GDHzTFjqV5bvq66PvumeGOELkClHS%2BruFWBtYVV%2B53WkO6VgXkOikMPPb2toAHJq9LAjl3hO4bNAGECiXlXh21SHgj3Pl5rgVrYX3MR1T7cmFPqP9vbI5MgPqHErcz3%2FS241wQ2JiU3a0Fuo4Wf4C6TyumwYAAUy3pKgZFXnSOCZdWmIId76m1phrk%2F3Lc9nxK6aiIh585WghEnEXWhU1QCZihfZDk3sxMP4hsq06WQ5kXD3jMhcTFpQc%7Ctkp%3ABk9SR9rEjqODYw&LH_ItemCondition=1000",
        },
        imagen: "gpu.jpg"
    },
    {
        marca: "AMD",
        nombre: "AMD Radeon RX 6800 XT",
        consumo: null,
        potenciaRecomendada: 800,
        gama: "Alta",
        precio: {
          segundaMano: null,
            amazon: 524.00,
            ebay: 578.50,
        },
        link: {
            amazon: "https://www.amazon.es/XFX-Speedster-MERC319-Radeon-6800/dp/B08TJ2BHCQ/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=34W3045IR4URE&keywords=rx+6800+xt&qid=1701246675&sprefix=rx+6800+xt%2Caps%2C87&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
            ebay: "https://www.ebay.es/itm/235237270409?hash=item36c53be389%3Ag%3ANdcAAOSwCyllGiH4&amdata=enc%3AAQAIAAAA4AiEVEc5RAIUuEGqplljCkMwLCwASd24ak4nGFkbHuQdS0Tc%2B5GRwHK2Jkv7j8EodWimNB2pVDvDDsXOUiXyQUnhd0TYlrurCEjKF4piMK6gg8lmB9v%2FKch5WH%2F7McuxkRoDntP4gBQGfzDTnTW9OSbdjv5jigmAdcj0X5CY05iJxvt4qvNy%2F%2BTPqOTGmny3eUfsA6vvZC1wwvnooJGcB9k3BeEqqJUGY2YPU0BSsZY9NB4C1UPm%2Fv3sJUwILB%2F03PkbmXIZfI8a6rqkkQCPGcKZeOUX%2B32BsvNMRv4RFjpF%7Ctkp%3ABk9SR6DSpqODYw&LH_ItemCondition=1000",
        },
        imagen: "gpu.jpg"
    },
    {
        marca: "AMD",
        nombre: "AMD Radeon RX 6700 XT",
        consumo: null,
        potenciaRecomendada: 650,
        gama: "Media",
        precio: {
          segundaMano: null,
            amazon: 376.84,
            ebay: 339.88,
        },
        link: {
            amazon: "https://www.amazon.es/PowerColor-Fighter-AMD-Radeon-6700/dp/B08Y91QVG8/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=28IFIRL4XCDR1&keywords=rx+6700+xt&qid=1701246795&sprefix=rx+6700+xt%2Caps%2C109&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
            ebay: "https://www.ebay.es/itm/126191450628?hash=item1d6198ba04%3Ag%3AFCsAAOSw11tlV31l&amdata=enc%3AAQAIAAAAwIo2xc3wth0jlrnph%2FsIZgoJdM6Qsw6dDt5xVgcB5EVAzf41XZCV0ql%2FVKjgxBv%2BpJN2Rb2YSWWAGSRB4Y5TGUmFOqObbBoalI3NREH%2F8GsXubI9RqgFjSqG5bOcxjlCctpH0bXLPyLceicx6dZD7U9XljXdzBylr0SdoDSV50xuCiAYgDYM5ev9roa4zn0hFd17wODQYDoh4pBjxXMnHfpRcGPpZKwccWcK8avBh1qhJHk6fMVAlAD0qNrNPHVZ6Q%3D%3D%7Ctkp%3ABk9SR8ros6ODYw&LH_ItemCondition=1000",
        },
        imagen: "gpu.jpg"
    },
    {
        marca: "AMD",
        nombre: "AMD Radeon RX 6600",
        consumo: null,
        potenciaRecomendada: 500,
        gama: "MediaBaja",
        precio: {
          segundaMano: null,
            amazon: 237.76,
            ebay: 209.35,
        },
        link: {
            amazon: "https://www.amazon.es/Gigabyte-Technology-Radeon-6600-Eagle/dp/B09JCKJ2G9/ref=sr_1_2_mod_primary_new?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=QRP3VDGNCZI6&keywords=rx+6600+xt&qid=1701246994&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=rx+600+xt%2Caps%2C141&sr=8-2",
            ebay: "https://www.ebay.es/itm/296018655401?hash=item44ec1638a9%3Ag%3AZqwAAOSwpE5lYpUU&amdata=enc%3AAQAIAAAAwPOXqPd6H2hXogZk0DeVYutPfCM45r6HG3ngpCM9sMOI1k%2BpAzOQG2t9sJHPsDm4etNOsJk5iR5TVc%2B8sHKtdE3TPsSR5ToHm6Yl%2BDMLUjgBpXESk%2BOPDMLRRvAvRWkK84wJ3I8euTnQs0s8I30x%2Bfq6D5AL%2BPD6rXX8xmKz2pj7j%2FeSJSHnQST1oqjG%2FcgfCQKwPiQKNV15L46UJHmlPD3tNF9tRAW48RqsucVdcU1p9%2Fhm2Q%2Fi7keGVilrtnBIww%3D%3D%7Ctkp%3ABk9SR4bg2KODYw&LH_ItemCondition=1000",
        },
        imagen: "gpu.jpg"
    },
    {
        marca: "AMD",
        nombre: "AMD Radeon RX 6500 XT",
        consumo: null,
        potenciaRecomendada: 400,
        gama: "Baja",
        precio: {
          segundaMano: null,
            amazon: 165.90,
            ebay: 176.30,
        },
        link: {
            amazon: "https://www.amazon.es/MSI-2825Mhz-tarjeta-gr%C3%A1fica-4719072929985/dp/B09R1RVN3R/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=222QR235RF8SF&keywords=rx+6500+xt&qid=1701247387&sprefix=rx+6500+xt%2Caps%2C143&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
            ebay: "https://www.ebay.es/itm/225881626060?hash=item34979815cc%3Ag%3ArjgAAOSwHZxlXOIZ&amdata=enc%3AAQAIAAAA4GsZWXJ1aknBC0Q48n4qeQEf%2FayLar4AdYk5qnNHrp4Kiq7RGEZEdv4wnJINVwgAdGL9LaBKzF%2Bp26saUHbAEtajgqh2cYyZcSAhnoOEPvdtrfkKsfPrQeZTFE8Efrg0xHQEOrtaaCkXqbJ0JQTB4KLvEsP9mKtiyVRzq841O3xoU7HtE1DZ2BBX0r5Db0WxcSYyS7OiksFyzVG8IpumHJr7ui4GdgpLmeyoGu32aSVhQ6AnJZ%2F2%2F0P3fiHxXRHTpz4t5Vz957NhP8tWTwEgGLA67GLFoInB2YIGcMT7rSzW%7Ctkp%3ABFBMruqNpINj&LH_ItemCondition=1000",
        },
        imagen: "gpu.jpg"
    },
]

/*let ramACargar = [
    {
        marca: String,
        nombre: String,
        tipo: String,
        capacidad: Number,
        gama: Number,
        precio: {
            segundaMano: Number,
            amazon: Number,
            ebay: Number,
        },
        link: {
            amazon: String,
            ebay: String,
        },
        imagen: String
    }
]*/