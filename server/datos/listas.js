const emptyConfiguration = {};

const configuration = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Alta",
    numeroM2: 0,
    numeroSata: 1,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "placa.jpg",
    link: {
      amazon: "https://www.amazon.es",
      ebay: "https://www.ebay.es",
    },
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i7-13700K 3.4 GHz",
    gama: "Alta",
    socket: "Intel LGA 1700",
    tipoRam: "DDR5",
    ventilador: false,
    gpu: true,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "intel.jpg",
    link: {
      amazon: "https://www.amazon.es",
      ebay: "https://www.ebay.es",
    },
  },
  ram: {
    marca: "Corsair",
    nombre:
      "Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra",
    tipo: "DDR5",
    capacidad: 32,
    gama: "Media",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "ram.jpg",
    link: {
      amazon: "https://www.amazon.es",
      ebay: "https://www.ebay.es",
    },
  },
  m2: [
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: "Alta",
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
      link: {
        amazon: "https://www.amazon.es",
        ebay: "https://www.ebay.es",
      },
    },
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: "Alta",
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
      link: {
        amazon: "https://www.amazon.es",
        ebay: "https://www.ebay.es",
      },
    },
  ],
  sata: [
    {
      marca: "Samsung",
      nombre: "Samsung 870 QVO SSD 1TB SATA3",
      capacidad: 1, //tb
      tecnologia: "Sata",
      gama: "Media",
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "hdd.jpg",
      link: {
        amazon: "https://www.amazon.es",
        ebay: "https://www.ebay.es",
      },
    },
    {
      marca: "Seagate",
      nombre: "Seagate BarraCuda 3.5 2TB SATA 3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: "Baja",
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "ssd.jpg",
      link: {
        amazon: "https://www.amazon.es",
        ebay: "https://www.ebay.es",
      },
    },
  ],
  gpu: {
    marca: "Gigabyte",
    nombre: "Gigabyte GeForce RTX 4070 Windforce OC 12 GB GDDR6X DLSS3",
    gama: "MediaAlta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "gpu.jpg",
    link: {
      amazon: "https://www.amazon.es",
      ebay: "https://www.ebay.es",
    },
  },
  fuente: {
    marca: "Forgeon",
    nombre:
      "Forgeon Bolt PSU 850W 80+ Gold Full Modular Fuente de Alimentación",
    potencia: "850",
    ochetaplus: true,
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "fuente.jpg",
    link: {
      amazon: "https://www.amazon.es",
      ebay: "https://www.ebay.es",
    },
  },
  monitor: {
    marca: "ASUS",
    nombre:
      "ASUS TUF Gaming VG249Q1A 23.8 LED IPS FullHD 165Hz FreeSync Premium",
    gama: "Media",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "monitor.jpg",
    link: {
      amazon: "https://www.amazon.es",
      ebay: "https://www.ebay.es",
    },
  },
  caja: {
    marca: "Tempest",
    nombre: "Tempest Umbra RGB Torre ATX Blanca",
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "caja.jpg",
    link: {
      amazon: "https://www.amazon.es",
      ebay: "https://www.ebay.es",
    },
  },
  disipador: {
    marca: "Forgeon",
    nombre: "Forgeon Azoth 240 ARGB Kit de Refrigeración Líquida 240mm Negro",
    tipo: "Liquida",
    gama: "Media",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "disipador.jpg",
    link: {
      amazon: "https://www.amazon.es",
      ebay: "https://www.ebay.es",
    },
  },
};

const cpuList = [
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
        segundaMano: 600.00,
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
        segundaMano: 480.00,
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
        segundaMano: 350.00,
        amazon: 381.99,
        ebay: 456.79,
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
    gama: "BajaMedia",
    socket: "LGA1700",
    consumo: 181,
    tipoRam: "DDR5",
    ventilador: false,
    gpu: false,
    precio: {
        segundaMano: 270.00,
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
        amazon: 121.40,
        ebay: 157.30,
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
        segundaMano: 340.00,
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
        amazon: 218.90,
        ebay: 191.66,
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
        segundaMano: 400.00,
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
        segundaMano: 170.00,
        amazon: 190.00,
        ebay: 338.80,
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
    socket: "AM5",
    consumo: 65,
    tipoRam: "DDR4",
    ventilador: true,
    gpu: false,
    precio: {
        segundaMano: 100.00,
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

const placasList = [
  {
      marca: "Gigabyte",
      nombre: "Gigabyte H610M",
      socket: "LGA1700",
      tipoRam: "DDR5",
      gama: "Baja",
      numeroM2: 0,
      numeroSata: 2,
      precio: {
          segundaMano: 70.00,
          amazon: 86.98,
          ebay: 89.50,
      },
      link: {
          amazon: "https://www.amazon.es/Gigabyte-H610M-V2-DDR4-Z%C3%B3calo/dp/B0C3XJPGM6/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3PGGP4N21TY5V&keywords=Gigabyte+H610M&qid=1702369528&sprefix=gigabyte+h610m%2Caps%2C87&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/175743088939?hash=item28eb1ab92b%3Ag%3A0y0AAOSwotVkbjoZ&amdata=enc%3AAQAIAAAAwDZIFouCc%2BNU8UXWEO%2FRaM660h51v4Gq%2FlIRg22%2B72lSNGCTlijEBn1gSPJVDcu4resG6GkS0x3RGXLMF1RQfoHIuZTavY7GHuoEmJVaRvJH01XlwuoLkGtJ%2BUKelAxmngwB5VTItCumLz94FbPWmQDtgKHKA7Tm65BgzzYA2IVHLF%2BJYw8TCZk8fBfOS%2Fz1vEn11BWC%2BWl1uZP%2Buohc%2B9ok7E0IuT1V9iO%2B0uukRU4qrPsTs2qKmR4hNwCEbPatWw%3D%3D%7Ctkp%3ABk9SR8zNj9KLYw&LH_ItemCondition=3",
      },
      imagen: "placa.jpg"
  },
  {
      marca: "MSI",
      nombre: "MSI PRO B660M-E",
      socket: "LGA1700",
      tipoRam: "DDR5",
      gama: "BajaMedia",
      numeroM2: 0,
      numeroSata: 2,
      precio: {
          segundaMano: 110.00,
          amazon: 192.90,
          ebay: 132.77,
      },
      link: {
          amazon: "https://www.amazon.es/MSI-Micro-ATX-Procesadores-Ranuras-PROB660M/dp/B09NTP4PVK/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2Q5OZ0P5S4CHT&keywords=MSI%2BPRO%2BB660M-E&qid=1702370067&sprefix=msi%2Bpro%2Bb660m-e%2Caps%2C177&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&th=1",
          ebay: "https://www.ebay.es/itm/266383590880?hash=item3e05b305e0:g:cJgAAOSwE4lk5Vi4&amdata=enc%3AAQAIAAAA4HbpUsXrRUXGNe834Ny3aXSRSN%2Bif%2B2KpzO5WTv4XeNoLuVzpd62hQKL9aBJZcc27lOMx0gjBOersQ6yF1dgAtsnjhHA3JvSxi7vCd22pCA0ZYl8KXyTdGJbD7M6m5TWedLA0%2F7v4BywX0fPd7j6EgSFBa%2BEvxTheqQZ%2BqRACke%2FOMGnRGE6HHUHLHhbN4PdH7%2B4hDjExYm5RI7IYiR5AO6quHpoSkOGrgnH%2F7%2FwNGf379Zfx5%2BaQWTBRrAMKThDsnju%2FBi37D%2FV2ougpVYcjxJ%2F2O8oA6%2FlcEKoGJyMTs6J%7Ctkp%3ABk9SR5Ta2tKLYw",
      },
      imagen: "placa.jpg"
  },
  {
      marca: "Gigabyte",
      nombre: "Gigabyte Z790 GAMING X",
      socket: "LGA1700",
      tipoRam: "DDR5",
      gama: "Media",
      numeroM2: 2,
      numeroSata: 2,
      precio: {
          amazon: 241.99,
          ebay: 326.59,
      },
      link: {
          amazon: "https://www.amazon.es/GIGABYTE-Z790-Gaming-AX-G10/dp/B0BLF7QXJK/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=QTQXRPKUV97N&keywords=Gigabyte+Z790+GAMING+X&qid=1702370235&sprefix=gigabyte+z790+gaming+x%2Caps%2C103&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/204228941818?hash=item2f8cfe57fa:g:~oAAAOSwWRVj2AaK&amdata=enc%3AAQAIAAAA8O0zTbXUKtkOb%2FVANdsO9iddshguHd4FSpxtDKARwCGru8G9oU314ZKlcLcE47%2B0%2FOOYJDh0uvTfj3ApPXb99VdAvtFSy3dIbhmeQLtaEo8851dV0Phab0q6ir2a2U5xrn54tk6Xm6yS9v43g%2FDmMEqgJs4Rl4zm37QEwO0w4DBupKDQnj8waY1vhLB3S18g9JDmAhX2DvFLjFs%2FdgMQbWH8FWGGfvx%2F53LS4Y1%2FUHuyrtnm%2BAItmWAsIp4VRHU4kDJGBILO0S3yQqZgGffHXphQJvUnfWW8Yffwl%2FrlWWUEVeWaxAKnCsdqzlbM1k79rw%3D%3D%7Ctkp%3ABFBMxqjo0otj",
      },
      imagen: "placa.jpg"
  },
  {
      marca: "Gigabyte",
      nombre: "Gigabyte Z790 AORUS PRO X",
      socket: "LGA1700",
      tipoRam: "DDR5",
      gama: "MediaAlta",
      numeroM2: 2,
      numeroSata: 2,
      precio: {
          segundaMano: 370.00,
          amazon: 456.90,
          ebay: 452.99,
      },
      link: {
          amazon: "https://www.amazon.es/Gigabyte-Z790-AORUS-Pro-Placa/dp/B0CK498K6N/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1LG7D5D8ELOB5&keywords=Gigabyte+Z790+AORUS+PRO+X&qid=1702370480&sprefix=gigabyte+z790+aorus+pro+x%2Caps%2C119&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/355250702723?hash=item52b6978983%3Ag%3AugkAAOSw2OplajGL&amdata=enc%3AAQAIAAAA0BRSUaXoPMwIfe0NDN2Jymhwnd2BQb%2BLIeiu4o4Mkm4TxaYQqcLRwfdBN1fGSSa3SaW%2FgBuq52G06bJtSH%2Bsfabj%2BT%2BNkC2tO0rw5%2BDayuDvGr3J2TH4yaGwt8fEPlXCTNXByAL5boeY2IZt%2FuCQwJpT6jl9X%2BNJoJmbtDGPflSb5YwNEA%2B9d5GDK5Ok2bBYjIRuxWVM1QRV4OXc49f6m6NdQtq%2B%2Fdy2O3ITmIkk%2FoyauXpvNxefeg8pWWbuqtFyCVHI3RbgkBx3frPURpFz3Z0%3D%7Ctkp%3ABk9SR77fhNOLYw&LH_ItemCondition=3",
      },
      imagen: "placa.jpg"
  },
  {
      marca: "Gigabyte",
      nombre: "Gigabyte Z690 AORUS MASTER",
      socket: "LGA1700",
      tipoRam: "DDR5",
      gama: "Alta",
      numeroM2: 2,
      numeroSata: 2,
      precio: {
          amazon: 491.20,
          ebay: 405.93,
      },
      link: {
          amazon: "https://www.amazon.es/PLACA-BASE-GIGABYTE-AORUS-MASTER/dp/B09KC6V6D6/ref=sr_1_2_mod_primary_new?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3OIYG85OULCB3&keywords=Gigabyte+Z690+AORUS+MASTER&qid=1702370553&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=gigabyte+z690+aorus+master%2Caps%2C94&sr=8-2",
          ebay: "https://www.ebay.es/itm/296064976687?hash=item44eed9072f:g:XBEAAOSwCPZlXwzm&amdata=enc%3AAQAIAAAA8INxcPE4u93oJ1Vlks8sNDSDLy3gtHVwwzFPUhkAhgTsVEX6buT46pDYUX3mBTwYr9hwo%2B3uCqQq%2BFnYA5yMwj1lBBE%2FpQ9Mk%2FTjcIIoVLwoUBQsoyPvfY2v5DaXr599spqpXIZ%2B6TocPkTN0BQpXAVIEpPOzkyFaso4zVTt8j%2Fj2miEtosw6jPqKSAFFAR5ng0k1iUdysA1ftjpsZWfxth0dFDRQPzF%2FfPQQd%2BavsW3AEqVual%2Bx5LuY107INx0Ic6IIWyUHSgIeEgQ9SF6KEdGIvS3r5jRvV75a3AhZiNod6WgMTqkBHFOAnXRRNOgWg%3D%3D%7Ctkp%3ABk9SR_b6idOLYw",
      },
      imagen: "placa.jpg"
  },
  {
      marca: "Gigabyte",
      nombre: "Gigabyte Z790 AORUS XTREME X",
      socket: "LGA1700",
      tipoRam: "DDR5",
      gama: "Premium",
      numeroM2: 2,
      numeroSata: 2,
      precio: {
          segundaMano: 1000.00,
          amazon: 1270.45,
          ebay: 1212.89,
      },
      link: {
          amazon: "https://www.amazon.es/Intel-1700-Z790-AORUS-Xtreme/dp/B0BYSML1N6/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2CRLRBIM9KQNO&keywords=Gigabyte+Z790+AORUS+XTREME+X&qid=1702370657&sprefix=gigabyte+z790+aorus+xtreme+x%2Caps%2C96&sr=8-1",
          ebay: "https://www.ebay.es/itm/335115164224?hash=item4e066b9a40:g:NggAAOSwwBxlUDbD&amdata=enc%3AAQAIAAAA0NVNEhV1P6EdEZ0NJTqv%2B1t6%2FCDXif%2BKRH1OPRGTDww3VW38YTG10zOQcgnJbEpSIzlZ1Zjy0n89Tw7xPE05musLJCQjctw%2BjLIdc5NNOYKgIdxJz%2FlUATkydIJvD%2F11GWBC7fHixsk4enaA2WgU2zFtFWoLjjJQDKKWFJaehRO0AP1eKKhPLDkBvarvEtolD28pdOrzbs1XE9PVqS1qJlwbWXsW6llc2GPC8ewIJCcG1RtMbYn1xcLMWD4fxbA4tVJq1BaX6eQ7D%2FCyNSt9Di4%3D%7Ctkp%3ABk9SR4a-ltOLYw",
      },
      imagen: "placa.jpg"
  },
  {
      marca: "MSI",
      nombre: "MSI PRO A620M-E DDR4",
      socket: "AM5",
      tipoRam: "DDR4",
      gama: "Baja",
      numeroM2: 0,
      numeroSata: 2,
      precio: {
          amazon: 88.65,
          ebay: 78.82,
      },
      link: {
          amazon: "https://www.amazon.es/MSI-Pro-A620M-Micro-ATX-procesadores/dp/B0BZW9RG3P/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=IOPKNMUKIX8R&keywords=MSI+PRO+A620M-E&qid=1702371189&sprefix=msi+pro+a620m-e%2Caps%2C189&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/195963813384?hash=item2da05a7e08:g:JVQAAOSwn8lk88th&amdata=enc%3AAQAIAAAA4PLBl4KyIux8OS3lpGx%2B11YL10ECjPXCpTxBKWnPwO7EoDzA5UQZISDN5GVA9RgzyATzKdlFC3jq0c70vYL9tu7GENNLlXrffXCtlV%2F3pnVxOZAulWT2N%2FkfWDE3UOODGl9as%2FVDwF4M0kbZXTDoA01Xjc%2BEUB6xwcFpsvjRJQQ8RhBI0jXXxb%2B3GBl20bPKPIYdZdUz54t63freGg9NL4OJMtH9SewuUAQNWrSO0xrONCi9hWfz0qqQkFk5mwk5IsljjHSV0XdWB2EGrgfqvXFrFtN0GMUrAzbEYytDfNLR%7Ctkp%3ABFBMktzX04tj",
      },
      imagen: "placa.jpg"
  },
  {
      marca: "MSI",
      nombre: "MSI PRO A620M-E DDR5",
      socket: "AM5",
      tipoRam: "DDR5",
      gama: "Baja",
      numeroM2: 0,
      numeroSata: 2,
      precio: {
          segundaMano: 60.00,
          amazon: 88.65,
          ebay: 78.82,
      },
      link: {
          amazon: "https://www.amazon.es/MSI-Pro-A620M-Micro-ATX-procesadores/dp/B0BZW9RG3P/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=IOPKNMUKIX8R&keywords=MSI+PRO+A620M-E&qid=1702371189&sprefix=msi+pro+a620m-e%2Caps%2C189&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/195963813384?hash=item2da05a7e08:g:JVQAAOSwn8lk88th&amdata=enc%3AAQAIAAAA4PLBl4KyIux8OS3lpGx%2B11YL10ECjPXCpTxBKWnPwO7EoDzA5UQZISDN5GVA9RgzyATzKdlFC3jq0c70vYL9tu7GENNLlXrffXCtlV%2F3pnVxOZAulWT2N%2FkfWDE3UOODGl9as%2FVDwF4M0kbZXTDoA01Xjc%2BEUB6xwcFpsvjRJQQ8RhBI0jXXxb%2B3GBl20bPKPIYdZdUz54t63freGg9NL4OJMtH9SewuUAQNWrSO0xrONCi9hWfz0qqQkFk5mwk5IsljjHSV0XdWB2EGrgfqvXFrFtN0GMUrAzbEYytDfNLR%7Ctkp%3ABFBMktzX04tj",
      },
      imagen: "placa.jpg"
  },
  {
      marca: "Gigabyte",
      nombre: "Gigabyte B650 GAMING X AX",
      socket: "AM5",
      tipoRam: "DDR5",
      gama: "BajaMedia",
      numeroM2: 0,
      numeroSata: 2,
      precio: {
          amazon: 209.80,
          ebay: 236.49,
      },
      link: {
          amazon: "https://www.amazon.es/GIGABYTE-GBT-B650-Gaming-AX/dp/B0BKPTTHXM/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=I9WN9O5EIYJE&keywords=Gigabyte+B650+GAMING+X+AX&qid=1702371414&sprefix=gigabyte+b650+gaming+x+ax%2Caps%2C135&sr=8-5&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/235322623217?hash=item36ca5244f1:g:3QUAAOSwXBdlaILK&amdata=enc%3AAQAIAAAA8FYpvoLUOR03IJDk4OfWPynBv54y9nHTEzIhXx4YG9F%2BheFJ6XUBW6eFieg3YeFoSbR0ZHzejPq05psTWCVQuSLFjbvuqpGvbqkRS8udrVi8dtM%2BGlRW9FV0Chex2NtrkBAh4hTveQ1%2FovdEbMqk5JN8vazkOBG7s8txfpSgcpkjT3cbcL%2BL%2B8bIM8HopJwN2PIYJ4PhLhA0%2FYIYz4wXDvoXDYm5DEF%2Fxz3WcSGF4d1Uo9O555FKlaB9It8zfjTTKtKsHmzcfFr4A8waxma4%2Bu4Jz1GF6hxq441lT1us28E1D1cnssxvsuRmQIkEdtuTaA%3D%3D%7Ctkp%3ABFBM4Ifz04tj",
      },
      imagen: "placa.jpg"
  },
  {
      marca: "MSI",
      nombre: "MSI MPG B650 CARBON WIFI DDR4",
      socket: "AM5",
      tipoRam: "DDR4",
      gama: "Media",
      numeroM2: 2,
      numeroSata: 2,
      precio: {
          segundaMano: 200.00,
          amazon: 315.31,
          ebay: 239.50,
      },
      link: {
          amazon: "https://www.amazon.es/MSI-B650-Carbon-Placa-Micro-ATX/dp/B0BDS8PT2H/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2W8HC9L91U7FF&keywords=MSI+MPG+B650+CARBON+WIFI&qid=1702371587&sprefix=msi+mpg+b650+carbon+wifi%2Caps%2C106&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/295887433662?hash=item44e443efbe:g:gSYAAOSwxjdjmLAi&amdata=enc%3AAQAIAAAA8Pk%2FSiSVJm0nYBIBbNYc56dljfkjf1su%2FP8Dr2yFUdO7W1%2FXjUAhaFDKJcIZ3rBrqYILJuRIIa8TCxvrmCTrxJEFQKuvd6dQGYktz%2BKnc5yIgM9gd4y4RwTsr4Cz1656rvL7Rj6M1X3kvB6GcaiQwShf%2FWdhjr3jjk7u7Dq%2FrN4V4SAfd5LZSZ44RDBFLTgsgD%2B8dNImFHZSptz1sAExCC36d5eG1MdNUCwDXb4Myg00Tf8pKORbXYhfAjVPR%2F%2FERqtdul1xn7%2FsyFxBdmcdYuP%2BvCD8fjPEutRfRYskyG30Sb8EHJEkj9pJfkcuvd%2FyKw%3D%3D%7Ctkp%3ABk9SR4qFiNSLYw",
      },
      imagen: "placa.jpg"
  },
  {
      marca: "MSI",
      nombre: "MSI MPG B650 CARBON WIFI DDR5",
      socket: "AM5",
      tipoRam: "DDR5",
      gama: "Media",
      numeroM2: 2,
      numeroSata: 2,
      precio: {
          amazon: 315.31,
          ebay: 239.50,
      },
      link: {
          amazon: "https://www.amazon.es/MSI-B650-Carbon-Placa-Micro-ATX/dp/B0BDS8PT2H/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2W8HC9L91U7FF&keywords=MSI+MPG+B650+CARBON+WIFI&qid=1702371587&sprefix=msi+mpg+b650+carbon+wifi%2Caps%2C106&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/295887433662?hash=item44e443efbe:g:gSYAAOSwxjdjmLAi&amdata=enc%3AAQAIAAAA8Pk%2FSiSVJm0nYBIBbNYc56dljfkjf1su%2FP8Dr2yFUdO7W1%2FXjUAhaFDKJcIZ3rBrqYILJuRIIa8TCxvrmCTrxJEFQKuvd6dQGYktz%2BKnc5yIgM9gd4y4RwTsr4Cz1656rvL7Rj6M1X3kvB6GcaiQwShf%2FWdhjr3jjk7u7Dq%2FrN4V4SAfd5LZSZ44RDBFLTgsgD%2B8dNImFHZSptz1sAExCC36d5eG1MdNUCwDXb4Myg00Tf8pKORbXYhfAjVPR%2F%2FERqtdul1xn7%2FsyFxBdmcdYuP%2BvCD8fjPEutRfRYskyG30Sb8EHJEkj9pJfkcuvd%2FyKw%3D%3D%7Ctkp%3ABk9SR4qFiNSLYw",
      },
      imagen: "placa.jpg"
  },
  {
      marca: "ASUS",
      nombre: "ASUS PRIME X670E-PRO WIFI",
      socket: "AM5",
      tipoRam: "DDR5",
      gama: "MediaAlta",
      numeroM2: 2,
      numeroSata: 2,
      precio: {
          segundaMano: 300.00,
          amazon: 370.99,
          ebay: 331.39,
      },
      link: {
          amazon: "https://www.amazon.es/ASUS-Prime-X670E-PRO-WiFi-GB/dp/B0BF5F5F4R/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=12KJ3M9EG071K&keywords=ASUS+PRIME+X670E-PRO+WIFI&qid=1702371785&sprefix=asus+prime+x670e-pro+wifi%2Caps%2C94&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/404569090591?hash=item5e32326a1f:g:IosAAOSwArdlN21k&amdata=enc%3AAQAIAAAA8BjDQncieovQ0LbkzMhSElR84bn0E7HyXJMhtLcNFjjJLno%2BJ7013ktQHKoLuEPEhb16QabioNeJjS9kOCF9zPxPC2t7DiLyjoHOahkFQxr1vtSqZFHYDTUspGRVJzxw9iDMA7fTMqp0kLWhJS9l2%2BajK8wXyyKq5JDAHDIlBmXsa9xraD282vBrV4KmXbLNQ2TAwlf1jS%2FdJhmobC2Ll7LyIFSM1OlEuCyEcM4rnN2yG3xeAzlaqeMFu5dTdFZhcj7XUPXk8BjAfOVX2%2FPPGZe%2BTxx2uPIOIBjmnbK8CXu7c6PTG5dCqKCoWoKTgJuARQ%3D%3D%7Ctkp%3ABk9SR_DhoNSLYw",
      },
      imagen: "placa.jpg"
  },
  {
      marca: "Gigabyte",
      nombre: "Gigabyte B650E AORUS MASTER",
      socket: "AM5",
      tipoRam: "DDR5",
      gama: "Alta",
      numeroM2: 2,
      numeroSata: 2,
      precio: {
          amazon: 458.90,
          ebay: 448.99,
      },
      link: {
          amazon: "https://www.amazon.es/Gigabyte-Technology-B650E-AORUS-MASTER/dp/B0BJF8567F/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=ZP1TQX2KE9HK&keywords=Gigabyte+B650E+AORUS+MASTER&qid=1702371907&sprefix=gigabyte+b650e+aorus+master%2Caps%2C91&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/355250698974?hash=item52b6977ade:g:c3YAAOSwU55lajE3&amdata=enc%3AAQAIAAAA0Ge%2B0TQlYWu1KM%2F3uqAGc2KmlXxAAqNjGaTnLx%2FmQm6rVMPxD86UN6xjYY6IF5dD5hCJZsDgyj%2FVddCZbAXhmJAPFJ87TqBNkK7dqD72ES%2BtxcETAQJxQ8Gbe3JZPoVlAOSfrXIhwUGjWcwl3xGcLQyIT3chThJCFPmqWuSqMFwAQyv5nkLKboZmLUmHTL9O2FJAar3uNqa%2BFMmoFJlDQuhL%2BQ4vqzY0%2BKO0TXiHF7%2F21rjcR43jXLtZJt5oOlo%2FQcWZEubkyU8MkXC%2FWRpVs7A%3D%7Ctkp%3ABk9SR_Kor9SLYw",
      },
      imagen: "placa.jpg"
  },
  {
      marca: "Gigabyte",
      nombre: "Gigabyte X670E AORUS XTREME",
      socket: "AM5",
      tipoRam: "DDR5",
      gama: "Premium",
      numeroM2: 2,
      numeroSata: 2,
      precio: {
          segundaMano: 650.00,
          amazon: 833.82,
          ebay: 719.33,
      },
      link: {
          amazon: "https://www.amazon.es/GIGABYTE-Technology-AORUS-X670E-procesadores/dp/B0BFNVNG2C/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2JQKVLSO2CHE3&keywords=Gigabyte+X670E+AORUS+XTREME&qid=1702372022&sprefix=gigabyte+x670e+aorus+xtreme%2Caps%2C95&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/296082881658?hash=item44efea3c7a:g:ndwAAOSwMWdlaZQ6&amdata=enc%3AAQAIAAAA8N4xS4zFCkeor4kk9cKJUbOQximoIzfSWkctq1GcVSijKWO75ZR%2BQBTq5rU9xtO06%2F2jN6QUbl7i9vmDRW%2BHC5ZYZzpq9dcUckGXzV4CivtOYO7AedU3zhckDcFM%2BZAQPk2z23R36DPVFUZFup7%2B9DDoA%2FKBt4DKO7ZBGGVBARNiJQZVq5Cp5qa%2FR0el6Nq7BNfpgr0s9oc1JVCzEkkrzrRhrzrU%2Bjas9GkWPN%2FLyZyxFDLnUXsFGgLWzEKwhU7tRPeihGvnKFRzG9rcPCB4MTXXuu1eNGxFJJfrvWecUKHXVEd%2F7wH25CQZOF3mw7mxQA%3D%3D%7Ctkp%3ABk9SR9iovdSLYw",
      },
      imagen: "placa.jpg"
  },
]

const gpuList = [
  {
    marca: "Nvidia",
    nombre: "Nvidia RTX 4090",
    consumo: 450,
    potenciaRecomendada: 850,
    gama: "Premium",
    precio: {
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
      segundaMano: 1250.00,
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
      segundaMano: 560.00,
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
      segundaMano: 290.00,
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
      segundaMano: 1600.00,
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
      segundaMano: 450.00,
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
    gama: "BajaMedia",
    precio: {
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
      segundaMano: 180.00,
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
      segundaMano: 890.00,
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
      segundaMano: 450.00,
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
    potenciaRecomendada: 650,
    gama: "Media",
    precio: {
      segundaMano: 250.00,
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
      segundaMano: 500.00,
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
      segundaMano: 300.00,
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
    gama: "BajaMedia",
    precio: {
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
      segundaMano: 150.00,
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

const ramList = [
  {
      marca: "Kingstone",
      nombre: "Kingston FURY Beast DDR4 3200 MHz 8GB CL16",
      tipo: "DDR4",
      capacidad: 8,
      gama: "Baja",
      precio: {
          segundaMano: 20.00,
          amazon: 25.50,
          ebay: 30.00,
      },
      link: {
          amazon: "https://www.amazon.es/Kingston-3200MHz-Ordenadores-sobremesa-KF432C16BB/dp/B097K5J1SB/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=18JVZ4A8SFJV8&keywords=Kingston%2BFURY%2BBeast%2BDDR4%2B3200%2BMHz%2B8GB%2BCL16&qid=1702366631&sprefix=kingston%2Bfury%2Bbeast%2Bddr4%2B3200%2Bmhz%2B8gb%2Bcl16%2Caps%2C198&sr=8-1&th=1",
          ebay: "https://www.ebay.es/itm/256012272679?hash=item3b9b854427%3Ag%3ALD0AAOSwRcRkEym5&amdata=enc%3AAQAIAAABAKV4F2VbwqGx0HhJEQ2XLEaHIAFshAYvtF1UX%2FbD987h2EJgd3ja3htwJulPKnWLaOklnPjPTeDwqJZImvPpUcGlXyQgW0lKZgDR3cRy0%2FJdFj6%2Bk6OartYwL7%2BeHOWWb8d%2BTh3iCkG9NYE74lXRpgHPZ7%2FtwDVdrpM3G7UaTIe6u%2FksdOZxLlpjxlK9AS39%2BYnlqsN7493vg5dOpfB31kyQcoxYdg8WJ9q5A9bGDIA%2BfxppWzRnQov%2Bgy9A8UHfcCiafOu3pNEXgQS1wVt9rOXb%2Fk0s42l9p1N%2BbMRNAmC%2BejIFykOd2qZkVJoLiFCQAO6d6YEDXyWEm8VtBV%2BTsGw%3D%7Ctkp%3ABk9SR-borM-LYw&LH_ItemCondition=3",
      },
      imagen: "ram.jpg"
  },
  {
      marca: "Corsair",
      nombre: "Corsair Vengeance LPX DDR4 3200MHz PC4-25600 16GB CL16 Negro",
      tipo: "DDR4",
      capacidad: 16,
      gama: "Media",
      precio: {
          segundaMano: 40.00,
          amazon: 47.81,
          ebay: 60.20,
      },
      link: {
          amazon: "https://www.amazon.es/MEMORIA-PC3200-VENGEANCE-CMK16GX4M1E3200C16-CORSAIR/dp/B07W8ZDDKT/ref=sr_1_4?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=GO6X8QE57QFV&keywords=Corsair+Vengeance+LPX+DDR4+3200MHz+PC4-25600+16GB+CL16+Negro&qid=1702367120&sprefix=corsair+vengeance+lpx+ddr4+3200mhz+pc4-25600+16gb+cl16+negro%2Caps%2C145&sr=8-4",
          ebay: "https://www.ebay.es/itm/183203318664?hash=item2aa7c4cb88:g:nD0AAOSwdIBa53OO&amdata=enc%3AAQAIAAAA8OAniKZ2EBCbwe2aSZ%2FYM8yjHyeILRlg1ofAJYRCgiOyh9fBBu9u5JL%2FE1BggAqoWhX4ntq4IUebLFzaFpR%2FNvZx3M5tnHflfC%2BtbXc5qjxvXKWOhrr%2FJKPkj2q0aC9ItphCLDTx8ZmP%2BKyopjj3gcZ4vmtMAneraya7xk1WCCHlLfFuzk1zkNgQxLl%2FEC6VJL759D4G%2BepiWA76Qg5TcenEwZgczdo0w%2FWoR%2F5IAm2Bjpt4yUIbki2HjAEA1IOm24MMEIYwFfbQmEoxZJwhBiutEUWmZntXR%2F2sqKQuGG16tQVlHPOf2ohIpZKmFv0s4w%3D%3D%7Ctkp%3ABk9SR86J6c-LYw",
      },
      imagen: "ram.jpg"
  },
  {
      marca: "Crucial",
      nombre: "Crucial DDR5 4800MHz PC5-38400 8GB CL40",
      tipo: "DDR5",
      capacidad: 8,
      gama: "Baja",
      precio: {
          amazon: 27.99,
          ebay: 35.73,
      },
      link: {
          amazon: "https://www.amazon.es/Crucial-CT8G48C40U5-4800MHz-Memoria-Escritorio/dp/B09HWFZZM4/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2QN1K408CTJ9M&keywords=Crucial+DDR5+4800MHz+PC5-38400+8GB+CL40&qid=1702369011&sprefix=crucial+ddr5+4800mhz+pc5-38400+8gb+cl40%2Caps%2C174&sr=8-1",
          ebay: "https://www.ebay.es/itm/185279005639?hash=item2b237d43c7:g:m5MAAOSwKQNh-mfD&amdata=enc%3AAQAIAAABANYi097FzvdFeZFwUKAGwhRsHb%2BkC77y13zYStq1Nme2op5OXJyKDANFOD%2Fd1c2Nf%2FbuHzE%2FiISuLGMhEyVbtNVNRzp5L4UcP9H%2FpXxSTQxCZFMUh3Jl%2FSEJ2LWuVR1QcXSzqc4kW4Rrqi2BvSl7lGvSjCXTZuGA4QM%2BCjtyk0yqek%2F9LNp0Y4fZAcOk3Ogidp%2FjNqOQVoWPGFKfMZrLSDIPV3NEd%2Fek9KeWFeO4AmE8mLZWIQp5sh%2FUQMDO0eDUw5h7aFYtTKW3Y4XtFjlriw%2Bq9ld9HRh%2FR7Zb%2B%2BAv45gM7WbgXTdIS15aEm2%2Bixx37MUKSufxTDkh43OF6Jxn1Lw%3D%7Ctkp%3ABk9SR8yAztGLYw",
      },
      imagen: "ram.jpg"
  },
  {
      marca: "Kingstone",
      nombre: "Kingston FURY Beast RGB DDR5 5600MHz 16GB 2x8GB CL40",
      tipo: "DDR5",
      capacidad: 16,
      gama: "Media",
      precio: {
          amazon: 25.50,
          ebay: 30.00,
      },
      link: {
          amazon: "https://www.amazon.es/Kingston-3200MHz-Ordenadores-sobremesa-KF432C16BB/dp/B097K5J1SB/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=18JVZ4A8SFJV8&keywords=Kingston%2BFURY%2BBeast%2BDDR4%2B3200%2BMHz%2B8GB%2BCL16&qid=1702366631&sprefix=kingston%2Bfury%2Bbeast%2Bddr4%2B3200%2Bmhz%2B8gb%2Bcl16%2Caps%2C198&sr=8-1&th=1",
          ebay: "https://www.ebay.es/itm/256012272679?hash=item3b9b854427%3Ag%3ALD0AAOSwRcRkEym5&amdata=enc%3AAQAIAAABAKV4F2VbwqGx0HhJEQ2XLEaHIAFshAYvtF1UX%2FbD987h2EJgd3ja3htwJulPKnWLaOklnPjPTeDwqJZImvPpUcGlXyQgW0lKZgDR3cRy0%2FJdFj6%2Bk6OartYwL7%2BeHOWWb8d%2BTh3iCkG9NYE74lXRpgHPZ7%2FtwDVdrpM3G7UaTIe6u%2FksdOZxLlpjxlK9AS39%2BYnlqsN7493vg5dOpfB31kyQcoxYdg8WJ9q5A9bGDIA%2BfxppWzRnQov%2Bgy9A8UHfcCiafOu3pNEXgQS1wVt9rOXb%2Fk0s42l9p1N%2BbMRNAmC%2BejIFykOd2qZkVJoLiFCQAO6d6YEDXyWEm8VtBV%2BTsGw%3D%7Ctkp%3ABk9SR-borM-LYw&LH_ItemCondition=3",
      },
      imagen: "ram.jpg"
  },
  {
      marca: "Kingstone",
      nombre: "Kingston FURY Beast DDR5 4800MHz 16GB CL38",
      tipo: "DDR5",
      capacidad: 16,
      gama: "BajaMedia",
      precio: {
          segundaMano: 110.00,
          amazon: 133.99,
          ebay: 140.16,
      },
      link: {
          amazon: "https://www.amazon.es/Kingston-4800MT-Memoria-Ordenadores-sobremesa/dp/B09KCMKL9Z/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=33YHPRVRXG89G&keywords=Kingston%2BFURY%2BBeast%2BDDR5%2B4800MHz%2B16GB%2BCL38&qid=1702367537&sprefix=kingston%2Bfury%2Bbeast%2Bddr5%2B4800mhz%2B16gb%2Bcl38%2Caps%2C156&sr=8-1&th=1",
          ebay: "https://www.ebay.es/itm/155407112191?hash=item242efc57ff:g:WY4AAOSwj3pj6lgn&amdata=enc%3AAQAIAAABcFWunIE3K5sW03zTqiUZYW1IsrClQtjMW8MAFsh55LucXibd6ertt28MXcSmOtEZVfjlMUV%2FnbthpZqJCIFRAwiBLUWdDdL3E1bRjjqIQpQ32%2BdInevvY6ENonjJns7i8uB0v3E4LlXVtx2iZYyK%2F7kblvnN81T2bKwwNVBWYgx2CW3iJnQLJoQnPR9z1GcIlilNhm8MGKg9cKuk5fhzB%2BE3UCN32TG2VJS5PWWzG95ochaxKUQo1HXFy2KerFibr6Oujyk4bb3DRrKwkaq%2FZNx2Cs6QFlpAnZrm66bZXWrxkt%2FqLvEu1qxNSap4t8FJCv7EwgsdDL8Au%2FqscExJn75USJmJu03vFxGTQGmuLuG86kdF6t8Sj98LBM8WXwyNcjCZ5k9vQipSVnPL%2BgbbZfVbDudtKF3ekJbjAG5ZSTFzRzeLMxQp5zS5%2BhAJSKvkL9Pi7aLDn4%2FOMr7pZGimG2fLogN4v4ecWZahzoq2Vzzn%7Ctkp%3ABFBMiufs0Ytj",
      },
      imagen: "ram.jpg"
  },
  {
      marca: "Corsair",
      nombre: "Corsair Vengeance DDR5 6400MHz PC5-51200 32GB 2x16GB CL32",
      tipo: "DDR5",
      capacidad: 32,
      gama: "MediaAlta",
      precio: {
          amazon: 134.99,
          ebay: 172.58,
      },
      link: {
          amazon: "https://www.amazon.es/Corsair-Vengeance-Optimizada-Regulaci%C3%B3n-Personalizados/dp/B0BPL9VYPW/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=55ZSWG2V7NN4&keywords=Corsair+Vengeance+DDR5+6400MHz+PC5-51200+32GB+2x16GB+CL32&qid=1702367885&sprefix=corsair+vengeance+ddr5+6400mhz+pc5-51200+32gb+2x16gb+cl32%2Caps%2C169&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b1",
          ebay: "https://www.ebay.es/itm/196115489448?hash=item2da964e2a8:g:oz4AAOSwsAllbgjF&amdata=enc%3AAQAIAAABENkLE6KDg6q%2FIQQfwTIGt%2FKvAzGSKX4EKjCqnG1xZyTLaF6lnEP%2FgpM0b0SPjLtL%2FrxYJuBkzl0T0VLeQjCN6eIMM5pHJ%2B8fEWQzy%2Ff2lRpmCcRdMgLr9rcJh8dypc64Cg0kwtyyVcbpIuwMZupcjfJleYRos5rmNL8ld3U4R1CkFhAXcQQERW%2FIVTTjLiq906TDJiNQsXeS82FJt5zTg9uN7ziWLnWIDgEG8ONZcQqdRMC4E%2BIKD3SmQ9W0qc05OCVhmcO1MRpnccL57eFLAooQDehf58l4aRMNW3j6Iy%2BkGxZqfxFi4Wb3AJehLlQWLKqbfdF4u4T10gHezfUztfkRU%2FhOi40uxCqVn3PCN0T1%7Ctkp%3ABFBM8ILF0Itj",
      },
      imagen: "ram.jpg"
  },
  {
      marca: "Corsair",
      nombre: "Corsair Vengeance DDR5 6400MHz 64GB 2x32GB CL32",
      tipo: "DDR5",
      capacidad: 64,
      gama: "Alta",
      precio: {
          segundaMano: 200.00,
          amazon: 240.99,
          ebay: 286.31,
      },
      link: {
          amazon: "https://www.amazon.es/Corsair-Vengeance-Optimizada-Regulaci%C3%B3n-Personalizados/dp/B0BTNW9XFZ/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1M5X1TS6KPYHG&keywords=Corsair+Vengeance+DDR5+6400MHz+64GB+2x32GB+CL32&qid=1702368168&sprefix=corsair+vengeance+ddr5+6400mhz+64gb+2x32gb+cl32%2Caps%2C80&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/185951197927?hash=item2b4b8e1ae7:g:4goAAOSw2S5kkb5s&amdata=enc%3AAQAIAAABAPJHxmtE3V72Lh2Qk2lMM8BbGNme3W5rGfWTY2g9Pn0D0VEHMjpRAOehls4FNTcLezDoCXRU%2Fkx4O8D%2BuQVD%2Fbh6jaWZUOHJ%2FwFcv1XVDHZRwldCtjtP75KiDecMo1%2BjOL6jUEZI4qy5tnMKrkITmeCpAUKoHPkSZgKQ5s%2BVWLwWPS9zaagq5I3C9%2Fy3bWVs19SOxiNGvNpmE4WBw62WlA0vSWL7UE%2FX6Q1T60AfPioDFsMknbtXAgm3G52V5guUku4xFTEkKQ9lpJD4zTsWkNBqtsEiPbl%2B602TBua%2Bau7%2FVClSftZMlnD0LqL%2B2Ww5HL99pCFsougT5pSUm%2F%2FNQGo%3D%7Ctkp%3ABk9SR7Dt5tCLYw",
      },
      imagen: "ram.jpg"
  },
  {
      marca: "Corsair",
      nombre: "CORSAIR Vengeance RGB DDR5 RAM 128GB (4x32GB) 5600MHz CL40",
      tipo: "DDR5",
      capacidad: 128,
      gama: "Premium",
      precio: {
          segundaMano: 480.00,
          amazon: 621.35,
          ebay: 515.61,
      },
      link: {
          amazon: "https://www.amazon.es/CORSAIR-Vengeance-5600MHz-Ordenador-Compatible/dp/B0CFZR4YCC/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=ZAOIXVYHOOST&keywords=ram+ddr5+128gb&qid=1702368368&sprefix=ram+ddr5+128gb%2Caps%2C88&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/235309649225?hash=item36c98c4d49:g:6VwAAOSwvaRlNSCJ&amdata=enc%3AAQAIAAAA4IRtFYrbA8rkk5e%2BSwgMB7qf2Odb8ZEwkPQrexBqrabt6x6CAQq%2BdosdnVkDgN%2BhGIjMiL0%2B5EZ1GzDJeycCMFkoLFr%2BEbTZVIhV2mt5BbPeL%2BxteAVRHO1p0zzI1J8afBXLvSE1pLGboe2FHPdKd1xMecyqL01CURa2XZFhlYa7O9jYsqv%2BRHLsUrQTRCLOdxHpmEf23mCdWsf0qV8utA8rEi2qn5w1BUAJSlHhe29T8UtQ2JfdmpunrEluHDqoFp3jA%2BfGTbcmdO1raBSBCk0TUo6UoLyK3wDKVndWdgI%2B%7Ctkp%3ABFBMsIiH0Ytj",
      },
      imagen: "ram.jpg"
  },
]

const discoList = [
  {
      marca: "WD",
      nombre: "WD Blue 1TB 3.5 SATA3",
      capacidad: 1,
      tecnologia: "Sata",
      gama: "Baja",
      precio: {
          segundaMano: 30.00,
          amazon: 33.90,
          ebay: 49.90,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-WD10EZEX-1000-GB-Interna/dp/B0711YN12S/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3CMMXNXGC4YLT&keywords=WD+Blue+1TB+3.5%22+SATA3&qid=1702372448&sprefix=wd+blue+1tb+3.5%22+sata3%2Caps%2C179&sr=8-1",
          ebay: "https://www.ebay.es/itm/122487163758?hash=item1c84cdcb6e:g:MRcAAOSwxu5ZEfgL&amdata=enc%3AAQAIAAAA8F3KGBZIzCAoTgEe78svkhvw9EZ4hAECmlyOUYc9nDcjPbFB67MHn%2FIyiA3sLZoDgpBBdPPF1z2H8erpJsa9n7TmgagGMjgk05zteas%2F1me7RPzjF2ysxSkv2VJj8JKf283vKM9NlQWSyAz%2F3xasrzQX3n1TYTGJsOhvx4xPqItOOoFx8KE6M1wKv%2FN5u8PNRQLsmE783aKDLpL5F5jzj%2FrbdXL4%2BUicN8wVWn1Ga45Najf1%2BKe84LPesitRBqgrzxL5Qj97PmWbe0NywsuO%2FyQwrijlXQYPqMqLBS9Ljot4Je7TZzpEBn%2Ft9xPFPckwWQ%3D%3D%7Ctkp%3ABk9SR-yc8dSLYw",
      },
      imagen: "hdd.jpg"
  },
  {
      marca: "Gigabyte",
      nombre: "Gigabyte Solid State Drive 256GB SSD SATA3",
      capacidad: 0.25,
      tecnologia: "Sata",
      gama: "BajaMedia",
      precio: {
          segundaMano: 20.00,
          amazon: 25.63,
          ebay: 32.55,
      },
      link: {
          amazon: "https://www.amazon.es/Gigabyte-Technology-GP-GSTFS31256GTND-256GB/dp/B07J6S7W1W/ref=sr_1_28_mod_primary_new?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2CGLAZ6JYUIZ5&keywords=gigabyte+solid+state+drive+256gb+ssd+sata+3&qid=1702372701&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=gigabyte+solid+state+drive+256gb+ssd+sata3%2Caps%2C102&sr=8-28",
          ebay: "https://www.ebay.es/itm/265461431335?hash=item3dcebbfc27:g:cYUAAOSwlYphwEdc&amdata=enc%3AAQAIAAAA4PBRlv%2BmAKzFnHz9gFnIGgn%2FtxfubEbOh19jNj6z5lMYvzSd4F%2FNvZxJhThxZ4NHytrmXTnOIdCowYhWQDC4LejpGCJxS0zSk8ukgGChMRbvAY9Bl7CkGunEu1CLtBg8UhbCdNptDcn1rawpG6KjebEj3iRJogu02tRaQSeFFkOZ8i%2BCFYzSxGhf6K4UMk0poOlWUmPsjCqh6NtrZeU%2BZtyyaMPy54eO5X2VU4BaPfJ%2Foq7DqrGao%2BX7sEopzN%2FwHdTeTuMQHOeVr%2FhBEzmY4Ix5wADhppkXoP0ufFKi8Sr7%7Ctkp%3ABk9SR5CXkNWLYw",
      },
      imagen: "hdd.jpg"
  },
  {
      marca: "WD",
      nombre: "WD Purple 2TB 3.5 SATA 3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: "Media",
      precio: {
          segundaMano: 40.00,
          amazon: 71.46,
          ebay: 56.52,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-Disco-mec%C3%A1nico-256MB/dp/B08VH8R94B/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2PKU4UQLMCKRL&keywords=WD+Purple+2TB+3.5%22+SATA+3&qid=1702372984&sprefix=wd+purple+2tb+3.5%22+sata+3%2Caps%2C76&sr=8-1",
          ebay: "https://www.ebay.es/itm/384876574990?hash=item599c6e790e:g:4NkAAOSwMThe0cDH&amdata=enc%3AAQAIAAAA8IXmkF%2BSqSRJfaqpcsA6D5qSxQdXYkHfPe9BLltZtZng9k8Fpqds5lzetUHicFm0eLZgil3pWic8kpjqZjPQfuO%2FV%2BJjdT5EkMG42KxD445w%2BAHAbjJPxD3k6auJgiJv2PUJmJ9NTZyxz%2BHZZrUXEOr7seiv%2Fvr84%2BZoajcUEJQfGez%2Bny%2B%2F1R9NKnSb5shF0qt4nhw00OgGybCGm3yPWy9E%2FBF6c%2FobxvJcX%2FZtsSZp1C0429HIsazkq9KYmcBFE%2BXKCARFWObgwTKl6ASU3gGHGhDcLAm59fv7mM4Qk9CKVZNRxoQRMuT8eJk1k26IvA%3D%3D%7Ctkp%3ABk9SR7zfstWLYw",
      },
      imagen: "hdd.jpg"
  },
  {
      marca: "Kingstone",
      nombre: "Kingston KC600 SSD 512GB NAND TLC 3D SATA3",
      capacidad: 0.5,
      tecnologia: "Sata",
      gama: "MediaAlta",
      precio: {
          segundaMano: 50.00,
          amazon: 57.75,
          ebay: 55.04,
      },
      link: {
          amazon: "https://www.amazon.es/Kingston-KC600-SSD-SKC600-512G/dp/B07ZDBT15M/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1QR02V8YTSI1&keywords=kingston%2Bkc600%2Bssd%2B512gb%2Bnand%2Btlc%2B3d%2Bsata%2B3&qid=1702373177&sprefix=kingston%2Bkc600%2Bssd%2B512gb%2Bnand%2Btlc%2B3d%2Bsata3%2Caps%2C94&sr=8-1&th=1",
          ebay: "https://www.ebay.es/itm/404658693707?hash=item5e3789a64b:g:AdwAAOSwUV9la9kI&amdata=enc%3AAQAIAAABALwTGEf1R4%2BTlUqv0G99XdfV2KojwI1i5uLsANywNgfk%2FINyo5Rq%2Fbwvn8gLlviJDNr4EXQhgBl1i8GKneK5U4GVX%2B5eF7h1Rw%2B1KNM5zsn9aPLsQSYOvf1JE5m9pf4XuKaqPUYOV6ED2d%2BBN6ETff0QYjW93uoQ%2FoI4hZL%2BSUOL5EDdZ6ReMEWyUY%2FDYeX48Kp3%2BjRWwxBC3dE%2Fbrn7R0uT5ZsFX1BKB%2FQKWzhlAo9oXTlVW3HGB%2FvS%2FK%2F%2FdHaQas2n8ccZf%2ByyhF8gw9wmJYd8w9glyV5T0RcoNK5R8Aszu9H3GK%2FzbXWgjFCyfmkeBkPesTRlpANer7JKvtH%2Bp1Q%3D%7Ctkp%3ABFBMkrzK1Ytj",
      },
      imagen: "hdd.jpg"
  },
  {
      marca: "Gigabyte",
      nombre: "Gigabyte GP-GSTFS31100TNTD 1TB SSD 2.5 SATA3",
      capacidad: 1,
      tecnologia: "Sata",
      gama: "Alta",
      precio: {
          amazon: 65.50,
          ebay: 78.49,
      },
      link: {
          amazon: "https://www.amazon.es/Gigabyte-GP-GSTFS31100TNTD-Unidad-Estado-s%C3%B3lido/dp/B07RQF6P9C/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2H9A7GDDO4WIO&keywords=Gigabyte+GP-GSTFS31100TNTD+1TB+SSD+2.5%22+SATA3&qid=1702373347&sprefix=gigabyte+gp-gstfs31100tntd+1tb+ssd+2.5%22+sata3%2Caps%2C155&sr=8-2",
          ebay: "https://www.ebay.es/itm/186186829895?hash=item2b59999047:g:H2QAAOSwivZlZyXc&amdata=enc%3AAQAIAAABAHxdQPFYrzMjzSspw5G1ta6Uoot5sxQbF1kviM3plgKTy%2BCLD%2BXQPcpDIGEH95trp2PtZhmbtZeAmqKp1cwhWFVyxDSTmOa360RPFRhJ%2FAiv0vSLupfHc3LApLE%2BhiCIZNw9WXxRS90DoRhdBi6Ks7Bt8%2FGWh6kPA%2BmwDZJW%2BdCzAeI4YCQboBsKzASiV9fkpYY62EgtDesv7Z%2FHJQrNKUzE2bJWJvke7E3VFxm6oaSYL03te9qyCSBHbXlP9sRs9uSbyY37uFAIFZ0Ei80ekltDqhtpZY3ZL%2BqA%2BUeGQ%2B8vHlNK7HGHEGvsKO12Y6LioB%2FpB2myJYjURJsm9cRrhjA%3D%7Ctkp%3ABFBMlPze1Ytj",
      },
      imagen: "hdd.jpg"
  },
  {
      marca: "Samsung",
      nombre: "Samsung 870 EVO SSD 2.5 2TB SATA3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: "Premium",
      precio: {
          amazon: 142.79,
          ebay: 179.90,
      },
      link: {
          amazon: "https://www.amazon.es/Samsung-870-EVO-2000-Negro/dp/B08PC5ZYB1/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2H3FIYIO9QWNT&keywords=Samsung+870+EVO+SSD+2.5%22+2TB+SATA3&qid=1702373527&sprefix=samsung+870+evo+ssd+2.5%22+2tb+sata3%2Caps%2C99&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/364026432432?hash=item54c1aa8bb0:g:0UkAAOSwjCRjVsGU&amdata=enc%3AAQAIAAAA8KSrWcKHydbJ9N4RXn8dVJJfeXgfbGNr81CwhJwutYryWAAbF7130PYbr%2Ff6%2BlA5%2FULFKXGMnNmw4jaoUjxQ9GYt1ULA7XN3vgmI1Iuw7CHpdBrwO0r%2By38E0u48qp8k0MHnPr7YO2YjB%2BnjN8dtTIMyARKAWlf3DLJmZHVpGt79Ec6%2BCdxPw9IM%2F55WQve2HXUKFl8aCmXgZ2OAOBG5hZfDRbhGS%2FWGfTcLQcrJyFVs5bj1cQpteDLGa0xcFvWj%2BmQ2iEvwpyPAaDdSXtYkb74fnlDvWcrXk0Sj1a1oy6vNBiNlqVZqxxVdlseQFwf9Cw%3D%3D%7Ctkp%3ABFBM9Pr01Ytj",
      },
      imagen: "hdd.jpg"
  },
  {
      marca: "Gigabyte",
      nombre: "Gigabyte M30 SSD 512GB M.2 NVMe 1.3 PCIe 3.0x4",
      capacidad: 0.5,
      tecnologia: "m2",
      gama: "Media",
      precio: {
          amazon: 45.94,
          ebay: 71.20,
      },
      link: {
          amazon: "https://www.amazon.es/Gigabyte-Technology-512GB-NVME-3-0X4/dp/B0974W182G/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=RKR92NIKPUHR&keywords=Gigabyte+M30+SSD+512GB+M.2+NVMe+1.3+PCIe+3.0x4&qid=1702373708&sprefix=gigabyte+m30+ssd+512gb+m.2+nvme+1.3+pcie+3.0x4%2Caps%2C83&sr=8-1",
          ebay: "https://www.ebay.es/itm/126215836908?hash=item1d630cd4ec:g:ERIAAOSwisNlagBe&amdata=enc%3AAQAIAAAA4LGffELrzFhswY75S07ATC3y18I73Sz47sFKN2M3LjHC30wClLqN0oEbLAwVQVm7Ja4lWl4Lr6xI4ckj5ERpu99J21QkBo3BMuB4PucGHI2dl6%2BuaVcc%2BpX2h4eDzzonAnetogaMzfivXKpllqe3n%2BZ9hcH%2FRi%2F1MhhYfGZZxV5KW2lhK9vfEbq7CocjCvskzee75Zq%2BI%2BH4nZGtWAabQhStlRbGgTLrHwd1mZlfzyn0URN6JmK6ONQeXSnLN4XcR8tWymzX1S5u2n5ismm%2B55pO1KhjwiSz4xChk55lQVdr%7Ctkp%3ABk9SR_S_i9aLYw",
      },
      imagen: "m2.jpg"
  },
  {
      marca: "Kingstone",
      nombre: "Kingston NV2 1TB SSD PCIe 4.0 NVMe Gen 4x4",
      capacidad: 1,
      tecnologia: "m2",
      gama: "MediaAlta",
      precio: {
          segundaMano: 40.00,
          amazon: 52.99,
          ebay: 60.80,
      },
      link: {
          amazon: "https://www.amazon.es/Kingston-NVMe-PCIe-1000G-SNV2S/dp/B0BBWH1R8H/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2AZ0QSPBIC110&keywords=Kingston+NV2+1TB+SSD+PCIe+4.0+NVMe+Gen+4x4&qid=1702373853&sprefix=kingston+nv2+1tb+ssd+pcie+4.0+nvme+gen+4x4%2Caps%2C84&sr=8-2",
          ebay: "https://www.ebay.es/itm/354959529322?hash=item52a53c956a:g:AOcAAOSwVoNky0q7&amdata=enc%3AAQAIAAABAA6GNjU9xJHY3pyxGC7EfmrZriHJzZTf2QAwNu4UUfJr2Xze6fgDiFh3twQiPWT4%2FxiZYu1mMPkv8Ge72iTVYOxbSW0xmrL4P67Bl1%2FD2FFHgF8pjszM3O3WqiMI8YnGAPkz1mFiHE%2B6%2FC%2FK6a%2FTNZ0S49m2103yOANogTYbZDWSBzom39%2Bg9AT7Fu8x2DuwDnmC2gIjt8Mw4rpuu8eC4Equ5YMuVUdBtR4yvbxP16UcZvMkXfmwjyRIIJ5sBsqXdZJyU%2FT5xWo4zKNwpHrkHLkOYeJ6qMjMqIvoY14Tn%2Bezet%2Bp3GHoaAhu4eNJC3zpIx7Tle%2FtDQx7zYk8geT5Pn0%3D%7Ctkp%3ABFBMgJKe1otj",
      },
      imagen: "m2.jpg"
  },
  {
      marca: "WD",
      nombre: "WD Blue SN570 2TB SSD M.2 PCIe Gen3 x4 NVMe",
      capacidad: 2,
      tecnologia: "m2",
      gama: "Alta",
      precio: {
          segundaMano: 80.00,
          amazon: 109.99,
          ebay: 99.28,
      },
      link: {
          amazon: "https://www.amazon.es/SN570-High-Performance-3500MB-Velocidad-Lectura/dp/B09JM8DJNS/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=5SVBDKXJZYV6&keywords=wd+blue+sn570+2tb+ssd+m.2+pcie+gen3x4+nvme&qid=1702373991&sprefix=wd+blue+sn570+2tb+ssd+m.2+pcie+gen3+x4+nvme%2Caps%2C90&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/325828489074?hash=item4bdce42f72:g:G00AAOSwAFZlE~8c&amdata=enc%3AAQAIAAABAEzme2nHfkjw2sT7%2F7QKe1IA%2FJxGyEs8kR1M3UW%2BvKhHEB%2BwB9I%2FjnP3YAs2DproQuQSiGmonpFfG6BWwMT%2FhWy3ljJSRfyJiYHI35leB0Qejwt5T%2FTXFAMEWJnCXvJ78H96tFGCyENh3TNQxdWCsejDupgbN%2B4YM4fPyEc2R%2BhMHuegDkhokwoKSeFLFW7rgS1HX8vECTmgqhlD%2BS3cAHH7CM1q8MRBaIJNu1ZdOIvzUMvdpmD2RHh3JujFsO4Zfik8EL1Razkks4d%2Boy7wdhFP4MroJQkBwMY%2BMpWdJ3tWauKmdtML2GDgUk6zqcq5CrPiuo3TBkQHIvT32TePxOQ%3D%7Ctkp%3ABFBM7M-t1otj",
      },
      imagen: "m2.jpg"
  },
  {
      marca: "WD",
      nombre: "WD Black SN850X SSD 4TB M.2 2280 PCIe Gen4 NVMe",
      capacidad: 4,
      tecnologia: "m2",
      gama: "Premium",
      precio: {
          segundaMano: 250.00,
          amazon: 280.99,
          ebay: 331.39,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-Black-SN850X-Express/dp/B0B7CQ2CHH/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1LBBY2N7N9HE5&keywords=wd+black+sn850x+ssd+4tb+m.2+2280+pcie+gen+4+nvme&qid=1702374182&sprefix=wd+black+sn850x+ssd+4tb+m.2+2280+pcie+gen4+nvme%2Caps%2C86&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/403857093327?hash=item5e07c232cf:g:ylwAAOSw84ZjDM4Q&amdata=enc%3AAQAIAAAA4FXP4jQXfi2iJkNlEkf%2BQw70uKyfnqe7AqXj9YjjfpNPuDLr9LRthuG99rYXgQqRPGzsiqerVKXtk23xa4bqKE8ObQtC49CG43FdyyJUN0Y21luBpE8%2BuxxX2KElCMiN76BGqHY0EXYq65yPngnXpq44uvYIfBv86SHm7suSOrTAP6g9HzHKUg0J6eyoqD0M%2Ff4Xbzqbw5t2YAh%2FiygkpVBML9SVJP8aaDj4sd6oGkhycejToi7M6o3v2TZat1GYR%2FAlK3nTzLe49FWCZD5wQZRNnsm9TDCX%2BMPycmYbSouo%7Ctkp%3ABk9SR7aoxtaLYw",
      },
      imagen: "m2.jpg"
  },
]

const monitorList = [
  {
      marca: "AOC",
      nombre: "AOC 24B2XH 23.8 LED IPS FullHD 75Hz",
      gama: "Baja",
      precio: {
          segundaMano: 50.00,
          amazon: 79.90,
          ebay: 144.37,
      },
      link: {
          amazon: "https://www.amazon.es/AOC-24B2XH-Pulgadas-1920x1080-Flickerfree/dp/B0845VVRQ1/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20VHY00RDJQW4&keywords=AOC+24B2XH+23.8%22+LED+IPS+FullHD+75Hz&qid=1702374872&sprefix=aoc+24b2xh+23.8%22+led+ips+fullhd+75hz%2Caps%2C98&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.0fd54328-1d46-4534-bd0f-16141b40bb5b&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/134517595831?hash=item1f51df9eb7:g:1asAAOSwLdtkKuIP&amdata=enc%3AAQAIAAAA8JHU0BscxReYXRGiJwcWuNcQesnmwgPq%2BOHGE%2BCQn615smyQi8KPVDTJTAapsleJkPqE4KUJSB%2B7CjFeK1d%2FIXDXK3dRvoE7IcgUND6ZjhhGRLA5PLIh5SSp2uCagvRMYHQGVFQjzDIo3cqYlxLgAHp1OSPxOLTmM6Sb885WQvgFP3JUcmnz556PEPIm9tqGV%2BPiaI7tzTBc%2FbJWbpc9q1lR7lU%2FD0rF8z%2Fo7AqaAV7Okp6veL3GMAkMA%2FY8119jTkoZU%2FNboGXL0m549pHSJ4M4JKyhZbxTmB48qrlDfgw6KspmCnkvFwADjrM7du7LlQ%3D%3D%7Ctkp%3ABFBM_LmZ14tj",
      },
      imagen: "monitor.jpg",
  },
  {
      marca: "Lenovo",
      nombre: "Lenovo G24e-20 23.8 LED FullHD 120Hz FreeSync",
      gama: "BajaMedia",
      precio: {
          amazon: 147.96,
          ebay: 182.51,
      },
      link: {
          amazon: "https://www.amazon.es/Lenovo-G24e-20-FreeSync-Met%C3%A1lica-inclinaci%C3%B3n/dp/B09D44KSY2/ref=sr_1_1_mod_primary_new?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1JJVDRLHZIZ7G&keywords=Lenovo%2BG24e-20%2B23.8%22%2BLED%2BFullHD%2B120Hz%2BFreeSync&qid=1702375107&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=lenovo%2Bg24e-20%2B23.8%22%2Bled%2Bfullhd%2B120hz%2Bfreesync%2Caps%2C84&sr=8-1&th=1",
          ebay: "https://www.ebay.es/itm/145091351538?hash=item21c81e53f2:g:LpIAAOSwJJ5kZ0Zg&amdata=enc%3AAQAIAAABAEYPNmnxuZEIpPLeZTZYyyBsvhKnUnra71XABwP4%2Ba0ui%2B522nxJEZRzKwhvSDldfcOWQNP1a22hfg%2FrN1H8z3wyJ67bT%2B3w4m%2FpRFwcK1FwTPMmCyeO%2Fla7eDXd%2B189EMjPBwqrJ9PfqbrNPMagl08fVx9xi6oNoKCsZ1xQERm7PrYKsG380jkUQXRB1tSzpfWPe3KB9RtDgel22oDrMlwhwfM0DPCkLzIrRT9xY7UMHhYEhecSzh1Xhx1S4YV1s%2F1oP7isO5WSDJ09e0H5rrhwiaOaZTLoT2VGIEexVVdtX0wI9cMobOuqREGf43U7MsChQFeA%2FJ8JVtRq%2FBYqHUQ%3D%7Ctkp%3ABFBMsLS214tj",
      },
      imagen: "monitor.jpg",
  },
  {
      marca: "AOC",
      nombre: "AOC Q27G2E 27 LED QHD 155Hz FreeSync Premium",
      gama: "Media",
      precio: {
          segundaMano: 150.00,
          amazon: 189.90,
          ebay: 332.03,
      },
      link: {
          amazon: "https://www.amazon.es/AOC-Gaming-Q27G2E-BK-DisplayPort/dp/B0BGC9VRJ9/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2BEWHNEEOMYU&keywords=AOC+Q27G2E+27%22+LED+QHD+155Hz+FreeSync+Premium&qid=1702375355&sprefix=aoc+q27g2e+27%22+led+qhd+155hz+freesync+premium%2Caps%2C81&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/235278980859?hash=item36c7b856fb:g:uJwAAOSw-OxlQkH6&amdata=enc%3AAQAIAAABAK3Cg2rB%2BYDNWhA0%2BS%2F5FsJOoqb8%2BwsvJyGjSItUvnNfDoB8nmlCk4aVW%2BKvcqpajGnNPPC%2FWeWGHf078ZYgRW2KjDOsufnqreks%2Bi%2BVeBwM2G1ZCSNjW9UGNnpzlZ9aKcA2FX3IY8Qe%2FgOHJUq6sXfTz5mMdBGh1c0bfkcX7b5TOYP5wl9%2BV1UD1%2BQiV%2B2%2FIWEoxEUUSDgDsdUgwcyYs%2FtVeJBrwbsUe5Js3VRKYlkOM%2Fr61rtU%2BYHmlx%2F1LUTvtvi55%2BCePvbtvPLUsD8KdV37lkc75zywy3fj28NnzyLE2BsYmtgaDDPjsX3RGhoBNsKrjjoAukCP8sYg0TU4LEM%3D%7Ctkp%3ABFBMgOzU14tj",
      },
      imagen: "monitor.jpg",
  },
  {
      marca: "AOC",
      nombre: "AOC C27G2ZE/BK 27 LED FullHD 240Hz FreeSync Premium Curva",
      gama: "MediaAlta",
      precio: {
          amazon: 193.91,
          ebay: 378.16,
      },
      link: {
          amazon: "https://www.amazon.es/AOC-Monitor-C27G2ZE-BK-Flickerfree/dp/B08897N6HB/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3J50IV87XFDRG&keywords=AOC%2BC27G2ZE%2FBK%2B27%22%2BLED%2BFullHD%2B240Hz%2BFreeSync%2BPremium%2BCurva&qid=1702375454&sprefix=aoc%2Bc27g2ze%2Fbk%2B27%22%2Bled%2Bfullhd%2B240hz%2Bfreesync%2Bpremium%2Bcurva%2Caps%2C82&sr=8-3&th=1",
          ebay: "https://www.ebay.es/itm/125997534581?hash=item1d5609cd75:g:3pEAAOSwj0Nkn-ly&amdata=enc%3AAQAIAAABEKWwgMFdaVNV%2Bhqf5XcHm25eqqyaWnphzVpf5CcW0aIiKsZ%2FK6WiJyrSntV3uCIyfgy%2B%2FldVwgQCvgY%2FtGuOsJqQ%2Bh%2ByboAKjryXkEjVeAgVp7j8RNrya%2BYiNrl44qtpkmq3Wfig8%2F2QUb9DB3n48qjkUJDndUA%2BsEvESEmxYB6YJZp6HxDwezFda0V3B1XOG2LrHN%2FavxbePQruRLSZNnqVVAtqyp1f8kVQ3sAmH%2Bt1odRtUWI88f6GrmVm15h1wWcOKy7ABbfn9IKwTif6v503b5H%2B9eiI6BG4mwZZZPCwZtbos0a%2BeyvdW60ocVolPqk3Hx%2BjzqikttsOOGVQoE6SOgPOjO5F%2BEM2uwZ%2B6%2FZ6%7Ctkp%3ABFBMhpLh14tj",
      },
      imagen: "monitor.jpg",
  },
  {
      marca: "BenQ",
      nombre: "BenQ PD2705U 27 LED IPS UltraHD 4K FreeSync USB-C",
      gama: "Alta",
      precio: {
          segundaMano: 350.00,
          amazon: 399.99,
          ebay: 427.44,
      },
      link: {
          amazon: "https://www.amazon.es/BenQ-PD2705U-Designer-Technology-Compatible/dp/B096B3PBFZ/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1KV42DODKNYQ7&keywords=BenQ+PD2705U+27%22+LED+IPS+UltraHD+4K+FreeSync+USB-C&qid=1702375667&sprefix=benq+pd2705u+27%22+led+ips+ultrahd+4k+freesync+usb-c%2Caps%2C83&sr=8-1&ufe=app_do%3Aamzn1.fos.0fd54328-1d46-4534-bd0f-16141b40bb5b",
          ebay: "https://www.ebay.es/itm/374225095700?hash=item57218dcc14:g:9AEAAOSwG3BjBLVf&amdata=enc%3AAQAIAAAA8Ll8jtr0C17TiZu4nLeUYEp9nh7863QqicbyEg03fSmq8qFzBCQSct4rkuhoBjgpYzgZSjX9gkeFVduih3But42LdbHMNtu2R6Zw61MyXY2qSDSdSkASKCqKbv7pMALjPO5rEEWkIbNrEjwmp0zbVjb7VwaN7eHCMmHd7DoDGcGIpmIEIblpAeCz7p7lYFbKk1YMrJhFpcuGDunBWNIKUUfAr1cROyQTCSlQuQE8MicmTcNxQCNJMW9bTUIXEYkHF9adHwBX77yMc17llj1L0dDnLMcjjlzzQR8CLzVnyvhwN0AME2nM47myVzufgHiiUw%3D%3D%7Ctkp%3ABk9SR9Kt-teLYw",
      },
      imagen: "monitor.jpg",
  },
  {
      marca: "Asus",
      nombre: "Asus TUF Gaming VG28UQL1A 28 LED IPS UltraHD 4K 144Hz G-SYNC",
      gama: "Premium",
      precio: {
          amazon: 628.90,
          ebay: 835.29,
      },
      link: {
          amazon: "https://www.amazon.es/ASUS-VG28UQL1A-3840x2160-Compatible-DisplayHDR/dp/B09CDVMNS7/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3IYN8YJ2BUUZJ&keywords=Asus%2BTUF%2BGaming%2BVG28UQL1A%2B28%22%2BLED%2BIPS%2BUltraHD%2B4K%2B144Hz%2BG-SYNC&qid=1702375774&sprefix=asus%2Btuf%2Bgaming%2Bvg28uql1a%2B28%22%2Bled%2Bips%2Bultrahd%2B4k%2B144hz%2Bg-sync%2Caps%2C87&sr=8-5&ufe=app_do%3Aamzn1.fos.0fd54328-1d46-4534-bd0f-16141b40bb5b&th=1",
          ebay: "https://www.ebay.es/itm/314987242407?hash=item4956b3e3a7:g:4r0AAOSwfbZlYfVH&amdata=enc%3AAQAIAAAA8FGAAgJEpHdBXvFP9xIkYkgy349TXX8vc%2FNm0Q5M9I1BfwR5KopqXxv5I0RUtBB7PAPOhT4Xp58HJqHrltgCJ2fjmi7YDtDcyM3Q%2FmO38ULS1ypi96%2Fn1utnyHVRfwuFdHM2rhY3TN9z2lZrqtPt1OE5ZecPEdRUJdT5V7YUHHA27QbMgTlJN0x6sQ6uHduun9G4pSnZOB0nwsgEObteSH6SKlmFEqqe4YIRU004%2BQunUsVivbs0r3EgbPVOPjDRKzg7VUstYsZBAItBh%2BeZoY%2FcWuyRjQUcn8I%2F83T1FRKOqSheVVcn7QExqdjRY6tRwQ%3D%3D%7Ctkp%3ABk9SR4q7h9iLYw",
      },
      imagen: "monitor.jpg",
  },
]

const disipadorList = [
  {
      marca: "Cooler Master",
      nombre: "Cooler Master Hyper 212 Halo White Ventilador CPU 120mm",
      gama: "Media",
      precio: {
          amazon: 44.99,
          ebay: 34.51,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-Hyper-Halo-Disipador/dp/B0BNYV6NV4/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2RSHBEBOJ7HPQ&keywords=Cooler+Master+Hyper+212+Halo+White+Ventilador+CPU+120mm&qid=1702376224&sprefix=cooler+master+hyper+212+halo+white+ventilador+cpu+120mm%2Caps%2C163&sr=8-1",
          ebay: "https://www.ebay.es/itm/404644387241?hash=item5e36af59a9:g:g~4AAOSw8-hlYpyV&amdata=enc%3AAQAIAAABEPAInrU4yJ6OlQqNBMMfVdki2Rx8BE2qrG%2BtJeOJ6OO1cZm8S8dPL66bFlCVje%2FzXtdFYen7uw%2F00ptt94eL%2FIFXpOKA59sLvW45yv4DjSmo7VOJWbg9qEfzFBTh3IJczIQ5edJgUrAZwXf57qzSPLOUw5BGon4%2Fm90FkbGv%2FDa54lDbGY4xkyTW9eB%2F%2BIefycHIP7Sph0bszm9eAtL9NgrzQ4KBsOdPtDnELpJlbVonl%2BfTVZ%2Bg%2F1n%2FRvcyDOHgUDK5UXMX6H%2BFAO3JNXuXdNCdcSnAx%2B46J9%2BXeO4jD2t%2BQLM7IIuRA8Jotc9mXwpQ6UPvoVRuouQAwyBApGNkElzvPqXYwoQ0fwZ5llXxxGm4%7Ctkp%3ABFBMxO--2Itj",
      },
      imagen: "disipador.jpg",
  },
  {
      marca: "Noctua",
      nombre: "Noctua NH-U9TR4-SP3",
      gama: "MediaAlta",
      precio: {
          segundaMano: 70.00,
          amazon: 89.90,
          ebay: 153.34,
      },
      link: {
          amazon: "https://www.amazon.es/Noctua-NH-U9-TR4-SP3-Procesador-Enfriador/dp/B074DXFB66/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1PXQUGV4L3U18&keywords=Noctua+NH-U9TR4-SP3&qid=1702376328&sprefix=noctua+nh-u9tr4-sp3%2Caps%2C117&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/126048605834?hash=item1d5915168a:g:OeYAAOSwU8Rk1g5d&amdata=enc%3AAQAIAAAA0O1B0ULWjXx7JZRi2UpcRpmukoj80PaCQQsN%2F6krt2ChpE7ALgLNtO%2F5Av5XWrxCdrutF6q5oD9Jr9%2Bf4MiNp%2BfSmIqbalJJzNjPzEqSHD3ovWyl0M1cPRP8R7UMi3UWLj4kLkoqbNZ%2FrHeS2cr%2FLH6bci8xdQ%2FKm7ihzGNkvtqaYLXUFuIP%2FAXyB8pF6XzTNPZQYWb4dudbgXBzZJMwMPkaf%2BluTrqDIXPF%2FpKDnhCjNTTg%2BXdO%2FY44%2BI1br9NDJhGJmNC7RJzVZXU8lvmhM9c%3D%7Ctkp%3ABk9SR7btytiLYw",
      },
      imagen: "disipador.jpg",
  },
  {
      marca: "Cooler Master",
      nombre: "Cooler Master MasterLiquid Lite 240",
      gama: "Alta",
      precio: {
          amazon: 59.89,
          ebay: 110.71,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-masterliquid-120-Ventiladores-mlw-d24-m-a20pw-r1/dp/B0763PS24T/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3BN78V64KJ529&keywords=Cooler+Master+MasterLiquid+Lite+240&qid=1702376543&sprefix=cooler+master+masterliquid+lite+240%2Caps%2C98&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/305249414973?hash=item4712486f3d:g:ckkAAOSwJxtlRmf1&amdata=enc%3AAQAIAAAA8JLW1Wf9%2BoLg654gT4qiga2RmM6B0ccpz3m3gkvAejrU9tHZozYLfnWrTOrlcl8wmCRqMCA5P8MM2M%2FdtKVPlWdt4PVNA%2FSmJiubO83uuWWQDP0qIyEbYCyQ%2BHbHv2mSxE4wUTLfFghDtUj3tv%2BhPKdSmN76p431ENiLwPy7yUoWovC6B%2BwAUzLYcU46YFrDJf%2FzNGFUKmt9Ua8k%2BxOqUe4PQLTT9FOXb6kasaAXKig1MgipFSbn0AMCIqF80uV1dtsg03hIm4E%2BmROmR%2F99%2B0vk9Vgtj0aTZqKDKBo6TMXpsd6naKIxOUSQt5doiGHfhQ%3D%3D%7Ctkp%3ABFBM_r7l2Itj",
      },
      imagen: "disipador.jpg",
  },
  {
      marca: "Corsair",
      nombre: "Corsair iCUE H170i ELITE LCD XT",
      gama: "Premium",
      precio: {
          segundaMano: 170.00,
          amazon: 382.99,
          ebay: 208.34,
      },
      link: {
          amazon: "https://www.amazon.es/Corsair-H170i-Elite-Refrigerador-L%C3%ADquido/dp/B0BQWTVYLV/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=XYQ9FIXDTU3A&keywords=Corsair%2BiCUE%2BH170i%2BELITE%2BLCD%2BXT&qid=1702376744&sprefix=corsair%2Bicue%2Bh170i%2Belite%2Blcd%2Bxt%2Caps%2C90&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&th=1",
          ebay: "https://www.ebay.es/itm/386171376022?hash=item59e99b9196:g:x7AAAOSwXMllHvS7&amdata=enc%3AAQAIAAAA8Mn2OOQETkUR%2BUnvawKImluI226QrP3o8dJ9XYKOvcch1n%2F5PLbWYElzQmq9U7lFzME38DBqvOoFB61jEuWUJNq%2FU7ajDGbIUPXbCswPu%2F7BXTuzHR6kxVURrDLcUdyVT5YXj0MGrSHlRU%2B%2F0nJL2UW%2BlGh2LdfjKsnKm3VFxeJTvP%2FA2rFpfo3UeN9yIeuRAMJW7olZoGdyKii3fKhS%2B1gXwQNIx%2FpTOiEwwdqpkogNq6pJ6tsbY2Yor09tZ7wbUJCq77bRDwyakzlZ2VzY5UESVBQkZb%2FY3y7i1QrH23Uk3jNphquNUavZxffRJJ1tkw%3D%3D%7Ctkp%3ABk9SR6Ka_tiLYw",
      },
      imagen: "disipador.jpg",
  },
]

const cajaList = [
  {
      marca: "Cooler Master",
      nombre: "Cooler Master MasterBox MB600L V2",
      gama: "Baja",
      precio: {
          amazon: 81.02,
          ebay: 106.99,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-MasterBox-MB600L-Minimalista/dp/B08XQJCBCJ/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1365JFE4VZWJJ&keywords=Cooler+Master+MasterBox+MB600L+V2+ODD+USB+3.2&qid=1702377235&sprefix=cooler+master+masterbox+mb600l+v2+odd+usb+3.2%2Caps%2C142&sr=8-1",
          ebay: "https://www.ebay.es/itm/385691635765?hash=item59cd035035:g:IqEAAOSwa99ki8ut&amdata=enc%3AAQAIAAABABX%2ByfkY1FAs43%2BJLrt0LHajtXVY9quYAGncy%2FVEUF4n2Wm3NmSz4AmR6hpeSvC428b431%2BgClv7RXAYNbZmGSz%2B8%2BbPSt%2BpZftAFzZpQ18hqEXK9KU1h7pvk2jFb0m0%2F2gf98v0icVOzTpJvtuGnk56%2FMmc7lpQG%2FjlYO4SdQ3dG%2FguzrgySi%2BgAqznx3Jb3U5HZaI9tYACLC7baV3zJdR4Y4KJbZWuentRbJxt9Fv0svEYXBnlM5YCWf8CHzDHSBCF%2F800r1CafasRNgnKbQdaOhUpYScZyjshUhflFR5eH0ZqlN065Vz5b3jMk7vWs4pNz72Prur6F%2FwKD9kPANs%3D%7Ctkp%3ABk9SR5r8udmLYw",
      },
      imagen: "caja.jpg",
  },
  {
      marca: "Cooler Master",
      nombre: "Cooler Master CMP 520",
      gama: "BajaMedia",
      precio: {
          segundaMano: 60.00,
          amazon: 83.36,
          ebay: 87.57,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-MasterBox-MB600L-Minimalista/dp/B08XQJCBCJ/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1365JFE4VZWJJ&keywords=Cooler+Master+MasterBox+MB600L+V2+ODD+USB+3.2&qid=1702377235&sprefix=cooler+master+masterbox+mb600l+v2+odd+usb+3.2%2Caps%2C142&sr=8-1",
          ebay: "https://www.ebay.es/itm/134784652768?hash=item1f61ca95e0:g:yqoAAOSwN9llPCAh&amdata=enc%3AAQAIAAABEPmNLne%2Fw315K8NpQC0wcvEbfQUNcEBkcbgRoMcYQ%2FcuiZI1FiYcjXJrMtY1rBWDHt%2BCiCPJ72JcRZF4itEZwhbtn4hivY0Ris9yJnRc02UPmDfsLEk9RTd20dwn3j3JDuMz7Inonwk5jeNSl2LkUmfrUBfPKJnnvru5w%2FSkivU8ix3%2FqHUiZfY8iKF9uhw6yxPPRs2jSdLQpwWWIpc5JLgWTIGVYGX8KjrbLp3HsXVS%2BNpJWbED%2BuP7SbXU5%2FE1y9A5Ncrt4jWnFtCg8lM3XzlKz1xtkgBs3QgwoMjkPTvg3%2BJSF5u%2Bd7cCa4nVACP5ZEOTqw9x58m0ZKHvnTPBtYCubE%2B%2B2Q0q8312cZpfzGGr%7Ctkp%3ABFBMjuDt2Ytj",
      },
      imagen: "caja.jpg",
  },
  {
      marca: "Cooler Master",
      nombre: "Cooler Master Silencio S400",
      gama: "Media",
      precio: {
          segundaMano: 80.00,
          amazon: 110.93,
          ebay: 119.83,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-Silencio-Midi-Tower-Negro/dp/B07STP8MYP/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2MUU0PPF8M7JC&keywords=Cooler+Master+Silencio+S400&qid=1702377785&sprefix=cooler+master+silencio+s400%2Caps%2C82&sr=8-3&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/305193626279?hash=item470ef52aa7:g:FccAAOSwM55lJUnc&amdata=enc%3AAQAIAAAA8N2xcK6yCkO0ifgoOPTGblIIfp5f9gWV3YC1rd4CM1CyRz3kwD%2FBaXO2MZHG9DirjDyOzo3vKNsKGuSyMOyBi0pXMLOBN1Ia%2Fe%2F641Fxap4bnDBidq7qLusjEh216wKrdRZm8HEoz5KKd5zFVitUDFlqaNbqLxw566ZLkuw7xt7vvklUekMZIE%2FzTgOLfmRcphyq3gMakooLoxhdll%2B%2Fyq0bxd%2BFXJdfAqYGyOrKlLiySA%2B9IIPdOhxUl3CCQ%2B%2BU04ySEkUgoxK3vOkHyoOMF8iBWXTlNg5fdnALU9ju1%2F%2BnxHiSmxnwvdz18MTmojVfFA%3D%3D%7Ctkp%3ABFBMoPj92Ytj",
      },
      imagen: "caja.jpg",
  },
  {
      marca: "Cooler Master",
      nombre: "Cooler Master MasterCase H500",
      gama: "MediaAlta",
      precio: {
          amazon: 116.90,
          ebay: 146.39,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-MasterCase-Ventiladores-Transparente/dp/B083FLCWT2/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2BD7TJ3EJFK8A&keywords=Cooler+Master+MasterCase+H500&qid=1702377867&sprefix=cooler+master+mastercase+h500%2Caps%2C112&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/125799651197?hash=item1d4a3e577d:g:b6sAAOSwK5RkAPUa&amdata=enc%3AAQAIAAAA0JVJED23iy6H9X4muzqk3oDMvISX6wEbADaGNNdnym5JCx4ITZ3slLglxu5oh1cVyc1z%2B%2FO9eGE52w9UM2ODKsWrfM1D6bRtMHMxhuFQjZIV%2Fta7RSffqmJKQSqPKO1IlQQ1RCG6wXyRPPgMQo6wMfW6d3PyN7ufvmzbqmDINiPw9BgaxtYX5MaNj%2FRFDdeD%2FGpV%2F4JVQPEK6%2FFr77xW2wsafibFTUSUa8Yw2dBHdarxVjcyP%2BKPq5QHUzopBM1tWjCQCApPI9%2Bm1pTjpeyu1pY%3D%7Ctkp%3ABk9SR4TWh9qLYw",
      },
      imagen: "caja.jpg",
  },
  {
      marca: "Cooler Master",
      nombre: "Cooler Master HAF 700",
      gama: "Alta",
      precio: {
          segundaMano: 330.00,
          amazon: 426.95,
          ebay: 385.50,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-Caja-ATX-Preinstalados/dp/B09RVWCLRF/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=13PG46OKE1T4D&keywords=Cooler+Master+HAF+700&qid=1702377970&sprefix=cooler+master+haf+700%2Caps%2C93&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/155555922029?hash=item2437db006d:g:584AAOSwNNBkYlx4&amdata=enc%3AAQAIAAAA8PGt%2FKBX5vNZ0tPvj2oseBvCUL%2BAwMh%2FA6jwi6rPp6NS9gG5vFVyjfS4oS03JIFpCrrg%2FDD7iyIlAGCTfa4P4i54YLNOF6c%2Bn77sGSFsPc4LB87rnwkw1oH1fECyVq6VEjiIxpqcRElEP%2FJFNvnbCd2I8zVXyhAEc1%2B%2BJZxiS9Vg00kVRsXGuA%2FfdAtYB0zi4psVQ0G7aqqUn7M5%2FUCrMBc%2FzXskNIVoRebddNSjqbsj6H3Bo%2BNicFihHZKb8fT8S3rgNewZwvwwIY5QiJ1gtXo%2B%2FUgHpwQUR2AgxZL%2BxqpjPM84uVvqMRBGXlZ4aE5AJg%3D%3D%7Ctkp%3ABk9SR6Lyk9qLYw",
      },
      imagen: "caja.jpg",
  },
  {
      marca: "Cooler Master",
      nombre: "Cooler Master Cosmos C700M",
      gama: "Premium",
      precio: {
          segundaMano: 450.00,
          amazon: 511.46,
          ebay: 504.94,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-Carcasa-Ordenador-Full-Tower/dp/B07H6MKSXZ/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1TUFJLFZZHZG5&keywords=Cooler+Master+Cosmos+C700M&qid=1702377999&sprefix=cooler+master+cosmos+c700m%2Caps%2C79&sr=8-1",
          ebay: "https://www.ebay.es/itm/404647741259?hash=item5e36e2874b:g:bGQAAOSwDaJlZP--&amdata=enc%3AAQAIAAAA8K%2Bye8%2FnC64iXdxWYt0eI%2FF4zmdq%2FoNDHXw0b9%2FbRGzZvr6J63yp9Gbrg6f7zLqTpac%2BfkM8G50WAr4Ua%2BjahwwSumPU9FpTxUwGtA6%2B6ESUqZIE5NrR6qxUxY6cBEBwSKf%2FieGyMgi%2F%2BQbdfnYaXJ8LlCDZouDq9naEgLLmfiJ8JGhlOCUxqn9uQ6h3iV5QYL9m8fEHR2w3AzDq7voDYm9zvox5vG%2BUhPgIdQeiiLHfVm1xnuRYdXWy1NM%2BdcFV9Sc0%2FRtxV04MeYRUJbFn0pCGRsptRTS2HI8TnAPVzFtBx7CZTQOvDQklWpqj4S6tYA%3D%3D%7Ctkp%3ABk9SR5SWl9qLYw",
      },
      imagen: "caja.jpg",
  },
]

const fuenteList = [
  {
      marca: "L-Link",
      nombre: "L-Link Fuente de Alimentación ATX 500W",
      potencia: 500,
      gama: "Baja",
      precio: {
          amazon: 18.49,
          ebay: 15.95,
      },
      link: {
          amazon: "https://www.amazon.es/L-Link-LL-PS-500-CAB-Fuente-alimentaci%C3%B3n-Blanco/dp/B0758GLF4G/ref=sr_1_4_mod_primary_new?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3PHD73RN0RP6C&keywords=L-Link+Fuente+de+Alimentaci%C3%B3n+ATX+500W&qid=1702378260&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=l-link+fuente+de+alimentaci%C3%B3n+atx+500w%2Caps%2C80&sr=8-4",
          ebay: "https://www.ebay.es/itm/304934689716?hash=item46ff861bb4:g:GKYAAOSwfvVkXg0G&amdata=enc%3AAQAIAAAA4FPZXA%2FDjkCHgitmwFpaai2cVAMxSWIlhD8hVSZHu6wi4T%2BrHyCklwPC1OLp%2F0qt7187IdEMNEO5QSYZCFrehelRZjixpLCmujRVKaUEtRxleoFUqyLusTz8NnBRIRU4MUEtCAt56yymTWlPRzN34H6jp2oXnaiedNdTnXYXKeYuxG%2BwNKAw3kPORRwQOAtWRkpSljRXIQMmQgKV8%2FDJbdzvvDVvWmcLNb5hAJ1SXLDRpcaZbzRAjbWz2tAQLYL9ZO6vWAN5FFf9Yw9VSuAd42rkhNU5GwUIwpMzR4f6yzT4%7Ctkp%3ABk9SR_b7t9qLYw",
      },
      imagen: "fuente.jpg",
  },
  {
      marca: "UNYKAch",
      nombre: "UNYKAch Fuente de Alimentación Gaming 700W",
      potencia: 700,
      gama: "BajaMedia",
      precio: {
          segundaMano: 25.00,
          amazon: 31.94,
          ebay: 39.90,
      },
      link: {
          amazon: "https://www.amazon.es/Alimentaci%C3%B3n-Ventilador-Silencioso-Corrector-Potencia/dp/B016DK6VHQ/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1X59VB7L9LFV7&keywords=UNYKAch+700w&qid=1702378695&sprefix=unykach+700w%2Caps%2C82&sr=8-1",
          ebay: "https://www.ebay.es/itm/164775228753?hash=item265d5e7551:g:o9EAAOSwJmVgZ1Pr&amdata=enc%3AAQAIAAAA4JmaYJjI%2BLPCHjjLi9vZ4SgQPL4UKbjYYUpxauO3VndEuS1lAKpPRoIgYUjHMIUEIlRISLyCAKgBXFlfSphhgvSrDTasHfA8bJYsWBUGuGEPW9MPvSWjHsSCwe1oBJk2sKYgNEmAw18zqV5jZhsk%2BzqZLRRUz4Msu2EgSJAbe3E4ucCxSrJJzWvyB0EFD1l3qHyv2fpeMFTymoEWiYp%2FayjlDB5ICZbS5eoH0yAilXm2Pg6gpXzfRfgV22rSFoJ%2Br3jA540ozE4GKa%2BdXHiBAhIqkSfc54gvC6NCSmwkBVJ9%7Ctkp%3ABFBMvsHs2otj",
      },
      imagen: "fuente.jpg",
  },
  {
      marca: "Mars Gaming",
      nombre: "Mars Gaming MPB650 650W 80 Plus Bronze",
      potencia: 650,
      gama: "Media",
      precio: {
          segundaMano: 30.00,
          amazon: 43.44,
          ebay: 85.84,
      },
      link: {
          amazon: "https://www.amazon.es/Alimentaci%C3%B3n-Ventilador-Tecnolog%C3%ADa-Silenciosa-Eficiencia/dp/B0CLGR31LB/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=399Y5HGDWUO0G&keywords=Mars+Gaming+MPB650+650W&qid=1702378967&sprefix=mars+gaming+mpb650+650w%2Caps%2C85&sr=8-1",
          ebay: "https://www.ebay.es/itm/195998675651?hash=item2da26e72c3:g:X0YAAOSw4a1lO9KU&amdata=enc%3AAQAIAAAA8LSyI3IdJ0QFJ%2BBT7BPEktgRDVDqkyfhuJITqAXiZ%2BBwgjglyxt1hRrSr5Qpi217X8NzSZHOQUnQppj0HpoKASD5CC3Oq2wnXMSUFOcb%2B2d4l51%2FXltZy0iO4wKtru%2Bemndk0sjyERS%2FRJYY44IxuUZC6T5h10Ylv5Eqa%2Bi9Tovv1dOM22B7VrM8Htz4siyhkK3Omf6G6QhXbZIJkd1iErDWLm6QDf53BJ1eIX%2BPmRqlmxrVNW7ZGQNj9wfPOwQotjFugCEzT3H6AjP%2BXX5pT8FHO%2F86vLrAzjWrqaSEtDdFlXDrY66ioCV9%2FSx8n9vjAQ%3D%3D%7Ctkp%3ABk9SR7LzkduLYw",
      },
      imagen: "fuente.jpg",
  },
  {
      marca: "Mars Gaming",
      nombre: "Mars Gaming MPB850M 850W 80 Plus Bronze Full Modular",
      potencia: 850,
      gama: "MediaAlta",
      precio: {
          amazon: 74.89,
          ebay: 49.99,
      },
      link: {
          amazon: "https://www.amazon.es/MPB850M-Alimentaci%C3%B3n-Tecnolog%C3%ADa-Silenciosa-Eficiencia/dp/B0CD1V5RV7/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2ZTXK81EYHQD8&keywords=Mars+Gaming+MPB850M+850W+80+Plus+Bronze+Full+Modular&qid=1702379167&sprefix=mars+gaming+mpb850m+850w+80+plus+bronze+full+modular%2Caps%2C77&sr=8-1",
          ebay: "https://www.ebay.es/itm/256182307415?hash=item3ba5a7ca57:g:vqwAAOSwlUVk2j1R&amdata=enc%3AAQAIAAAA8LAhit17NUhJBtbcrlRipaYdfSV4NxIAsZjFuXt3TlFpaPyZfD2bZGmwWsynYePQGXyhyCLIxIjTgtVE3qT2PeSbyK7pN4RgJlHsdesQtBmY4bACeJvHwlEjVCGjXEwoLfqsWBcXMs2sdMcZAUJXyzuqOtIsRPE2PMAcN9bcpFn%2B9Liirru9VWVzGzL7xKk6w5wUs%2FYpE71X5WoEockZz15ht0hFFmlHADUoxD%2BQYsA9CHn6Kl59ha8lYCoT0oJTbdqHFqCFkDH93F69XLByv4LlACeWa4%2B%2F9L2KFolWh2cmrmu4mbmBHFyflb%2BzpO%2FW4A%3D%3D%7Ctkp%3ABk9SR4LspduLYw",
      },
      imagen: "fuente.jpg",
  },
  {
      marca: "Mars Gaming",
      nombre: "Mars Gaming MPB1000M 1000W 80 Plus Gold Modular",
      potencia: 1000,
      gama: "Alta",
      precio: {
          segundaMano: 50.00,
          amazon: 89.90,
          ebay: 69.98,
      },
      link: {
          amazon: "https://www.amazon.es/MPB1000M-Alimentaci%C3%B3n-Eficiencia-Tecnolog%C3%ADa-Ultrasilencioso/dp/B0CM6FGXDM/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=51QTIC5Z0D71&keywords=Mars+Gaming+MPB1000M+1000W+80+Plus+Gold+Modular&qid=1702379378&sprefix=mars+gaming+mpb1000m+1000w+80+plus+gold+modular%2Caps%2C84&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/256182320961?hash=item3ba5a7ff41:g:-xoAAOSwQSlk2kFH&amdata=enc%3AAQAIAAAA4HYeuKYSB0UcX0iuBpA45gncbltiU498dOir2x8g1m%2FOfa8v8%2F8DY2RLa2ApWoZ6XNF%2BH8nCMNn4n0%2FTqEuHibzya4sgV477auDOw8prGqlJTdmVH57Ei4%2FrykfOnc79CaAXVs1y0UO5gQx8VTlQWd6aqr0KjXVa5CWsQSuuBCJ2nAspInx0lU0bbIM8CtRl8H8qZ9%2BsG9zik0rCIXVqASlWu1pesXcp9lZTCcV5jG4VRRJE9sy4NQibFDhSHBC8kgSzEYGaLctp72%2B1XBscCuJRBRkmDqL4Ky30IEepAh4v%7Ctkp%3ABk9SR-LjwtuLYw",
      },
      imagen: "fuente.jpg",
  },
  {
      marca: "Asus",
      nombre: "Asus ROG Thor 1200P 80 Plus Platinum 1200W Modular",
      potencia: 1200,
      gama: "Premium",
      precio: {
          segundaMano: 300.00,
          amazon: 357.36,
          ebay: 520.00,
      },
      link: {
          amazon: "https://www.amazon.es/ASUS-calentadores-ventiladores-rodamiento-tecnolog%C3%ADa/dp/B07J9NHZZH/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=147OPGWA6SCA2&keywords=Asus+ROG+Thor+1200P+80+Plus+Platinum+1200W+Modular&qid=1702379518&sprefix=asus+rog+thor+1200p+80+plus+platinum+1200w+modular%2Caps%2C77&sr=8-3&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/374923541968?hash=item574b2f3dd0:g:iMAAAOSwaQZk~CEV&amdata=enc%3AAQAIAAABAGU4hLSXkIsRskS%2FMrPn142K8RhFX42T4C271yRDG2iCIt7mUpVTFcg%2FRIaNF3eMa5dVBBnlFJMovf4Vb5ZL%2FyFWbJW2Eqs0abcb8e7zEQ4il7kn7LDYp9LYRj5M9fNYV%2FRO4Gvc706Fi9kPOW0haTq%2Bb5%2FFBQXzQzDKF25ZnwxhzGRaLAF6C2MCFAJIlu7mc%2FHfCoxFzteEmoRl72zyJOWipRMoJVXaGML0Ig%2FtLDaIyXLH3d7TqMGpyDgVkzkIYeIJcU2%2BSkuNsDdE3sP69GvQrg%2B%2FErZgn0rz%2BPWv3ln0dIuAUIXWDXvxMajYFIPAkdBqdpG40lq2VsF1uXQwTEA%3D%7Ctkp%3ABk9SR8iL0duLYw",
      },
      imagen: "fuente.jpg",
  },
]

const ratonList = [
  {
      marca: "UNYKAch",
      nombre: "UNYKAch Ratón Láser UK G5",
      gama: "Baja",
      precio: {
          segundaMano: 5.00,
          amazon: 12.48,
          ebay: 6.99,
      },
      link: {
          amazon: "https://www.amazon.es/Unykach-Botones-Seguimiento-2200DPI-Velocidad/dp/B00CLATGAM/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3NIVCOJGTO1ME&keywords=UNYKAch+Rat%C3%B3n+L%C3%A1ser+UK+G5&qid=1702384745&sprefix=unykach+rat%C3%B3n+l%C3%A1ser+uk+g5%2Caps%2C111&sr=8-1",
          ebay: "https://www.ebay.es/itm/334864993159?hash=item4df7824b87:g:WBcAAOSwc-5kWPn3&amdata=enc%3AAQAIAAAA8KJluxuqTJrqVKv4G0CvgJyHiDo3XkDo9C%2FN4FdASkXB11KWsVmpbBZDSwvcCUhImGlPe%2FG5q%2BnGUfWSsW2b%2FWwhRkNTHNz51AGh8sedlIHI%2FSMdTlzWOhP2v0FtPaArrgDSU80RWBA8dGH2E7h9F%2FMu9yD5%2FdLWOMRSlvDbQNDCbtBAp0V3xmm%2Ft3B9c0KBPip%2B1OVMzpCwC5iRWdeyZFLYrvGdWjcUYhPX3MGfoY6TNaHZ0eFtMJJdUjkBaBcHV8B71GhVjQwNgcc2nDWLh33XQ1Av%2B6pZNu2rUeGX5bgp5lqOKcTpOl0Wdwa11qr6%2Bw%3D%3D%7Ctkp%3ABFBMxN7O4Itj",
        },
      imagen: "raton.jpg",
  },
  {
      marca: "Gigabyte",
      nombre: "Gigabyte Aorus M2 Ratón Gaming 6200DPI",
      gama: "BajaMedia",
      precio: {
          amazon: 17.47,
          ebay: 26.61,
      },
      link: {
          amazon: "https://www.amazon.es/Gigabyte-Technology-AORUS-M2-Aorus/dp/B07P9XX6K1/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3DR7ZFRT049BS&keywords=gigabyte+aorus+m2+rat%C3%B3n+gaming+6200+dpi&qid=1702384895&sprefix=gigabyte+aorus+m2+rat%C3%B3n+gaming+6200dpi%2Caps%2C96&sr=8-2",
          ebay: "https://www.ebay.es/itm/165429268862?hash=item26845a517e:g:3K0AAOSwB7ZhjJlZ&amdata=enc%3AAQAIAAAAwNzqxEOMcHtBVWPK72BgOVXUKxWZFCXAQPKiTlRRX1t9%2BAUuyBk9Gwaym7wWVB%2FEyRSf2LFFfPMBtRFbTv9OFR0%2F6bdodzsa7EreUJ%2FlihFRopNPzsLzs9XssO2ih8VdboYkbGWlHrQMvED8bYyddIJnrPQ%2BH%2BD9ztcSqsXfqiAzK4FDfHv7yXfCDsYBwRgYd3ReyUPVWMC9NLJot%2Fa0OqR0BSgtTJ5cLsvvUTIgR1%2BabTWo0tME6RxuXoADQIKDDg%3D%3D%7Ctkp%3ABk9SR6rr5eCLYw",
        },
      imagen: "raton.jpg",
  }, 
  {
      marca: "Razer",
      nombre: "Razer Deathadder Essential Ratón Gaming 6400 DPI",
      gama: "Media",
      precio: {
          segundaMano: 20.00,
          amazon: 24.99,
          ebay: 32.15,
      },
      link: {
          amazon: "https://www.amazon.es/Razer-DeathAdder-Essential-programables-interruptores/dp/B092R71V77/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2CWI3JZK2DFY6&keywords=Razer+Deathadder+Essential+Rat%C3%B3n+Gaming+6400+DPI+Blanco&qid=1702385105&sprefix=razer+deathadder+essential+rat%C3%B3n+gaming+6400+dpi+blanco%2Caps%2C99&sr=8-3",
          ebay: "https://www.ebay.es/itm/314973111932?var=613464414601&hash=item4955dc467c:g:ihQAAOSwbyRlCZMg&amdata=enc%3AAQAIAAABEO4eMS74DyZm3qbibCAAakSPnTrpk5GzERWm061Qnt%2B%2BK9Dgi%2B5pjW0jKQ77lW6K7MxbbKUutT6sDAfxgpxnWWI7D2D675%2B3tgV6V96OQDlxxo%2FLKOAQ2XqzjOFliMXiHwMzQEfmj71EpG4Gptlo5rHnraM7tOOHukWyJp8d0ypi63kn5uCzEThDd8a7lPcXk59sm9YREDs%2FvXrZOzRkTXR8%2F81%2FhYgJ2p6oeAmjs7kLyTZikLK%2FcDZbIae7KUGyhJ%2FF4tV6aaNcI4pxvjmFzBjOX%2BaGryoScViceoXJrdm0u%2BQuXSsQsEOjcARsdh5kyiuzEZhGeyZvMAZzFGn%2BJmqrTs8UPTPLOUwmObIJES%2Bn%7Ctkp%3ABFBMvsr84Itj",
        },
      imagen: "raton.jpg",
  }, 
  {
      marca: "Razer",
      nombre: "Razer Viper Mini Ratón Gaming RGB 8500DPI",
      gama: "MediaAlta",
      precio: {
          amazon: 49.80,
          ebay: 40.29,
      },
      link: {
          amazon: "https://www.amazon.es/Razer-Gaming-ambidiestro-Speedflex-Iluminaci%C3%B3n/dp/B084W6W9WB/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1KI572ILK66QQ&keywords=Razer+Viper+Mini+Rat%C3%B3n+Gaming+RGB+8500DPI&qid=1702385246&sprefix=razer+viper+mini+rat%C3%B3n+gaming+rgb+8500dpi%2Caps%2C89&sr=8-5",
          ebay: "https://www.ebay.es/itm/176039201950?hash=item28fcc10c9e:g:joIAAOSwBOFlV6Qm&amdata=enc%3AAQAIAAABAExhU89%2B6%2BCB2LhPj3H6AdwbuMCqPY548ILr%2F2pSyVMIzsUCNQJPiVXpTjehF07WoRP8ZJZWUlXQaVYGRkH7DLXGjL6%2FDqPv4kTPSEN9IEEkyo59LjAHsInivEw3DeuwFQb3FA%2BSLtKUFSah7ICli6CQClw80ct6cnjUakDeWb%2BSPhtmf8ZlPx5NysO3vr2Rv3M6nwRskg0Oe9jiqQwGpgF1wnt6dfgKHfWiCNK%2BMKYCUqcLajt%2FDxqW%2FQYktwX1IqA%2F7kGWGxm%2FMZ4t5fSfWi9Two0HVGyPeeTyYP2WrJ1sc6KEbhamoBs5MNCqmQR2ToAwaPfWLXJlCl%2BEfVdLgWs%3D%7Ctkp%3ABFBMusSM4Ytj",
        },
      imagen: "raton.jpg",
  }, 
  {
      marca: "Razer",
      nombre: "Razer DeathAdder V3 Ratón Gaming Óptico 30000 DPI",
      gama: "Alta",
      precio: {
          segundaMano: 60.00,
          amazon: 72.99,
          ebay: 87.59,
      },
      link: {
          amazon: "https://www.amazon.es/Razer-DeathAdder-ergon%C3%B3mico-interruptores-HyperPolling/dp/B09ZLTV8B3/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=252V4N874Y1OR&keywords=Razer+DeathAdder+V3+Rat%C3%B3n+Gaming+%C3%93ptico+30000+DPI+Negro&qid=1702385335&sprefix=razer+deathadder+v3+rat%C3%B3n+gaming+%C3%B3ptico+30000+dpi+negro%2Caps%2C115&sr=8-1",
          ebay: "https://www.ebay.es/itm/134847444159?hash=item1f6588b4bf:g:HIsAAOSwMZNldgxB&amdata=enc%3AAQAIAAAA8GItQEsCKJRTmD4vcnab%2F8MwVs4OFhLFR0jLRHrrfo6pu7xjJYVmzlyvbfW%2Fp%2FwgvuPlMKsEJ%2Fs6wnbvfm65bmO2SzP0YGTT3L1bnwJyJBpjdIcFPNmdT3AG1aEr0ElzBTEvSE5Q3zRUspvepTtckSj%2BpsYM9l5LDTp1euIyLgWwaG9PCGJQdampR3tR8i4HJVZVLmMiZ3aEno5g%2F%2FovbDVbOMTzMp83kRcKr%2F0iZQWcv%2B0KUyyUOrB1jhNPZlOdpuG6o32wJnd0MiVzeLMVef2oP5%2FE2LkMd02rbZJeKDrvidElHrcRcGEyb8Op4xtoCw%3D%3D%7Ctkp%3ABk9SR87WluGLYw",
        },
      imagen: "raton.jpg",
  }, 
  {
      marca: "Razer",
      nombre: "Razer Viper V2 Pro Ratón Óptico Gaming Inalámbrico 30000 DPI",
      gama: "Premium",
      precio: {
          segundaMano: 100.00,
          amazon: 159.00,
          ebay: 135.15,
      },
      link: {
          amazon: "https://www.amazon.es/Inal%C3%A1mbrico-Deportes-Electr%C3%B3nicos-HyperSpeed-Interruptores/dp/B09QG4F5GZ/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1A32BSVTLY0J8&keywords=Razer+Viper+V2+Pro+Rat%C3%B3n+%C3%93ptico+Gaming+Inal%C3%A1mbrico+30000+DPI&qid=1702385417&sprefix=razer+viper+v2+pro+rat%C3%B3n+%C3%B3ptico+gaming+inal%C3%A1mbrico+30000+dpi%2Caps%2C101&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/186154813415?hash=item2b57b107e7:g:f6sAAOSwoV1lSke6&amdata=enc%3AAQAIAAABEJDovAfP%2BKKyCZWYHwFL2sk%2BcRRhDnls2vXUukFmZSS3EyoyF%2BpLnyq9gJuId1Z%2FIvJG3a3bPBSvjAqhZZE7iYO2S%2FWNm3Tj%2BOk3orzS9nyIwyfaHe7uCAeSi2YiAJl747mV0qCPz8kAh0%2FWxPY9Br%2BK%2FkuS8OhuQ6FL3tapiABX0aU9o4IWTDT%2FmEnppi6e0AM2isTUMTd6Ispgy%2FRahuHxLmP56r2RfkckPhD0n12tKmvnthRr5mQiZvkx%2FHHHIqNFe2L4736NAe49uAyPV2dyYdXuba%2Fd1%2BL2iaRGN0VBlUn9PwDX6de8p5WuuI6ac9NCg2Nl7h46NzbXdfwtmFOyG248PA39QKKUDrlKqcuL%7Ctkp%3ABk9SR8rqoOGLYw",
        },
      imagen: "raton.jpg",
  }, 
]

const tecladoList = [
  {
      marca: "Mars Gaming",
      nombre: "Mars Gaming MK120 Teclado Gaming FRGB",
      gama: "Baja",
      precio: {
          amazon: 15.98,
          ebay: 11.90,
      },
      link: {
          amazon: "https://www.amazon.es/MARSGAMING-MK120PT-Antighosting-Smartphone-Portugu%C3%A9s/dp/B099ZJJ9CN/ref=sr_1_4?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2Q8VCPBEHGXXO&keywords=mars+gaming+mk120+teclado+gaming+rgb&qid=1702385640&sprefix=mars+gaming+mk120+teclado+gaming+frgb+%2Caps%2C93&sr=8-4",
          ebay: "https://www.ebay.es/itm/115926504867?hash=item1afdc215a3:g:ul0AAOSwuOdlFDWu&amdata=enc%3AAQAIAAAA4PY54k%2BQcQChzSAB%2B6PpLaaqvf2aNwTmS1jzZitd6I%2BgpYmUlOHtDdx6Aa6IGFzzHgH%2FEWe1Ulu7x5IyK2Xq%2By4cXGuxRVwNF1VoKgz%2Bu42QC9b4Cp%2B4pb%2Bvk2jB9e5NOIAn7P1DIP92l0fbProVTOS02okLtJVbafv3EXEBrFdVDcIwXDL3O8eWjsJAnucPf3OfGl8HKdXftsSW6hbZAvVHI%2BWdsQ09a6FkQsr6eeSS20H2GqV5GCmFuhE3DPohnnAKqxyTkuAdvxXOe28tUm7W3AtBCE0dEfJGGJwHDYep%7Ctkp%3ABk9SR7revOGLYw",
      },
      imagen: "teclado.jpg",
  },
  {
      marca: "Mars Gaming",
      nombre: "Mars Gaming MK80 Teclado Mecánico Negro FRGB Switch Marrón Layout Español",
      gama: "BajaMedia",
      precio: {
          segundaMano: 20.00,
          amazon: 24.49,
          ebay: 34.50,
      },
      link: {
          amazon: "https://www.amazon.es/Gaming-Teclado-Mec%C3%A1nico-Antighosting-Espa%C3%B1ol/dp/B0BGLF8TS3/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=25DHSGHLWM287&keywords=Mars+Gaming+MK80&qid=1702386005&sprefix=mars+gaming+mk80%2Caps%2C176&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/404674990717?hash=item5e3882527d:g:syEAAOSwiyBldt30&amdata=enc%3AAQAIAAAAwNywXcCW7s4DV7YGDpK7OzoeKFXcY%2Fx3d1GIT4uiSJseVEqWFDSGC5KtsralDJDM%2FNob2YeBBKHhgs56c45owr28Briw32OtijRwNux%2FE0jJsWEXJxNW1HJCl9osYm4t87IxWSmSGS%2Fvjoj65CTrxRsND3eMTV2swwkcAf72yaFXdSGxRq8Ob90NLqCVpL57xz7lj0hy4Mm5iGN%2BxSjnbicSoNw83n7%2FEAeQ3eHpgrxOggzUbBIXqtL7AtIHsixKzw%3D%3D%7Ctkp%3ABk9SR-y06OGLYw",
      },
      imagen: "teclado.jpg",
  },
  {
      marca: "Mars Gaming",
      nombre: "Mars Gaming MKULTRA Teclado Mecánico Blanco Switch Azul",
      gama: "Media",
      precio: {
          segundaMano: 25.00,
          amazon: 55.65,
          ebay: 34.50,
      },
      link: {
          amazon: "https://www.amazon.es/MKULTRA-Teclado-Mec%C3%A1nico-Compacto-Espa%C3%B1ol/dp/B09MJBR6VW/ref=sr_1_2_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1PUZ5QK45UG4N&keywords=Mars+Gaming+MKULTRA&qid=1702386139&sprefix=mars+gaming+mkultra%2Caps%2C100&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/404674990717?hash=item5e3882527d:g:syEAAOSwiyBldt30&amdata=enc%3AAQAIAAAA4CvMOEoSPdeENPQv%2BOQw3BVVx%2BAvNHJIYhbcfEnE82e%2FMFqdX4tzxyiohm4QspWLOP%2FCqPsnKehFp3XxbIVMM9K2dQ4Yqyoucgw3j7ZjC3ft3GG73UAdZkREXNAITuCwu%2FlGqcp7Wiz96XEIbnaoNEUoApFgj3tNnRAJpQJRfwj2KTI%2BPPUjRvetZTQoNWwHvQZZDqITJaUsIcZeSLhQtjPOIMQs5%2FDuLHP08eDSjnxmalIupAhkJ2mq7jXZwSAqxG8htCllLPMfRFF%2FihxnlNj7Uympm8L%2F961mq%2BWkGtaU%7Ctkp%3ABk9SR5iy-uGLYw",
      },
      imagen: "teclado.jpg",
  },
  {
      marca: "SteelSeries",
      nombre: "SteelSeries Apex 3 TKL Teclado Gaming RGB",
      gama: "MediaAlta",
      precio: {
          amazon: 54.99,
          ebay: 64.24,
      },
      link: {
          amazon: "https://www.amazon.es/SteelSeries-Apex-TKL-tenkeyless-Iluminaci%C3%B3n/dp/B09FQ98HRT/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=SD2IUINWCVXE&keywords=SteelSeries+Apex+3+TKL&qid=1702386260&sprefix=steelseries+apex+3+tkl%2Caps%2C102&sr=8-3",
          ebay: "https://www.ebay.es/itm/364147418147?hash=item54c8e0a423:g:vUIAAOSwmq5j67ls&amdata=enc%3AAQAIAAAA8LH1CK%2B8UahEcRfYKe9Ix7gnYs5k06dfRLSBHjhbZL60xRKktEUBxBJsalJgWs9C5omdNIqW4ITiWkYNj%2BGlYicu38cDsGzRW2%2BgDSTQ3kIbw4fFCQfzRmXgfrY%2F8aYcWSvA187qxq8vmLwx%2FpRXPYh2JaTq5Y115RiNEsR0Nb0V8p9Wrq11gZFiw28mHykBGh0zsyolx6TvrKMmZcMF3P7uy5VgKoOjmD6L3bc%2BAUg9KlSGDH1GRBXCHTHd0vlLsSNYQstKDM6H58wSZBDMbMXP2ANDU6Xqvtta3u2MsHowTctVXDwyZ%2B6%2BndvXayltSw%3D%3D%7Ctkp%3ABk9SR6yZiOKLYw",
      },
      imagen: "teclado.jpg",
  },
  {
      marca: "Razer",
      nombre: "Razer BlackWidow V3 Tenkeyless Teclado Gaming Retroiluminado Green Switch",
      gama: "Alta",
      precio: {
          segundaMano: 70.00,
          amazon: 89.99,
          ebay: 117.00,
      },
      link: {
          amazon: "https://www.amazon.es/Razer-BlackWidow-Tenkeyless-interruptores-iluminaci%C3%B3n/dp/B097F5QSTB/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3TBHWSANEA01N&keywords=Razer%2BBlackWidow%2BV3%2BTenkeyless%2BTeclado%2BGaming%2BRetroiluminado%2BGreen%2BSwitch&qid=1702386516&sprefix=razer%2Bblackwidow%2Bv3%2Btenkeyless%2Bteclado%2Bgaming%2Bretroiluminado%2Bgreen%2Bswitch%2Caps%2C108&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&th=1",
          ebay: "https://www.ebay.es/itm/395048275294?hash=item5bfab64d5e:g:n-4AAOSw-A1lcaG2&amdata=enc%3AAQAIAAABAOqfImSIGnBPemBdW6fPzXA1QDOdpBaKnevkM5q8RISs30A8ugbBxHKWlvDWh%2BPixIxBt5icsHqoHBfbwE9%2FbJ0aWo7ZIMgNxLQq%2F2SH8z9iqG12QFTFy2ur9a9%2BV5s%2B2khbrK3jEL0KfXWo20kQoSP4tAneIgVf%2FTVKXQXIyc56NJX25yk5aFLKAUqqkN6K9mIT%2BlnkOLswXtM1j7t7db21SGFVT3DvWPQvrQoK9DVqJ%2FqVuQr3BVxGQyDfWAskQxM8ygdmkIxFbtz6bFfAr7EaLHPY01Wjn%2FLqh6JzGmtocGeo8VNvGrjLX4sX06d02mDgVoceY1KeLc6U8st6Yj0%3D%7Ctkp%3ABk9SR4KsqOKLYw",
      },
      imagen: "teclado.jpg",
  },
  {
      marca: "Razer",
      nombre: "Razer DeathStalker V2 Pro Tenkeyless",
      gama: "Premium",
      precio: {
          segundaMano: 180.00,
          amazon: 219.99,
          ebay: 260.14,
      },
      link: {
          amazon: "https://www.amazon.es/DeathStalker-Tenkeyless-teclado-Wireless-Bluetooth/dp/B0BHF1QMGK/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=PMFKCBKCAH42&keywords=Razer%2BDeathStalker%2BV2%2BPro%2BTenkeyless&qid=1702386629&sprefix=razer%2Bdeathstalker%2Bv2%2Bpro%2Btenkeyless%2Caps%2C95&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&th=1",
          ebay: "https://www.ebay.es/itm/145480166170?hash=item21df4b2b1a:g:XMQAAOSwlv5lbhoR&amdata=enc%3AAQAIAAAA4O7bGeQKRdzYLmkd2vyRPtLmK8TIhYyxldnhjb1YeD8C7gq2kONp6aQCywj6%2FEukBIrYB%2Fq3%2BPop88OxoSz%2FVudi4%2FtEnpPO%2BBqD8m8zBLm9ZjZxmF%2BHHrKigEwvEaxwXLly9y%2BqLR%2BQXY0epSJSutwsPDF8drV865O7mVmhxCXfYcde%2F8Mu1YSJrhgYDa9XbNU8YfBIrI9NJSM3wMJ4GQf822dDg%2B7VlbQ2wTNjXA0aLRAnfkCEAHlwhwd%2F2J4mOmZDEXJgNP2mR00zdQSutQ4H2Exsy7ZNVRl4FMTLp1%2BV%7Ctkp%3ABk9SR5aQteKLYw",
      },
      imagen: "teclado.jpg",
  },
]

const buildGamaBaja = {
  placas: {
    marca: "Gigabyte",
      nombre: "Gigabyte H610M",
      socket: "LGA1700",
      tipoRam: "DDR5",
      gama: "Baja",
      numeroM2: 0,
      numeroSata: 2,
      precio: {
          segundaMano: 70.00,
          amazon: 86.98,
          ebay: 89.50,
      },
      link: {
          amazon: "https://www.amazon.es/Gigabyte-H610M-V2-DDR4-Z%C3%B3calo/dp/B0C3XJPGM6/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3PGGP4N21TY5V&keywords=Gigabyte+H610M&qid=1702369528&sprefix=gigabyte+h610m%2Caps%2C87&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/175743088939?hash=item28eb1ab92b%3Ag%3A0y0AAOSwotVkbjoZ&amdata=enc%3AAQAIAAAAwDZIFouCc%2BNU8UXWEO%2FRaM660h51v4Gq%2FlIRg22%2B72lSNGCTlijEBn1gSPJVDcu4resG6GkS0x3RGXLMF1RQfoHIuZTavY7GHuoEmJVaRvJH01XlwuoLkGtJ%2BUKelAxmngwB5VTItCumLz94FbPWmQDtgKHKA7Tm65BgzzYA2IVHLF%2BJYw8TCZk8fBfOS%2Fz1vEn11BWC%2BWl1uZP%2Buohc%2B9ok7E0IuT1V9iO%2B0uukRU4qrPsTs2qKmR4hNwCEbPatWw%3D%3D%7Ctkp%3ABk9SR8zNj9KLYw&LH_ItemCondition=3",
      },
      imagen: "placa.jpg"
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i3-13100",
    gama: "Baja",
    socket: "LGA1700",
    consumo: 110,
    tipoRam: "DDR5",
    ventilador: true,
    gpu: true,
    precio: {
        amazon: 121.40,
        ebay: 157.30,
    },
    link: {
        amazon: "https://www.amazon.es/Intel%C2%AE-i3-13100-Desktop-Processor-P-Cores/dp/B0BN5Z8MDR/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=S9AQUG2XFG5W&keywords=i3+13100&qid=1701166184&sprefix=i3+13100%2Caps%2C93&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
        ebay: "https://www.ebay.es/itm/134789390914?hash=item1f6212e242:g:eWsAAOSwms5lQsmU&amdata=enc%3AAQAIAAAA4IHuZx1SYk0X0TAk6400bFRWTx3lomBfJ5KJaMvC4BtB%2BJP7bsyyZWkWKC3ymVW3GBhfg0EJcQtywriNMWP6HtYxkE5IAkbAcGCPzSRLQOkvgXXl6t07Ibrx6eCjqRI9mtjMzngs69UpEsQc0csDMtY57GPX1GiMBoNEm3OofXQwCRy5PikZ%2FTLx%2F%2BEkBKjJhT16hhsT%2FWO%2F7VP%2Bn1w1P9qqyi7ymFs3IknXUA6uqtHbIHiIbhyBDAI54isZgQIp7Xk4zkHA7Z46vVH0sNj%2F7%2BDceVRXse%2F3sR0iWzoBiTa2%7Ctkp%3ABFBM_pfE1oJj",
    },
    imagen: "intel.jpg",
  },
  ram: {
    mmarca: "Crucial",
    nombre: "Crucial DDR5 4800MHz PC5-38400 8GB CL40",
    tipo: "DDR5",
    capacidad: 8,
    gama: "Baja",
    precio: {
        amazon: 27.99,
        ebay: 35.73,
    },
    link: {
        amazon: "https://www.amazon.es/Crucial-CT8G48C40U5-4800MHz-Memoria-Escritorio/dp/B09HWFZZM4/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2QN1K408CTJ9M&keywords=Crucial+DDR5+4800MHz+PC5-38400+8GB+CL40&qid=1702369011&sprefix=crucial+ddr5+4800mhz+pc5-38400+8gb+cl40%2Caps%2C174&sr=8-1",
        ebay: "https://www.ebay.es/itm/185279005639?hash=item2b237d43c7:g:m5MAAOSwKQNh-mfD&amdata=enc%3AAQAIAAABANYi097FzvdFeZFwUKAGwhRsHb%2BkC77y13zYStq1Nme2op5OXJyKDANFOD%2Fd1c2Nf%2FbuHzE%2FiISuLGMhEyVbtNVNRzp5L4UcP9H%2FpXxSTQxCZFMUh3Jl%2FSEJ2LWuVR1QcXSzqc4kW4Rrqi2BvSl7lGvSjCXTZuGA4QM%2BCjtyk0yqek%2F9LNp0Y4fZAcOk3Ogidp%2FjNqOQVoWPGFKfMZrLSDIPV3NEd%2Fek9KeWFeO4AmE8mLZWIQp5sh%2FUQMDO0eDUw5h7aFYtTKW3Y4XtFjlriw%2Bq9ld9HRh%2FR7Zb%2B%2BAv45gM7WbgXTdIS15aEm2%2Bixx37MUKSufxTDkh43OF6Jxn1Lw%3D%7Ctkp%3ABk9SR8yAztGLYw",
    },
    imagen: "ram.jpg"
  },
  sata: [
    {
      marca: "WD",
      nombre: "WD Blue 1TB 3.5 SATA3",
      capacidad: 1,
      tecnologia: "Sata",
      gama: "Baja",
      precio: {
          segundaMano: 30.00,
          amazon: 33.90,
          ebay: 49.90,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-WD10EZEX-1000-GB-Interna/dp/B0711YN12S/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3CMMXNXGC4YLT&keywords=WD+Blue+1TB+3.5%22+SATA3&qid=1702372448&sprefix=wd+blue+1tb+3.5%22+sata3%2Caps%2C179&sr=8-1",
          ebay: "https://www.ebay.es/itm/122487163758?hash=item1c84cdcb6e:g:MRcAAOSwxu5ZEfgL&amdata=enc%3AAQAIAAAA8F3KGBZIzCAoTgEe78svkhvw9EZ4hAECmlyOUYc9nDcjPbFB67MHn%2FIyiA3sLZoDgpBBdPPF1z2H8erpJsa9n7TmgagGMjgk05zteas%2F1me7RPzjF2ysxSkv2VJj8JKf283vKM9NlQWSyAz%2F3xasrzQX3n1TYTGJsOhvx4xPqItOOoFx8KE6M1wKv%2FN5u8PNRQLsmE783aKDLpL5F5jzj%2FrbdXL4%2BUicN8wVWn1Ga45Najf1%2BKe84LPesitRBqgrzxL5Qj97PmWbe0NywsuO%2FyQwrijlXQYPqMqLBS9Ljot4Je7TZzpEBn%2Ft9xPFPckwWQ%3D%3D%7Ctkp%3ABk9SR-yc8dSLYw",
      },
      imagen: "hdd.jpg"
    },
    {
      marca: "WD",
      nombre: "WD Blue 1TB 3.5 SATA3",
      capacidad: 1,
      tecnologia: "Sata",
      gama: "Baja",
      precio: {
          segundaMano: 30.00,
          amazon: 33.90,
          ebay: 49.90,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-WD10EZEX-1000-GB-Interna/dp/B0711YN12S/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3CMMXNXGC4YLT&keywords=WD+Blue+1TB+3.5%22+SATA3&qid=1702372448&sprefix=wd+blue+1tb+3.5%22+sata3%2Caps%2C179&sr=8-1",
          ebay: "https://www.ebay.es/itm/122487163758?hash=item1c84cdcb6e:g:MRcAAOSwxu5ZEfgL&amdata=enc%3AAQAIAAAA8F3KGBZIzCAoTgEe78svkhvw9EZ4hAECmlyOUYc9nDcjPbFB67MHn%2FIyiA3sLZoDgpBBdPPF1z2H8erpJsa9n7TmgagGMjgk05zteas%2F1me7RPzjF2ysxSkv2VJj8JKf283vKM9NlQWSyAz%2F3xasrzQX3n1TYTGJsOhvx4xPqItOOoFx8KE6M1wKv%2FN5u8PNRQLsmE783aKDLpL5F5jzj%2FrbdXL4%2BUicN8wVWn1Ga45Najf1%2BKe84LPesitRBqgrzxL5Qj97PmWbe0NywsuO%2FyQwrijlXQYPqMqLBS9Ljot4Je7TZzpEBn%2Ft9xPFPckwWQ%3D%3D%7Ctkp%3ABk9SR-yc8dSLYw",
      },
      imagen: "hdd.jpg"
    },
  ],
  fuente: {
    marca: "L-Link",
      nombre: "L-Link Fuente de Alimentación ATX 500W",
      potencia: 500,
      gama: "Baja",
      precio: {
          amazon: 18.49,
          ebay: 15.95,
      },
      link: {
          amazon: "https://www.amazon.es/L-Link-LL-PS-500-CAB-Fuente-alimentaci%C3%B3n-Blanco/dp/B0758GLF4G/ref=sr_1_4_mod_primary_new?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3PHD73RN0RP6C&keywords=L-Link+Fuente+de+Alimentaci%C3%B3n+ATX+500W&qid=1702378260&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=l-link+fuente+de+alimentaci%C3%B3n+atx+500w%2Caps%2C80&sr=8-4",
          ebay: "https://www.ebay.es/itm/304934689716?hash=item46ff861bb4:g:GKYAAOSwfvVkXg0G&amdata=enc%3AAQAIAAAA4FPZXA%2FDjkCHgitmwFpaai2cVAMxSWIlhD8hVSZHu6wi4T%2BrHyCklwPC1OLp%2F0qt7187IdEMNEO5QSYZCFrehelRZjixpLCmujRVKaUEtRxleoFUqyLusTz8NnBRIRU4MUEtCAt56yymTWlPRzN34H6jp2oXnaiedNdTnXYXKeYuxG%2BwNKAw3kPORRwQOAtWRkpSljRXIQMmQgKV8%2FDJbdzvvDVvWmcLNb5hAJ1SXLDRpcaZbzRAjbWz2tAQLYL9ZO6vWAN5FFf9Yw9VSuAd42rkhNU5GwUIwpMzR4f6yzT4%7Ctkp%3ABk9SR_b7t9qLYw",
      },
      imagen: "fuente.jpg",
  },
  monitor: {
    marca: "AOC",
      nombre: "AOC 24B2XH 23.8 LED IPS FullHD 75Hz",
      gama: "Baja",
      precio: {
          segundaMano: 50.00,
          amazon: 79.90,
          ebay: 144.37,
      },
      link: {
          amazon: "https://www.amazon.es/AOC-24B2XH-Pulgadas-1920x1080-Flickerfree/dp/B0845VVRQ1/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20VHY00RDJQW4&keywords=AOC+24B2XH+23.8%22+LED+IPS+FullHD+75Hz&qid=1702374872&sprefix=aoc+24b2xh+23.8%22+led+ips+fullhd+75hz%2Caps%2C98&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.0fd54328-1d46-4534-bd0f-16141b40bb5b&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/134517595831?hash=item1f51df9eb7:g:1asAAOSwLdtkKuIP&amdata=enc%3AAQAIAAAA8JHU0BscxReYXRGiJwcWuNcQesnmwgPq%2BOHGE%2BCQn615smyQi8KPVDTJTAapsleJkPqE4KUJSB%2B7CjFeK1d%2FIXDXK3dRvoE7IcgUND6ZjhhGRLA5PLIh5SSp2uCagvRMYHQGVFQjzDIo3cqYlxLgAHp1OSPxOLTmM6Sb885WQvgFP3JUcmnz556PEPIm9tqGV%2BPiaI7tzTBc%2FbJWbpc9q1lR7lU%2FD0rF8z%2Fo7AqaAV7Okp6veL3GMAkMA%2FY8119jTkoZU%2FNboGXL0m549pHSJ4M4JKyhZbxTmB48qrlDfgw6KspmCnkvFwADjrM7du7LlQ%3D%3D%7Ctkp%3ABFBM_LmZ14tj",
      },
      imagen: "monitor.jpg",
  },
  caja: {
    marca: "Cooler Master",
      nombre: "Cooler Master MasterBox MB600L V2",
      gama: "Baja",
      precio: {
          amazon: 81.02,
          ebay: 106.99,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-MasterBox-MB600L-Minimalista/dp/B08XQJCBCJ/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1365JFE4VZWJJ&keywords=Cooler+Master+MasterBox+MB600L+V2+ODD+USB+3.2&qid=1702377235&sprefix=cooler+master+masterbox+mb600l+v2+odd+usb+3.2%2Caps%2C142&sr=8-1",
          ebay: "https://www.ebay.es/itm/385691635765?hash=item59cd035035:g:IqEAAOSwa99ki8ut&amdata=enc%3AAQAIAAABABX%2ByfkY1FAs43%2BJLrt0LHajtXVY9quYAGncy%2FVEUF4n2Wm3NmSz4AmR6hpeSvC428b431%2BgClv7RXAYNbZmGSz%2B8%2BbPSt%2BpZftAFzZpQ18hqEXK9KU1h7pvk2jFb0m0%2F2gf98v0icVOzTpJvtuGnk56%2FMmc7lpQG%2FjlYO4SdQ3dG%2FguzrgySi%2BgAqznx3Jb3U5HZaI9tYACLC7baV3zJdR4Y4KJbZWuentRbJxt9Fv0svEYXBnlM5YCWf8CHzDHSBCF%2F800r1CafasRNgnKbQdaOhUpYScZyjshUhflFR5eH0ZqlN065Vz5b3jMk7vWs4pNz72Prur6F%2FwKD9kPANs%3D%7Ctkp%3ABk9SR5r8udmLYw",
      },
      imagen: "caja.jpg",
  },
};

const buildGamaBaja2 = {
  placas: {
    marca: "MSI",
      nombre: "MSI PRO A620M-E DDR4",
      socket: "AM5",
      tipoRam: "DDR4",
      gama: "Baja",
      numeroM2: 0,
      numeroSata: 2,
      precio: {
          amazon: 88.65,
          ebay: 78.82,
      },
      link: {
          amazon: "https://www.amazon.es/MSI-Pro-A620M-Micro-ATX-procesadores/dp/B0BZW9RG3P/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=IOPKNMUKIX8R&keywords=MSI+PRO+A620M-E&qid=1702371189&sprefix=msi+pro+a620m-e%2Caps%2C189&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/195963813384?hash=item2da05a7e08:g:JVQAAOSwn8lk88th&amdata=enc%3AAQAIAAAA4PLBl4KyIux8OS3lpGx%2B11YL10ECjPXCpTxBKWnPwO7EoDzA5UQZISDN5GVA9RgzyATzKdlFC3jq0c70vYL9tu7GENNLlXrffXCtlV%2F3pnVxOZAulWT2N%2FkfWDE3UOODGl9as%2FVDwF4M0kbZXTDoA01Xjc%2BEUB6xwcFpsvjRJQQ8RhBI0jXXxb%2B3GBl20bPKPIYdZdUz54t63freGg9NL4OJMtH9SewuUAQNWrSO0xrONCi9hWfz0qqQkFk5mwk5IsljjHSV0XdWB2EGrgfqvXFrFtN0GMUrAzbEYytDfNLR%7Ctkp%3ABFBMktzX04tj",
      },
      imagen: "placa.jpg"
  },
  cpu: {
    marca: "AMD",
    nombre: "AMD Ryzen 5 5600X",
    gama: "Baja",
    socket: "AM5",
    consumo: 65,
    tipoRam: "DDR4",
    ventilador: true,
    gpu: false,
    precio: {
        segundaMano: 100.00,
        amazon: 141.72,
        ebay: 163.34,
    },
    link: {
        amazon: "https://www.amazon.es/AMD-Ryzen-5600-Box-Negro/dp/B09VCHR1VH/ref=sr_1_1_mod_primary_new?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=PQ3BURFYN30&keywords=AMD+Ryzen+5+5600X&qid=1701168760&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=amd+ryzen+5+5600x%2Caps%2C158&sr=8-1",
        ebay: "https://www.ebay.es/itm/133769938956?hash=item1f254f480c:g:etsAAOSwthxgq3iU&amdata=enc%3AAQAIAAAA4HtXup0Pixdty9z9OsdNYYpB0v1audtMtv%2FDOpGktnBuNQhj6tDZQuok5q6uY%2B6lPH8eCWYx7j5FQwOjaMobrjujS2bNUYm3QmsKIEWhiFsDfZHkbr0e4JEROuOnQHUKZLXC92f4eZR8lBgwRsWcVtFh%2BTi3tq3J%2FOlkFspnYb3s9SoByQq1BhhXse8FZT8iM2YUhc7SOgZfspqzy%2F0x3e6zr1LO0K7o1sJAcHMbbsexkEdVlDa1xdfz8vuSSHlXwLEeH0hjv2y7C%2B0LWFK9dVRLYuxDnVLlVKGizQZ9TwmF%7Ctkp%3ABk9SR_Lg_diCYw",
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Kingstone",
      nombre: "Kingston FURY Beast DDR4 3200 MHz 8GB CL16",
      tipo: "DDR4",
      capacidad: 8,
      gama: "Baja",
      precio: {
          segundaMano: 20.00,
          amazon: 25.50,
          ebay: 30.00,
      },
      link: {
          amazon: "https://www.amazon.es/Kingston-3200MHz-Ordenadores-sobremesa-KF432C16BB/dp/B097K5J1SB/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=18JVZ4A8SFJV8&keywords=Kingston%2BFURY%2BBeast%2BDDR4%2B3200%2BMHz%2B8GB%2BCL16&qid=1702366631&sprefix=kingston%2Bfury%2Bbeast%2Bddr4%2B3200%2Bmhz%2B8gb%2Bcl16%2Caps%2C198&sr=8-1&th=1",
          ebay: "https://www.ebay.es/itm/256012272679?hash=item3b9b854427%3Ag%3ALD0AAOSwRcRkEym5&amdata=enc%3AAQAIAAABAKV4F2VbwqGx0HhJEQ2XLEaHIAFshAYvtF1UX%2FbD987h2EJgd3ja3htwJulPKnWLaOklnPjPTeDwqJZImvPpUcGlXyQgW0lKZgDR3cRy0%2FJdFj6%2Bk6OartYwL7%2BeHOWWb8d%2BTh3iCkG9NYE74lXRpgHPZ7%2FtwDVdrpM3G7UaTIe6u%2FksdOZxLlpjxlK9AS39%2BYnlqsN7493vg5dOpfB31kyQcoxYdg8WJ9q5A9bGDIA%2BfxppWzRnQov%2Bgy9A8UHfcCiafOu3pNEXgQS1wVt9rOXb%2Fk0s42l9p1N%2BbMRNAmC%2BejIFykOd2qZkVJoLiFCQAO6d6YEDXyWEm8VtBV%2BTsGw%3D%7Ctkp%3ABk9SR-borM-LYw&LH_ItemCondition=3",
      },
      imagen: "ram.jpg"
  },
  sata: [
    {
      marca: "WD",
      nombre: "WD Blue 1TB 3.5 SATA3",
      capacidad: 1,
      tecnologia: "Sata",
      gama: "Baja",
      precio: {
          segundaMano: 30.00,
          amazon: 33.90,
          ebay: 49.90,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-WD10EZEX-1000-GB-Interna/dp/B0711YN12S/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3CMMXNXGC4YLT&keywords=WD+Blue+1TB+3.5%22+SATA3&qid=1702372448&sprefix=wd+blue+1tb+3.5%22+sata3%2Caps%2C179&sr=8-1",
          ebay: "https://www.ebay.es/itm/122487163758?hash=item1c84cdcb6e:g:MRcAAOSwxu5ZEfgL&amdata=enc%3AAQAIAAAA8F3KGBZIzCAoTgEe78svkhvw9EZ4hAECmlyOUYc9nDcjPbFB67MHn%2FIyiA3sLZoDgpBBdPPF1z2H8erpJsa9n7TmgagGMjgk05zteas%2F1me7RPzjF2ysxSkv2VJj8JKf283vKM9NlQWSyAz%2F3xasrzQX3n1TYTGJsOhvx4xPqItOOoFx8KE6M1wKv%2FN5u8PNRQLsmE783aKDLpL5F5jzj%2FrbdXL4%2BUicN8wVWn1Ga45Najf1%2BKe84LPesitRBqgrzxL5Qj97PmWbe0NywsuO%2FyQwrijlXQYPqMqLBS9Ljot4Je7TZzpEBn%2Ft9xPFPckwWQ%3D%3D%7Ctkp%3ABk9SR-yc8dSLYw",
      },
      imagen: "hdd.jpg"
    },
    {
      marca: "WD",
      nombre: "WD Blue 1TB 3.5 SATA3",
      capacidad: 1,
      tecnologia: "Sata",
      gama: "Baja",
      precio: {
          segundaMano: 30.00,
          amazon: 33.90,
          ebay: 49.90,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-WD10EZEX-1000-GB-Interna/dp/B0711YN12S/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3CMMXNXGC4YLT&keywords=WD+Blue+1TB+3.5%22+SATA3&qid=1702372448&sprefix=wd+blue+1tb+3.5%22+sata3%2Caps%2C179&sr=8-1",
          ebay: "https://www.ebay.es/itm/122487163758?hash=item1c84cdcb6e:g:MRcAAOSwxu5ZEfgL&amdata=enc%3AAQAIAAAA8F3KGBZIzCAoTgEe78svkhvw9EZ4hAECmlyOUYc9nDcjPbFB67MHn%2FIyiA3sLZoDgpBBdPPF1z2H8erpJsa9n7TmgagGMjgk05zteas%2F1me7RPzjF2ysxSkv2VJj8JKf283vKM9NlQWSyAz%2F3xasrzQX3n1TYTGJsOhvx4xPqItOOoFx8KE6M1wKv%2FN5u8PNRQLsmE783aKDLpL5F5jzj%2FrbdXL4%2BUicN8wVWn1Ga45Najf1%2BKe84LPesitRBqgrzxL5Qj97PmWbe0NywsuO%2FyQwrijlXQYPqMqLBS9Ljot4Je7TZzpEBn%2Ft9xPFPckwWQ%3D%3D%7Ctkp%3ABk9SR-yc8dSLYw",
      },
      imagen: "hdd.jpg"
    },
  ],
  fuente: {
    marca: "L-Link",
      nombre: "L-Link Fuente de Alimentación ATX 500W",
      potencia: 500,
      gama: "Baja",
      precio: {
          amazon: 18.49,
          ebay: 15.95,
      },
      link: {
          amazon: "https://www.amazon.es/L-Link-LL-PS-500-CAB-Fuente-alimentaci%C3%B3n-Blanco/dp/B0758GLF4G/ref=sr_1_4_mod_primary_new?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3PHD73RN0RP6C&keywords=L-Link+Fuente+de+Alimentaci%C3%B3n+ATX+500W&qid=1702378260&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=l-link+fuente+de+alimentaci%C3%B3n+atx+500w%2Caps%2C80&sr=8-4",
          ebay: "https://www.ebay.es/itm/304934689716?hash=item46ff861bb4:g:GKYAAOSwfvVkXg0G&amdata=enc%3AAQAIAAAA4FPZXA%2FDjkCHgitmwFpaai2cVAMxSWIlhD8hVSZHu6wi4T%2BrHyCklwPC1OLp%2F0qt7187IdEMNEO5QSYZCFrehelRZjixpLCmujRVKaUEtRxleoFUqyLusTz8NnBRIRU4MUEtCAt56yymTWlPRzN34H6jp2oXnaiedNdTnXYXKeYuxG%2BwNKAw3kPORRwQOAtWRkpSljRXIQMmQgKV8%2FDJbdzvvDVvWmcLNb5hAJ1SXLDRpcaZbzRAjbWz2tAQLYL9ZO6vWAN5FFf9Yw9VSuAd42rkhNU5GwUIwpMzR4f6yzT4%7Ctkp%3ABk9SR_b7t9qLYw",
      },
      imagen: "fuente.jpg",
  },
  monitor: {
    marca: "AOC",
      nombre: "AOC 24B2XH 23.8 LED IPS FullHD 75Hz",
      gama: "Baja",
      precio: {
          segundaMano: 50.00,
          amazon: 79.90,
          ebay: 144.37,
      },
      link: {
          amazon: "https://www.amazon.es/AOC-24B2XH-Pulgadas-1920x1080-Flickerfree/dp/B0845VVRQ1/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20VHY00RDJQW4&keywords=AOC+24B2XH+23.8%22+LED+IPS+FullHD+75Hz&qid=1702374872&sprefix=aoc+24b2xh+23.8%22+led+ips+fullhd+75hz%2Caps%2C98&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.0fd54328-1d46-4534-bd0f-16141b40bb5b&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/134517595831?hash=item1f51df9eb7:g:1asAAOSwLdtkKuIP&amdata=enc%3AAQAIAAAA8JHU0BscxReYXRGiJwcWuNcQesnmwgPq%2BOHGE%2BCQn615smyQi8KPVDTJTAapsleJkPqE4KUJSB%2B7CjFeK1d%2FIXDXK3dRvoE7IcgUND6ZjhhGRLA5PLIh5SSp2uCagvRMYHQGVFQjzDIo3cqYlxLgAHp1OSPxOLTmM6Sb885WQvgFP3JUcmnz556PEPIm9tqGV%2BPiaI7tzTBc%2FbJWbpc9q1lR7lU%2FD0rF8z%2Fo7AqaAV7Okp6veL3GMAkMA%2FY8119jTkoZU%2FNboGXL0m549pHSJ4M4JKyhZbxTmB48qrlDfgw6KspmCnkvFwADjrM7du7LlQ%3D%3D%7Ctkp%3ABFBM_LmZ14tj",
      },
      imagen: "monitor.jpg",
  },
  caja: {
    marca: "Cooler Master",
      nombre: "Cooler Master MasterBox MB600L V2",
      gama: "Baja",
      precio: {
          amazon: 81.02,
          ebay: 106.99,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-MasterBox-MB600L-Minimalista/dp/B08XQJCBCJ/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1365JFE4VZWJJ&keywords=Cooler+Master+MasterBox+MB600L+V2+ODD+USB+3.2&qid=1702377235&sprefix=cooler+master+masterbox+mb600l+v2+odd+usb+3.2%2Caps%2C142&sr=8-1",
          ebay: "https://www.ebay.es/itm/385691635765?hash=item59cd035035:g:IqEAAOSwa99ki8ut&amdata=enc%3AAQAIAAABABX%2ByfkY1FAs43%2BJLrt0LHajtXVY9quYAGncy%2FVEUF4n2Wm3NmSz4AmR6hpeSvC428b431%2BgClv7RXAYNbZmGSz%2B8%2BbPSt%2BpZftAFzZpQ18hqEXK9KU1h7pvk2jFb0m0%2F2gf98v0icVOzTpJvtuGnk56%2FMmc7lpQG%2FjlYO4SdQ3dG%2FguzrgySi%2BgAqznx3Jb3U5HZaI9tYACLC7baV3zJdR4Y4KJbZWuentRbJxt9Fv0svEYXBnlM5YCWf8CHzDHSBCF%2F800r1CafasRNgnKbQdaOhUpYScZyjshUhflFR5eH0ZqlN065Vz5b3jMk7vWs4pNz72Prur6F%2FwKD9kPANs%3D%7Ctkp%3ABk9SR5r8udmLYw",
      },
      imagen: "caja.jpg",
  },
};

const buildGamaMedia = {
  placas: {
    marca: "Gigabyte",
      nombre: "Gigabyte Z790 GAMING X",
      socket: "LGA1700",
      tipoRam: "DDR5",
      gama: "Media",
      numeroM2: 2,
      numeroSata: 2,
      precio: {
          amazon: 241.99,
          ebay: 326.59,
      },
      link: {
          amazon: "https://www.amazon.es/GIGABYTE-Z790-Gaming-AX-G10/dp/B0BLF7QXJK/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=QTQXRPKUV97N&keywords=Gigabyte+Z790+GAMING+X&qid=1702370235&sprefix=gigabyte+z790+gaming+x%2Caps%2C103&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/204228941818?hash=item2f8cfe57fa:g:~oAAAOSwWRVj2AaK&amdata=enc%3AAQAIAAAA8O0zTbXUKtkOb%2FVANdsO9iddshguHd4FSpxtDKARwCGru8G9oU314ZKlcLcE47%2B0%2FOOYJDh0uvTfj3ApPXb99VdAvtFSy3dIbhmeQLtaEo8851dV0Phab0q6ir2a2U5xrn54tk6Xm6yS9v43g%2FDmMEqgJs4Rl4zm37QEwO0w4DBupKDQnj8waY1vhLB3S18g9JDmAhX2DvFLjFs%2FdgMQbWH8FWGGfvx%2F53LS4Y1%2FUHuyrtnm%2BAItmWAsIp4VRHU4kDJGBILO0S3yQqZgGffHXphQJvUnfWW8Yffwl%2FrlWWUEVeWaxAKnCsdqzlbM1k79rw%3D%3D%7Ctkp%3ABFBMxqjo0otj",
      },
      imagen: "placa.jpg"
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i5-14600KF",
    gama: "Media",
    socket: "LGA1700",
    consumo: 181,
    tipoRam: "DDR5",
    ventilador: false,
    gpu: false,
    precio: {
        amazon: 327.36,
        ebay: 309.99,
    },
    link: {
        amazon: "https://www.amazon.es/Intel%C2%AE-i5-14600KF-Desktop-Processor-P-Cores/dp/B0CHBH63YX/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=V38NC9TNU70X&keywords=i5+14600k&qid=1701165966&sprefix=i5+14600kf%2Caps%2C98&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
        ebay: "https://www.ebay.es/itm/355176558210?hash=item52b22c2e82:g:eWcAAOSw3-ZlWn~e&amdata=enc%3AAQAIAAAA4MMgK7oH0aV%2BfE7MUqsx9uOQhjhgGD0nDr1z6yeCx1xc1wu0q%2F8fH9egyhx%2F1B%2FT8cl6CrtzUEluscy9xA%2Bl9U3BKd3HeOjVAAg4yi31aVm15uy1lI%2Fi%2F%2BkXSgiw1juyBw6J4rXK4BXLaNgJgcqFZyRDrghA9terEc98njiH6w2pffizf%2B0SAU5fO6dzaQo5qzSE5atoSLakvGaPatKG4BnoFsOSEAesf%2FOtSZAV7clR3arXUp9gmWDlvwJhO%2FJR7O50xRSoEbvq5%2B2S2om6oihx9XM9ZIDc08xIHfs1mXLr%7Ctkp%3ABk9SR8aMqtaCYw",
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
      nombre: "Corsair Vengeance DDR5 6400MHz PC5-51200 32GB 2x16GB CL32",
      tipo: "DDR5",
      capacidad: 32,
      gama: "MediaAlta",
      precio: {
          amazon: 134.99,
          ebay: 172.58,
      },
      link: {
          amazon: "https://www.amazon.es/Corsair-Vengeance-Optimizada-Regulaci%C3%B3n-Personalizados/dp/B0BPL9VYPW/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=55ZSWG2V7NN4&keywords=Corsair+Vengeance+DDR5+6400MHz+PC5-51200+32GB+2x16GB+CL32&qid=1702367885&sprefix=corsair+vengeance+ddr5+6400mhz+pc5-51200+32gb+2x16gb+cl32%2Caps%2C169&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b1",
          ebay: "https://www.ebay.es/itm/196115489448?hash=item2da964e2a8:g:oz4AAOSwsAllbgjF&amdata=enc%3AAQAIAAABENkLE6KDg6q%2FIQQfwTIGt%2FKvAzGSKX4EKjCqnG1xZyTLaF6lnEP%2FgpM0b0SPjLtL%2FrxYJuBkzl0T0VLeQjCN6eIMM5pHJ%2B8fEWQzy%2Ff2lRpmCcRdMgLr9rcJh8dypc64Cg0kwtyyVcbpIuwMZupcjfJleYRos5rmNL8ld3U4R1CkFhAXcQQERW%2FIVTTjLiq906TDJiNQsXeS82FJt5zTg9uN7ziWLnWIDgEG8ONZcQqdRMC4E%2BIKD3SmQ9W0qc05OCVhmcO1MRpnccL57eFLAooQDehf58l4aRMNW3j6Iy%2BkGxZqfxFi4Wb3AJehLlQWLKqbfdF4u4T10gHezfUztfkRU%2FhOi40uxCqVn3PCN0T1%7Ctkp%3ABFBM8ILF0Itj",
      },
      imagen: "ram.jpg"
  },
  sata: [
    {
      marca: "WD",
      nombre: "WD Purple 2TB 3.5 SATA 3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: "Media",
      precio: {
          segundaMano: 40.00,
          amazon: 71.46,
          ebay: 56.52,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-Disco-mec%C3%A1nico-256MB/dp/B08VH8R94B/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2PKU4UQLMCKRL&keywords=WD+Purple+2TB+3.5%22+SATA+3&qid=1702372984&sprefix=wd+purple+2tb+3.5%22+sata+3%2Caps%2C76&sr=8-1",
          ebay: "https://www.ebay.es/itm/384876574990?hash=item599c6e790e:g:4NkAAOSwMThe0cDH&amdata=enc%3AAQAIAAAA8IXmkF%2BSqSRJfaqpcsA6D5qSxQdXYkHfPe9BLltZtZng9k8Fpqds5lzetUHicFm0eLZgil3pWic8kpjqZjPQfuO%2FV%2BJjdT5EkMG42KxD445w%2BAHAbjJPxD3k6auJgiJv2PUJmJ9NTZyxz%2BHZZrUXEOr7seiv%2Fvr84%2BZoajcUEJQfGez%2Bny%2B%2F1R9NKnSb5shF0qt4nhw00OgGybCGm3yPWy9E%2FBF6c%2FobxvJcX%2FZtsSZp1C0429HIsazkq9KYmcBFE%2BXKCARFWObgwTKl6ASU3gGHGhDcLAm59fv7mM4Qk9CKVZNRxoQRMuT8eJk1k26IvA%3D%3D%7Ctkp%3ABk9SR7zfstWLYw",
      },
      imagen: "hdd.jpg"
    },
    {
      marca: "Kingstone",
      nombre: "Kingston KC600 SSD 512GB NAND TLC 3D SATA3",
      capacidad: 0.5,
      tecnologia: "Sata",
      gama: "MediaAlta",
      precio: {
          segundaMano: 50.00,
          amazon: 57.75,
          ebay: 55.04,
      },
      link: {
          amazon: "https://www.amazon.es/Kingston-KC600-SSD-SKC600-512G/dp/B07ZDBT15M/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1QR02V8YTSI1&keywords=kingston%2Bkc600%2Bssd%2B512gb%2Bnand%2Btlc%2B3d%2Bsata%2B3&qid=1702373177&sprefix=kingston%2Bkc600%2Bssd%2B512gb%2Bnand%2Btlc%2B3d%2Bsata3%2Caps%2C94&sr=8-1&th=1",
          ebay: "https://www.ebay.es/itm/404658693707?hash=item5e3789a64b:g:AdwAAOSwUV9la9kI&amdata=enc%3AAQAIAAABALwTGEf1R4%2BTlUqv0G99XdfV2KojwI1i5uLsANywNgfk%2FINyo5Rq%2Fbwvn8gLlviJDNr4EXQhgBl1i8GKneK5U4GVX%2B5eF7h1Rw%2B1KNM5zsn9aPLsQSYOvf1JE5m9pf4XuKaqPUYOV6ED2d%2BBN6ETff0QYjW93uoQ%2FoI4hZL%2BSUOL5EDdZ6ReMEWyUY%2FDYeX48Kp3%2BjRWwxBC3dE%2Fbrn7R0uT5ZsFX1BKB%2FQKWzhlAo9oXTlVW3HGB%2FvS%2FK%2F%2FdHaQas2n8ccZf%2ByyhF8gw9wmJYd8w9glyV5T0RcoNK5R8Aszu9H3GK%2FzbXWgjFCyfmkeBkPesTRlpANer7JKvtH%2Bp1Q%3D%7Ctkp%3ABFBMkrzK1Ytj",
      },
      imagen: "hdd.jpg"
    },
  ],
  gpu: {
    marca: "Nvidia",
    nombre: "Nvidia RTX 4060",
    consumo: 115,
    potenciaRecomendada: 550,
    gama: "Media",
    precio: {
      segundaMano: 290.00,
        amazon: 349.90,
        ebay: 359.99,
    },
    link: {
        amazon: "https://www.amazon.es/ASUS-Dual-GeForce-White-DUAL-RTX4060-O8G-WHITE/dp/B0C9TM6568/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=5W2YN90SS56G&keywords=rtx+4060&qid=1701175857&sprefix=rtx+4060%2Caps%2C101&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
        ebay: "https://www.ebay.es/itm/256319669310?hash=item3badd7c43e%3Ag%3Ad3sAAOSwdJZlZMvG&amdata=enc%3AAQAIAAAAwGLi4TAQpPQfCba2hzE1%2F%2BDLvQHWTkNkuAn1lrK9lSoMeyTi7ZxLvuB1tm2OTbqJTnuwcB%2BpaBg%2Bu5wmmor%2FpalnULcz4mVU88ZYQRQX6%2FOjDqjyj35f7vDOUKHP0YPhlxRCxgXClTklafhpcanp86HAO5WnW8bp30JTH6LQqnVGn4FlFTzwS%2BvMezSkeyC0Zq8TKUFmRlKMaotkPcuAb0tTWNV0cZLDIX0zRjqcRUsu3oC2LANqKV%2Bc6%2F5JXrgpWQ%3D%3D%7Ctkp%3ABk9SR5zE39-CYw&LH_ItemCondition=3",
    },
    imagen: "gpu.jpg"
  },
  fuente: {
    marca: "Mars Gaming",
      nombre: "Mars Gaming MPB650 650W 80 Plus Bronze",
      potencia: 650,
      gama: "Media",
      precio: {
          segundaMano: 30.00,
          amazon: 43.44,
          ebay: 85.84,
      },
      link: {
          amazon: "https://www.amazon.es/Alimentaci%C3%B3n-Ventilador-Tecnolog%C3%ADa-Silenciosa-Eficiencia/dp/B0CLGR31LB/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=399Y5HGDWUO0G&keywords=Mars+Gaming+MPB650+650W&qid=1702378967&sprefix=mars+gaming+mpb650+650w%2Caps%2C85&sr=8-1",
          ebay: "https://www.ebay.es/itm/195998675651?hash=item2da26e72c3:g:X0YAAOSw4a1lO9KU&amdata=enc%3AAQAIAAAA8LSyI3IdJ0QFJ%2BBT7BPEktgRDVDqkyfhuJITqAXiZ%2BBwgjglyxt1hRrSr5Qpi217X8NzSZHOQUnQppj0HpoKASD5CC3Oq2wnXMSUFOcb%2B2d4l51%2FXltZy0iO4wKtru%2Bemndk0sjyERS%2FRJYY44IxuUZC6T5h10Ylv5Eqa%2Bi9Tovv1dOM22B7VrM8Htz4siyhkK3Omf6G6QhXbZIJkd1iErDWLm6QDf53BJ1eIX%2BPmRqlmxrVNW7ZGQNj9wfPOwQotjFugCEzT3H6AjP%2BXX5pT8FHO%2F86vLrAzjWrqaSEtDdFlXDrY66ioCV9%2FSx8n9vjAQ%3D%3D%7Ctkp%3ABk9SR7LzkduLYw",
      },
      imagen: "fuente.jpg",
  },
  monitor: {
    marca: "AOC",
      nombre: "AOC Q27G2E 27 LED QHD 155Hz FreeSync Premium",
      gama: "Media",
      precio: {
          segundaMano: 150.00,
          amazon: 189.90,
          ebay: 332.03,
      },
      link: {
          amazon: "https://www.amazon.es/AOC-Gaming-Q27G2E-BK-DisplayPort/dp/B0BGC9VRJ9/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2BEWHNEEOMYU&keywords=AOC+Q27G2E+27%22+LED+QHD+155Hz+FreeSync+Premium&qid=1702375355&sprefix=aoc+q27g2e+27%22+led+qhd+155hz+freesync+premium%2Caps%2C81&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/235278980859?hash=item36c7b856fb:g:uJwAAOSw-OxlQkH6&amdata=enc%3AAQAIAAABAK3Cg2rB%2BYDNWhA0%2BS%2F5FsJOoqb8%2BwsvJyGjSItUvnNfDoB8nmlCk4aVW%2BKvcqpajGnNPPC%2FWeWGHf078ZYgRW2KjDOsufnqreks%2Bi%2BVeBwM2G1ZCSNjW9UGNnpzlZ9aKcA2FX3IY8Qe%2FgOHJUq6sXfTz5mMdBGh1c0bfkcX7b5TOYP5wl9%2BV1UD1%2BQiV%2B2%2FIWEoxEUUSDgDsdUgwcyYs%2FtVeJBrwbsUe5Js3VRKYlkOM%2Fr61rtU%2BYHmlx%2F1LUTvtvi55%2BCePvbtvPLUsD8KdV37lkc75zywy3fj28NnzyLE2BsYmtgaDDPjsX3RGhoBNsKrjjoAukCP8sYg0TU4LEM%3D%7Ctkp%3ABFBMgOzU14tj",
      },
      imagen: "monitor.jpg",
  },
  caja: {
    marca: "Cooler Master",
      nombre: "Cooler Master Silencio S400",
      gama: "Media",
      precio: {
          segundaMano: 80.00,
          amazon: 110.93,
          ebay: 119.83,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-Silencio-Midi-Tower-Negro/dp/B07STP8MYP/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2MUU0PPF8M7JC&keywords=Cooler+Master+Silencio+S400&qid=1702377785&sprefix=cooler+master+silencio+s400%2Caps%2C82&sr=8-3&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/305193626279?hash=item470ef52aa7:g:FccAAOSwM55lJUnc&amdata=enc%3AAQAIAAAA8N2xcK6yCkO0ifgoOPTGblIIfp5f9gWV3YC1rd4CM1CyRz3kwD%2FBaXO2MZHG9DirjDyOzo3vKNsKGuSyMOyBi0pXMLOBN1Ia%2Fe%2F641Fxap4bnDBidq7qLusjEh216wKrdRZm8HEoz5KKd5zFVitUDFlqaNbqLxw566ZLkuw7xt7vvklUekMZIE%2FzTgOLfmRcphyq3gMakooLoxhdll%2B%2Fyq0bxd%2BFXJdfAqYGyOrKlLiySA%2B9IIPdOhxUl3CCQ%2B%2BU04ySEkUgoxK3vOkHyoOMF8iBWXTlNg5fdnALU9ju1%2F%2BnxHiSmxnwvdz18MTmojVfFA%3D%3D%7Ctkp%3ABFBMoPj92Ytj",
      },
      imagen: "caja.jpg",
  },
  disipador: {
    marca: "Cooler Master",
      nombre: "Cooler Master Hyper 212 Halo White Ventilador CPU 120mm",
      gama: "Media",
      precio: {
          amazon: 44.99,
          ebay: 34.51,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-Hyper-Halo-Disipador/dp/B0BNYV6NV4/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2RSHBEBOJ7HPQ&keywords=Cooler+Master+Hyper+212+Halo+White+Ventilador+CPU+120mm&qid=1702376224&sprefix=cooler+master+hyper+212+halo+white+ventilador+cpu+120mm%2Caps%2C163&sr=8-1",
          ebay: "https://www.ebay.es/itm/404644387241?hash=item5e36af59a9:g:g~4AAOSw8-hlYpyV&amdata=enc%3AAQAIAAABEPAInrU4yJ6OlQqNBMMfVdki2Rx8BE2qrG%2BtJeOJ6OO1cZm8S8dPL66bFlCVje%2FzXtdFYen7uw%2F00ptt94eL%2FIFXpOKA59sLvW45yv4DjSmo7VOJWbg9qEfzFBTh3IJczIQ5edJgUrAZwXf57qzSPLOUw5BGon4%2Fm90FkbGv%2FDa54lDbGY4xkyTW9eB%2F%2BIefycHIP7Sph0bszm9eAtL9NgrzQ4KBsOdPtDnELpJlbVonl%2BfTVZ%2Bg%2F1n%2FRvcyDOHgUDK5UXMX6H%2BFAO3JNXuXdNCdcSnAx%2B46J9%2BXeO4jD2t%2BQLM7IIuRA8Jotc9mXwpQ6UPvoVRuouQAwyBApGNkElzvPqXYwoQ0fwZ5llXxxGm4%7Ctkp%3ABFBMxO--2Itj",
      },
      imagen: "disipador.jpg",
  },
};

const buildGamaMedia2 = {
  placas: {
    marca: "MSI",
      nombre: "MSI MPG B650 CARBON WIFI DDR5",
      socket: "AM5",
      tipoRam: "DDR5",
      gama: "Media",
      numeroM2: 2,
      numeroSata: 2,
      precio: {
          amazon: 315.31,
          ebay: 239.50,
      },
      link: {
          amazon: "https://www.amazon.es/MSI-B650-Carbon-Placa-Micro-ATX/dp/B0BDS8PT2H/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2W8HC9L91U7FF&keywords=MSI+MPG+B650+CARBON+WIFI&qid=1702371587&sprefix=msi+mpg+b650+carbon+wifi%2Caps%2C106&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/295887433662?hash=item44e443efbe:g:gSYAAOSwxjdjmLAi&amdata=enc%3AAQAIAAAA8Pk%2FSiSVJm0nYBIBbNYc56dljfkjf1su%2FP8Dr2yFUdO7W1%2FXjUAhaFDKJcIZ3rBrqYILJuRIIa8TCxvrmCTrxJEFQKuvd6dQGYktz%2BKnc5yIgM9gd4y4RwTsr4Cz1656rvL7Rj6M1X3kvB6GcaiQwShf%2FWdhjr3jjk7u7Dq%2FrN4V4SAfd5LZSZ44RDBFLTgsgD%2B8dNImFHZSptz1sAExCC36d5eG1MdNUCwDXb4Myg00Tf8pKORbXYhfAjVPR%2F%2FERqtdul1xn7%2FsyFxBdmcdYuP%2BvCD8fjPEutRfRYskyG30Sb8EHJEkj9pJfkcuvd%2FyKw%3D%3D%7Ctkp%3ABk9SR4qFiNSLYw",
      },
      imagen: "placa.jpg"
  },
  cpu: {
    marca: "AMD",
    nombre: "AMD Ryzen 5 7600X",
    gama: "Media",
    socket: "AM5",
    consumo: 105,
    tipoRam: "DDR5",
    ventilador: false,
    gpu: false,
    precio: {
        amazon: 218.90,
        ebay: 191.66,
    },
    link: {
        amazon: "https://www.amazon.es/AMD-Ryzen-7600-Processor-Negro/dp/B0BMQJWBDM/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2JB6ISUKUKUP3&keywords=AMD+Ryzen+5+7600X&qid=1701167793&sprefix=amd+ryzen+5+7600x%2Caps%2C87&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
        ebay: "https://www.ebay.es/itm/285571541885?hash=item427d63eb7d:g:sjcAAOSw-jNlXlHF&amdata=enc%3AAQAIAAAA4J99uFpg9XI7yBHex8ICx7Dfpeqzn64K4Y2h85UqGT0QsjpBkIOqZdrfikRAnCPKhHEqEHSD6XdSvnoWI4yNderb7q5G9dNr%2BB88sxOfAa30dDcz4KPiW1K8YrCpxaMMIY23UMsq7qC5lTf68SwtpFBV%2Bxp3tL4EoVA%2BlasqjmxfjPNdB%2BuYdnLSrJaQEcqgDHsiqYo4b519I%2B9h1wE5XficMuUcFYscyMUCTTDNCPTNaeplV1SDCB6GvXTUJ5UBesmcoilPDlnBbq4mJYvj3Z7ELspdIl7KIjnwxdKSYLQ7%7Ctkp%3ABFBMsImJ2IJj",
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
      nombre: "Corsair Vengeance DDR5 6400MHz PC5-51200 32GB 2x16GB CL32",
      tipo: "DDR5",
      capacidad: 32,
      gama: "MediaAlta",
      precio: {
          amazon: 134.99,
          ebay: 172.58,
      },
      link: {
          amazon: "https://www.amazon.es/Corsair-Vengeance-Optimizada-Regulaci%C3%B3n-Personalizados/dp/B0BPL9VYPW/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=55ZSWG2V7NN4&keywords=Corsair+Vengeance+DDR5+6400MHz+PC5-51200+32GB+2x16GB+CL32&qid=1702367885&sprefix=corsair+vengeance+ddr5+6400mhz+pc5-51200+32gb+2x16gb+cl32%2Caps%2C169&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b1",
          ebay: "https://www.ebay.es/itm/196115489448?hash=item2da964e2a8:g:oz4AAOSwsAllbgjF&amdata=enc%3AAQAIAAABENkLE6KDg6q%2FIQQfwTIGt%2FKvAzGSKX4EKjCqnG1xZyTLaF6lnEP%2FgpM0b0SPjLtL%2FrxYJuBkzl0T0VLeQjCN6eIMM5pHJ%2B8fEWQzy%2Ff2lRpmCcRdMgLr9rcJh8dypc64Cg0kwtyyVcbpIuwMZupcjfJleYRos5rmNL8ld3U4R1CkFhAXcQQERW%2FIVTTjLiq906TDJiNQsXeS82FJt5zTg9uN7ziWLnWIDgEG8ONZcQqdRMC4E%2BIKD3SmQ9W0qc05OCVhmcO1MRpnccL57eFLAooQDehf58l4aRMNW3j6Iy%2BkGxZqfxFi4Wb3AJehLlQWLKqbfdF4u4T10gHezfUztfkRU%2FhOi40uxCqVn3PCN0T1%7Ctkp%3ABFBM8ILF0Itj",
      },
      imagen: "ram.jpg"
  },
  sata: [
    {
      marca: "WD",
      nombre: "WD Purple 2TB 3.5 SATA 3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: "Media",
      precio: {
          segundaMano: 40.00,
          amazon: 71.46,
          ebay: 56.52,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-Disco-mec%C3%A1nico-256MB/dp/B08VH8R94B/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2PKU4UQLMCKRL&keywords=WD+Purple+2TB+3.5%22+SATA+3&qid=1702372984&sprefix=wd+purple+2tb+3.5%22+sata+3%2Caps%2C76&sr=8-1",
          ebay: "https://www.ebay.es/itm/384876574990?hash=item599c6e790e:g:4NkAAOSwMThe0cDH&amdata=enc%3AAQAIAAAA8IXmkF%2BSqSRJfaqpcsA6D5qSxQdXYkHfPe9BLltZtZng9k8Fpqds5lzetUHicFm0eLZgil3pWic8kpjqZjPQfuO%2FV%2BJjdT5EkMG42KxD445w%2BAHAbjJPxD3k6auJgiJv2PUJmJ9NTZyxz%2BHZZrUXEOr7seiv%2Fvr84%2BZoajcUEJQfGez%2Bny%2B%2F1R9NKnSb5shF0qt4nhw00OgGybCGm3yPWy9E%2FBF6c%2FobxvJcX%2FZtsSZp1C0429HIsazkq9KYmcBFE%2BXKCARFWObgwTKl6ASU3gGHGhDcLAm59fv7mM4Qk9CKVZNRxoQRMuT8eJk1k26IvA%3D%3D%7Ctkp%3ABk9SR7zfstWLYw",
      },
      imagen: "hdd.jpg"
    },
    {
      marca: "Kingstone",
      nombre: "Kingston KC600 SSD 512GB NAND TLC 3D SATA3",
      capacidad: 0.5,
      tecnologia: "Sata",
      gama: "MediaAlta",
      precio: {
          segundaMano: 50.00,
          amazon: 57.75,
          ebay: 55.04,
      },
      link: {
          amazon: "https://www.amazon.es/Kingston-KC600-SSD-SKC600-512G/dp/B07ZDBT15M/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1QR02V8YTSI1&keywords=kingston%2Bkc600%2Bssd%2B512gb%2Bnand%2Btlc%2B3d%2Bsata%2B3&qid=1702373177&sprefix=kingston%2Bkc600%2Bssd%2B512gb%2Bnand%2Btlc%2B3d%2Bsata3%2Caps%2C94&sr=8-1&th=1",
          ebay: "https://www.ebay.es/itm/404658693707?hash=item5e3789a64b:g:AdwAAOSwUV9la9kI&amdata=enc%3AAQAIAAABALwTGEf1R4%2BTlUqv0G99XdfV2KojwI1i5uLsANywNgfk%2FINyo5Rq%2Fbwvn8gLlviJDNr4EXQhgBl1i8GKneK5U4GVX%2B5eF7h1Rw%2B1KNM5zsn9aPLsQSYOvf1JE5m9pf4XuKaqPUYOV6ED2d%2BBN6ETff0QYjW93uoQ%2FoI4hZL%2BSUOL5EDdZ6ReMEWyUY%2FDYeX48Kp3%2BjRWwxBC3dE%2Fbrn7R0uT5ZsFX1BKB%2FQKWzhlAo9oXTlVW3HGB%2FvS%2FK%2F%2FdHaQas2n8ccZf%2ByyhF8gw9wmJYd8w9glyV5T0RcoNK5R8Aszu9H3GK%2FzbXWgjFCyfmkeBkPesTRlpANer7JKvtH%2Bp1Q%3D%7Ctkp%3ABFBMkrzK1Ytj",
      },
      imagen: "hdd.jpg"
    },
  ],
  gpu: {
    marca: "AMD",
    nombre: "AMD Radeon RX 7600",
    consumo: 165,
    potenciaRecomendada: 650,
    gama: "Media",
    precio: {
      segundaMano: 250.00,
        amazon: 299.90,
        ebay: 398.88,
    },
    link: {
        amazon: "https://www.amazon.es/Sapphire-Pulse-11324-01-20G-Radeon-7600/dp/B0C49S5R55/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=8G6CE8MDXPQX&keywords=rx+7600+xt&qid=1701246039&sprefix=rx+7600+xt%2Caps%2C87&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
        ebay: "https://www.ebay.es/itm/325900863602?hash=item4be1348872%3Ag%3ATmMAAOSw1ORlYfuQ&amdata=enc%3AAQAIAAAA4ETW%2FKFSTs7a1tRhmOZCrYgiUSskuXcpPv9O%2FxphIyB2gDUvDbxHvR4ciXS2nFK%2B2DEIoceDfF4D3fKiPtzHhaHg0ExXslbhpVtdBU64ZoMWpoORUBtzlOh1jdu6wnc6qBnqvfJLZWAAMAy5EERzey6Iu%2FEBBypyjSLEMgQ8AZ3prS07VvEj3YRXRyKsveNqrSdwKcUVDItWN%2BYPOq2XGyMrUrQ7eLMbsMtxPtF3Ki83DWiviISMx7syX9vMx%2BL%2BWwsLyty9%2FxxRvrFSf52pZYnUTGSgPqbD0LdT1IQRYBzz%7Ctkp%3ABFBMktDXooNj&LH_ItemCondition=1000",
    },
    imagen: "gpu.jpg"
  },
  fuente: {
    marca: "Mars Gaming",
      nombre: "Mars Gaming MPB850M 850W 80 Plus Bronze Full Modular",
      potencia: 850,
      gama: "MediaAlta",
      precio: {
          amazon: 74.89,
          ebay: 49.99,
      },
      link: {
          amazon: "https://www.amazon.es/MPB850M-Alimentaci%C3%B3n-Tecnolog%C3%ADa-Silenciosa-Eficiencia/dp/B0CD1V5RV7/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2ZTXK81EYHQD8&keywords=Mars+Gaming+MPB850M+850W+80+Plus+Bronze+Full+Modular&qid=1702379167&sprefix=mars+gaming+mpb850m+850w+80+plus+bronze+full+modular%2Caps%2C77&sr=8-1",
          ebay: "https://www.ebay.es/itm/256182307415?hash=item3ba5a7ca57:g:vqwAAOSwlUVk2j1R&amdata=enc%3AAQAIAAAA8LAhit17NUhJBtbcrlRipaYdfSV4NxIAsZjFuXt3TlFpaPyZfD2bZGmwWsynYePQGXyhyCLIxIjTgtVE3qT2PeSbyK7pN4RgJlHsdesQtBmY4bACeJvHwlEjVCGjXEwoLfqsWBcXMs2sdMcZAUJXyzuqOtIsRPE2PMAcN9bcpFn%2B9Liirru9VWVzGzL7xKk6w5wUs%2FYpE71X5WoEockZz15ht0hFFmlHADUoxD%2BQYsA9CHn6Kl59ha8lYCoT0oJTbdqHFqCFkDH93F69XLByv4LlACeWa4%2B%2F9L2KFolWh2cmrmu4mbmBHFyflb%2BzpO%2FW4A%3D%3D%7Ctkp%3ABk9SR4LspduLYw",
      },
      imagen: "fuente.jpg",
  },
  monitor: {
    marca: "AOC",
      nombre: "AOC Q27G2E 27 LED QHD 155Hz FreeSync Premium",
      gama: "Media",
      precio: {
          segundaMano: 150.00,
          amazon: 189.90,
          ebay: 332.03,
      },
      link: {
          amazon: "https://www.amazon.es/AOC-Gaming-Q27G2E-BK-DisplayPort/dp/B0BGC9VRJ9/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2BEWHNEEOMYU&keywords=AOC+Q27G2E+27%22+LED+QHD+155Hz+FreeSync+Premium&qid=1702375355&sprefix=aoc+q27g2e+27%22+led+qhd+155hz+freesync+premium%2Caps%2C81&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/235278980859?hash=item36c7b856fb:g:uJwAAOSw-OxlQkH6&amdata=enc%3AAQAIAAABAK3Cg2rB%2BYDNWhA0%2BS%2F5FsJOoqb8%2BwsvJyGjSItUvnNfDoB8nmlCk4aVW%2BKvcqpajGnNPPC%2FWeWGHf078ZYgRW2KjDOsufnqreks%2Bi%2BVeBwM2G1ZCSNjW9UGNnpzlZ9aKcA2FX3IY8Qe%2FgOHJUq6sXfTz5mMdBGh1c0bfkcX7b5TOYP5wl9%2BV1UD1%2BQiV%2B2%2FIWEoxEUUSDgDsdUgwcyYs%2FtVeJBrwbsUe5Js3VRKYlkOM%2Fr61rtU%2BYHmlx%2F1LUTvtvi55%2BCePvbtvPLUsD8KdV37lkc75zywy3fj28NnzyLE2BsYmtgaDDPjsX3RGhoBNsKrjjoAukCP8sYg0TU4LEM%3D%7Ctkp%3ABFBMgOzU14tj",
      },
      imagen: "monitor.jpg",
  },
  caja: {
    marca: "Cooler Master",
      nombre: "Cooler Master Silencio S400",
      gama: "Media",
      precio: {
          segundaMano: 80.00,
          amazon: 110.93,
          ebay: 119.83,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-Silencio-Midi-Tower-Negro/dp/B07STP8MYP/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2MUU0PPF8M7JC&keywords=Cooler+Master+Silencio+S400&qid=1702377785&sprefix=cooler+master+silencio+s400%2Caps%2C82&sr=8-3&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/305193626279?hash=item470ef52aa7:g:FccAAOSwM55lJUnc&amdata=enc%3AAQAIAAAA8N2xcK6yCkO0ifgoOPTGblIIfp5f9gWV3YC1rd4CM1CyRz3kwD%2FBaXO2MZHG9DirjDyOzo3vKNsKGuSyMOyBi0pXMLOBN1Ia%2Fe%2F641Fxap4bnDBidq7qLusjEh216wKrdRZm8HEoz5KKd5zFVitUDFlqaNbqLxw566ZLkuw7xt7vvklUekMZIE%2FzTgOLfmRcphyq3gMakooLoxhdll%2B%2Fyq0bxd%2BFXJdfAqYGyOrKlLiySA%2B9IIPdOhxUl3CCQ%2B%2BU04ySEkUgoxK3vOkHyoOMF8iBWXTlNg5fdnALU9ju1%2F%2BnxHiSmxnwvdz18MTmojVfFA%3D%3D%7Ctkp%3ABFBMoPj92Ytj",
      },
      imagen: "caja.jpg",
  },
  disipador: {
    marca: "Cooler Master",
      nombre: "Cooler Master Hyper 212 Halo White Ventilador CPU 120mm",
      gama: "Media",
      precio: {
          amazon: 44.99,
          ebay: 34.51,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-Hyper-Halo-Disipador/dp/B0BNYV6NV4/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2RSHBEBOJ7HPQ&keywords=Cooler+Master+Hyper+212+Halo+White+Ventilador+CPU+120mm&qid=1702376224&sprefix=cooler+master+hyper+212+halo+white+ventilador+cpu+120mm%2Caps%2C163&sr=8-1",
          ebay: "https://www.ebay.es/itm/404644387241?hash=item5e36af59a9:g:g~4AAOSw8-hlYpyV&amdata=enc%3AAQAIAAABEPAInrU4yJ6OlQqNBMMfVdki2Rx8BE2qrG%2BtJeOJ6OO1cZm8S8dPL66bFlCVje%2FzXtdFYen7uw%2F00ptt94eL%2FIFXpOKA59sLvW45yv4DjSmo7VOJWbg9qEfzFBTh3IJczIQ5edJgUrAZwXf57qzSPLOUw5BGon4%2Fm90FkbGv%2FDa54lDbGY4xkyTW9eB%2F%2BIefycHIP7Sph0bszm9eAtL9NgrzQ4KBsOdPtDnELpJlbVonl%2BfTVZ%2Bg%2F1n%2FRvcyDOHgUDK5UXMX6H%2BFAO3JNXuXdNCdcSnAx%2B46J9%2BXeO4jD2t%2BQLM7IIuRA8Jotc9mXwpQ6UPvoVRuouQAwyBApGNkElzvPqXYwoQ0fwZ5llXxxGm4%7Ctkp%3ABFBMxO--2Itj",
      },
      imagen: "disipador.jpg",
  },
};

const buildGamaAlta = {
  placas: {
    marca: "Gigabyte",
      nombre: "Gigabyte Z790 AORUS PRO X",
      socket: "LGA1700",
      tipoRam: "DDR5",
      gama: "MediaAlta",
      numeroM2: 2,
      numeroSata: 2,
      precio: {
          segundaMano: 370.00,
          amazon: 456.90,
          ebay: 452.99,
      },
      link: {
          amazon: "https://www.amazon.es/Gigabyte-Z790-AORUS-Pro-Placa/dp/B0CK498K6N/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1LG7D5D8ELOB5&keywords=Gigabyte+Z790+AORUS+PRO+X&qid=1702370480&sprefix=gigabyte+z790+aorus+pro+x%2Caps%2C119&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/355250702723?hash=item52b6978983%3Ag%3AugkAAOSw2OplajGL&amdata=enc%3AAQAIAAAA0BRSUaXoPMwIfe0NDN2Jymhwnd2BQb%2BLIeiu4o4Mkm4TxaYQqcLRwfdBN1fGSSa3SaW%2FgBuq52G06bJtSH%2Bsfabj%2BT%2BNkC2tO0rw5%2BDayuDvGr3J2TH4yaGwt8fEPlXCTNXByAL5boeY2IZt%2FuCQwJpT6jl9X%2BNJoJmbtDGPflSb5YwNEA%2B9d5GDK5Ok2bBYjIRuxWVM1QRV4OXc49f6m6NdQtq%2B%2Fdy2O3ITmIkk%2FoyauXpvNxefeg8pWWbuqtFyCVHI3RbgkBx3frPURpFz3Z0%3D%7Ctkp%3ABk9SR77fhNOLYw&LH_ItemCondition=3",
      },
      imagen: "placa.jpg"
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i7-14700KF",
    gama: "Alta",
    socket: "LGA1700",
    consumo: 253,
    tipoRam: "DDR5",
    ventilador: false,
    gpu: false,
    precio: {
        amazon: 470.31,
        ebay: 419.99,
    },
    link: {
        amazon: "https://www.amazon.es/Intel%C2%AE-i7-14700KF-Desktop-Processor-P-Cores/dp/B0C948QQWF/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2Y2O8V73GPMR5&keywords=i7+14700k&qid=1701165837&sprefix=i714700k%2Caps%2C78&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
        ebay: "https://www.ebay.es/itm/355176558164?hash=item52b22c2e54:g:7GIAAOSwRjBlXSb5&amdata=enc%3AAQAIAAAAwAFuFQfi0SbVB2iSTs1Hr6i8VuCkFaxDDOT4RFlKrwXu9Rj%2FXSVQoU2UQkMmipt%2BwRE%2BMclF809Jp6ApENZHVemqzeazKXj4831o%2BGltYQJQHWLpyUJDsiGXubEj1JbFKFfbx%2BlqEGsF03JlzWtZuyR%2BYG5cslaSez4bEh90xMMobuG0IwVfIuD%2FVcqeNA%2BgSi0UTu4aAx9GXq1KQUK%2FIIdp6rTDcZAnU%2F45tDkLr7WctVFUsX73z4%2BB8HWRT%2Bec9w%3D%3D%7Ctkp%3ABk9SR5rhjtaCYw",
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
      nombre: "Corsair Vengeance DDR5 6400MHz PC5-51200 32GB 2x16GB CL32",
      tipo: "DDR5",
      capacidad: 32,
      gama: "MediaAlta",
      precio: {
          amazon: 134.99,
          ebay: 172.58,
      },
      link: {
          amazon: "https://www.amazon.es/Corsair-Vengeance-Optimizada-Regulaci%C3%B3n-Personalizados/dp/B0BPL9VYPW/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=55ZSWG2V7NN4&keywords=Corsair+Vengeance+DDR5+6400MHz+PC5-51200+32GB+2x16GB+CL32&qid=1702367885&sprefix=corsair+vengeance+ddr5+6400mhz+pc5-51200+32gb+2x16gb+cl32%2Caps%2C169&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b1",
          ebay: "https://www.ebay.es/itm/196115489448?hash=item2da964e2a8:g:oz4AAOSwsAllbgjF&amdata=enc%3AAQAIAAABENkLE6KDg6q%2FIQQfwTIGt%2FKvAzGSKX4EKjCqnG1xZyTLaF6lnEP%2FgpM0b0SPjLtL%2FrxYJuBkzl0T0VLeQjCN6eIMM5pHJ%2B8fEWQzy%2Ff2lRpmCcRdMgLr9rcJh8dypc64Cg0kwtyyVcbpIuwMZupcjfJleYRos5rmNL8ld3U4R1CkFhAXcQQERW%2FIVTTjLiq906TDJiNQsXeS82FJt5zTg9uN7ziWLnWIDgEG8ONZcQqdRMC4E%2BIKD3SmQ9W0qc05OCVhmcO1MRpnccL57eFLAooQDehf58l4aRMNW3j6Iy%2BkGxZqfxFi4Wb3AJehLlQWLKqbfdF4u4T10gHezfUztfkRU%2FhOi40uxCqVn3PCN0T1%7Ctkp%3ABFBM8ILF0Itj",
      },
      imagen: "ram.jpg"
  },
  m2: [
    {
      marca: "Kingstone",
      nombre: "Kingston NV2 1TB SSD PCIe 4.0 NVMe Gen 4x4",
      capacidad: 1,
      tecnologia: "m2",
      gama: "MediaAlta",
      precio: {
          segundaMano: 40.00,
          amazon: 52.99,
          ebay: 60.80,
      },
      link: {
          amazon: "https://www.amazon.es/Kingston-NVMe-PCIe-1000G-SNV2S/dp/B0BBWH1R8H/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2AZ0QSPBIC110&keywords=Kingston+NV2+1TB+SSD+PCIe+4.0+NVMe+Gen+4x4&qid=1702373853&sprefix=kingston+nv2+1tb+ssd+pcie+4.0+nvme+gen+4x4%2Caps%2C84&sr=8-2",
          ebay: "https://www.ebay.es/itm/354959529322?hash=item52a53c956a:g:AOcAAOSwVoNky0q7&amdata=enc%3AAQAIAAABAA6GNjU9xJHY3pyxGC7EfmrZriHJzZTf2QAwNu4UUfJr2Xze6fgDiFh3twQiPWT4%2FxiZYu1mMPkv8Ge72iTVYOxbSW0xmrL4P67Bl1%2FD2FFHgF8pjszM3O3WqiMI8YnGAPkz1mFiHE%2B6%2FC%2FK6a%2FTNZ0S49m2103yOANogTYbZDWSBzom39%2Bg9AT7Fu8x2DuwDnmC2gIjt8Mw4rpuu8eC4Equ5YMuVUdBtR4yvbxP16UcZvMkXfmwjyRIIJ5sBsqXdZJyU%2FT5xWo4zKNwpHrkHLkOYeJ6qMjMqIvoY14Tn%2Bezet%2Bp3GHoaAhu4eNJC3zpIx7Tle%2FtDQx7zYk8geT5Pn0%3D%7Ctkp%3ABFBMgJKe1otj",
      },
      imagen: "m2.jpg"
    },
    {
      marca: "Kingstone",
      nombre: "Kingston NV2 1TB SSD PCIe 4.0 NVMe Gen 4x4",
      capacidad: 1,
      tecnologia: "m2",
      gama: "MediaAlta",
      precio: {
          segundaMano: 40.00,
          amazon: 52.99,
          ebay: 60.80,
      },
      link: {
          amazon: "https://www.amazon.es/Kingston-NVMe-PCIe-1000G-SNV2S/dp/B0BBWH1R8H/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2AZ0QSPBIC110&keywords=Kingston+NV2+1TB+SSD+PCIe+4.0+NVMe+Gen+4x4&qid=1702373853&sprefix=kingston+nv2+1tb+ssd+pcie+4.0+nvme+gen+4x4%2Caps%2C84&sr=8-2",
          ebay: "https://www.ebay.es/itm/354959529322?hash=item52a53c956a:g:AOcAAOSwVoNky0q7&amdata=enc%3AAQAIAAABAA6GNjU9xJHY3pyxGC7EfmrZriHJzZTf2QAwNu4UUfJr2Xze6fgDiFh3twQiPWT4%2FxiZYu1mMPkv8Ge72iTVYOxbSW0xmrL4P67Bl1%2FD2FFHgF8pjszM3O3WqiMI8YnGAPkz1mFiHE%2B6%2FC%2FK6a%2FTNZ0S49m2103yOANogTYbZDWSBzom39%2Bg9AT7Fu8x2DuwDnmC2gIjt8Mw4rpuu8eC4Equ5YMuVUdBtR4yvbxP16UcZvMkXfmwjyRIIJ5sBsqXdZJyU%2FT5xWo4zKNwpHrkHLkOYeJ6qMjMqIvoY14Tn%2Bezet%2Bp3GHoaAhu4eNJC3zpIx7Tle%2FtDQx7zYk8geT5Pn0%3D%7Ctkp%3ABFBMgJKe1otj",
      },
      imagen: "m2.jpg"
    },
  ],
  sata: [
    {
      marca: "Gigabyte",
      nombre: "Gigabyte GP-GSTFS31100TNTD 1TB SSD 2.5 SATA3",
      capacidad: 1,
      tecnologia: "Sata",
      gama: "Alta",
      precio: {
          amazon: 65.50,
          ebay: 78.49,
      },
      link: {
          amazon: "https://www.amazon.es/Gigabyte-GP-GSTFS31100TNTD-Unidad-Estado-s%C3%B3lido/dp/B07RQF6P9C/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2H9A7GDDO4WIO&keywords=Gigabyte+GP-GSTFS31100TNTD+1TB+SSD+2.5%22+SATA3&qid=1702373347&sprefix=gigabyte+gp-gstfs31100tntd+1tb+ssd+2.5%22+sata3%2Caps%2C155&sr=8-2",
          ebay: "https://www.ebay.es/itm/186186829895?hash=item2b59999047:g:H2QAAOSwivZlZyXc&amdata=enc%3AAQAIAAABAHxdQPFYrzMjzSspw5G1ta6Uoot5sxQbF1kviM3plgKTy%2BCLD%2BXQPcpDIGEH95trp2PtZhmbtZeAmqKp1cwhWFVyxDSTmOa360RPFRhJ%2FAiv0vSLupfHc3LApLE%2BhiCIZNw9WXxRS90DoRhdBi6Ks7Bt8%2FGWh6kPA%2BmwDZJW%2BdCzAeI4YCQboBsKzASiV9fkpYY62EgtDesv7Z%2FHJQrNKUzE2bJWJvke7E3VFxm6oaSYL03te9qyCSBHbXlP9sRs9uSbyY37uFAIFZ0Ei80ekltDqhtpZY3ZL%2BqA%2BUeGQ%2B8vHlNK7HGHEGvsKO12Y6LioB%2FpB2myJYjURJsm9cRrhjA%3D%7Ctkp%3ABFBMlPze1Ytj",
      },
      imagen: "hdd.jpg"
    },
    {
      marca: "Gigabyte",
      nombre: "Gigabyte GP-GSTFS31100TNTD 1TB SSD 2.5 SATA3",
      capacidad: 1,
      tecnologia: "Sata",
      gama: "Alta",
      precio: {
          amazon: 65.50,
          ebay: 78.49,
      },
      link: {
          amazon: "https://www.amazon.es/Gigabyte-GP-GSTFS31100TNTD-Unidad-Estado-s%C3%B3lido/dp/B07RQF6P9C/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2H9A7GDDO4WIO&keywords=Gigabyte+GP-GSTFS31100TNTD+1TB+SSD+2.5%22+SATA3&qid=1702373347&sprefix=gigabyte+gp-gstfs31100tntd+1tb+ssd+2.5%22+sata3%2Caps%2C155&sr=8-2",
          ebay: "https://www.ebay.es/itm/186186829895?hash=item2b59999047:g:H2QAAOSwivZlZyXc&amdata=enc%3AAQAIAAABAHxdQPFYrzMjzSspw5G1ta6Uoot5sxQbF1kviM3plgKTy%2BCLD%2BXQPcpDIGEH95trp2PtZhmbtZeAmqKp1cwhWFVyxDSTmOa360RPFRhJ%2FAiv0vSLupfHc3LApLE%2BhiCIZNw9WXxRS90DoRhdBi6Ks7Bt8%2FGWh6kPA%2BmwDZJW%2BdCzAeI4YCQboBsKzASiV9fkpYY62EgtDesv7Z%2FHJQrNKUzE2bJWJvke7E3VFxm6oaSYL03te9qyCSBHbXlP9sRs9uSbyY37uFAIFZ0Ei80ekltDqhtpZY3ZL%2BqA%2BUeGQ%2B8vHlNK7HGHEGvsKO12Y6LioB%2FpB2myJYjURJsm9cRrhjA%3D%7Ctkp%3ABFBMlPze1Ytj",
      },
      imagen: "hdd.jpg"
    },
  ],
  gpu: {
    marca: "Nvidia",
    nombre: "Nvidia RTX 4080",
    consumo: 320,
    potenciaRecomendada: 750,
    gama: "Alta",
    precio: {
      segundaMano: 1250.00,
        amazon: 1397.90,
        ebay: 1771.00,
    },
    link: {
        amazon: "https://www.amazon.es/Gigabyte-Tarjeta-gr%C3%A1fica-GeForce-Gaming/dp/B0BLT45YZ1/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3AND6U64QVCUO&keywords=rtx+4080&qid=1701169474&sprefix=rtx+4080%2Caps%2C99&sr=8-5",
        ebay: "https://www.ebay.es/itm/364345236792?hash=item54d4ab1d38%3Ag%3AjuMAAOSw-EJktSVd&amdata=enc%3AAQAIAAAA4KvubXjCXPIf%2Bnkgb%2BA%2Bz8M5JKvdVWGQr5IrqpgO7u7PCtmZFpnXf5%2FSYRdsHo%2BhANnpA90C%2B1YhlIdSZIaGsKHPupEfH5y4oNQ2yZjp%2F5%2B%2FR5yRDeJgktIrHu9fXXzC7V5JsywhIWp8V8EYdaGJW4kQMkdpFnsCquAlNCBED7WqhNe62LpIEjm5ohCXlobBTtnVJLVSY0hqpq01jBrAgf5pnQWOZMkI8D8X0cPsZg9nLIi8nmAZdDbRARIqAOIH7VKp0t6fXSo1cxSog%2FXzEHaKK7xDHhZUVLtdq7kCGQI4%7Ctkp%3ABk9SR_j31dmCYw&LH_ItemCondition=1000",
    },
    imagen: "gpu.jpg"
  },
  fuente: {
    marca: "Mars Gaming",
      nombre: "Mars Gaming MPB1000M 1000W 80 Plus Gold Modular",
      potencia: 1000,
      gama: "Alta",
      precio: {
          segundaMano: 50.00,
          amazon: 89.90,
          ebay: 69.98,
      },
      link: {
          amazon: "https://www.amazon.es/MPB1000M-Alimentaci%C3%B3n-Eficiencia-Tecnolog%C3%ADa-Ultrasilencioso/dp/B0CM6FGXDM/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=51QTIC5Z0D71&keywords=Mars+Gaming+MPB1000M+1000W+80+Plus+Gold+Modular&qid=1702379378&sprefix=mars+gaming+mpb1000m+1000w+80+plus+gold+modular%2Caps%2C84&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/256182320961?hash=item3ba5a7ff41:g:-xoAAOSwQSlk2kFH&amdata=enc%3AAQAIAAAA4HYeuKYSB0UcX0iuBpA45gncbltiU498dOir2x8g1m%2FOfa8v8%2F8DY2RLa2ApWoZ6XNF%2BH8nCMNn4n0%2FTqEuHibzya4sgV477auDOw8prGqlJTdmVH57Ei4%2FrykfOnc79CaAXVs1y0UO5gQx8VTlQWd6aqr0KjXVa5CWsQSuuBCJ2nAspInx0lU0bbIM8CtRl8H8qZ9%2BsG9zik0rCIXVqASlWu1pesXcp9lZTCcV5jG4VRRJE9sy4NQibFDhSHBC8kgSzEYGaLctp72%2B1XBscCuJRBRkmDqL4Ky30IEepAh4v%7Ctkp%3ABk9SR-LjwtuLYw",
      },
      imagen: "fuente.jpg",
  },
  monitor: {
    marca: "Asus",
      nombre: "Asus TUF Gaming VG28UQL1A 28 LED IPS UltraHD 4K 144Hz G-SYNC",
      gama: "Premium",
      precio: {
          amazon: 628.90,
          ebay: 835.29,
      },
      link: {
          amazon: "https://www.amazon.es/ASUS-VG28UQL1A-3840x2160-Compatible-DisplayHDR/dp/B09CDVMNS7/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3IYN8YJ2BUUZJ&keywords=Asus%2BTUF%2BGaming%2BVG28UQL1A%2B28%22%2BLED%2BIPS%2BUltraHD%2B4K%2B144Hz%2BG-SYNC&qid=1702375774&sprefix=asus%2Btuf%2Bgaming%2Bvg28uql1a%2B28%22%2Bled%2Bips%2Bultrahd%2B4k%2B144hz%2Bg-sync%2Caps%2C87&sr=8-5&ufe=app_do%3Aamzn1.fos.0fd54328-1d46-4534-bd0f-16141b40bb5b&th=1",
          ebay: "https://www.ebay.es/itm/314987242407?hash=item4956b3e3a7:g:4r0AAOSwfbZlYfVH&amdata=enc%3AAQAIAAAA8FGAAgJEpHdBXvFP9xIkYkgy349TXX8vc%2FNm0Q5M9I1BfwR5KopqXxv5I0RUtBB7PAPOhT4Xp58HJqHrltgCJ2fjmi7YDtDcyM3Q%2FmO38ULS1ypi96%2Fn1utnyHVRfwuFdHM2rhY3TN9z2lZrqtPt1OE5ZecPEdRUJdT5V7YUHHA27QbMgTlJN0x6sQ6uHduun9G4pSnZOB0nwsgEObteSH6SKlmFEqqe4YIRU004%2BQunUsVivbs0r3EgbPVOPjDRKzg7VUstYsZBAItBh%2BeZoY%2FcWuyRjQUcn8I%2F83T1FRKOqSheVVcn7QExqdjRY6tRwQ%3D%3D%7Ctkp%3ABk9SR4q7h9iLYw",
      },
      imagen: "monitor.jpg",
  },
  caja: {
    marca: "Cooler Master",
      nombre: "Cooler Master MasterCase H500",
      gama: "MediaAlta",
      precio: {
          amazon: 116.90,
          ebay: 146.39,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-MasterCase-Ventiladores-Transparente/dp/B083FLCWT2/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2BD7TJ3EJFK8A&keywords=Cooler+Master+MasterCase+H500&qid=1702377867&sprefix=cooler+master+mastercase+h500%2Caps%2C112&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/125799651197?hash=item1d4a3e577d:g:b6sAAOSwK5RkAPUa&amdata=enc%3AAQAIAAAA0JVJED23iy6H9X4muzqk3oDMvISX6wEbADaGNNdnym5JCx4ITZ3slLglxu5oh1cVyc1z%2B%2FO9eGE52w9UM2ODKsWrfM1D6bRtMHMxhuFQjZIV%2Fta7RSffqmJKQSqPKO1IlQQ1RCG6wXyRPPgMQo6wMfW6d3PyN7ufvmzbqmDINiPw9BgaxtYX5MaNj%2FRFDdeD%2FGpV%2F4JVQPEK6%2FFr77xW2wsafibFTUSUa8Yw2dBHdarxVjcyP%2BKPq5QHUzopBM1tWjCQCApPI9%2Bm1pTjpeyu1pY%3D%7Ctkp%3ABk9SR4TWh9qLYw",
      },
      imagen: "caja.jpg",
  },
  disipador: {
    marca: "Corsair",
      nombre: "Corsair iCUE H170i ELITE LCD XT",
      gama: "Premium",
      precio: {
          segundaMano: 170.00,
          amazon: 382.99,
          ebay: 208.34,
      },
      link: {
          amazon: "https://www.amazon.es/Corsair-H170i-Elite-Refrigerador-L%C3%ADquido/dp/B0BQWTVYLV/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=XYQ9FIXDTU3A&keywords=Corsair%2BiCUE%2BH170i%2BELITE%2BLCD%2BXT&qid=1702376744&sprefix=corsair%2Bicue%2Bh170i%2Belite%2Blcd%2Bxt%2Caps%2C90&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&th=1",
          ebay: "https://www.ebay.es/itm/386171376022?hash=item59e99b9196:g:x7AAAOSwXMllHvS7&amdata=enc%3AAQAIAAAA8Mn2OOQETkUR%2BUnvawKImluI226QrP3o8dJ9XYKOvcch1n%2F5PLbWYElzQmq9U7lFzME38DBqvOoFB61jEuWUJNq%2FU7ajDGbIUPXbCswPu%2F7BXTuzHR6kxVURrDLcUdyVT5YXj0MGrSHlRU%2B%2F0nJL2UW%2BlGh2LdfjKsnKm3VFxeJTvP%2FA2rFpfo3UeN9yIeuRAMJW7olZoGdyKii3fKhS%2B1gXwQNIx%2FpTOiEwwdqpkogNq6pJ6tsbY2Yor09tZ7wbUJCq77bRDwyakzlZ2VzY5UESVBQkZb%2FY3y7i1QrH23Uk3jNphquNUavZxffRJJ1tkw%3D%3D%7Ctkp%3ABk9SR6Ka_tiLYw",
      },
      imagen: "disipador.jpg",
  },
};

const buildGamaAlta2 = {
  placas: {
    marca: "Gigabyte",
      nombre: "Gigabyte Z790 AORUS XTREME X",
      socket: "LGA1700",
      tipoRam: "DDR5",
      gama: "Premium",
      numeroM2: 2,
      numeroSata: 2,
      precio: {
          segundaMano: 1000.00,
          amazon: 1270.45,
          ebay: 1212.89,
      },
      link: {
          amazon: "https://www.amazon.es/Intel-1700-Z790-AORUS-Xtreme/dp/B0BYSML1N6/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2CRLRBIM9KQNO&keywords=Gigabyte+Z790+AORUS+XTREME+X&qid=1702370657&sprefix=gigabyte+z790+aorus+xtreme+x%2Caps%2C96&sr=8-1",
          ebay: "https://www.ebay.es/itm/335115164224?hash=item4e066b9a40:g:NggAAOSwwBxlUDbD&amdata=enc%3AAQAIAAAA0NVNEhV1P6EdEZ0NJTqv%2B1t6%2FCDXif%2BKRH1OPRGTDww3VW38YTG10zOQcgnJbEpSIzlZ1Zjy0n89Tw7xPE05musLJCQjctw%2BjLIdc5NNOYKgIdxJz%2FlUATkydIJvD%2F11GWBC7fHixsk4enaA2WgU2zFtFWoLjjJQDKKWFJaehRO0AP1eKKhPLDkBvarvEtolD28pdOrzbs1XE9PVqS1qJlwbWXsW6llc2GPC8ewIJCcG1RtMbYn1xcLMWD4fxbA4tVJq1BaX6eQ7D%2FCyNSt9Di4%3D%7Ctkp%3ABk9SR4a-ltOLYw",
      },
      imagen: "placa.jpg"
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i9-14900KF",
    gama: "Premium",
    socket: "LGA1700",
    consumo: 253,
    tipoRam: "DDR5",
    ventilador: false,
    gpu: false,
    precio: {
        segundaMano: 600.00,
        amazon: 653.00,
        ebay: 644.95,
    },
    link: {
        amazon: "https://www.amazon.es/Intel%C2%AE-i9-14900KF-Desktop-Processor-P-Cores/dp/B0CHBJXG7G/ref=sr_1_2_mod_primary_new?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2PPOO6DB2YGDW&keywords=i9+14900k&qid=1701165525&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=i9+14900kf%2Caps%2C84&sr=8-2",
        ebay: "https://www.ebay.es/itm/126176097728?hash=item1d60ae75c0:g:5YgAAOSwQollS3Fm&amdata=enc%3AAQAIAAAA4E6hNV0xiF8E0IXgS4HuvEu3%2FXj1fe78T5gOobPPoTB2jn%2FPC6UgP2rVYlPiXDNZEeCWYrHoOL40Cl%2BWN9HfnccfvlMYQQC5B6SYfPfW5DICHtkXYJwkyGkYAlyo7dGf5DIWpNypCuaEiT1diOJpwew188xfa%2BmzR6u7a816e%2BlCvAqACA0jxo0ceCjuhDUdc2okfF5K%2FMZQ9ncvsvEE64dYmdi7gnwZ%2FDKFuRhrshGtbNPw9AQO7aCC0WevhVBoQXpxLVtE2zcA%2FvlEjPuvppeW3TcKsUmii6WddeieDbPQ%7Ctkp%3ABk9SR_ik9NWCYw",
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
      nombre: "CORSAIR Vengeance RGB DDR5 RAM 128GB (4x32GB) 5600MHz CL40",
      tipo: "DDR5",
      capacidad: 128,
      gama: "Premium",
      precio: {
          segundaMano: 480.00,
          amazon: 621.35,
          ebay: 515.61,
      },
      link: {
          amazon: "https://www.amazon.es/CORSAIR-Vengeance-5600MHz-Ordenador-Compatible/dp/B0CFZR4YCC/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=ZAOIXVYHOOST&keywords=ram+ddr5+128gb&qid=1702368368&sprefix=ram+ddr5+128gb%2Caps%2C88&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/235309649225?hash=item36c98c4d49:g:6VwAAOSwvaRlNSCJ&amdata=enc%3AAQAIAAAA4IRtFYrbA8rkk5e%2BSwgMB7qf2Odb8ZEwkPQrexBqrabt6x6CAQq%2BdosdnVkDgN%2BhGIjMiL0%2B5EZ1GzDJeycCMFkoLFr%2BEbTZVIhV2mt5BbPeL%2BxteAVRHO1p0zzI1J8afBXLvSE1pLGboe2FHPdKd1xMecyqL01CURa2XZFhlYa7O9jYsqv%2BRHLsUrQTRCLOdxHpmEf23mCdWsf0qV8utA8rEi2qn5w1BUAJSlHhe29T8UtQ2JfdmpunrEluHDqoFp3jA%2BfGTbcmdO1raBSBCk0TUo6UoLyK3wDKVndWdgI%2B%7Ctkp%3ABFBMsIiH0Ytj",
      },
      imagen: "ram.jpg"
  },
  m2: [
    {
      marca: "WD",
      nombre: "WD Black SN850X SSD 4TB M.2 2280 PCIe Gen4 NVMe",
      capacidad: 4,
      tecnologia: "m2",
      gama: "Premium",
      precio: {
          segundaMano: 250.00,
          amazon: 280.99,
          ebay: 331.39,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-Black-SN850X-Express/dp/B0B7CQ2CHH/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1LBBY2N7N9HE5&keywords=wd+black+sn850x+ssd+4tb+m.2+2280+pcie+gen+4+nvme&qid=1702374182&sprefix=wd+black+sn850x+ssd+4tb+m.2+2280+pcie+gen4+nvme%2Caps%2C86&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/403857093327?hash=item5e07c232cf:g:ylwAAOSw84ZjDM4Q&amdata=enc%3AAQAIAAAA4FXP4jQXfi2iJkNlEkf%2BQw70uKyfnqe7AqXj9YjjfpNPuDLr9LRthuG99rYXgQqRPGzsiqerVKXtk23xa4bqKE8ObQtC49CG43FdyyJUN0Y21luBpE8%2BuxxX2KElCMiN76BGqHY0EXYq65yPngnXpq44uvYIfBv86SHm7suSOrTAP6g9HzHKUg0J6eyoqD0M%2Ff4Xbzqbw5t2YAh%2FiygkpVBML9SVJP8aaDj4sd6oGkhycejToi7M6o3v2TZat1GYR%2FAlK3nTzLe49FWCZD5wQZRNnsm9TDCX%2BMPycmYbSouo%7Ctkp%3ABk9SR7aoxtaLYw",
      },
      imagen: "m2.jpg"
    },
    {
      marca: "WD",
      nombre: "WD Black SN850X SSD 4TB M.2 2280 PCIe Gen4 NVMe",
      capacidad: 4,
      tecnologia: "m2",
      gama: "Premium",
      precio: {
          segundaMano: 250.00,
          amazon: 280.99,
          ebay: 331.39,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-Black-SN850X-Express/dp/B0B7CQ2CHH/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1LBBY2N7N9HE5&keywords=wd+black+sn850x+ssd+4tb+m.2+2280+pcie+gen+4+nvme&qid=1702374182&sprefix=wd+black+sn850x+ssd+4tb+m.2+2280+pcie+gen4+nvme%2Caps%2C86&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/403857093327?hash=item5e07c232cf:g:ylwAAOSw84ZjDM4Q&amdata=enc%3AAQAIAAAA4FXP4jQXfi2iJkNlEkf%2BQw70uKyfnqe7AqXj9YjjfpNPuDLr9LRthuG99rYXgQqRPGzsiqerVKXtk23xa4bqKE8ObQtC49CG43FdyyJUN0Y21luBpE8%2BuxxX2KElCMiN76BGqHY0EXYq65yPngnXpq44uvYIfBv86SHm7suSOrTAP6g9HzHKUg0J6eyoqD0M%2Ff4Xbzqbw5t2YAh%2FiygkpVBML9SVJP8aaDj4sd6oGkhycejToi7M6o3v2TZat1GYR%2FAlK3nTzLe49FWCZD5wQZRNnsm9TDCX%2BMPycmYbSouo%7Ctkp%3ABk9SR7aoxtaLYw",
      },
      imagen: "m2.jpg"
    },
  ],
  sata: [
    {
      marca: "Samsung",
      nombre: "Samsung 870 EVO SSD 2.5 2TB SATA3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: "Premium",
      precio: {
          amazon: 142.79,
          ebay: 179.90,
      },
      link: {
          amazon: "https://www.amazon.es/Samsung-870-EVO-2000-Negro/dp/B08PC5ZYB1/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2H3FIYIO9QWNT&keywords=Samsung+870+EVO+SSD+2.5%22+2TB+SATA3&qid=1702373527&sprefix=samsung+870+evo+ssd+2.5%22+2tb+sata3%2Caps%2C99&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/364026432432?hash=item54c1aa8bb0:g:0UkAAOSwjCRjVsGU&amdata=enc%3AAQAIAAAA8KSrWcKHydbJ9N4RXn8dVJJfeXgfbGNr81CwhJwutYryWAAbF7130PYbr%2Ff6%2BlA5%2FULFKXGMnNmw4jaoUjxQ9GYt1ULA7XN3vgmI1Iuw7CHpdBrwO0r%2By38E0u48qp8k0MHnPr7YO2YjB%2BnjN8dtTIMyARKAWlf3DLJmZHVpGt79Ec6%2BCdxPw9IM%2F55WQve2HXUKFl8aCmXgZ2OAOBG5hZfDRbhGS%2FWGfTcLQcrJyFVs5bj1cQpteDLGa0xcFvWj%2BmQ2iEvwpyPAaDdSXtYkb74fnlDvWcrXk0Sj1a1oy6vNBiNlqVZqxxVdlseQFwf9Cw%3D%3D%7Ctkp%3ABFBM9Pr01Ytj",
      },
      imagen: "hdd.jpg"
    },
    {
      marca: "Samsung",
      nombre: "Samsung 870 EVO SSD 2.5 2TB SATA3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: "Premium",
      precio: {
          amazon: 142.79,
          ebay: 179.90,
      },
      link: {
          amazon: "https://www.amazon.es/Samsung-870-EVO-2000-Negro/dp/B08PC5ZYB1/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2H3FIYIO9QWNT&keywords=Samsung+870+EVO+SSD+2.5%22+2TB+SATA3&qid=1702373527&sprefix=samsung+870+evo+ssd+2.5%22+2tb+sata3%2Caps%2C99&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/364026432432?hash=item54c1aa8bb0:g:0UkAAOSwjCRjVsGU&amdata=enc%3AAQAIAAAA8KSrWcKHydbJ9N4RXn8dVJJfeXgfbGNr81CwhJwutYryWAAbF7130PYbr%2Ff6%2BlA5%2FULFKXGMnNmw4jaoUjxQ9GYt1ULA7XN3vgmI1Iuw7CHpdBrwO0r%2By38E0u48qp8k0MHnPr7YO2YjB%2BnjN8dtTIMyARKAWlf3DLJmZHVpGt79Ec6%2BCdxPw9IM%2F55WQve2HXUKFl8aCmXgZ2OAOBG5hZfDRbhGS%2FWGfTcLQcrJyFVs5bj1cQpteDLGa0xcFvWj%2BmQ2iEvwpyPAaDdSXtYkb74fnlDvWcrXk0Sj1a1oy6vNBiNlqVZqxxVdlseQFwf9Cw%3D%3D%7Ctkp%3ABFBM9Pr01Ytj",
      },
      imagen: "hdd.jpg"
    },
  ],
  gpu: {
    marca: "Nvidia",
    nombre: "Nvidia RTX 4090",
    consumo: 450,
    potenciaRecomendada: 850,
    gama: "Premium",
    precio: {
        amazon: 2126.05,
        ebay: 2008.73,
    },
    link: {
        amazon: "https://www.amazon.es/MSI-GeForce-GAMING-Tarjeta-Gr%C3%A1fica/dp/B09YCLG5PB/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=171LY0HEIVS1U&keywords=rtx%2B4090&qid=1701169195&sprefix=rtx%2B4090%2Caps%2C116&sr=8-5&th=1",
        ebay: "https://www.ebay.es/itm/134776095022?hash=item1f6148012e%3Ag%3AaaIAAOSwi8FlMyCd&amdata=enc%3AAQAIAAAA4I8YIMYPdD7GWSImTRJOwYlZX5dYFJ5E28vL9rK5zwUU9kYLHLmU0ZB5mHV9yQymn2EOJ89mrO1p%2Bw%2F4bZKlWxjbwCjhlgNOU%2F4%2FQW8I8aUuaKrrepF9Ykxi4Bat4d4jnMBklrJCcnCHhPHp3ck4ZV1D7e2H4DbwChH4P78uxSw0O06m%2F%2FiXFSW%2Bey%2BArliOdErfvL8FoNH%2FlQRGK2rpkoqt4g26cQa8Lynn6W6IeliS4b2dCG446GFkUCOHyqeGOU6dnQIKOJbBRSmAKlRUDQZVHNpE75glvU7Oeo6m3nST%7Ctkp%3ABFBMgoe82YJj&LH_ItemCondition=1000",
    },
    imagen: "gpu.jpg"
  },
  fuente: {
    marca: "Asus",
      nombre: "Asus ROG Thor 1200P 80 Plus Platinum 1200W Modular",
      potencia: 1200,
      gama: "Premium",
      precio: {
          segundaMano: 300.00,
          amazon: 357.36,
          ebay: 520.00,
      },
      link: {
          amazon: "https://www.amazon.es/ASUS-calentadores-ventiladores-rodamiento-tecnolog%C3%ADa/dp/B07J9NHZZH/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=147OPGWA6SCA2&keywords=Asus+ROG+Thor+1200P+80+Plus+Platinum+1200W+Modular&qid=1702379518&sprefix=asus+rog+thor+1200p+80+plus+platinum+1200w+modular%2Caps%2C77&sr=8-3&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/374923541968?hash=item574b2f3dd0:g:iMAAAOSwaQZk~CEV&amdata=enc%3AAQAIAAABAGU4hLSXkIsRskS%2FMrPn142K8RhFX42T4C271yRDG2iCIt7mUpVTFcg%2FRIaNF3eMa5dVBBnlFJMovf4Vb5ZL%2FyFWbJW2Eqs0abcb8e7zEQ4il7kn7LDYp9LYRj5M9fNYV%2FRO4Gvc706Fi9kPOW0haTq%2Bb5%2FFBQXzQzDKF25ZnwxhzGRaLAF6C2MCFAJIlu7mc%2FHfCoxFzteEmoRl72zyJOWipRMoJVXaGML0Ig%2FtLDaIyXLH3d7TqMGpyDgVkzkIYeIJcU2%2BSkuNsDdE3sP69GvQrg%2B%2FErZgn0rz%2BPWv3ln0dIuAUIXWDXvxMajYFIPAkdBqdpG40lq2VsF1uXQwTEA%3D%7Ctkp%3ABk9SR8iL0duLYw",
      },
      imagen: "fuente.jpg",
  },
  monitor: {
    marca: "Asus",
      nombre: "Asus TUF Gaming VG28UQL1A 28 LED IPS UltraHD 4K 144Hz G-SYNC",
      gama: "Premium",
      precio: {
          amazon: 628.90,
          ebay: 835.29,
      },
      link: {
          amazon: "https://www.amazon.es/ASUS-VG28UQL1A-3840x2160-Compatible-DisplayHDR/dp/B09CDVMNS7/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3IYN8YJ2BUUZJ&keywords=Asus%2BTUF%2BGaming%2BVG28UQL1A%2B28%22%2BLED%2BIPS%2BUltraHD%2B4K%2B144Hz%2BG-SYNC&qid=1702375774&sprefix=asus%2Btuf%2Bgaming%2Bvg28uql1a%2B28%22%2Bled%2Bips%2Bultrahd%2B4k%2B144hz%2Bg-sync%2Caps%2C87&sr=8-5&ufe=app_do%3Aamzn1.fos.0fd54328-1d46-4534-bd0f-16141b40bb5b&th=1",
          ebay: "https://www.ebay.es/itm/314987242407?hash=item4956b3e3a7:g:4r0AAOSwfbZlYfVH&amdata=enc%3AAQAIAAAA8FGAAgJEpHdBXvFP9xIkYkgy349TXX8vc%2FNm0Q5M9I1BfwR5KopqXxv5I0RUtBB7PAPOhT4Xp58HJqHrltgCJ2fjmi7YDtDcyM3Q%2FmO38ULS1ypi96%2Fn1utnyHVRfwuFdHM2rhY3TN9z2lZrqtPt1OE5ZecPEdRUJdT5V7YUHHA27QbMgTlJN0x6sQ6uHduun9G4pSnZOB0nwsgEObteSH6SKlmFEqqe4YIRU004%2BQunUsVivbs0r3EgbPVOPjDRKzg7VUstYsZBAItBh%2BeZoY%2FcWuyRjQUcn8I%2F83T1FRKOqSheVVcn7QExqdjRY6tRwQ%3D%3D%7Ctkp%3ABk9SR4q7h9iLYw",
      },
      imagen: "monitor.jpg",
  },
  caja: {
    marca: "Cooler Master",
      nombre: "Cooler Master Cosmos C700M",
      gama: "Premium",
      precio: {
          segundaMano: 450.00,
          amazon: 511.46,
          ebay: 504.94,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-Carcasa-Ordenador-Full-Tower/dp/B07H6MKSXZ/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1TUFJLFZZHZG5&keywords=Cooler+Master+Cosmos+C700M&qid=1702377999&sprefix=cooler+master+cosmos+c700m%2Caps%2C79&sr=8-1",
          ebay: "https://www.ebay.es/itm/404647741259?hash=item5e36e2874b:g:bGQAAOSwDaJlZP--&amdata=enc%3AAQAIAAAA8K%2Bye8%2FnC64iXdxWYt0eI%2FF4zmdq%2FoNDHXw0b9%2FbRGzZvr6J63yp9Gbrg6f7zLqTpac%2BfkM8G50WAr4Ua%2BjahwwSumPU9FpTxUwGtA6%2B6ESUqZIE5NrR6qxUxY6cBEBwSKf%2FieGyMgi%2F%2BQbdfnYaXJ8LlCDZouDq9naEgLLmfiJ8JGhlOCUxqn9uQ6h3iV5QYL9m8fEHR2w3AzDq7voDYm9zvox5vG%2BUhPgIdQeiiLHfVm1xnuRYdXWy1NM%2BdcFV9Sc0%2FRtxV04MeYRUJbFn0pCGRsptRTS2HI8TnAPVzFtBx7CZTQOvDQklWpqj4S6tYA%3D%3D%7Ctkp%3ABk9SR5SWl9qLYw",
      },
      imagen: "caja.jpg",
  },
  disipador: {
    marca: "Corsair",
      nombre: "Corsair iCUE H170i ELITE LCD XT",
      gama: "Premium",
      precio: {
          segundaMano: 170.00,
          amazon: 382.99,
          ebay: 208.34,
      },
      link: {
          amazon: "https://www.amazon.es/Corsair-H170i-Elite-Refrigerador-L%C3%ADquido/dp/B0BQWTVYLV/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=XYQ9FIXDTU3A&keywords=Corsair%2BiCUE%2BH170i%2BELITE%2BLCD%2BXT&qid=1702376744&sprefix=corsair%2Bicue%2Bh170i%2Belite%2Blcd%2Bxt%2Caps%2C90&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&th=1",
          ebay: "https://www.ebay.es/itm/386171376022?hash=item59e99b9196:g:x7AAAOSwXMllHvS7&amdata=enc%3AAQAIAAAA8Mn2OOQETkUR%2BUnvawKImluI226QrP3o8dJ9XYKOvcch1n%2F5PLbWYElzQmq9U7lFzME38DBqvOoFB61jEuWUJNq%2FU7ajDGbIUPXbCswPu%2F7BXTuzHR6kxVURrDLcUdyVT5YXj0MGrSHlRU%2B%2F0nJL2UW%2BlGh2LdfjKsnKm3VFxeJTvP%2FA2rFpfo3UeN9yIeuRAMJW7olZoGdyKii3fKhS%2B1gXwQNIx%2FpTOiEwwdqpkogNq6pJ6tsbY2Yor09tZ7wbUJCq77bRDwyakzlZ2VzY5UESVBQkZb%2FY3y7i1QrH23Uk3jNphquNUavZxffRJJ1tkw%3D%3D%7Ctkp%3ABk9SR6Ka_tiLYw",
      },
      imagen: "disipador.jpg",
  },
};

const buildParaGamers = {
  placas: {
    marca: "Gigabyte",
      nombre: "Gigabyte Z790 AORUS PRO X",
      socket: "LGA1700",
      tipoRam: "DDR5",
      gama: "MediaAlta",
      numeroM2: 2,
      numeroSata: 2,
      precio: {
          segundaMano: 370.00,
          amazon: 456.90,
          ebay: 452.99,
      },
      link: {
          amazon: "https://www.amazon.es/Gigabyte-Z790-AORUS-Pro-Placa/dp/B0CK498K6N/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1LG7D5D8ELOB5&keywords=Gigabyte+Z790+AORUS+PRO+X&qid=1702370480&sprefix=gigabyte+z790+aorus+pro+x%2Caps%2C119&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/355250702723?hash=item52b6978983%3Ag%3AugkAAOSw2OplajGL&amdata=enc%3AAQAIAAAA0BRSUaXoPMwIfe0NDN2Jymhwnd2BQb%2BLIeiu4o4Mkm4TxaYQqcLRwfdBN1fGSSa3SaW%2FgBuq52G06bJtSH%2Bsfabj%2BT%2BNkC2tO0rw5%2BDayuDvGr3J2TH4yaGwt8fEPlXCTNXByAL5boeY2IZt%2FuCQwJpT6jl9X%2BNJoJmbtDGPflSb5YwNEA%2B9d5GDK5Ok2bBYjIRuxWVM1QRV4OXc49f6m6NdQtq%2B%2Fdy2O3ITmIkk%2FoyauXpvNxefeg8pWWbuqtFyCVHI3RbgkBx3frPURpFz3Z0%3D%7Ctkp%3ABk9SR77fhNOLYw&LH_ItemCondition=3",
      },
      imagen: "placa.jpg"
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i7-14700KF",
    gama: "Alta",
    socket: "LGA1700",
    consumo: 253,
    tipoRam: "DDR5",
    ventilador: false,
    gpu: false,
    precio: {
        amazon: 470.31,
        ebay: 419.99,
    },
    link: {
        amazon: "https://www.amazon.es/Intel%C2%AE-i7-14700KF-Desktop-Processor-P-Cores/dp/B0C948QQWF/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2Y2O8V73GPMR5&keywords=i7+14700k&qid=1701165837&sprefix=i714700k%2Caps%2C78&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
        ebay: "https://www.ebay.es/itm/355176558164?hash=item52b22c2e54:g:7GIAAOSwRjBlXSb5&amdata=enc%3AAQAIAAAAwAFuFQfi0SbVB2iSTs1Hr6i8VuCkFaxDDOT4RFlKrwXu9Rj%2FXSVQoU2UQkMmipt%2BwRE%2BMclF809Jp6ApENZHVemqzeazKXj4831o%2BGltYQJQHWLpyUJDsiGXubEj1JbFKFfbx%2BlqEGsF03JlzWtZuyR%2BYG5cslaSez4bEh90xMMobuG0IwVfIuD%2FVcqeNA%2BgSi0UTu4aAx9GXq1KQUK%2FIIdp6rTDcZAnU%2F45tDkLr7WctVFUsX73z4%2BB8HWRT%2Bec9w%3D%3D%7Ctkp%3ABk9SR5rhjtaCYw",
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
      nombre: "Corsair Vengeance DDR5 6400MHz PC5-51200 32GB 2x16GB CL32",
      tipo: "DDR5",
      capacidad: 32,
      gama: "MediaAlta",
      precio: {
          amazon: 134.99,
          ebay: 172.58,
      },
      link: {
          amazon: "https://www.amazon.es/Corsair-Vengeance-Optimizada-Regulaci%C3%B3n-Personalizados/dp/B0BPL9VYPW/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=55ZSWG2V7NN4&keywords=Corsair+Vengeance+DDR5+6400MHz+PC5-51200+32GB+2x16GB+CL32&qid=1702367885&sprefix=corsair+vengeance+ddr5+6400mhz+pc5-51200+32gb+2x16gb+cl32%2Caps%2C169&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b1",
          ebay: "https://www.ebay.es/itm/196115489448?hash=item2da964e2a8:g:oz4AAOSwsAllbgjF&amdata=enc%3AAQAIAAABENkLE6KDg6q%2FIQQfwTIGt%2FKvAzGSKX4EKjCqnG1xZyTLaF6lnEP%2FgpM0b0SPjLtL%2FrxYJuBkzl0T0VLeQjCN6eIMM5pHJ%2B8fEWQzy%2Ff2lRpmCcRdMgLr9rcJh8dypc64Cg0kwtyyVcbpIuwMZupcjfJleYRos5rmNL8ld3U4R1CkFhAXcQQERW%2FIVTTjLiq906TDJiNQsXeS82FJt5zTg9uN7ziWLnWIDgEG8ONZcQqdRMC4E%2BIKD3SmQ9W0qc05OCVhmcO1MRpnccL57eFLAooQDehf58l4aRMNW3j6Iy%2BkGxZqfxFi4Wb3AJehLlQWLKqbfdF4u4T10gHezfUztfkRU%2FhOi40uxCqVn3PCN0T1%7Ctkp%3ABFBM8ILF0Itj",
      },
      imagen: "ram.jpg"
  },
  m2: [
    {
      marca: "Kingstone",
      nombre: "Kingston NV2 1TB SSD PCIe 4.0 NVMe Gen 4x4",
      capacidad: 1,
      tecnologia: "m2",
      gama: "MediaAlta",
      precio: {
          segundaMano: 40.00,
          amazon: 52.99,
          ebay: 60.80,
      },
      link: {
          amazon: "https://www.amazon.es/Kingston-NVMe-PCIe-1000G-SNV2S/dp/B0BBWH1R8H/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2AZ0QSPBIC110&keywords=Kingston+NV2+1TB+SSD+PCIe+4.0+NVMe+Gen+4x4&qid=1702373853&sprefix=kingston+nv2+1tb+ssd+pcie+4.0+nvme+gen+4x4%2Caps%2C84&sr=8-2",
          ebay: "https://www.ebay.es/itm/354959529322?hash=item52a53c956a:g:AOcAAOSwVoNky0q7&amdata=enc%3AAQAIAAABAA6GNjU9xJHY3pyxGC7EfmrZriHJzZTf2QAwNu4UUfJr2Xze6fgDiFh3twQiPWT4%2FxiZYu1mMPkv8Ge72iTVYOxbSW0xmrL4P67Bl1%2FD2FFHgF8pjszM3O3WqiMI8YnGAPkz1mFiHE%2B6%2FC%2FK6a%2FTNZ0S49m2103yOANogTYbZDWSBzom39%2Bg9AT7Fu8x2DuwDnmC2gIjt8Mw4rpuu8eC4Equ5YMuVUdBtR4yvbxP16UcZvMkXfmwjyRIIJ5sBsqXdZJyU%2FT5xWo4zKNwpHrkHLkOYeJ6qMjMqIvoY14Tn%2Bezet%2Bp3GHoaAhu4eNJC3zpIx7Tle%2FtDQx7zYk8geT5Pn0%3D%7Ctkp%3ABFBMgJKe1otj",
      },
      imagen: "m2.jpg"
    },
    {
      marca: "Kingstone",
      nombre: "Kingston NV2 1TB SSD PCIe 4.0 NVMe Gen 4x4",
      capacidad: 1,
      tecnologia: "m2",
      gama: "MediaAlta",
      precio: {
          segundaMano: 40.00,
          amazon: 52.99,
          ebay: 60.80,
      },
      link: {
          amazon: "https://www.amazon.es/Kingston-NVMe-PCIe-1000G-SNV2S/dp/B0BBWH1R8H/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2AZ0QSPBIC110&keywords=Kingston+NV2+1TB+SSD+PCIe+4.0+NVMe+Gen+4x4&qid=1702373853&sprefix=kingston+nv2+1tb+ssd+pcie+4.0+nvme+gen+4x4%2Caps%2C84&sr=8-2",
          ebay: "https://www.ebay.es/itm/354959529322?hash=item52a53c956a:g:AOcAAOSwVoNky0q7&amdata=enc%3AAQAIAAABAA6GNjU9xJHY3pyxGC7EfmrZriHJzZTf2QAwNu4UUfJr2Xze6fgDiFh3twQiPWT4%2FxiZYu1mMPkv8Ge72iTVYOxbSW0xmrL4P67Bl1%2FD2FFHgF8pjszM3O3WqiMI8YnGAPkz1mFiHE%2B6%2FC%2FK6a%2FTNZ0S49m2103yOANogTYbZDWSBzom39%2Bg9AT7Fu8x2DuwDnmC2gIjt8Mw4rpuu8eC4Equ5YMuVUdBtR4yvbxP16UcZvMkXfmwjyRIIJ5sBsqXdZJyU%2FT5xWo4zKNwpHrkHLkOYeJ6qMjMqIvoY14Tn%2Bezet%2Bp3GHoaAhu4eNJC3zpIx7Tle%2FtDQx7zYk8geT5Pn0%3D%7Ctkp%3ABFBMgJKe1otj",
      },
      imagen: "m2.jpg"
    },
  ],
  sata: [
    {
      marca: "Gigabyte",
      nombre: "Gigabyte GP-GSTFS31100TNTD 1TB SSD 2.5 SATA3",
      capacidad: 1,
      tecnologia: "Sata",
      gama: "Alta",
      precio: {
          amazon: 65.50,
          ebay: 78.49,
      },
      link: {
          amazon: "https://www.amazon.es/Gigabyte-GP-GSTFS31100TNTD-Unidad-Estado-s%C3%B3lido/dp/B07RQF6P9C/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2H9A7GDDO4WIO&keywords=Gigabyte+GP-GSTFS31100TNTD+1TB+SSD+2.5%22+SATA3&qid=1702373347&sprefix=gigabyte+gp-gstfs31100tntd+1tb+ssd+2.5%22+sata3%2Caps%2C155&sr=8-2",
          ebay: "https://www.ebay.es/itm/186186829895?hash=item2b59999047:g:H2QAAOSwivZlZyXc&amdata=enc%3AAQAIAAABAHxdQPFYrzMjzSspw5G1ta6Uoot5sxQbF1kviM3plgKTy%2BCLD%2BXQPcpDIGEH95trp2PtZhmbtZeAmqKp1cwhWFVyxDSTmOa360RPFRhJ%2FAiv0vSLupfHc3LApLE%2BhiCIZNw9WXxRS90DoRhdBi6Ks7Bt8%2FGWh6kPA%2BmwDZJW%2BdCzAeI4YCQboBsKzASiV9fkpYY62EgtDesv7Z%2FHJQrNKUzE2bJWJvke7E3VFxm6oaSYL03te9qyCSBHbXlP9sRs9uSbyY37uFAIFZ0Ei80ekltDqhtpZY3ZL%2BqA%2BUeGQ%2B8vHlNK7HGHEGvsKO12Y6LioB%2FpB2myJYjURJsm9cRrhjA%3D%7Ctkp%3ABFBMlPze1Ytj",
      },
      imagen: "hdd.jpg"
    },
    {
      marca: "Gigabyte",
      nombre: "Gigabyte GP-GSTFS31100TNTD 1TB SSD 2.5 SATA3",
      capacidad: 1,
      tecnologia: "Sata",
      gama: "Alta",
      precio: {
          amazon: 65.50,
          ebay: 78.49,
      },
      link: {
          amazon: "https://www.amazon.es/Gigabyte-GP-GSTFS31100TNTD-Unidad-Estado-s%C3%B3lido/dp/B07RQF6P9C/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2H9A7GDDO4WIO&keywords=Gigabyte+GP-GSTFS31100TNTD+1TB+SSD+2.5%22+SATA3&qid=1702373347&sprefix=gigabyte+gp-gstfs31100tntd+1tb+ssd+2.5%22+sata3%2Caps%2C155&sr=8-2",
          ebay: "https://www.ebay.es/itm/186186829895?hash=item2b59999047:g:H2QAAOSwivZlZyXc&amdata=enc%3AAQAIAAABAHxdQPFYrzMjzSspw5G1ta6Uoot5sxQbF1kviM3plgKTy%2BCLD%2BXQPcpDIGEH95trp2PtZhmbtZeAmqKp1cwhWFVyxDSTmOa360RPFRhJ%2FAiv0vSLupfHc3LApLE%2BhiCIZNw9WXxRS90DoRhdBi6Ks7Bt8%2FGWh6kPA%2BmwDZJW%2BdCzAeI4YCQboBsKzASiV9fkpYY62EgtDesv7Z%2FHJQrNKUzE2bJWJvke7E3VFxm6oaSYL03te9qyCSBHbXlP9sRs9uSbyY37uFAIFZ0Ei80ekltDqhtpZY3ZL%2BqA%2BUeGQ%2B8vHlNK7HGHEGvsKO12Y6LioB%2FpB2myJYjURJsm9cRrhjA%3D%7Ctkp%3ABFBMlPze1Ytj",
      },
      imagen: "hdd.jpg"
    },
  ],
  gpu: {
    marca: "Nvidia",
    nombre: "Nvidia RTX 4080",
    consumo: 320,
    potenciaRecomendada: 750,
    gama: "Alta",
    precio: {
      segundaMano: 1250.00,
        amazon: 1397.90,
        ebay: 1771.00,
    },
    link: {
        amazon: "https://www.amazon.es/Gigabyte-Tarjeta-gr%C3%A1fica-GeForce-Gaming/dp/B0BLT45YZ1/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3AND6U64QVCUO&keywords=rtx+4080&qid=1701169474&sprefix=rtx+4080%2Caps%2C99&sr=8-5",
        ebay: "https://www.ebay.es/itm/364345236792?hash=item54d4ab1d38%3Ag%3AjuMAAOSw-EJktSVd&amdata=enc%3AAQAIAAAA4KvubXjCXPIf%2Bnkgb%2BA%2Bz8M5JKvdVWGQr5IrqpgO7u7PCtmZFpnXf5%2FSYRdsHo%2BhANnpA90C%2B1YhlIdSZIaGsKHPupEfH5y4oNQ2yZjp%2F5%2B%2FR5yRDeJgktIrHu9fXXzC7V5JsywhIWp8V8EYdaGJW4kQMkdpFnsCquAlNCBED7WqhNe62LpIEjm5ohCXlobBTtnVJLVSY0hqpq01jBrAgf5pnQWOZMkI8D8X0cPsZg9nLIi8nmAZdDbRARIqAOIH7VKp0t6fXSo1cxSog%2FXzEHaKK7xDHhZUVLtdq7kCGQI4%7Ctkp%3ABk9SR_j31dmCYw&LH_ItemCondition=1000",
    },
    imagen: "gpu.jpg"
  },
  fuente: {
    marca: "Mars Gaming",
      nombre: "Mars Gaming MPB1000M 1000W 80 Plus Gold Modular",
      potencia: 1000,
      gama: "Alta",
      precio: {
          segundaMano: 50.00,
          amazon: 89.90,
          ebay: 69.98,
      },
      link: {
          amazon: "https://www.amazon.es/MPB1000M-Alimentaci%C3%B3n-Eficiencia-Tecnolog%C3%ADa-Ultrasilencioso/dp/B0CM6FGXDM/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=51QTIC5Z0D71&keywords=Mars+Gaming+MPB1000M+1000W+80+Plus+Gold+Modular&qid=1702379378&sprefix=mars+gaming+mpb1000m+1000w+80+plus+gold+modular%2Caps%2C84&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/256182320961?hash=item3ba5a7ff41:g:-xoAAOSwQSlk2kFH&amdata=enc%3AAQAIAAAA4HYeuKYSB0UcX0iuBpA45gncbltiU498dOir2x8g1m%2FOfa8v8%2F8DY2RLa2ApWoZ6XNF%2BH8nCMNn4n0%2FTqEuHibzya4sgV477auDOw8prGqlJTdmVH57Ei4%2FrykfOnc79CaAXVs1y0UO5gQx8VTlQWd6aqr0KjXVa5CWsQSuuBCJ2nAspInx0lU0bbIM8CtRl8H8qZ9%2BsG9zik0rCIXVqASlWu1pesXcp9lZTCcV5jG4VRRJE9sy4NQibFDhSHBC8kgSzEYGaLctp72%2B1XBscCuJRBRkmDqL4Ky30IEepAh4v%7Ctkp%3ABk9SR-LjwtuLYw",
      },
      imagen: "fuente.jpg",
  },
  monitor: {
    marca: "Asus",
      nombre: "Asus TUF Gaming VG28UQL1A 28 LED IPS UltraHD 4K 144Hz G-SYNC",
      gama: "Premium",
      precio: {
          amazon: 628.90,
          ebay: 835.29,
      },
      link: {
          amazon: "https://www.amazon.es/ASUS-VG28UQL1A-3840x2160-Compatible-DisplayHDR/dp/B09CDVMNS7/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3IYN8YJ2BUUZJ&keywords=Asus%2BTUF%2BGaming%2BVG28UQL1A%2B28%22%2BLED%2BIPS%2BUltraHD%2B4K%2B144Hz%2BG-SYNC&qid=1702375774&sprefix=asus%2Btuf%2Bgaming%2Bvg28uql1a%2B28%22%2Bled%2Bips%2Bultrahd%2B4k%2B144hz%2Bg-sync%2Caps%2C87&sr=8-5&ufe=app_do%3Aamzn1.fos.0fd54328-1d46-4534-bd0f-16141b40bb5b&th=1",
          ebay: "https://www.ebay.es/itm/314987242407?hash=item4956b3e3a7:g:4r0AAOSwfbZlYfVH&amdata=enc%3AAQAIAAAA8FGAAgJEpHdBXvFP9xIkYkgy349TXX8vc%2FNm0Q5M9I1BfwR5KopqXxv5I0RUtBB7PAPOhT4Xp58HJqHrltgCJ2fjmi7YDtDcyM3Q%2FmO38ULS1ypi96%2Fn1utnyHVRfwuFdHM2rhY3TN9z2lZrqtPt1OE5ZecPEdRUJdT5V7YUHHA27QbMgTlJN0x6sQ6uHduun9G4pSnZOB0nwsgEObteSH6SKlmFEqqe4YIRU004%2BQunUsVivbs0r3EgbPVOPjDRKzg7VUstYsZBAItBh%2BeZoY%2FcWuyRjQUcn8I%2F83T1FRKOqSheVVcn7QExqdjRY6tRwQ%3D%3D%7Ctkp%3ABk9SR4q7h9iLYw",
      },
      imagen: "monitor.jpg",
  },
  caja: {
    marca: "Cooler Master",
      nombre: "Cooler Master MasterCase H500",
      gama: "MediaAlta",
      precio: {
          amazon: 116.90,
          ebay: 146.39,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-MasterCase-Ventiladores-Transparente/dp/B083FLCWT2/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2BD7TJ3EJFK8A&keywords=Cooler+Master+MasterCase+H500&qid=1702377867&sprefix=cooler+master+mastercase+h500%2Caps%2C112&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/125799651197?hash=item1d4a3e577d:g:b6sAAOSwK5RkAPUa&amdata=enc%3AAQAIAAAA0JVJED23iy6H9X4muzqk3oDMvISX6wEbADaGNNdnym5JCx4ITZ3slLglxu5oh1cVyc1z%2B%2FO9eGE52w9UM2ODKsWrfM1D6bRtMHMxhuFQjZIV%2Fta7RSffqmJKQSqPKO1IlQQ1RCG6wXyRPPgMQo6wMfW6d3PyN7ufvmzbqmDINiPw9BgaxtYX5MaNj%2FRFDdeD%2FGpV%2F4JVQPEK6%2FFr77xW2wsafibFTUSUa8Yw2dBHdarxVjcyP%2BKPq5QHUzopBM1tWjCQCApPI9%2Bm1pTjpeyu1pY%3D%7Ctkp%3ABk9SR4TWh9qLYw",
      },
      imagen: "caja.jpg",
  },
  disipador: {
    marca: "Corsair",
      nombre: "Corsair iCUE H170i ELITE LCD XT",
      gama: "Premium",
      precio: {
          segundaMano: 170.00,
          amazon: 382.99,
          ebay: 208.34,
      },
      link: {
          amazon: "https://www.amazon.es/Corsair-H170i-Elite-Refrigerador-L%C3%ADquido/dp/B0BQWTVYLV/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=XYQ9FIXDTU3A&keywords=Corsair%2BiCUE%2BH170i%2BELITE%2BLCD%2BXT&qid=1702376744&sprefix=corsair%2Bicue%2Bh170i%2Belite%2Blcd%2Bxt%2Caps%2C90&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&th=1",
          ebay: "https://www.ebay.es/itm/386171376022?hash=item59e99b9196:g:x7AAAOSwXMllHvS7&amdata=enc%3AAQAIAAAA8Mn2OOQETkUR%2BUnvawKImluI226QrP3o8dJ9XYKOvcch1n%2F5PLbWYElzQmq9U7lFzME38DBqvOoFB61jEuWUJNq%2FU7ajDGbIUPXbCswPu%2F7BXTuzHR6kxVURrDLcUdyVT5YXj0MGrSHlRU%2B%2F0nJL2UW%2BlGh2LdfjKsnKm3VFxeJTvP%2FA2rFpfo3UeN9yIeuRAMJW7olZoGdyKii3fKhS%2B1gXwQNIx%2FpTOiEwwdqpkogNq6pJ6tsbY2Yor09tZ7wbUJCq77bRDwyakzlZ2VzY5UESVBQkZb%2FY3y7i1QrH23Uk3jNphquNUavZxffRJJ1tkw%3D%3D%7Ctkp%3ABk9SR6Ka_tiLYw",
      },
      imagen: "disipador.jpg",
  },
};

const buildParaGamers2 = {
  placas: {
    marca: "Gigabyte",
      nombre: "Gigabyte Z790 AORUS XTREME X",
      socket: "LGA1700",
      tipoRam: "DDR5",
      gama: "Premium",
      numeroM2: 2,
      numeroSata: 2,
      precio: {
          segundaMano: 1000.00,
          amazon: 1270.45,
          ebay: 1212.89,
      },
      link: {
          amazon: "https://www.amazon.es/Intel-1700-Z790-AORUS-Xtreme/dp/B0BYSML1N6/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2CRLRBIM9KQNO&keywords=Gigabyte+Z790+AORUS+XTREME+X&qid=1702370657&sprefix=gigabyte+z790+aorus+xtreme+x%2Caps%2C96&sr=8-1",
          ebay: "https://www.ebay.es/itm/335115164224?hash=item4e066b9a40:g:NggAAOSwwBxlUDbD&amdata=enc%3AAQAIAAAA0NVNEhV1P6EdEZ0NJTqv%2B1t6%2FCDXif%2BKRH1OPRGTDww3VW38YTG10zOQcgnJbEpSIzlZ1Zjy0n89Tw7xPE05musLJCQjctw%2BjLIdc5NNOYKgIdxJz%2FlUATkydIJvD%2F11GWBC7fHixsk4enaA2WgU2zFtFWoLjjJQDKKWFJaehRO0AP1eKKhPLDkBvarvEtolD28pdOrzbs1XE9PVqS1qJlwbWXsW6llc2GPC8ewIJCcG1RtMbYn1xcLMWD4fxbA4tVJq1BaX6eQ7D%2FCyNSt9Di4%3D%7Ctkp%3ABk9SR4a-ltOLYw",
      },
      imagen: "placa.jpg"
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i9-14900KF",
    gama: "Premium",
    socket: "LGA1700",
    consumo: 253,
    tipoRam: "DDR5",
    ventilador: false,
    gpu: false,
    precio: {
        segundaMano: 600.00,
        amazon: 653.00,
        ebay: 644.95,
    },
    link: {
        amazon: "https://www.amazon.es/Intel%C2%AE-i9-14900KF-Desktop-Processor-P-Cores/dp/B0CHBJXG7G/ref=sr_1_2_mod_primary_new?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2PPOO6DB2YGDW&keywords=i9+14900k&qid=1701165525&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=i9+14900kf%2Caps%2C84&sr=8-2",
        ebay: "https://www.ebay.es/itm/126176097728?hash=item1d60ae75c0:g:5YgAAOSwQollS3Fm&amdata=enc%3AAQAIAAAA4E6hNV0xiF8E0IXgS4HuvEu3%2FXj1fe78T5gOobPPoTB2jn%2FPC6UgP2rVYlPiXDNZEeCWYrHoOL40Cl%2BWN9HfnccfvlMYQQC5B6SYfPfW5DICHtkXYJwkyGkYAlyo7dGf5DIWpNypCuaEiT1diOJpwew188xfa%2BmzR6u7a816e%2BlCvAqACA0jxo0ceCjuhDUdc2okfF5K%2FMZQ9ncvsvEE64dYmdi7gnwZ%2FDKFuRhrshGtbNPw9AQO7aCC0WevhVBoQXpxLVtE2zcA%2FvlEjPuvppeW3TcKsUmii6WddeieDbPQ%7Ctkp%3ABk9SR_ik9NWCYw",
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
      nombre: "CORSAIR Vengeance RGB DDR5 RAM 128GB (4x32GB) 5600MHz CL40",
      tipo: "DDR5",
      capacidad: 128,
      gama: "Premium",
      precio: {
          segundaMano: 480.00,
          amazon: 621.35,
          ebay: 515.61,
      },
      link: {
          amazon: "https://www.amazon.es/CORSAIR-Vengeance-5600MHz-Ordenador-Compatible/dp/B0CFZR4YCC/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=ZAOIXVYHOOST&keywords=ram+ddr5+128gb&qid=1702368368&sprefix=ram+ddr5+128gb%2Caps%2C88&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/235309649225?hash=item36c98c4d49:g:6VwAAOSwvaRlNSCJ&amdata=enc%3AAQAIAAAA4IRtFYrbA8rkk5e%2BSwgMB7qf2Odb8ZEwkPQrexBqrabt6x6CAQq%2BdosdnVkDgN%2BhGIjMiL0%2B5EZ1GzDJeycCMFkoLFr%2BEbTZVIhV2mt5BbPeL%2BxteAVRHO1p0zzI1J8afBXLvSE1pLGboe2FHPdKd1xMecyqL01CURa2XZFhlYa7O9jYsqv%2BRHLsUrQTRCLOdxHpmEf23mCdWsf0qV8utA8rEi2qn5w1BUAJSlHhe29T8UtQ2JfdmpunrEluHDqoFp3jA%2BfGTbcmdO1raBSBCk0TUo6UoLyK3wDKVndWdgI%2B%7Ctkp%3ABFBMsIiH0Ytj",
      },
      imagen: "ram.jpg"
  },
  m2: [
    {
      marca: "WD",
      nombre: "WD Black SN850X SSD 4TB M.2 2280 PCIe Gen4 NVMe",
      capacidad: 4,
      tecnologia: "m2",
      gama: "Premium",
      precio: {
          segundaMano: 250.00,
          amazon: 280.99,
          ebay: 331.39,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-Black-SN850X-Express/dp/B0B7CQ2CHH/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1LBBY2N7N9HE5&keywords=wd+black+sn850x+ssd+4tb+m.2+2280+pcie+gen+4+nvme&qid=1702374182&sprefix=wd+black+sn850x+ssd+4tb+m.2+2280+pcie+gen4+nvme%2Caps%2C86&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/403857093327?hash=item5e07c232cf:g:ylwAAOSw84ZjDM4Q&amdata=enc%3AAQAIAAAA4FXP4jQXfi2iJkNlEkf%2BQw70uKyfnqe7AqXj9YjjfpNPuDLr9LRthuG99rYXgQqRPGzsiqerVKXtk23xa4bqKE8ObQtC49CG43FdyyJUN0Y21luBpE8%2BuxxX2KElCMiN76BGqHY0EXYq65yPngnXpq44uvYIfBv86SHm7suSOrTAP6g9HzHKUg0J6eyoqD0M%2Ff4Xbzqbw5t2YAh%2FiygkpVBML9SVJP8aaDj4sd6oGkhycejToi7M6o3v2TZat1GYR%2FAlK3nTzLe49FWCZD5wQZRNnsm9TDCX%2BMPycmYbSouo%7Ctkp%3ABk9SR7aoxtaLYw",
      },
      imagen: "m2.jpg"
    },
    {
      marca: "WD",
      nombre: "WD Black SN850X SSD 4TB M.2 2280 PCIe Gen4 NVMe",
      capacidad: 4,
      tecnologia: "m2",
      gama: "Premium",
      precio: {
          segundaMano: 250.00,
          amazon: 280.99,
          ebay: 331.39,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-Black-SN850X-Express/dp/B0B7CQ2CHH/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1LBBY2N7N9HE5&keywords=wd+black+sn850x+ssd+4tb+m.2+2280+pcie+gen+4+nvme&qid=1702374182&sprefix=wd+black+sn850x+ssd+4tb+m.2+2280+pcie+gen4+nvme%2Caps%2C86&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/403857093327?hash=item5e07c232cf:g:ylwAAOSw84ZjDM4Q&amdata=enc%3AAQAIAAAA4FXP4jQXfi2iJkNlEkf%2BQw70uKyfnqe7AqXj9YjjfpNPuDLr9LRthuG99rYXgQqRPGzsiqerVKXtk23xa4bqKE8ObQtC49CG43FdyyJUN0Y21luBpE8%2BuxxX2KElCMiN76BGqHY0EXYq65yPngnXpq44uvYIfBv86SHm7suSOrTAP6g9HzHKUg0J6eyoqD0M%2Ff4Xbzqbw5t2YAh%2FiygkpVBML9SVJP8aaDj4sd6oGkhycejToi7M6o3v2TZat1GYR%2FAlK3nTzLe49FWCZD5wQZRNnsm9TDCX%2BMPycmYbSouo%7Ctkp%3ABk9SR7aoxtaLYw",
      },
      imagen: "m2.jpg"
    },
  ],
  sata: [
    {
      marca: "Samsung",
      nombre: "Samsung 870 EVO SSD 2.5 2TB SATA3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: "Premium",
      precio: {
          amazon: 142.79,
          ebay: 179.90,
      },
      link: {
          amazon: "https://www.amazon.es/Samsung-870-EVO-2000-Negro/dp/B08PC5ZYB1/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2H3FIYIO9QWNT&keywords=Samsung+870+EVO+SSD+2.5%22+2TB+SATA3&qid=1702373527&sprefix=samsung+870+evo+ssd+2.5%22+2tb+sata3%2Caps%2C99&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/364026432432?hash=item54c1aa8bb0:g:0UkAAOSwjCRjVsGU&amdata=enc%3AAQAIAAAA8KSrWcKHydbJ9N4RXn8dVJJfeXgfbGNr81CwhJwutYryWAAbF7130PYbr%2Ff6%2BlA5%2FULFKXGMnNmw4jaoUjxQ9GYt1ULA7XN3vgmI1Iuw7CHpdBrwO0r%2By38E0u48qp8k0MHnPr7YO2YjB%2BnjN8dtTIMyARKAWlf3DLJmZHVpGt79Ec6%2BCdxPw9IM%2F55WQve2HXUKFl8aCmXgZ2OAOBG5hZfDRbhGS%2FWGfTcLQcrJyFVs5bj1cQpteDLGa0xcFvWj%2BmQ2iEvwpyPAaDdSXtYkb74fnlDvWcrXk0Sj1a1oy6vNBiNlqVZqxxVdlseQFwf9Cw%3D%3D%7Ctkp%3ABFBM9Pr01Ytj",
      },
      imagen: "hdd.jpg"
    },
    {
      marca: "Samsung",
      nombre: "Samsung 870 EVO SSD 2.5 2TB SATA3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: "Premium",
      precio: {
          amazon: 142.79,
          ebay: 179.90,
      },
      link: {
          amazon: "https://www.amazon.es/Samsung-870-EVO-2000-Negro/dp/B08PC5ZYB1/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2H3FIYIO9QWNT&keywords=Samsung+870+EVO+SSD+2.5%22+2TB+SATA3&qid=1702373527&sprefix=samsung+870+evo+ssd+2.5%22+2tb+sata3%2Caps%2C99&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/364026432432?hash=item54c1aa8bb0:g:0UkAAOSwjCRjVsGU&amdata=enc%3AAQAIAAAA8KSrWcKHydbJ9N4RXn8dVJJfeXgfbGNr81CwhJwutYryWAAbF7130PYbr%2Ff6%2BlA5%2FULFKXGMnNmw4jaoUjxQ9GYt1ULA7XN3vgmI1Iuw7CHpdBrwO0r%2By38E0u48qp8k0MHnPr7YO2YjB%2BnjN8dtTIMyARKAWlf3DLJmZHVpGt79Ec6%2BCdxPw9IM%2F55WQve2HXUKFl8aCmXgZ2OAOBG5hZfDRbhGS%2FWGfTcLQcrJyFVs5bj1cQpteDLGa0xcFvWj%2BmQ2iEvwpyPAaDdSXtYkb74fnlDvWcrXk0Sj1a1oy6vNBiNlqVZqxxVdlseQFwf9Cw%3D%3D%7Ctkp%3ABFBM9Pr01Ytj",
      },
      imagen: "hdd.jpg"
    },
  ],
  gpu: {
    marca: "Nvidia",
    nombre: "Nvidia RTX 4090",
    consumo: 450,
    potenciaRecomendada: 850,
    gama: "Premium",
    precio: {
        amazon: 2126.05,
        ebay: 2008.73,
    },
    link: {
        amazon: "https://www.amazon.es/MSI-GeForce-GAMING-Tarjeta-Gr%C3%A1fica/dp/B09YCLG5PB/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=171LY0HEIVS1U&keywords=rtx%2B4090&qid=1701169195&sprefix=rtx%2B4090%2Caps%2C116&sr=8-5&th=1",
        ebay: "https://www.ebay.es/itm/134776095022?hash=item1f6148012e%3Ag%3AaaIAAOSwi8FlMyCd&amdata=enc%3AAQAIAAAA4I8YIMYPdD7GWSImTRJOwYlZX5dYFJ5E28vL9rK5zwUU9kYLHLmU0ZB5mHV9yQymn2EOJ89mrO1p%2Bw%2F4bZKlWxjbwCjhlgNOU%2F4%2FQW8I8aUuaKrrepF9Ykxi4Bat4d4jnMBklrJCcnCHhPHp3ck4ZV1D7e2H4DbwChH4P78uxSw0O06m%2F%2FiXFSW%2Bey%2BArliOdErfvL8FoNH%2FlQRGK2rpkoqt4g26cQa8Lynn6W6IeliS4b2dCG446GFkUCOHyqeGOU6dnQIKOJbBRSmAKlRUDQZVHNpE75glvU7Oeo6m3nST%7Ctkp%3ABFBMgoe82YJj&LH_ItemCondition=1000",
    },
    imagen: "gpu.jpg"
  },
  fuente: {
    marca: "Asus",
      nombre: "Asus ROG Thor 1200P 80 Plus Platinum 1200W Modular",
      potencia: 1200,
      gama: "Premium",
      precio: {
          segundaMano: 300.00,
          amazon: 357.36,
          ebay: 520.00,
      },
      link: {
          amazon: "https://www.amazon.es/ASUS-calentadores-ventiladores-rodamiento-tecnolog%C3%ADa/dp/B07J9NHZZH/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=147OPGWA6SCA2&keywords=Asus+ROG+Thor+1200P+80+Plus+Platinum+1200W+Modular&qid=1702379518&sprefix=asus+rog+thor+1200p+80+plus+platinum+1200w+modular%2Caps%2C77&sr=8-3&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/374923541968?hash=item574b2f3dd0:g:iMAAAOSwaQZk~CEV&amdata=enc%3AAQAIAAABAGU4hLSXkIsRskS%2FMrPn142K8RhFX42T4C271yRDG2iCIt7mUpVTFcg%2FRIaNF3eMa5dVBBnlFJMovf4Vb5ZL%2FyFWbJW2Eqs0abcb8e7zEQ4il7kn7LDYp9LYRj5M9fNYV%2FRO4Gvc706Fi9kPOW0haTq%2Bb5%2FFBQXzQzDKF25ZnwxhzGRaLAF6C2MCFAJIlu7mc%2FHfCoxFzteEmoRl72zyJOWipRMoJVXaGML0Ig%2FtLDaIyXLH3d7TqMGpyDgVkzkIYeIJcU2%2BSkuNsDdE3sP69GvQrg%2B%2FErZgn0rz%2BPWv3ln0dIuAUIXWDXvxMajYFIPAkdBqdpG40lq2VsF1uXQwTEA%3D%7Ctkp%3ABk9SR8iL0duLYw",
      },
      imagen: "fuente.jpg",
  },
  monitor: {
    marca: "Asus",
      nombre: "Asus TUF Gaming VG28UQL1A 28 LED IPS UltraHD 4K 144Hz G-SYNC",
      gama: "Premium",
      precio: {
          amazon: 628.90,
          ebay: 835.29,
      },
      link: {
          amazon: "https://www.amazon.es/ASUS-VG28UQL1A-3840x2160-Compatible-DisplayHDR/dp/B09CDVMNS7/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3IYN8YJ2BUUZJ&keywords=Asus%2BTUF%2BGaming%2BVG28UQL1A%2B28%22%2BLED%2BIPS%2BUltraHD%2B4K%2B144Hz%2BG-SYNC&qid=1702375774&sprefix=asus%2Btuf%2Bgaming%2Bvg28uql1a%2B28%22%2Bled%2Bips%2Bultrahd%2B4k%2B144hz%2Bg-sync%2Caps%2C87&sr=8-5&ufe=app_do%3Aamzn1.fos.0fd54328-1d46-4534-bd0f-16141b40bb5b&th=1",
          ebay: "https://www.ebay.es/itm/314987242407?hash=item4956b3e3a7:g:4r0AAOSwfbZlYfVH&amdata=enc%3AAQAIAAAA8FGAAgJEpHdBXvFP9xIkYkgy349TXX8vc%2FNm0Q5M9I1BfwR5KopqXxv5I0RUtBB7PAPOhT4Xp58HJqHrltgCJ2fjmi7YDtDcyM3Q%2FmO38ULS1ypi96%2Fn1utnyHVRfwuFdHM2rhY3TN9z2lZrqtPt1OE5ZecPEdRUJdT5V7YUHHA27QbMgTlJN0x6sQ6uHduun9G4pSnZOB0nwsgEObteSH6SKlmFEqqe4YIRU004%2BQunUsVivbs0r3EgbPVOPjDRKzg7VUstYsZBAItBh%2BeZoY%2FcWuyRjQUcn8I%2F83T1FRKOqSheVVcn7QExqdjRY6tRwQ%3D%3D%7Ctkp%3ABk9SR4q7h9iLYw",
      },
      imagen: "monitor.jpg",
  },
  caja: {
    marca: "Cooler Master",
      nombre: "Cooler Master Cosmos C700M",
      gama: "Premium",
      precio: {
          segundaMano: 450.00,
          amazon: 511.46,
          ebay: 504.94,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-Carcasa-Ordenador-Full-Tower/dp/B07H6MKSXZ/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1TUFJLFZZHZG5&keywords=Cooler+Master+Cosmos+C700M&qid=1702377999&sprefix=cooler+master+cosmos+c700m%2Caps%2C79&sr=8-1",
          ebay: "https://www.ebay.es/itm/404647741259?hash=item5e36e2874b:g:bGQAAOSwDaJlZP--&amdata=enc%3AAQAIAAAA8K%2Bye8%2FnC64iXdxWYt0eI%2FF4zmdq%2FoNDHXw0b9%2FbRGzZvr6J63yp9Gbrg6f7zLqTpac%2BfkM8G50WAr4Ua%2BjahwwSumPU9FpTxUwGtA6%2B6ESUqZIE5NrR6qxUxY6cBEBwSKf%2FieGyMgi%2F%2BQbdfnYaXJ8LlCDZouDq9naEgLLmfiJ8JGhlOCUxqn9uQ6h3iV5QYL9m8fEHR2w3AzDq7voDYm9zvox5vG%2BUhPgIdQeiiLHfVm1xnuRYdXWy1NM%2BdcFV9Sc0%2FRtxV04MeYRUJbFn0pCGRsptRTS2HI8TnAPVzFtBx7CZTQOvDQklWpqj4S6tYA%3D%3D%7Ctkp%3ABk9SR5SWl9qLYw",
      },
      imagen: "caja.jpg",
  },
  disipador: {
    marca: "Corsair",
      nombre: "Corsair iCUE H170i ELITE LCD XT",
      gama: "Premium",
      precio: {
          segundaMano: 170.00,
          amazon: 382.99,
          ebay: 208.34,
      },
      link: {
          amazon: "https://www.amazon.es/Corsair-H170i-Elite-Refrigerador-L%C3%ADquido/dp/B0BQWTVYLV/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=XYQ9FIXDTU3A&keywords=Corsair%2BiCUE%2BH170i%2BELITE%2BLCD%2BXT&qid=1702376744&sprefix=corsair%2Bicue%2Bh170i%2Belite%2Blcd%2Bxt%2Caps%2C90&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&th=1",
          ebay: "https://www.ebay.es/itm/386171376022?hash=item59e99b9196:g:x7AAAOSwXMllHvS7&amdata=enc%3AAQAIAAAA8Mn2OOQETkUR%2BUnvawKImluI226QrP3o8dJ9XYKOvcch1n%2F5PLbWYElzQmq9U7lFzME38DBqvOoFB61jEuWUJNq%2FU7ajDGbIUPXbCswPu%2F7BXTuzHR6kxVURrDLcUdyVT5YXj0MGrSHlRU%2B%2F0nJL2UW%2BlGh2LdfjKsnKm3VFxeJTvP%2FA2rFpfo3UeN9yIeuRAMJW7olZoGdyKii3fKhS%2B1gXwQNIx%2FpTOiEwwdqpkogNq6pJ6tsbY2Yor09tZ7wbUJCq77bRDwyakzlZ2VzY5UESVBQkZb%2FY3y7i1QrH23Uk3jNphquNUavZxffRJJ1tkw%3D%3D%7Ctkp%3ABk9SR6Ka_tiLYw",
      },
      imagen: "disipador.jpg",
  },
};

const buildParaProfesionales = {
  placas: {
    marca: "Gigabyte",
      nombre: "Gigabyte Z790 AORUS XTREME X",
      socket: "LGA1700",
      tipoRam: "DDR5",
      gama: "Premium",
      numeroM2: 2,
      numeroSata: 2,
      precio: {
          segundaMano: 1000.00,
          amazon: 1270.45,
          ebay: 1212.89,
      },
      link: {
          amazon: "https://www.amazon.es/Intel-1700-Z790-AORUS-Xtreme/dp/B0BYSML1N6/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2CRLRBIM9KQNO&keywords=Gigabyte+Z790+AORUS+XTREME+X&qid=1702370657&sprefix=gigabyte+z790+aorus+xtreme+x%2Caps%2C96&sr=8-1",
          ebay: "https://www.ebay.es/itm/335115164224?hash=item4e066b9a40:g:NggAAOSwwBxlUDbD&amdata=enc%3AAQAIAAAA0NVNEhV1P6EdEZ0NJTqv%2B1t6%2FCDXif%2BKRH1OPRGTDww3VW38YTG10zOQcgnJbEpSIzlZ1Zjy0n89Tw7xPE05musLJCQjctw%2BjLIdc5NNOYKgIdxJz%2FlUATkydIJvD%2F11GWBC7fHixsk4enaA2WgU2zFtFWoLjjJQDKKWFJaehRO0AP1eKKhPLDkBvarvEtolD28pdOrzbs1XE9PVqS1qJlwbWXsW6llc2GPC8ewIJCcG1RtMbYn1xcLMWD4fxbA4tVJq1BaX6eQ7D%2FCyNSt9Di4%3D%7Ctkp%3ABk9SR4a-ltOLYw",
      },
      imagen: "placa.jpg"
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i9-14900KF",
    gama: "Premium",
    socket: "LGA1700",
    consumo: 253,
    tipoRam: "DDR5",
    ventilador: false,
    gpu: false,
    precio: {
        segundaMano: 600.00,
        amazon: 653.00,
        ebay: 644.95,
    },
    link: {
        amazon: "https://www.amazon.es/Intel%C2%AE-i9-14900KF-Desktop-Processor-P-Cores/dp/B0CHBJXG7G/ref=sr_1_2_mod_primary_new?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2PPOO6DB2YGDW&keywords=i9+14900k&qid=1701165525&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=i9+14900kf%2Caps%2C84&sr=8-2",
        ebay: "https://www.ebay.es/itm/126176097728?hash=item1d60ae75c0:g:5YgAAOSwQollS3Fm&amdata=enc%3AAQAIAAAA4E6hNV0xiF8E0IXgS4HuvEu3%2FXj1fe78T5gOobPPoTB2jn%2FPC6UgP2rVYlPiXDNZEeCWYrHoOL40Cl%2BWN9HfnccfvlMYQQC5B6SYfPfW5DICHtkXYJwkyGkYAlyo7dGf5DIWpNypCuaEiT1diOJpwew188xfa%2BmzR6u7a816e%2BlCvAqACA0jxo0ceCjuhDUdc2okfF5K%2FMZQ9ncvsvEE64dYmdi7gnwZ%2FDKFuRhrshGtbNPw9AQO7aCC0WevhVBoQXpxLVtE2zcA%2FvlEjPuvppeW3TcKsUmii6WddeieDbPQ%7Ctkp%3ABk9SR_ik9NWCYw",
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
      nombre: "CORSAIR Vengeance RGB DDR5 RAM 128GB (4x32GB) 5600MHz CL40",
      tipo: "DDR5",
      capacidad: 128,
      gama: "Premium",
      precio: {
          segundaMano: 480.00,
          amazon: 621.35,
          ebay: 515.61,
      },
      link: {
          amazon: "https://www.amazon.es/CORSAIR-Vengeance-5600MHz-Ordenador-Compatible/dp/B0CFZR4YCC/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=ZAOIXVYHOOST&keywords=ram+ddr5+128gb&qid=1702368368&sprefix=ram+ddr5+128gb%2Caps%2C88&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/235309649225?hash=item36c98c4d49:g:6VwAAOSwvaRlNSCJ&amdata=enc%3AAQAIAAAA4IRtFYrbA8rkk5e%2BSwgMB7qf2Odb8ZEwkPQrexBqrabt6x6CAQq%2BdosdnVkDgN%2BhGIjMiL0%2B5EZ1GzDJeycCMFkoLFr%2BEbTZVIhV2mt5BbPeL%2BxteAVRHO1p0zzI1J8afBXLvSE1pLGboe2FHPdKd1xMecyqL01CURa2XZFhlYa7O9jYsqv%2BRHLsUrQTRCLOdxHpmEf23mCdWsf0qV8utA8rEi2qn5w1BUAJSlHhe29T8UtQ2JfdmpunrEluHDqoFp3jA%2BfGTbcmdO1raBSBCk0TUo6UoLyK3wDKVndWdgI%2B%7Ctkp%3ABFBMsIiH0Ytj",
      },
      imagen: "ram.jpg"
  },
  m2: [
    {
      marca: "WD",
      nombre: "WD Black SN850X SSD 4TB M.2 2280 PCIe Gen4 NVMe",
      capacidad: 4,
      tecnologia: "m2",
      gama: "Premium",
      precio: {
          segundaMano: 250.00,
          amazon: 280.99,
          ebay: 331.39,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-Black-SN850X-Express/dp/B0B7CQ2CHH/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1LBBY2N7N9HE5&keywords=wd+black+sn850x+ssd+4tb+m.2+2280+pcie+gen+4+nvme&qid=1702374182&sprefix=wd+black+sn850x+ssd+4tb+m.2+2280+pcie+gen4+nvme%2Caps%2C86&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/403857093327?hash=item5e07c232cf:g:ylwAAOSw84ZjDM4Q&amdata=enc%3AAQAIAAAA4FXP4jQXfi2iJkNlEkf%2BQw70uKyfnqe7AqXj9YjjfpNPuDLr9LRthuG99rYXgQqRPGzsiqerVKXtk23xa4bqKE8ObQtC49CG43FdyyJUN0Y21luBpE8%2BuxxX2KElCMiN76BGqHY0EXYq65yPngnXpq44uvYIfBv86SHm7suSOrTAP6g9HzHKUg0J6eyoqD0M%2Ff4Xbzqbw5t2YAh%2FiygkpVBML9SVJP8aaDj4sd6oGkhycejToi7M6o3v2TZat1GYR%2FAlK3nTzLe49FWCZD5wQZRNnsm9TDCX%2BMPycmYbSouo%7Ctkp%3ABk9SR7aoxtaLYw",
      },
      imagen: "m2.jpg"
    },
    {
      marca: "WD",
      nombre: "WD Black SN850X SSD 4TB M.2 2280 PCIe Gen4 NVMe",
      capacidad: 4,
      tecnologia: "m2",
      gama: "Premium",
      precio: {
          segundaMano: 250.00,
          amazon: 280.99,
          ebay: 331.39,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-Black-SN850X-Express/dp/B0B7CQ2CHH/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1LBBY2N7N9HE5&keywords=wd+black+sn850x+ssd+4tb+m.2+2280+pcie+gen+4+nvme&qid=1702374182&sprefix=wd+black+sn850x+ssd+4tb+m.2+2280+pcie+gen4+nvme%2Caps%2C86&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/403857093327?hash=item5e07c232cf:g:ylwAAOSw84ZjDM4Q&amdata=enc%3AAQAIAAAA4FXP4jQXfi2iJkNlEkf%2BQw70uKyfnqe7AqXj9YjjfpNPuDLr9LRthuG99rYXgQqRPGzsiqerVKXtk23xa4bqKE8ObQtC49CG43FdyyJUN0Y21luBpE8%2BuxxX2KElCMiN76BGqHY0EXYq65yPngnXpq44uvYIfBv86SHm7suSOrTAP6g9HzHKUg0J6eyoqD0M%2Ff4Xbzqbw5t2YAh%2FiygkpVBML9SVJP8aaDj4sd6oGkhycejToi7M6o3v2TZat1GYR%2FAlK3nTzLe49FWCZD5wQZRNnsm9TDCX%2BMPycmYbSouo%7Ctkp%3ABk9SR7aoxtaLYw",
      },
      imagen: "m2.jpg"
    },
  ],
  sata: [
    {
      marca: "Samsung",
      nombre: "Samsung 870 EVO SSD 2.5 2TB SATA3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: "Premium",
      precio: {
          amazon: 142.79,
          ebay: 179.90,
      },
      link: {
          amazon: "https://www.amazon.es/Samsung-870-EVO-2000-Negro/dp/B08PC5ZYB1/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2H3FIYIO9QWNT&keywords=Samsung+870+EVO+SSD+2.5%22+2TB+SATA3&qid=1702373527&sprefix=samsung+870+evo+ssd+2.5%22+2tb+sata3%2Caps%2C99&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/364026432432?hash=item54c1aa8bb0:g:0UkAAOSwjCRjVsGU&amdata=enc%3AAQAIAAAA8KSrWcKHydbJ9N4RXn8dVJJfeXgfbGNr81CwhJwutYryWAAbF7130PYbr%2Ff6%2BlA5%2FULFKXGMnNmw4jaoUjxQ9GYt1ULA7XN3vgmI1Iuw7CHpdBrwO0r%2By38E0u48qp8k0MHnPr7YO2YjB%2BnjN8dtTIMyARKAWlf3DLJmZHVpGt79Ec6%2BCdxPw9IM%2F55WQve2HXUKFl8aCmXgZ2OAOBG5hZfDRbhGS%2FWGfTcLQcrJyFVs5bj1cQpteDLGa0xcFvWj%2BmQ2iEvwpyPAaDdSXtYkb74fnlDvWcrXk0Sj1a1oy6vNBiNlqVZqxxVdlseQFwf9Cw%3D%3D%7Ctkp%3ABFBM9Pr01Ytj",
      },
      imagen: "hdd.jpg"
    },
    {
      marca: "Samsung",
      nombre: "Samsung 870 EVO SSD 2.5 2TB SATA3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: "Premium",
      precio: {
          amazon: 142.79,
          ebay: 179.90,
      },
      link: {
          amazon: "https://www.amazon.es/Samsung-870-EVO-2000-Negro/dp/B08PC5ZYB1/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2H3FIYIO9QWNT&keywords=Samsung+870+EVO+SSD+2.5%22+2TB+SATA3&qid=1702373527&sprefix=samsung+870+evo+ssd+2.5%22+2tb+sata3%2Caps%2C99&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/364026432432?hash=item54c1aa8bb0:g:0UkAAOSwjCRjVsGU&amdata=enc%3AAQAIAAAA8KSrWcKHydbJ9N4RXn8dVJJfeXgfbGNr81CwhJwutYryWAAbF7130PYbr%2Ff6%2BlA5%2FULFKXGMnNmw4jaoUjxQ9GYt1ULA7XN3vgmI1Iuw7CHpdBrwO0r%2By38E0u48qp8k0MHnPr7YO2YjB%2BnjN8dtTIMyARKAWlf3DLJmZHVpGt79Ec6%2BCdxPw9IM%2F55WQve2HXUKFl8aCmXgZ2OAOBG5hZfDRbhGS%2FWGfTcLQcrJyFVs5bj1cQpteDLGa0xcFvWj%2BmQ2iEvwpyPAaDdSXtYkb74fnlDvWcrXk0Sj1a1oy6vNBiNlqVZqxxVdlseQFwf9Cw%3D%3D%7Ctkp%3ABFBM9Pr01Ytj",
      },
      imagen: "hdd.jpg"
    },
  ],
  gpu: {
    marca: "Nvidia",
    nombre: "Nvidia RTX 4090",
    consumo: 450,
    potenciaRecomendada: 850,
    gama: "Premium",
    precio: {
        amazon: 2126.05,
        ebay: 2008.73,
    },
    link: {
        amazon: "https://www.amazon.es/MSI-GeForce-GAMING-Tarjeta-Gr%C3%A1fica/dp/B09YCLG5PB/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=171LY0HEIVS1U&keywords=rtx%2B4090&qid=1701169195&sprefix=rtx%2B4090%2Caps%2C116&sr=8-5&th=1",
        ebay: "https://www.ebay.es/itm/134776095022?hash=item1f6148012e%3Ag%3AaaIAAOSwi8FlMyCd&amdata=enc%3AAQAIAAAA4I8YIMYPdD7GWSImTRJOwYlZX5dYFJ5E28vL9rK5zwUU9kYLHLmU0ZB5mHV9yQymn2EOJ89mrO1p%2Bw%2F4bZKlWxjbwCjhlgNOU%2F4%2FQW8I8aUuaKrrepF9Ykxi4Bat4d4jnMBklrJCcnCHhPHp3ck4ZV1D7e2H4DbwChH4P78uxSw0O06m%2F%2FiXFSW%2Bey%2BArliOdErfvL8FoNH%2FlQRGK2rpkoqt4g26cQa8Lynn6W6IeliS4b2dCG446GFkUCOHyqeGOU6dnQIKOJbBRSmAKlRUDQZVHNpE75glvU7Oeo6m3nST%7Ctkp%3ABFBMgoe82YJj&LH_ItemCondition=1000",
    },
    imagen: "gpu.jpg"
  },
  fuente: {
    marca: "Asus",
      nombre: "Asus ROG Thor 1200P 80 Plus Platinum 1200W Modular",
      potencia: 1200,
      gama: "Premium",
      precio: {
          segundaMano: 300.00,
          amazon: 357.36,
          ebay: 520.00,
      },
      link: {
          amazon: "https://www.amazon.es/ASUS-calentadores-ventiladores-rodamiento-tecnolog%C3%ADa/dp/B07J9NHZZH/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=147OPGWA6SCA2&keywords=Asus+ROG+Thor+1200P+80+Plus+Platinum+1200W+Modular&qid=1702379518&sprefix=asus+rog+thor+1200p+80+plus+platinum+1200w+modular%2Caps%2C77&sr=8-3&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/374923541968?hash=item574b2f3dd0:g:iMAAAOSwaQZk~CEV&amdata=enc%3AAQAIAAABAGU4hLSXkIsRskS%2FMrPn142K8RhFX42T4C271yRDG2iCIt7mUpVTFcg%2FRIaNF3eMa5dVBBnlFJMovf4Vb5ZL%2FyFWbJW2Eqs0abcb8e7zEQ4il7kn7LDYp9LYRj5M9fNYV%2FRO4Gvc706Fi9kPOW0haTq%2Bb5%2FFBQXzQzDKF25ZnwxhzGRaLAF6C2MCFAJIlu7mc%2FHfCoxFzteEmoRl72zyJOWipRMoJVXaGML0Ig%2FtLDaIyXLH3d7TqMGpyDgVkzkIYeIJcU2%2BSkuNsDdE3sP69GvQrg%2B%2FErZgn0rz%2BPWv3ln0dIuAUIXWDXvxMajYFIPAkdBqdpG40lq2VsF1uXQwTEA%3D%7Ctkp%3ABk9SR8iL0duLYw",
      },
      imagen: "fuente.jpg",
  },
  monitor: {
    marca: "Asus",
      nombre: "Asus TUF Gaming VG28UQL1A 28 LED IPS UltraHD 4K 144Hz G-SYNC",
      gama: "Premium",
      precio: {
          amazon: 628.90,
          ebay: 835.29,
      },
      link: {
          amazon: "https://www.amazon.es/ASUS-VG28UQL1A-3840x2160-Compatible-DisplayHDR/dp/B09CDVMNS7/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3IYN8YJ2BUUZJ&keywords=Asus%2BTUF%2BGaming%2BVG28UQL1A%2B28%22%2BLED%2BIPS%2BUltraHD%2B4K%2B144Hz%2BG-SYNC&qid=1702375774&sprefix=asus%2Btuf%2Bgaming%2Bvg28uql1a%2B28%22%2Bled%2Bips%2Bultrahd%2B4k%2B144hz%2Bg-sync%2Caps%2C87&sr=8-5&ufe=app_do%3Aamzn1.fos.0fd54328-1d46-4534-bd0f-16141b40bb5b&th=1",
          ebay: "https://www.ebay.es/itm/314987242407?hash=item4956b3e3a7:g:4r0AAOSwfbZlYfVH&amdata=enc%3AAQAIAAAA8FGAAgJEpHdBXvFP9xIkYkgy349TXX8vc%2FNm0Q5M9I1BfwR5KopqXxv5I0RUtBB7PAPOhT4Xp58HJqHrltgCJ2fjmi7YDtDcyM3Q%2FmO38ULS1ypi96%2Fn1utnyHVRfwuFdHM2rhY3TN9z2lZrqtPt1OE5ZecPEdRUJdT5V7YUHHA27QbMgTlJN0x6sQ6uHduun9G4pSnZOB0nwsgEObteSH6SKlmFEqqe4YIRU004%2BQunUsVivbs0r3EgbPVOPjDRKzg7VUstYsZBAItBh%2BeZoY%2FcWuyRjQUcn8I%2F83T1FRKOqSheVVcn7QExqdjRY6tRwQ%3D%3D%7Ctkp%3ABk9SR4q7h9iLYw",
      },
      imagen: "monitor.jpg",
  },
  caja: {
    marca: "Cooler Master",
      nombre: "Cooler Master Cosmos C700M",
      gama: "Premium",
      precio: {
          segundaMano: 450.00,
          amazon: 511.46,
          ebay: 504.94,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-Carcasa-Ordenador-Full-Tower/dp/B07H6MKSXZ/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1TUFJLFZZHZG5&keywords=Cooler+Master+Cosmos+C700M&qid=1702377999&sprefix=cooler+master+cosmos+c700m%2Caps%2C79&sr=8-1",
          ebay: "https://www.ebay.es/itm/404647741259?hash=item5e36e2874b:g:bGQAAOSwDaJlZP--&amdata=enc%3AAQAIAAAA8K%2Bye8%2FnC64iXdxWYt0eI%2FF4zmdq%2FoNDHXw0b9%2FbRGzZvr6J63yp9Gbrg6f7zLqTpac%2BfkM8G50WAr4Ua%2BjahwwSumPU9FpTxUwGtA6%2B6ESUqZIE5NrR6qxUxY6cBEBwSKf%2FieGyMgi%2F%2BQbdfnYaXJ8LlCDZouDq9naEgLLmfiJ8JGhlOCUxqn9uQ6h3iV5QYL9m8fEHR2w3AzDq7voDYm9zvox5vG%2BUhPgIdQeiiLHfVm1xnuRYdXWy1NM%2BdcFV9Sc0%2FRtxV04MeYRUJbFn0pCGRsptRTS2HI8TnAPVzFtBx7CZTQOvDQklWpqj4S6tYA%3D%3D%7Ctkp%3ABk9SR5SWl9qLYw",
      },
      imagen: "caja.jpg",
  },
  disipador: {
    marca: "Corsair",
      nombre: "Corsair iCUE H170i ELITE LCD XT",
      gama: "Premium",
      precio: {
          segundaMano: 170.00,
          amazon: 382.99,
          ebay: 208.34,
      },
      link: {
          amazon: "https://www.amazon.es/Corsair-H170i-Elite-Refrigerador-L%C3%ADquido/dp/B0BQWTVYLV/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=XYQ9FIXDTU3A&keywords=Corsair%2BiCUE%2BH170i%2BELITE%2BLCD%2BXT&qid=1702376744&sprefix=corsair%2Bicue%2Bh170i%2Belite%2Blcd%2Bxt%2Caps%2C90&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&th=1",
          ebay: "https://www.ebay.es/itm/386171376022?hash=item59e99b9196:g:x7AAAOSwXMllHvS7&amdata=enc%3AAQAIAAAA8Mn2OOQETkUR%2BUnvawKImluI226QrP3o8dJ9XYKOvcch1n%2F5PLbWYElzQmq9U7lFzME38DBqvOoFB61jEuWUJNq%2FU7ajDGbIUPXbCswPu%2F7BXTuzHR6kxVURrDLcUdyVT5YXj0MGrSHlRU%2B%2F0nJL2UW%2BlGh2LdfjKsnKm3VFxeJTvP%2FA2rFpfo3UeN9yIeuRAMJW7olZoGdyKii3fKhS%2B1gXwQNIx%2FpTOiEwwdqpkogNq6pJ6tsbY2Yor09tZ7wbUJCq77bRDwyakzlZ2VzY5UESVBQkZb%2FY3y7i1QrH23Uk3jNphquNUavZxffRJJ1tkw%3D%3D%7Ctkp%3ABk9SR6Ka_tiLYw",
      },
      imagen: "disipador.jpg",
  },
};

const buildParaProfesionales2 = {
  placas: {
    marca: "Gigabyte",
      nombre: "Gigabyte X670E AORUS XTREME",
      socket: "AM5",
      tipoRam: "DDR5",
      gama: "Premium",
      numeroM2: 2,
      numeroSata: 2,
      precio: {
          segundaMano: 650.00,
          amazon: 833.82,
          ebay: 719.33,
      },
      link: {
          amazon: "https://www.amazon.es/GIGABYTE-Technology-AORUS-X670E-procesadores/dp/B0BFNVNG2C/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2JQKVLSO2CHE3&keywords=Gigabyte+X670E+AORUS+XTREME&qid=1702372022&sprefix=gigabyte+x670e+aorus+xtreme%2Caps%2C95&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/296082881658?hash=item44efea3c7a:g:ndwAAOSwMWdlaZQ6&amdata=enc%3AAQAIAAAA8N4xS4zFCkeor4kk9cKJUbOQximoIzfSWkctq1GcVSijKWO75ZR%2BQBTq5rU9xtO06%2F2jN6QUbl7i9vmDRW%2BHC5ZYZzpq9dcUckGXzV4CivtOYO7AedU3zhckDcFM%2BZAQPk2z23R36DPVFUZFup7%2B9DDoA%2FKBt4DKO7ZBGGVBARNiJQZVq5Cp5qa%2FR0el6Nq7BNfpgr0s9oc1JVCzEkkrzrRhrzrU%2Bjas9GkWPN%2FLyZyxFDLnUXsFGgLWzEKwhU7tRPeihGvnKFRzG9rcPCB4MTXXuu1eNGxFJJfrvWecUKHXVEd%2F7wH25CQZOF3mw7mxQA%3D%3D%7Ctkp%3ABk9SR9iovdSLYw",
      },
      imagen: "placa.jpg"
  },
  cpu: {
    marca: "AMD",
    nombre: "AMD Ryzen 9 7950X3D",
    gama: "Premium",
    socket: "AM5",
    consumo: 120,
    tipoRam: "DDR5",
    ventilador: false,
    gpu: false,
    precio: {
        amazon: 639.90,
        ebay: 559.90,
    },
    link: {
        amazon: "https://www.amazon.es/AMD-Ryzen-7950X3D-desenfrenados-Arquitectura/dp/B0BTRH9MNS/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2GR1B5K5Q91GD&keywords=AMD+Ryzen+9+7950X&qid=1701167090&sprefix=amd+ryzen+9+7950x%2Caps%2C147&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
        ebay: "https://www.ebay.es/itm/126176041927?hash=item1d60ad9bc7:g:kDkAAOSwj9FlS2WS&amdata=enc%3AAQAIAAAA4GGGVPWdZ%2B%2Bmuoue%2BTFuLZzkDtLS6pGJL0qtwDCesYy%2Fchys9cD4DTtJzspfAwSmcmW3Q0Lo0mNEz%2F%2FzW5W3%2FUR94iZaZTD9nyBndnyYcNzyGr8YKgi6BA4lgXeY0jnMzCcqOGRQGG1rhkobHEgLgE0eUXNXZi2DuXrw%2F4Z%2FaTDU3bRZzSrvHRS%2BHUc236A06AhUXNUhGgdzqqEqlvUi3o6kfo1ISeokR4G14gtlhKXaBqfyF6V8VbkKMWGdfoXb26tStwyfgT0y0K17TBhaPPoE1KWUG4NJbyFaqRvYwVTe%7Ctkp%3ABk9SR9jJx9eCYw",
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
      nombre: "CORSAIR Vengeance RGB DDR5 RAM 128GB (4x32GB) 5600MHz CL40",
      tipo: "DDR5",
      capacidad: 128,
      gama: "Premium",
      precio: {
          segundaMano: 480.00,
          amazon: 621.35,
          ebay: 515.61,
      },
      link: {
          amazon: "https://www.amazon.es/CORSAIR-Vengeance-5600MHz-Ordenador-Compatible/dp/B0CFZR4YCC/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=ZAOIXVYHOOST&keywords=ram+ddr5+128gb&qid=1702368368&sprefix=ram+ddr5+128gb%2Caps%2C88&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/235309649225?hash=item36c98c4d49:g:6VwAAOSwvaRlNSCJ&amdata=enc%3AAQAIAAAA4IRtFYrbA8rkk5e%2BSwgMB7qf2Odb8ZEwkPQrexBqrabt6x6CAQq%2BdosdnVkDgN%2BhGIjMiL0%2B5EZ1GzDJeycCMFkoLFr%2BEbTZVIhV2mt5BbPeL%2BxteAVRHO1p0zzI1J8afBXLvSE1pLGboe2FHPdKd1xMecyqL01CURa2XZFhlYa7O9jYsqv%2BRHLsUrQTRCLOdxHpmEf23mCdWsf0qV8utA8rEi2qn5w1BUAJSlHhe29T8UtQ2JfdmpunrEluHDqoFp3jA%2BfGTbcmdO1raBSBCk0TUo6UoLyK3wDKVndWdgI%2B%7Ctkp%3ABFBMsIiH0Ytj",
      },
      imagen: "ram.jpg"
  },
  m2: [
    {
      marca: "WD",
      nombre: "WD Black SN850X SSD 4TB M.2 2280 PCIe Gen4 NVMe",
      capacidad: 4,
      tecnologia: "m2",
      gama: "Premium",
      precio: {
          segundaMano: 250.00,
          amazon: 280.99,
          ebay: 331.39,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-Black-SN850X-Express/dp/B0B7CQ2CHH/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1LBBY2N7N9HE5&keywords=wd+black+sn850x+ssd+4tb+m.2+2280+pcie+gen+4+nvme&qid=1702374182&sprefix=wd+black+sn850x+ssd+4tb+m.2+2280+pcie+gen4+nvme%2Caps%2C86&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/403857093327?hash=item5e07c232cf:g:ylwAAOSw84ZjDM4Q&amdata=enc%3AAQAIAAAA4FXP4jQXfi2iJkNlEkf%2BQw70uKyfnqe7AqXj9YjjfpNPuDLr9LRthuG99rYXgQqRPGzsiqerVKXtk23xa4bqKE8ObQtC49CG43FdyyJUN0Y21luBpE8%2BuxxX2KElCMiN76BGqHY0EXYq65yPngnXpq44uvYIfBv86SHm7suSOrTAP6g9HzHKUg0J6eyoqD0M%2Ff4Xbzqbw5t2YAh%2FiygkpVBML9SVJP8aaDj4sd6oGkhycejToi7M6o3v2TZat1GYR%2FAlK3nTzLe49FWCZD5wQZRNnsm9TDCX%2BMPycmYbSouo%7Ctkp%3ABk9SR7aoxtaLYw",
      },
      imagen: "m2.jpg"
    },
    {
      marca: "WD",
      nombre: "WD Black SN850X SSD 4TB M.2 2280 PCIe Gen4 NVMe",
      capacidad: 4,
      tecnologia: "m2",
      gama: "Premium",
      precio: {
          segundaMano: 250.00,
          amazon: 280.99,
          ebay: 331.39,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-Black-SN850X-Express/dp/B0B7CQ2CHH/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1LBBY2N7N9HE5&keywords=wd+black+sn850x+ssd+4tb+m.2+2280+pcie+gen+4+nvme&qid=1702374182&sprefix=wd+black+sn850x+ssd+4tb+m.2+2280+pcie+gen4+nvme%2Caps%2C86&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/403857093327?hash=item5e07c232cf:g:ylwAAOSw84ZjDM4Q&amdata=enc%3AAQAIAAAA4FXP4jQXfi2iJkNlEkf%2BQw70uKyfnqe7AqXj9YjjfpNPuDLr9LRthuG99rYXgQqRPGzsiqerVKXtk23xa4bqKE8ObQtC49CG43FdyyJUN0Y21luBpE8%2BuxxX2KElCMiN76BGqHY0EXYq65yPngnXpq44uvYIfBv86SHm7suSOrTAP6g9HzHKUg0J6eyoqD0M%2Ff4Xbzqbw5t2YAh%2FiygkpVBML9SVJP8aaDj4sd6oGkhycejToi7M6o3v2TZat1GYR%2FAlK3nTzLe49FWCZD5wQZRNnsm9TDCX%2BMPycmYbSouo%7Ctkp%3ABk9SR7aoxtaLYw",
      },
      imagen: "m2.jpg"
    },
  ],
  sata: [
    {
      marca: "Samsung",
      nombre: "Samsung 870 EVO SSD 2.5 2TB SATA3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: "Premium",
      precio: {
          amazon: 142.79,
          ebay: 179.90,
      },
      link: {
          amazon: "https://www.amazon.es/Samsung-870-EVO-2000-Negro/dp/B08PC5ZYB1/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2H3FIYIO9QWNT&keywords=Samsung+870+EVO+SSD+2.5%22+2TB+SATA3&qid=1702373527&sprefix=samsung+870+evo+ssd+2.5%22+2tb+sata3%2Caps%2C99&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/364026432432?hash=item54c1aa8bb0:g:0UkAAOSwjCRjVsGU&amdata=enc%3AAQAIAAAA8KSrWcKHydbJ9N4RXn8dVJJfeXgfbGNr81CwhJwutYryWAAbF7130PYbr%2Ff6%2BlA5%2FULFKXGMnNmw4jaoUjxQ9GYt1ULA7XN3vgmI1Iuw7CHpdBrwO0r%2By38E0u48qp8k0MHnPr7YO2YjB%2BnjN8dtTIMyARKAWlf3DLJmZHVpGt79Ec6%2BCdxPw9IM%2F55WQve2HXUKFl8aCmXgZ2OAOBG5hZfDRbhGS%2FWGfTcLQcrJyFVs5bj1cQpteDLGa0xcFvWj%2BmQ2iEvwpyPAaDdSXtYkb74fnlDvWcrXk0Sj1a1oy6vNBiNlqVZqxxVdlseQFwf9Cw%3D%3D%7Ctkp%3ABFBM9Pr01Ytj",
      },
      imagen: "hdd.jpg"
    },
    {
      marca: "Samsung",
      nombre: "Samsung 870 EVO SSD 2.5 2TB SATA3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: "Premium",
      precio: {
          amazon: 142.79,
          ebay: 179.90,
      },
      link: {
          amazon: "https://www.amazon.es/Samsung-870-EVO-2000-Negro/dp/B08PC5ZYB1/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2H3FIYIO9QWNT&keywords=Samsung+870+EVO+SSD+2.5%22+2TB+SATA3&qid=1702373527&sprefix=samsung+870+evo+ssd+2.5%22+2tb+sata3%2Caps%2C99&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/364026432432?hash=item54c1aa8bb0:g:0UkAAOSwjCRjVsGU&amdata=enc%3AAQAIAAAA8KSrWcKHydbJ9N4RXn8dVJJfeXgfbGNr81CwhJwutYryWAAbF7130PYbr%2Ff6%2BlA5%2FULFKXGMnNmw4jaoUjxQ9GYt1ULA7XN3vgmI1Iuw7CHpdBrwO0r%2By38E0u48qp8k0MHnPr7YO2YjB%2BnjN8dtTIMyARKAWlf3DLJmZHVpGt79Ec6%2BCdxPw9IM%2F55WQve2HXUKFl8aCmXgZ2OAOBG5hZfDRbhGS%2FWGfTcLQcrJyFVs5bj1cQpteDLGa0xcFvWj%2BmQ2iEvwpyPAaDdSXtYkb74fnlDvWcrXk0Sj1a1oy6vNBiNlqVZqxxVdlseQFwf9Cw%3D%3D%7Ctkp%3ABFBM9Pr01Ytj",
      },
      imagen: "hdd.jpg"
    },
  ],
  gpu: {
    marca: "AMD",
    nombre: "AMD Radeon RX 7900 XTX",
    consumo: 420,
    potenciaRecomendada: 800,
    gama: "Alta",
    precio: {
      segundaMano: 890.00,
        amazon: 1069.00,
        ebay: 998.99,
    },
    link: {
        amazon: "https://www.amazon.es/SAPPHIRE-Pulse-Radeon-7900-GDDR6/dp/B0BQNCSW3X/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=384HK2HNK47HD&keywords=rx+7900+xt&qid=1701245245&sprefix=rx+7900+xtx%2Caps%2C188&sr=8-2",
        ebay: "https://www.ebay.es/itm/266491008764?hash=item3e0c1a16fc%3Ag%3AAd0AAOSwsMtlR1zW&amdata=enc%3AAQAIAAAA4FfoJz0qVuqsVyf6PXyJndTkKALc0OHtwR%2F41q5LpkczVWLbKfbqoyUEGKaBoVg9BOlXA%2Fb0iNJc44fgslvGXhxzy332KrGSvq1mUpQIg1YxitiZ74B26V98bRtx5szByMtRoBZhPrHyrEZAOvYGGu8cKfUtGPkyd2xVxGw1wBK%2BmYtNus8fxRjFnbNi0WONd%2Br3FGv%2FRxoWLq0xNZu6MApSztzguGJOiXLK9jYYu4nqF%2FdLGl7818ncB8meND1mMFqiy6FfRh0PbedCFOht1AHg6LI6tXzHp6%2BkxiQfuEOh%7Ctkp%3ABk9SR5bOiKKDYw&LH_ItemCondition=1000",
    },
    imagen: "gpu.jpg"
  },
  fuente: {
    marca: "Asus",
      nombre: "Asus ROG Thor 1200P 80 Plus Platinum 1200W Modular",
      potencia: 1200,
      gama: "Premium",
      precio: {
          segundaMano: 300.00,
          amazon: 357.36,
          ebay: 520.00,
      },
      link: {
          amazon: "https://www.amazon.es/ASUS-calentadores-ventiladores-rodamiento-tecnolog%C3%ADa/dp/B07J9NHZZH/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=147OPGWA6SCA2&keywords=Asus+ROG+Thor+1200P+80+Plus+Platinum+1200W+Modular&qid=1702379518&sprefix=asus+rog+thor+1200p+80+plus+platinum+1200w+modular%2Caps%2C77&sr=8-3&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/374923541968?hash=item574b2f3dd0:g:iMAAAOSwaQZk~CEV&amdata=enc%3AAQAIAAABAGU4hLSXkIsRskS%2FMrPn142K8RhFX42T4C271yRDG2iCIt7mUpVTFcg%2FRIaNF3eMa5dVBBnlFJMovf4Vb5ZL%2FyFWbJW2Eqs0abcb8e7zEQ4il7kn7LDYp9LYRj5M9fNYV%2FRO4Gvc706Fi9kPOW0haTq%2Bb5%2FFBQXzQzDKF25ZnwxhzGRaLAF6C2MCFAJIlu7mc%2FHfCoxFzteEmoRl72zyJOWipRMoJVXaGML0Ig%2FtLDaIyXLH3d7TqMGpyDgVkzkIYeIJcU2%2BSkuNsDdE3sP69GvQrg%2B%2FErZgn0rz%2BPWv3ln0dIuAUIXWDXvxMajYFIPAkdBqdpG40lq2VsF1uXQwTEA%3D%7Ctkp%3ABk9SR8iL0duLYw",
      },
      imagen: "fuente.jpg",
  },
  monitor: {
    marca: "Asus",
      nombre: "Asus TUF Gaming VG28UQL1A 28 LED IPS UltraHD 4K 144Hz G-SYNC",
      gama: "Premium",
      precio: {
          amazon: 628.90,
          ebay: 835.29,
      },
      link: {
          amazon: "https://www.amazon.es/ASUS-VG28UQL1A-3840x2160-Compatible-DisplayHDR/dp/B09CDVMNS7/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3IYN8YJ2BUUZJ&keywords=Asus%2BTUF%2BGaming%2BVG28UQL1A%2B28%22%2BLED%2BIPS%2BUltraHD%2B4K%2B144Hz%2BG-SYNC&qid=1702375774&sprefix=asus%2Btuf%2Bgaming%2Bvg28uql1a%2B28%22%2Bled%2Bips%2Bultrahd%2B4k%2B144hz%2Bg-sync%2Caps%2C87&sr=8-5&ufe=app_do%3Aamzn1.fos.0fd54328-1d46-4534-bd0f-16141b40bb5b&th=1",
          ebay: "https://www.ebay.es/itm/314987242407?hash=item4956b3e3a7:g:4r0AAOSwfbZlYfVH&amdata=enc%3AAQAIAAAA8FGAAgJEpHdBXvFP9xIkYkgy349TXX8vc%2FNm0Q5M9I1BfwR5KopqXxv5I0RUtBB7PAPOhT4Xp58HJqHrltgCJ2fjmi7YDtDcyM3Q%2FmO38ULS1ypi96%2Fn1utnyHVRfwuFdHM2rhY3TN9z2lZrqtPt1OE5ZecPEdRUJdT5V7YUHHA27QbMgTlJN0x6sQ6uHduun9G4pSnZOB0nwsgEObteSH6SKlmFEqqe4YIRU004%2BQunUsVivbs0r3EgbPVOPjDRKzg7VUstYsZBAItBh%2BeZoY%2FcWuyRjQUcn8I%2F83T1FRKOqSheVVcn7QExqdjRY6tRwQ%3D%3D%7Ctkp%3ABk9SR4q7h9iLYw",
      },
      imagen: "monitor.jpg",
  },
  caja: {
    marca: "Cooler Master",
      nombre: "Cooler Master Cosmos C700M",
      gama: "Premium",
      precio: {
          segundaMano: 450.00,
          amazon: 511.46,
          ebay: 504.94,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-Carcasa-Ordenador-Full-Tower/dp/B07H6MKSXZ/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1TUFJLFZZHZG5&keywords=Cooler+Master+Cosmos+C700M&qid=1702377999&sprefix=cooler+master+cosmos+c700m%2Caps%2C79&sr=8-1",
          ebay: "https://www.ebay.es/itm/404647741259?hash=item5e36e2874b:g:bGQAAOSwDaJlZP--&amdata=enc%3AAQAIAAAA8K%2Bye8%2FnC64iXdxWYt0eI%2FF4zmdq%2FoNDHXw0b9%2FbRGzZvr6J63yp9Gbrg6f7zLqTpac%2BfkM8G50WAr4Ua%2BjahwwSumPU9FpTxUwGtA6%2B6ESUqZIE5NrR6qxUxY6cBEBwSKf%2FieGyMgi%2F%2BQbdfnYaXJ8LlCDZouDq9naEgLLmfiJ8JGhlOCUxqn9uQ6h3iV5QYL9m8fEHR2w3AzDq7voDYm9zvox5vG%2BUhPgIdQeiiLHfVm1xnuRYdXWy1NM%2BdcFV9Sc0%2FRtxV04MeYRUJbFn0pCGRsptRTS2HI8TnAPVzFtBx7CZTQOvDQklWpqj4S6tYA%3D%3D%7Ctkp%3ABk9SR5SWl9qLYw",
      },
      imagen: "caja.jpg",
  },
  disipador: {
    marca: "Corsair",
      nombre: "Corsair iCUE H170i ELITE LCD XT",
      gama: "Premium",
      precio: {
          segundaMano: 170.00,
          amazon: 382.99,
          ebay: 208.34,
      },
      link: {
          amazon: "https://www.amazon.es/Corsair-H170i-Elite-Refrigerador-L%C3%ADquido/dp/B0BQWTVYLV/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=XYQ9FIXDTU3A&keywords=Corsair%2BiCUE%2BH170i%2BELITE%2BLCD%2BXT&qid=1702376744&sprefix=corsair%2Bicue%2Bh170i%2Belite%2Blcd%2Bxt%2Caps%2C90&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b&th=1",
          ebay: "https://www.ebay.es/itm/386171376022?hash=item59e99b9196:g:x7AAAOSwXMllHvS7&amdata=enc%3AAQAIAAAA8Mn2OOQETkUR%2BUnvawKImluI226QrP3o8dJ9XYKOvcch1n%2F5PLbWYElzQmq9U7lFzME38DBqvOoFB61jEuWUJNq%2FU7ajDGbIUPXbCswPu%2F7BXTuzHR6kxVURrDLcUdyVT5YXj0MGrSHlRU%2B%2F0nJL2UW%2BlGh2LdfjKsnKm3VFxeJTvP%2FA2rFpfo3UeN9yIeuRAMJW7olZoGdyKii3fKhS%2B1gXwQNIx%2FpTOiEwwdqpkogNq6pJ6tsbY2Yor09tZ7wbUJCq77bRDwyakzlZ2VzY5UESVBQkZb%2FY3y7i1QrH23Uk3jNphquNUavZxffRJJ1tkw%3D%3D%7Ctkp%3ABk9SR6Ka_tiLYw",
      },
      imagen: "disipador.jpg",
  },
};

const buildParaEstudiantes = {
  placas: {
    marca: "Gigabyte",
      nombre: "Gigabyte H610M",
      socket: "LGA1700",
      tipoRam: "DDR5",
      gama: "Baja",
      numeroM2: 0,
      numeroSata: 2,
      precio: {
          segundaMano: 70.00,
          amazon: 86.98,
          ebay: 89.50,
      },
      link: {
          amazon: "https://www.amazon.es/Gigabyte-H610M-V2-DDR4-Z%C3%B3calo/dp/B0C3XJPGM6/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3PGGP4N21TY5V&keywords=Gigabyte+H610M&qid=1702369528&sprefix=gigabyte+h610m%2Caps%2C87&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/175743088939?hash=item28eb1ab92b%3Ag%3A0y0AAOSwotVkbjoZ&amdata=enc%3AAQAIAAAAwDZIFouCc%2BNU8UXWEO%2FRaM660h51v4Gq%2FlIRg22%2B72lSNGCTlijEBn1gSPJVDcu4resG6GkS0x3RGXLMF1RQfoHIuZTavY7GHuoEmJVaRvJH01XlwuoLkGtJ%2BUKelAxmngwB5VTItCumLz94FbPWmQDtgKHKA7Tm65BgzzYA2IVHLF%2BJYw8TCZk8fBfOS%2Fz1vEn11BWC%2BWl1uZP%2Buohc%2B9ok7E0IuT1V9iO%2B0uukRU4qrPsTs2qKmR4hNwCEbPatWw%3D%3D%7Ctkp%3ABk9SR8zNj9KLYw&LH_ItemCondition=3",
      },
      imagen: "placa.jpg"
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i3-13100",
    gama: "Baja",
    socket: "LGA1700",
    consumo: 110,
    tipoRam: "DDR5",
    ventilador: true,
    gpu: true,
    precio: {
        amazon: 121.40,
        ebay: 157.30,
    },
    link: {
        amazon: "https://www.amazon.es/Intel%C2%AE-i3-13100-Desktop-Processor-P-Cores/dp/B0BN5Z8MDR/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=S9AQUG2XFG5W&keywords=i3+13100&qid=1701166184&sprefix=i3+13100%2Caps%2C93&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
        ebay: "https://www.ebay.es/itm/134789390914?hash=item1f6212e242:g:eWsAAOSwms5lQsmU&amdata=enc%3AAQAIAAAA4IHuZx1SYk0X0TAk6400bFRWTx3lomBfJ5KJaMvC4BtB%2BJP7bsyyZWkWKC3ymVW3GBhfg0EJcQtywriNMWP6HtYxkE5IAkbAcGCPzSRLQOkvgXXl6t07Ibrx6eCjqRI9mtjMzngs69UpEsQc0csDMtY57GPX1GiMBoNEm3OofXQwCRy5PikZ%2FTLx%2F%2BEkBKjJhT16hhsT%2FWO%2F7VP%2Bn1w1P9qqyi7ymFs3IknXUA6uqtHbIHiIbhyBDAI54isZgQIp7Xk4zkHA7Z46vVH0sNj%2F7%2BDceVRXse%2F3sR0iWzoBiTa2%7Ctkp%3ABFBM_pfE1oJj",
    },
    imagen: "intel.jpg",
  },
  ram: {
    mmarca: "Crucial",
    nombre: "Crucial DDR5 4800MHz PC5-38400 8GB CL40",
    tipo: "DDR5",
    capacidad: 8,
    gama: "Baja",
    precio: {
        amazon: 27.99,
        ebay: 35.73,
    },
    link: {
        amazon: "https://www.amazon.es/Crucial-CT8G48C40U5-4800MHz-Memoria-Escritorio/dp/B09HWFZZM4/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2QN1K408CTJ9M&keywords=Crucial+DDR5+4800MHz+PC5-38400+8GB+CL40&qid=1702369011&sprefix=crucial+ddr5+4800mhz+pc5-38400+8gb+cl40%2Caps%2C174&sr=8-1",
        ebay: "https://www.ebay.es/itm/185279005639?hash=item2b237d43c7:g:m5MAAOSwKQNh-mfD&amdata=enc%3AAQAIAAABANYi097FzvdFeZFwUKAGwhRsHb%2BkC77y13zYStq1Nme2op5OXJyKDANFOD%2Fd1c2Nf%2FbuHzE%2FiISuLGMhEyVbtNVNRzp5L4UcP9H%2FpXxSTQxCZFMUh3Jl%2FSEJ2LWuVR1QcXSzqc4kW4Rrqi2BvSl7lGvSjCXTZuGA4QM%2BCjtyk0yqek%2F9LNp0Y4fZAcOk3Ogidp%2FjNqOQVoWPGFKfMZrLSDIPV3NEd%2Fek9KeWFeO4AmE8mLZWIQp5sh%2FUQMDO0eDUw5h7aFYtTKW3Y4XtFjlriw%2Bq9ld9HRh%2FR7Zb%2B%2BAv45gM7WbgXTdIS15aEm2%2Bixx37MUKSufxTDkh43OF6Jxn1Lw%3D%7Ctkp%3ABk9SR8yAztGLYw",
    },
    imagen: "ram.jpg"
  },
  sata: [
    {
      marca: "WD",
      nombre: "WD Blue 1TB 3.5 SATA3",
      capacidad: 1,
      tecnologia: "Sata",
      gama: "Baja",
      precio: {
          segundaMano: 30.00,
          amazon: 33.90,
          ebay: 49.90,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-WD10EZEX-1000-GB-Interna/dp/B0711YN12S/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3CMMXNXGC4YLT&keywords=WD+Blue+1TB+3.5%22+SATA3&qid=1702372448&sprefix=wd+blue+1tb+3.5%22+sata3%2Caps%2C179&sr=8-1",
          ebay: "https://www.ebay.es/itm/122487163758?hash=item1c84cdcb6e:g:MRcAAOSwxu5ZEfgL&amdata=enc%3AAQAIAAAA8F3KGBZIzCAoTgEe78svkhvw9EZ4hAECmlyOUYc9nDcjPbFB67MHn%2FIyiA3sLZoDgpBBdPPF1z2H8erpJsa9n7TmgagGMjgk05zteas%2F1me7RPzjF2ysxSkv2VJj8JKf283vKM9NlQWSyAz%2F3xasrzQX3n1TYTGJsOhvx4xPqItOOoFx8KE6M1wKv%2FN5u8PNRQLsmE783aKDLpL5F5jzj%2FrbdXL4%2BUicN8wVWn1Ga45Najf1%2BKe84LPesitRBqgrzxL5Qj97PmWbe0NywsuO%2FyQwrijlXQYPqMqLBS9Ljot4Je7TZzpEBn%2Ft9xPFPckwWQ%3D%3D%7Ctkp%3ABk9SR-yc8dSLYw",
      },
      imagen: "hdd.jpg"
    },
    {
      marca: "WD",
      nombre: "WD Blue 1TB 3.5 SATA3",
      capacidad: 1,
      tecnologia: "Sata",
      gama: "Baja",
      precio: {
          segundaMano: 30.00,
          amazon: 33.90,
          ebay: 49.90,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-WD10EZEX-1000-GB-Interna/dp/B0711YN12S/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3CMMXNXGC4YLT&keywords=WD+Blue+1TB+3.5%22+SATA3&qid=1702372448&sprefix=wd+blue+1tb+3.5%22+sata3%2Caps%2C179&sr=8-1",
          ebay: "https://www.ebay.es/itm/122487163758?hash=item1c84cdcb6e:g:MRcAAOSwxu5ZEfgL&amdata=enc%3AAQAIAAAA8F3KGBZIzCAoTgEe78svkhvw9EZ4hAECmlyOUYc9nDcjPbFB67MHn%2FIyiA3sLZoDgpBBdPPF1z2H8erpJsa9n7TmgagGMjgk05zteas%2F1me7RPzjF2ysxSkv2VJj8JKf283vKM9NlQWSyAz%2F3xasrzQX3n1TYTGJsOhvx4xPqItOOoFx8KE6M1wKv%2FN5u8PNRQLsmE783aKDLpL5F5jzj%2FrbdXL4%2BUicN8wVWn1Ga45Najf1%2BKe84LPesitRBqgrzxL5Qj97PmWbe0NywsuO%2FyQwrijlXQYPqMqLBS9Ljot4Je7TZzpEBn%2Ft9xPFPckwWQ%3D%3D%7Ctkp%3ABk9SR-yc8dSLYw",
      },
      imagen: "hdd.jpg"
    },
  ],
  fuente: {
    marca: "L-Link",
      nombre: "L-Link Fuente de Alimentación ATX 500W",
      potencia: 500,
      gama: "Baja",
      precio: {
          amazon: 18.49,
          ebay: 15.95,
      },
      link: {
          amazon: "https://www.amazon.es/L-Link-LL-PS-500-CAB-Fuente-alimentaci%C3%B3n-Blanco/dp/B0758GLF4G/ref=sr_1_4_mod_primary_new?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3PHD73RN0RP6C&keywords=L-Link+Fuente+de+Alimentaci%C3%B3n+ATX+500W&qid=1702378260&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=l-link+fuente+de+alimentaci%C3%B3n+atx+500w%2Caps%2C80&sr=8-4",
          ebay: "https://www.ebay.es/itm/304934689716?hash=item46ff861bb4:g:GKYAAOSwfvVkXg0G&amdata=enc%3AAQAIAAAA4FPZXA%2FDjkCHgitmwFpaai2cVAMxSWIlhD8hVSZHu6wi4T%2BrHyCklwPC1OLp%2F0qt7187IdEMNEO5QSYZCFrehelRZjixpLCmujRVKaUEtRxleoFUqyLusTz8NnBRIRU4MUEtCAt56yymTWlPRzN34H6jp2oXnaiedNdTnXYXKeYuxG%2BwNKAw3kPORRwQOAtWRkpSljRXIQMmQgKV8%2FDJbdzvvDVvWmcLNb5hAJ1SXLDRpcaZbzRAjbWz2tAQLYL9ZO6vWAN5FFf9Yw9VSuAd42rkhNU5GwUIwpMzR4f6yzT4%7Ctkp%3ABk9SR_b7t9qLYw",
      },
      imagen: "fuente.jpg",
  },
  monitor: {
    marca: "AOC",
      nombre: "AOC 24B2XH 23.8 LED IPS FullHD 75Hz",
      gama: "Baja",
      precio: {
          segundaMano: 50.00,
          amazon: 79.90,
          ebay: 144.37,
      },
      link: {
          amazon: "https://www.amazon.es/AOC-24B2XH-Pulgadas-1920x1080-Flickerfree/dp/B0845VVRQ1/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20VHY00RDJQW4&keywords=AOC+24B2XH+23.8%22+LED+IPS+FullHD+75Hz&qid=1702374872&sprefix=aoc+24b2xh+23.8%22+led+ips+fullhd+75hz%2Caps%2C98&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.0fd54328-1d46-4534-bd0f-16141b40bb5b&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/134517595831?hash=item1f51df9eb7:g:1asAAOSwLdtkKuIP&amdata=enc%3AAQAIAAAA8JHU0BscxReYXRGiJwcWuNcQesnmwgPq%2BOHGE%2BCQn615smyQi8KPVDTJTAapsleJkPqE4KUJSB%2B7CjFeK1d%2FIXDXK3dRvoE7IcgUND6ZjhhGRLA5PLIh5SSp2uCagvRMYHQGVFQjzDIo3cqYlxLgAHp1OSPxOLTmM6Sb885WQvgFP3JUcmnz556PEPIm9tqGV%2BPiaI7tzTBc%2FbJWbpc9q1lR7lU%2FD0rF8z%2Fo7AqaAV7Okp6veL3GMAkMA%2FY8119jTkoZU%2FNboGXL0m549pHSJ4M4JKyhZbxTmB48qrlDfgw6KspmCnkvFwADjrM7du7LlQ%3D%3D%7Ctkp%3ABFBM_LmZ14tj",
      },
      imagen: "monitor.jpg",
  },
  caja: {
    marca: "Cooler Master",
      nombre: "Cooler Master MasterBox MB600L V2",
      gama: "Baja",
      precio: {
          amazon: 81.02,
          ebay: 106.99,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-MasterBox-MB600L-Minimalista/dp/B08XQJCBCJ/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1365JFE4VZWJJ&keywords=Cooler+Master+MasterBox+MB600L+V2+ODD+USB+3.2&qid=1702377235&sprefix=cooler+master+masterbox+mb600l+v2+odd+usb+3.2%2Caps%2C142&sr=8-1",
          ebay: "https://www.ebay.es/itm/385691635765?hash=item59cd035035:g:IqEAAOSwa99ki8ut&amdata=enc%3AAQAIAAABABX%2ByfkY1FAs43%2BJLrt0LHajtXVY9quYAGncy%2FVEUF4n2Wm3NmSz4AmR6hpeSvC428b431%2BgClv7RXAYNbZmGSz%2B8%2BbPSt%2BpZftAFzZpQ18hqEXK9KU1h7pvk2jFb0m0%2F2gf98v0icVOzTpJvtuGnk56%2FMmc7lpQG%2FjlYO4SdQ3dG%2FguzrgySi%2BgAqznx3Jb3U5HZaI9tYACLC7baV3zJdR4Y4KJbZWuentRbJxt9Fv0svEYXBnlM5YCWf8CHzDHSBCF%2F800r1CafasRNgnKbQdaOhUpYScZyjshUhflFR5eH0ZqlN065Vz5b3jMk7vWs4pNz72Prur6F%2FwKD9kPANs%3D%7Ctkp%3ABk9SR5r8udmLYw",
      },
      imagen: "caja.jpg",
  },
};

const buildParaEstudiantes2 = {
  placas: {
    marca: "Gigabyte",
      nombre: "Gigabyte Z790 GAMING X",
      socket: "LGA1700",
      tipoRam: "DDR5",
      gama: "Media",
      numeroM2: 2,
      numeroSata: 2,
      precio: {
          amazon: 241.99,
          ebay: 326.59,
      },
      link: {
          amazon: "https://www.amazon.es/GIGABYTE-Z790-Gaming-AX-G10/dp/B0BLF7QXJK/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=QTQXRPKUV97N&keywords=Gigabyte+Z790+GAMING+X&qid=1702370235&sprefix=gigabyte+z790+gaming+x%2Caps%2C103&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/204228941818?hash=item2f8cfe57fa:g:~oAAAOSwWRVj2AaK&amdata=enc%3AAQAIAAAA8O0zTbXUKtkOb%2FVANdsO9iddshguHd4FSpxtDKARwCGru8G9oU314ZKlcLcE47%2B0%2FOOYJDh0uvTfj3ApPXb99VdAvtFSy3dIbhmeQLtaEo8851dV0Phab0q6ir2a2U5xrn54tk6Xm6yS9v43g%2FDmMEqgJs4Rl4zm37QEwO0w4DBupKDQnj8waY1vhLB3S18g9JDmAhX2DvFLjFs%2FdgMQbWH8FWGGfvx%2F53LS4Y1%2FUHuyrtnm%2BAItmWAsIp4VRHU4kDJGBILO0S3yQqZgGffHXphQJvUnfWW8Yffwl%2FrlWWUEVeWaxAKnCsdqzlbM1k79rw%3D%3D%7Ctkp%3ABFBMxqjo0otj",
      },
      imagen: "placa.jpg"
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i5-14600KF",
    gama: "Media",
    socket: "LGA1700",
    consumo: 181,
    tipoRam: "DDR5",
    ventilador: false,
    gpu: false,
    precio: {
        amazon: 327.36,
        ebay: 309.99,
    },
    link: {
        amazon: "https://www.amazon.es/Intel%C2%AE-i5-14600KF-Desktop-Processor-P-Cores/dp/B0CHBH63YX/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=V38NC9TNU70X&keywords=i5+14600k&qid=1701165966&sprefix=i5+14600kf%2Caps%2C98&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
        ebay: "https://www.ebay.es/itm/355176558210?hash=item52b22c2e82:g:eWcAAOSw3-ZlWn~e&amdata=enc%3AAQAIAAAA4MMgK7oH0aV%2BfE7MUqsx9uOQhjhgGD0nDr1z6yeCx1xc1wu0q%2F8fH9egyhx%2F1B%2FT8cl6CrtzUEluscy9xA%2Bl9U3BKd3HeOjVAAg4yi31aVm15uy1lI%2Fi%2F%2BkXSgiw1juyBw6J4rXK4BXLaNgJgcqFZyRDrghA9terEc98njiH6w2pffizf%2B0SAU5fO6dzaQo5qzSE5atoSLakvGaPatKG4BnoFsOSEAesf%2FOtSZAV7clR3arXUp9gmWDlvwJhO%2FJR7O50xRSoEbvq5%2B2S2om6oihx9XM9ZIDc08xIHfs1mXLr%7Ctkp%3ABk9SR8aMqtaCYw",
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
      nombre: "Corsair Vengeance DDR5 6400MHz PC5-51200 32GB 2x16GB CL32",
      tipo: "DDR5",
      capacidad: 32,
      gama: "MediaAlta",
      precio: {
          amazon: 134.99,
          ebay: 172.58,
      },
      link: {
          amazon: "https://www.amazon.es/Corsair-Vengeance-Optimizada-Regulaci%C3%B3n-Personalizados/dp/B0BPL9VYPW/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=55ZSWG2V7NN4&keywords=Corsair+Vengeance+DDR5+6400MHz+PC5-51200+32GB+2x16GB+CL32&qid=1702367885&sprefix=corsair+vengeance+ddr5+6400mhz+pc5-51200+32gb+2x16gb+cl32%2Caps%2C169&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b1",
          ebay: "https://www.ebay.es/itm/196115489448?hash=item2da964e2a8:g:oz4AAOSwsAllbgjF&amdata=enc%3AAQAIAAABENkLE6KDg6q%2FIQQfwTIGt%2FKvAzGSKX4EKjCqnG1xZyTLaF6lnEP%2FgpM0b0SPjLtL%2FrxYJuBkzl0T0VLeQjCN6eIMM5pHJ%2B8fEWQzy%2Ff2lRpmCcRdMgLr9rcJh8dypc64Cg0kwtyyVcbpIuwMZupcjfJleYRos5rmNL8ld3U4R1CkFhAXcQQERW%2FIVTTjLiq906TDJiNQsXeS82FJt5zTg9uN7ziWLnWIDgEG8ONZcQqdRMC4E%2BIKD3SmQ9W0qc05OCVhmcO1MRpnccL57eFLAooQDehf58l4aRMNW3j6Iy%2BkGxZqfxFi4Wb3AJehLlQWLKqbfdF4u4T10gHezfUztfkRU%2FhOi40uxCqVn3PCN0T1%7Ctkp%3ABFBM8ILF0Itj",
      },
      imagen: "ram.jpg"
  },
  sata: [
    {
      marca: "WD",
      nombre: "WD Purple 2TB 3.5 SATA 3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: "Media",
      precio: {
          segundaMano: 40.00,
          amazon: 71.46,
          ebay: 56.52,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-Disco-mec%C3%A1nico-256MB/dp/B08VH8R94B/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2PKU4UQLMCKRL&keywords=WD+Purple+2TB+3.5%22+SATA+3&qid=1702372984&sprefix=wd+purple+2tb+3.5%22+sata+3%2Caps%2C76&sr=8-1",
          ebay: "https://www.ebay.es/itm/384876574990?hash=item599c6e790e:g:4NkAAOSwMThe0cDH&amdata=enc%3AAQAIAAAA8IXmkF%2BSqSRJfaqpcsA6D5qSxQdXYkHfPe9BLltZtZng9k8Fpqds5lzetUHicFm0eLZgil3pWic8kpjqZjPQfuO%2FV%2BJjdT5EkMG42KxD445w%2BAHAbjJPxD3k6auJgiJv2PUJmJ9NTZyxz%2BHZZrUXEOr7seiv%2Fvr84%2BZoajcUEJQfGez%2Bny%2B%2F1R9NKnSb5shF0qt4nhw00OgGybCGm3yPWy9E%2FBF6c%2FobxvJcX%2FZtsSZp1C0429HIsazkq9KYmcBFE%2BXKCARFWObgwTKl6ASU3gGHGhDcLAm59fv7mM4Qk9CKVZNRxoQRMuT8eJk1k26IvA%3D%3D%7Ctkp%3ABk9SR7zfstWLYw",
      },
      imagen: "hdd.jpg"
    },
    {
      marca: "Kingstone",
      nombre: "Kingston KC600 SSD 512GB NAND TLC 3D SATA3",
      capacidad: 0.5,
      tecnologia: "Sata",
      gama: "MediaAlta",
      precio: {
          segundaMano: 50.00,
          amazon: 57.75,
          ebay: 55.04,
      },
      link: {
          amazon: "https://www.amazon.es/Kingston-KC600-SSD-SKC600-512G/dp/B07ZDBT15M/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1QR02V8YTSI1&keywords=kingston%2Bkc600%2Bssd%2B512gb%2Bnand%2Btlc%2B3d%2Bsata%2B3&qid=1702373177&sprefix=kingston%2Bkc600%2Bssd%2B512gb%2Bnand%2Btlc%2B3d%2Bsata3%2Caps%2C94&sr=8-1&th=1",
          ebay: "https://www.ebay.es/itm/404658693707?hash=item5e3789a64b:g:AdwAAOSwUV9la9kI&amdata=enc%3AAQAIAAABALwTGEf1R4%2BTlUqv0G99XdfV2KojwI1i5uLsANywNgfk%2FINyo5Rq%2Fbwvn8gLlviJDNr4EXQhgBl1i8GKneK5U4GVX%2B5eF7h1Rw%2B1KNM5zsn9aPLsQSYOvf1JE5m9pf4XuKaqPUYOV6ED2d%2BBN6ETff0QYjW93uoQ%2FoI4hZL%2BSUOL5EDdZ6ReMEWyUY%2FDYeX48Kp3%2BjRWwxBC3dE%2Fbrn7R0uT5ZsFX1BKB%2FQKWzhlAo9oXTlVW3HGB%2FvS%2FK%2F%2FdHaQas2n8ccZf%2ByyhF8gw9wmJYd8w9glyV5T0RcoNK5R8Aszu9H3GK%2FzbXWgjFCyfmkeBkPesTRlpANer7JKvtH%2Bp1Q%3D%7Ctkp%3ABFBMkrzK1Ytj",
      },
      imagen: "hdd.jpg"
    },
  ],
  gpu: {
    marca: "Nvidia",
    nombre: "Nvidia RTX 4060",
    consumo: 115,
    potenciaRecomendada: 550,
    gama: "Media",
    precio: {
      segundaMano: 290.00,
        amazon: 349.90,
        ebay: 359.99,
    },
    link: {
        amazon: "https://www.amazon.es/ASUS-Dual-GeForce-White-DUAL-RTX4060-O8G-WHITE/dp/B0C9TM6568/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=5W2YN90SS56G&keywords=rtx+4060&qid=1701175857&sprefix=rtx+4060%2Caps%2C101&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
        ebay: "https://www.ebay.es/itm/256319669310?hash=item3badd7c43e%3Ag%3Ad3sAAOSwdJZlZMvG&amdata=enc%3AAQAIAAAAwGLi4TAQpPQfCba2hzE1%2F%2BDLvQHWTkNkuAn1lrK9lSoMeyTi7ZxLvuB1tm2OTbqJTnuwcB%2BpaBg%2Bu5wmmor%2FpalnULcz4mVU88ZYQRQX6%2FOjDqjyj35f7vDOUKHP0YPhlxRCxgXClTklafhpcanp86HAO5WnW8bp30JTH6LQqnVGn4FlFTzwS%2BvMezSkeyC0Zq8TKUFmRlKMaotkPcuAb0tTWNV0cZLDIX0zRjqcRUsu3oC2LANqKV%2Bc6%2F5JXrgpWQ%3D%3D%7Ctkp%3ABk9SR5zE39-CYw&LH_ItemCondition=3",
    },
    imagen: "gpu.jpg"
  },
  fuente: {
    marca: "Mars Gaming",
      nombre: "Mars Gaming MPB650 650W 80 Plus Bronze",
      potencia: 650,
      gama: "Media",
      precio: {
          segundaMano: 30.00,
          amazon: 43.44,
          ebay: 85.84,
      },
      link: {
          amazon: "https://www.amazon.es/Alimentaci%C3%B3n-Ventilador-Tecnolog%C3%ADa-Silenciosa-Eficiencia/dp/B0CLGR31LB/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=399Y5HGDWUO0G&keywords=Mars+Gaming+MPB650+650W&qid=1702378967&sprefix=mars+gaming+mpb650+650w%2Caps%2C85&sr=8-1",
          ebay: "https://www.ebay.es/itm/195998675651?hash=item2da26e72c3:g:X0YAAOSw4a1lO9KU&amdata=enc%3AAQAIAAAA8LSyI3IdJ0QFJ%2BBT7BPEktgRDVDqkyfhuJITqAXiZ%2BBwgjglyxt1hRrSr5Qpi217X8NzSZHOQUnQppj0HpoKASD5CC3Oq2wnXMSUFOcb%2B2d4l51%2FXltZy0iO4wKtru%2Bemndk0sjyERS%2FRJYY44IxuUZC6T5h10Ylv5Eqa%2Bi9Tovv1dOM22B7VrM8Htz4siyhkK3Omf6G6QhXbZIJkd1iErDWLm6QDf53BJ1eIX%2BPmRqlmxrVNW7ZGQNj9wfPOwQotjFugCEzT3H6AjP%2BXX5pT8FHO%2F86vLrAzjWrqaSEtDdFlXDrY66ioCV9%2FSx8n9vjAQ%3D%3D%7Ctkp%3ABk9SR7LzkduLYw",
      },
      imagen: "fuente.jpg",
  },
  monitor: {
    marca: "AOC",
      nombre: "AOC Q27G2E 27 LED QHD 155Hz FreeSync Premium",
      gama: "Media",
      precio: {
          segundaMano: 150.00,
          amazon: 189.90,
          ebay: 332.03,
      },
      link: {
          amazon: "https://www.amazon.es/AOC-Gaming-Q27G2E-BK-DisplayPort/dp/B0BGC9VRJ9/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2BEWHNEEOMYU&keywords=AOC+Q27G2E+27%22+LED+QHD+155Hz+FreeSync+Premium&qid=1702375355&sprefix=aoc+q27g2e+27%22+led+qhd+155hz+freesync+premium%2Caps%2C81&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/235278980859?hash=item36c7b856fb:g:uJwAAOSw-OxlQkH6&amdata=enc%3AAQAIAAABAK3Cg2rB%2BYDNWhA0%2BS%2F5FsJOoqb8%2BwsvJyGjSItUvnNfDoB8nmlCk4aVW%2BKvcqpajGnNPPC%2FWeWGHf078ZYgRW2KjDOsufnqreks%2Bi%2BVeBwM2G1ZCSNjW9UGNnpzlZ9aKcA2FX3IY8Qe%2FgOHJUq6sXfTz5mMdBGh1c0bfkcX7b5TOYP5wl9%2BV1UD1%2BQiV%2B2%2FIWEoxEUUSDgDsdUgwcyYs%2FtVeJBrwbsUe5Js3VRKYlkOM%2Fr61rtU%2BYHmlx%2F1LUTvtvi55%2BCePvbtvPLUsD8KdV37lkc75zywy3fj28NnzyLE2BsYmtgaDDPjsX3RGhoBNsKrjjoAukCP8sYg0TU4LEM%3D%7Ctkp%3ABFBMgOzU14tj",
      },
      imagen: "monitor.jpg",
  },
  caja: {
    marca: "Cooler Master",
      nombre: "Cooler Master Silencio S400",
      gama: "Media",
      precio: {
          segundaMano: 80.00,
          amazon: 110.93,
          ebay: 119.83,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-Silencio-Midi-Tower-Negro/dp/B07STP8MYP/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2MUU0PPF8M7JC&keywords=Cooler+Master+Silencio+S400&qid=1702377785&sprefix=cooler+master+silencio+s400%2Caps%2C82&sr=8-3&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/305193626279?hash=item470ef52aa7:g:FccAAOSwM55lJUnc&amdata=enc%3AAQAIAAAA8N2xcK6yCkO0ifgoOPTGblIIfp5f9gWV3YC1rd4CM1CyRz3kwD%2FBaXO2MZHG9DirjDyOzo3vKNsKGuSyMOyBi0pXMLOBN1Ia%2Fe%2F641Fxap4bnDBidq7qLusjEh216wKrdRZm8HEoz5KKd5zFVitUDFlqaNbqLxw566ZLkuw7xt7vvklUekMZIE%2FzTgOLfmRcphyq3gMakooLoxhdll%2B%2Fyq0bxd%2BFXJdfAqYGyOrKlLiySA%2B9IIPdOhxUl3CCQ%2B%2BU04ySEkUgoxK3vOkHyoOMF8iBWXTlNg5fdnALU9ju1%2F%2BnxHiSmxnwvdz18MTmojVfFA%3D%3D%7Ctkp%3ABFBMoPj92Ytj",
      },
      imagen: "caja.jpg",
  },
  disipador: {
    marca: "Cooler Master",
      nombre: "Cooler Master Hyper 212 Halo White Ventilador CPU 120mm",
      gama: "Media",
      precio: {
          amazon: 44.99,
          ebay: 34.51,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-Hyper-Halo-Disipador/dp/B0BNYV6NV4/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2RSHBEBOJ7HPQ&keywords=Cooler+Master+Hyper+212+Halo+White+Ventilador+CPU+120mm&qid=1702376224&sprefix=cooler+master+hyper+212+halo+white+ventilador+cpu+120mm%2Caps%2C163&sr=8-1",
          ebay: "https://www.ebay.es/itm/404644387241?hash=item5e36af59a9:g:g~4AAOSw8-hlYpyV&amdata=enc%3AAQAIAAABEPAInrU4yJ6OlQqNBMMfVdki2Rx8BE2qrG%2BtJeOJ6OO1cZm8S8dPL66bFlCVje%2FzXtdFYen7uw%2F00ptt94eL%2FIFXpOKA59sLvW45yv4DjSmo7VOJWbg9qEfzFBTh3IJczIQ5edJgUrAZwXf57qzSPLOUw5BGon4%2Fm90FkbGv%2FDa54lDbGY4xkyTW9eB%2F%2BIefycHIP7Sph0bszm9eAtL9NgrzQ4KBsOdPtDnELpJlbVonl%2BfTVZ%2Bg%2F1n%2FRvcyDOHgUDK5UXMX6H%2BFAO3JNXuXdNCdcSnAx%2B46J9%2BXeO4jD2t%2BQLM7IIuRA8Jotc9mXwpQ6UPvoVRuouQAwyBApGNkElzvPqXYwoQ0fwZ5llXxxGm4%7Ctkp%3ABFBMxO--2Itj",
      },
      imagen: "disipador.jpg",
  },
};

const buildParaUsoBasico = {
  placas: {
    marca: "Gigabyte",
      nombre: "Gigabyte H610M",
      socket: "LGA1700",
      tipoRam: "DDR5",
      gama: "Baja",
      numeroM2: 0,
      numeroSata: 2,
      precio: {
          segundaMano: 70.00,
          amazon: 86.98,
          ebay: 89.50,
      },
      link: {
          amazon: "https://www.amazon.es/Gigabyte-H610M-V2-DDR4-Z%C3%B3calo/dp/B0C3XJPGM6/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3PGGP4N21TY5V&keywords=Gigabyte+H610M&qid=1702369528&sprefix=gigabyte+h610m%2Caps%2C87&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/175743088939?hash=item28eb1ab92b%3Ag%3A0y0AAOSwotVkbjoZ&amdata=enc%3AAQAIAAAAwDZIFouCc%2BNU8UXWEO%2FRaM660h51v4Gq%2FlIRg22%2B72lSNGCTlijEBn1gSPJVDcu4resG6GkS0x3RGXLMF1RQfoHIuZTavY7GHuoEmJVaRvJH01XlwuoLkGtJ%2BUKelAxmngwB5VTItCumLz94FbPWmQDtgKHKA7Tm65BgzzYA2IVHLF%2BJYw8TCZk8fBfOS%2Fz1vEn11BWC%2BWl1uZP%2Buohc%2B9ok7E0IuT1V9iO%2B0uukRU4qrPsTs2qKmR4hNwCEbPatWw%3D%3D%7Ctkp%3ABk9SR8zNj9KLYw&LH_ItemCondition=3",
      },
      imagen: "placa.jpg"
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i3-13100",
    gama: "Baja",
    socket: "LGA1700",
    consumo: 110,
    tipoRam: "DDR5",
    ventilador: true,
    gpu: true,
    precio: {
        amazon: 121.40,
        ebay: 157.30,
    },
    link: {
        amazon: "https://www.amazon.es/Intel%C2%AE-i3-13100-Desktop-Processor-P-Cores/dp/B0BN5Z8MDR/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=S9AQUG2XFG5W&keywords=i3+13100&qid=1701166184&sprefix=i3+13100%2Caps%2C93&sr=8-1&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
        ebay: "https://www.ebay.es/itm/134789390914?hash=item1f6212e242:g:eWsAAOSwms5lQsmU&amdata=enc%3AAQAIAAAA4IHuZx1SYk0X0TAk6400bFRWTx3lomBfJ5KJaMvC4BtB%2BJP7bsyyZWkWKC3ymVW3GBhfg0EJcQtywriNMWP6HtYxkE5IAkbAcGCPzSRLQOkvgXXl6t07Ibrx6eCjqRI9mtjMzngs69UpEsQc0csDMtY57GPX1GiMBoNEm3OofXQwCRy5PikZ%2FTLx%2F%2BEkBKjJhT16hhsT%2FWO%2F7VP%2Bn1w1P9qqyi7ymFs3IknXUA6uqtHbIHiIbhyBDAI54isZgQIp7Xk4zkHA7Z46vVH0sNj%2F7%2BDceVRXse%2F3sR0iWzoBiTa2%7Ctkp%3ABFBM_pfE1oJj",
    },
    imagen: "intel.jpg",
  },
  ram: {
    mmarca: "Crucial",
    nombre: "Crucial DDR5 4800MHz PC5-38400 8GB CL40",
    tipo: "DDR5",
    capacidad: 8,
    gama: "Baja",
    precio: {
        amazon: 27.99,
        ebay: 35.73,
    },
    link: {
        amazon: "https://www.amazon.es/Crucial-CT8G48C40U5-4800MHz-Memoria-Escritorio/dp/B09HWFZZM4/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2QN1K408CTJ9M&keywords=Crucial+DDR5+4800MHz+PC5-38400+8GB+CL40&qid=1702369011&sprefix=crucial+ddr5+4800mhz+pc5-38400+8gb+cl40%2Caps%2C174&sr=8-1",
        ebay: "https://www.ebay.es/itm/185279005639?hash=item2b237d43c7:g:m5MAAOSwKQNh-mfD&amdata=enc%3AAQAIAAABANYi097FzvdFeZFwUKAGwhRsHb%2BkC77y13zYStq1Nme2op5OXJyKDANFOD%2Fd1c2Nf%2FbuHzE%2FiISuLGMhEyVbtNVNRzp5L4UcP9H%2FpXxSTQxCZFMUh3Jl%2FSEJ2LWuVR1QcXSzqc4kW4Rrqi2BvSl7lGvSjCXTZuGA4QM%2BCjtyk0yqek%2F9LNp0Y4fZAcOk3Ogidp%2FjNqOQVoWPGFKfMZrLSDIPV3NEd%2Fek9KeWFeO4AmE8mLZWIQp5sh%2FUQMDO0eDUw5h7aFYtTKW3Y4XtFjlriw%2Bq9ld9HRh%2FR7Zb%2B%2BAv45gM7WbgXTdIS15aEm2%2Bixx37MUKSufxTDkh43OF6Jxn1Lw%3D%7Ctkp%3ABk9SR8yAztGLYw",
    },
    imagen: "ram.jpg"
  },
  sata: [
    {
      marca: "WD",
      nombre: "WD Blue 1TB 3.5 SATA3",
      capacidad: 1,
      tecnologia: "Sata",
      gama: "Baja",
      precio: {
          segundaMano: 30.00,
          amazon: 33.90,
          ebay: 49.90,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-WD10EZEX-1000-GB-Interna/dp/B0711YN12S/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3CMMXNXGC4YLT&keywords=WD+Blue+1TB+3.5%22+SATA3&qid=1702372448&sprefix=wd+blue+1tb+3.5%22+sata3%2Caps%2C179&sr=8-1",
          ebay: "https://www.ebay.es/itm/122487163758?hash=item1c84cdcb6e:g:MRcAAOSwxu5ZEfgL&amdata=enc%3AAQAIAAAA8F3KGBZIzCAoTgEe78svkhvw9EZ4hAECmlyOUYc9nDcjPbFB67MHn%2FIyiA3sLZoDgpBBdPPF1z2H8erpJsa9n7TmgagGMjgk05zteas%2F1me7RPzjF2ysxSkv2VJj8JKf283vKM9NlQWSyAz%2F3xasrzQX3n1TYTGJsOhvx4xPqItOOoFx8KE6M1wKv%2FN5u8PNRQLsmE783aKDLpL5F5jzj%2FrbdXL4%2BUicN8wVWn1Ga45Najf1%2BKe84LPesitRBqgrzxL5Qj97PmWbe0NywsuO%2FyQwrijlXQYPqMqLBS9Ljot4Je7TZzpEBn%2Ft9xPFPckwWQ%3D%3D%7Ctkp%3ABk9SR-yc8dSLYw",
      },
      imagen: "hdd.jpg"
    },
    {
      marca: "WD",
      nombre: "WD Blue 1TB 3.5 SATA3",
      capacidad: 1,
      tecnologia: "Sata",
      gama: "Baja",
      precio: {
          segundaMano: 30.00,
          amazon: 33.90,
          ebay: 49.90,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-WD10EZEX-1000-GB-Interna/dp/B0711YN12S/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3CMMXNXGC4YLT&keywords=WD+Blue+1TB+3.5%22+SATA3&qid=1702372448&sprefix=wd+blue+1tb+3.5%22+sata3%2Caps%2C179&sr=8-1",
          ebay: "https://www.ebay.es/itm/122487163758?hash=item1c84cdcb6e:g:MRcAAOSwxu5ZEfgL&amdata=enc%3AAQAIAAAA8F3KGBZIzCAoTgEe78svkhvw9EZ4hAECmlyOUYc9nDcjPbFB67MHn%2FIyiA3sLZoDgpBBdPPF1z2H8erpJsa9n7TmgagGMjgk05zteas%2F1me7RPzjF2ysxSkv2VJj8JKf283vKM9NlQWSyAz%2F3xasrzQX3n1TYTGJsOhvx4xPqItOOoFx8KE6M1wKv%2FN5u8PNRQLsmE783aKDLpL5F5jzj%2FrbdXL4%2BUicN8wVWn1Ga45Najf1%2BKe84LPesitRBqgrzxL5Qj97PmWbe0NywsuO%2FyQwrijlXQYPqMqLBS9Ljot4Je7TZzpEBn%2Ft9xPFPckwWQ%3D%3D%7Ctkp%3ABk9SR-yc8dSLYw",
      },
      imagen: "hdd.jpg"
    },
  ],
  fuente: {
    marca: "L-Link",
      nombre: "L-Link Fuente de Alimentación ATX 500W",
      potencia: 500,
      gama: "Baja",
      precio: {
          amazon: 18.49,
          ebay: 15.95,
      },
      link: {
          amazon: "https://www.amazon.es/L-Link-LL-PS-500-CAB-Fuente-alimentaci%C3%B3n-Blanco/dp/B0758GLF4G/ref=sr_1_4_mod_primary_new?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3PHD73RN0RP6C&keywords=L-Link+Fuente+de+Alimentaci%C3%B3n+ATX+500W&qid=1702378260&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=l-link+fuente+de+alimentaci%C3%B3n+atx+500w%2Caps%2C80&sr=8-4",
          ebay: "https://www.ebay.es/itm/304934689716?hash=item46ff861bb4:g:GKYAAOSwfvVkXg0G&amdata=enc%3AAQAIAAAA4FPZXA%2FDjkCHgitmwFpaai2cVAMxSWIlhD8hVSZHu6wi4T%2BrHyCklwPC1OLp%2F0qt7187IdEMNEO5QSYZCFrehelRZjixpLCmujRVKaUEtRxleoFUqyLusTz8NnBRIRU4MUEtCAt56yymTWlPRzN34H6jp2oXnaiedNdTnXYXKeYuxG%2BwNKAw3kPORRwQOAtWRkpSljRXIQMmQgKV8%2FDJbdzvvDVvWmcLNb5hAJ1SXLDRpcaZbzRAjbWz2tAQLYL9ZO6vWAN5FFf9Yw9VSuAd42rkhNU5GwUIwpMzR4f6yzT4%7Ctkp%3ABk9SR_b7t9qLYw",
      },
      imagen: "fuente.jpg",
  },
  monitor: {
    marca: "AOC",
      nombre: "AOC 24B2XH 23.8 LED IPS FullHD 75Hz",
      gama: "Baja",
      precio: {
          segundaMano: 50.00,
          amazon: 79.90,
          ebay: 144.37,
      },
      link: {
          amazon: "https://www.amazon.es/AOC-24B2XH-Pulgadas-1920x1080-Flickerfree/dp/B0845VVRQ1/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20VHY00RDJQW4&keywords=AOC+24B2XH+23.8%22+LED+IPS+FullHD+75Hz&qid=1702374872&sprefix=aoc+24b2xh+23.8%22+led+ips+fullhd+75hz%2Caps%2C98&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.0fd54328-1d46-4534-bd0f-16141b40bb5b&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/134517595831?hash=item1f51df9eb7:g:1asAAOSwLdtkKuIP&amdata=enc%3AAQAIAAAA8JHU0BscxReYXRGiJwcWuNcQesnmwgPq%2BOHGE%2BCQn615smyQi8KPVDTJTAapsleJkPqE4KUJSB%2B7CjFeK1d%2FIXDXK3dRvoE7IcgUND6ZjhhGRLA5PLIh5SSp2uCagvRMYHQGVFQjzDIo3cqYlxLgAHp1OSPxOLTmM6Sb885WQvgFP3JUcmnz556PEPIm9tqGV%2BPiaI7tzTBc%2FbJWbpc9q1lR7lU%2FD0rF8z%2Fo7AqaAV7Okp6veL3GMAkMA%2FY8119jTkoZU%2FNboGXL0m549pHSJ4M4JKyhZbxTmB48qrlDfgw6KspmCnkvFwADjrM7du7LlQ%3D%3D%7Ctkp%3ABFBM_LmZ14tj",
      },
      imagen: "monitor.jpg",
  },
  caja: {
    marca: "Cooler Master",
      nombre: "Cooler Master MasterBox MB600L V2",
      gama: "Baja",
      precio: { 
          amazon: 81.02,
          ebay: 106.99,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-MasterBox-MB600L-Minimalista/dp/B08XQJCBCJ/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1365JFE4VZWJJ&keywords=Cooler+Master+MasterBox+MB600L+V2+ODD+USB+3.2&qid=1702377235&sprefix=cooler+master+masterbox+mb600l+v2+odd+usb+3.2%2Caps%2C142&sr=8-1",
          ebay: "https://www.ebay.es/itm/385691635765?hash=item59cd035035:g:IqEAAOSwa99ki8ut&amdata=enc%3AAQAIAAABABX%2ByfkY1FAs43%2BJLrt0LHajtXVY9quYAGncy%2FVEUF4n2Wm3NmSz4AmR6hpeSvC428b431%2BgClv7RXAYNbZmGSz%2B8%2BbPSt%2BpZftAFzZpQ18hqEXK9KU1h7pvk2jFb0m0%2F2gf98v0icVOzTpJvtuGnk56%2FMmc7lpQG%2FjlYO4SdQ3dG%2FguzrgySi%2BgAqznx3Jb3U5HZaI9tYACLC7baV3zJdR4Y4KJbZWuentRbJxt9Fv0svEYXBnlM5YCWf8CHzDHSBCF%2F800r1CafasRNgnKbQdaOhUpYScZyjshUhflFR5eH0ZqlN065Vz5b3jMk7vWs4pNz72Prur6F%2FwKD9kPANs%3D%7Ctkp%3ABk9SR5r8udmLYw",
      },
      imagen: "caja.jpg",
  },
};

const buildParaUsoBasico2 = {
  placas: {
    marca: "MSI",
      nombre: "MSI PRO A620M-E DDR4",
      socket: "AM5",
      tipoRam: "DDR4",
      gama: "Baja",
      numeroM2: 0,
      numeroSata: 2,
      precio: {  
          amazon: 88.65,
          ebay: 78.82,
      },
      link: {
          amazon: "https://www.amazon.es/MSI-Pro-A620M-Micro-ATX-procesadores/dp/B0BZW9RG3P/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=IOPKNMUKIX8R&keywords=MSI+PRO+A620M-E&qid=1702371189&sprefix=msi+pro+a620m-e%2Caps%2C189&sr=8-2&ufe=app_do%3Aamzn1.fos.7911a93e-3532-4810-a632-e84fe123af2b",
          ebay: "https://www.ebay.es/itm/195963813384?hash=item2da05a7e08:g:JVQAAOSwn8lk88th&amdata=enc%3AAQAIAAAA4PLBl4KyIux8OS3lpGx%2B11YL10ECjPXCpTxBKWnPwO7EoDzA5UQZISDN5GVA9RgzyATzKdlFC3jq0c70vYL9tu7GENNLlXrffXCtlV%2F3pnVxOZAulWT2N%2FkfWDE3UOODGl9as%2FVDwF4M0kbZXTDoA01Xjc%2BEUB6xwcFpsvjRJQQ8RhBI0jXXxb%2B3GBl20bPKPIYdZdUz54t63freGg9NL4OJMtH9SewuUAQNWrSO0xrONCi9hWfz0qqQkFk5mwk5IsljjHSV0XdWB2EGrgfqvXFrFtN0GMUrAzbEYytDfNLR%7Ctkp%3ABFBMktzX04tj",
      },
      imagen: "placa.jpg"
  },
  cpu: {
    marca: "AMD",
    nombre: "AMD Ryzen 5 5600X",
    gama: "Baja",
    socket: "AM5",
    consumo: 65,
    tipoRam: "DDR4",
    ventilador: true,
    gpu: false,
    precio: {
        segundaMano: 100.00,
        amazon: 141.72,
        ebay: 163.34,
    },
    link: {
        amazon: "https://www.amazon.es/AMD-Ryzen-5600-Box-Negro/dp/B09VCHR1VH/ref=sr_1_1_mod_primary_new?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=PQ3BURFYN30&keywords=AMD+Ryzen+5+5600X&qid=1701168760&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=amd+ryzen+5+5600x%2Caps%2C158&sr=8-1",
        ebay: "https://www.ebay.es/itm/133769938956?hash=item1f254f480c:g:etsAAOSwthxgq3iU&amdata=enc%3AAQAIAAAA4HtXup0Pixdty9z9OsdNYYpB0v1audtMtv%2FDOpGktnBuNQhj6tDZQuok5q6uY%2B6lPH8eCWYx7j5FQwOjaMobrjujS2bNUYm3QmsKIEWhiFsDfZHkbr0e4JEROuOnQHUKZLXC92f4eZR8lBgwRsWcVtFh%2BTi3tq3J%2FOlkFspnYb3s9SoByQq1BhhXse8FZT8iM2YUhc7SOgZfspqzy%2F0x3e6zr1LO0K7o1sJAcHMbbsexkEdVlDa1xdfz8vuSSHlXwLEeH0hjv2y7C%2B0LWFK9dVRLYuxDnVLlVKGizQZ9TwmF%7Ctkp%3ABk9SR_Lg_diCYw",
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Kingstone",
      nombre: "Kingston FURY Beast DDR4 3200 MHz 8GB CL16",
      tipo: "DDR4",
      capacidad: 8,
      gama: "Baja",
      precio: {
          segundaMano: 20.00,
          amazon: 25.50,
          ebay: 30.00,
      },
      link: {
          amazon: "https://www.amazon.es/Kingston-3200MHz-Ordenadores-sobremesa-KF432C16BB/dp/B097K5J1SB/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=18JVZ4A8SFJV8&keywords=Kingston%2BFURY%2BBeast%2BDDR4%2B3200%2BMHz%2B8GB%2BCL16&qid=1702366631&sprefix=kingston%2Bfury%2Bbeast%2Bddr4%2B3200%2Bmhz%2B8gb%2Bcl16%2Caps%2C198&sr=8-1&th=1",
          ebay: "https://www.ebay.es/itm/256012272679?hash=item3b9b854427%3Ag%3ALD0AAOSwRcRkEym5&amdata=enc%3AAQAIAAABAKV4F2VbwqGx0HhJEQ2XLEaHIAFshAYvtF1UX%2FbD987h2EJgd3ja3htwJulPKnWLaOklnPjPTeDwqJZImvPpUcGlXyQgW0lKZgDR3cRy0%2FJdFj6%2Bk6OartYwL7%2BeHOWWb8d%2BTh3iCkG9NYE74lXRpgHPZ7%2FtwDVdrpM3G7UaTIe6u%2FksdOZxLlpjxlK9AS39%2BYnlqsN7493vg5dOpfB31kyQcoxYdg8WJ9q5A9bGDIA%2BfxppWzRnQov%2Bgy9A8UHfcCiafOu3pNEXgQS1wVt9rOXb%2Fk0s42l9p1N%2BbMRNAmC%2BejIFykOd2qZkVJoLiFCQAO6d6YEDXyWEm8VtBV%2BTsGw%3D%7Ctkp%3ABk9SR-borM-LYw&LH_ItemCondition=3",
      },
      imagen: "ram.jpg"
  },
  sata: [
    {
      marca: "WD",
      nombre: "WD Blue 1TB 3.5 SATA3",
      capacidad: 1,
      tecnologia: "Sata",
      gama: "Baja",
      precio: {
          segundaMano: 30.00,
          amazon: 33.90,
          ebay: 49.90,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-WD10EZEX-1000-GB-Interna/dp/B0711YN12S/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3CMMXNXGC4YLT&keywords=WD+Blue+1TB+3.5%22+SATA3&qid=1702372448&sprefix=wd+blue+1tb+3.5%22+sata3%2Caps%2C179&sr=8-1",
          ebay: "https://www.ebay.es/itm/122487163758?hash=item1c84cdcb6e:g:MRcAAOSwxu5ZEfgL&amdata=enc%3AAQAIAAAA8F3KGBZIzCAoTgEe78svkhvw9EZ4hAECmlyOUYc9nDcjPbFB67MHn%2FIyiA3sLZoDgpBBdPPF1z2H8erpJsa9n7TmgagGMjgk05zteas%2F1me7RPzjF2ysxSkv2VJj8JKf283vKM9NlQWSyAz%2F3xasrzQX3n1TYTGJsOhvx4xPqItOOoFx8KE6M1wKv%2FN5u8PNRQLsmE783aKDLpL5F5jzj%2FrbdXL4%2BUicN8wVWn1Ga45Najf1%2BKe84LPesitRBqgrzxL5Qj97PmWbe0NywsuO%2FyQwrijlXQYPqMqLBS9Ljot4Je7TZzpEBn%2Ft9xPFPckwWQ%3D%3D%7Ctkp%3ABk9SR-yc8dSLYw",
      },
      imagen: "hdd.jpg"
    },
    {
      marca: "WD",
      nombre: "WD Blue 1TB 3.5 SATA3",
      capacidad: 1,
      tecnologia: "Sata",
      gama: "Baja",
      precio: {
          segundaMano: 30.00,
          amazon: 33.90,
          ebay: 49.90,
      },
      link: {
          amazon: "https://www.amazon.es/Western-Digital-WD10EZEX-1000-GB-Interna/dp/B0711YN12S/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3CMMXNXGC4YLT&keywords=WD+Blue+1TB+3.5%22+SATA3&qid=1702372448&sprefix=wd+blue+1tb+3.5%22+sata3%2Caps%2C179&sr=8-1",
          ebay: "https://www.ebay.es/itm/122487163758?hash=item1c84cdcb6e:g:MRcAAOSwxu5ZEfgL&amdata=enc%3AAQAIAAAA8F3KGBZIzCAoTgEe78svkhvw9EZ4hAECmlyOUYc9nDcjPbFB67MHn%2FIyiA3sLZoDgpBBdPPF1z2H8erpJsa9n7TmgagGMjgk05zteas%2F1me7RPzjF2ysxSkv2VJj8JKf283vKM9NlQWSyAz%2F3xasrzQX3n1TYTGJsOhvx4xPqItOOoFx8KE6M1wKv%2FN5u8PNRQLsmE783aKDLpL5F5jzj%2FrbdXL4%2BUicN8wVWn1Ga45Najf1%2BKe84LPesitRBqgrzxL5Qj97PmWbe0NywsuO%2FyQwrijlXQYPqMqLBS9Ljot4Je7TZzpEBn%2Ft9xPFPckwWQ%3D%3D%7Ctkp%3ABk9SR-yc8dSLYw",
      },
      imagen: "hdd.jpg"
    },
  ],
  fuente: {
    marca: "L-Link",
      nombre: "L-Link Fuente de Alimentación ATX 500W",
      potencia: 500,
      gama: "Baja",
      precio: {
          amazon: 18.49,
          ebay: 15.95,
      },
      link: {
          amazon: "https://www.amazon.es/L-Link-LL-PS-500-CAB-Fuente-alimentaci%C3%B3n-Blanco/dp/B0758GLF4G/ref=sr_1_4_mod_primary_new?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3PHD73RN0RP6C&keywords=L-Link+Fuente+de+Alimentaci%C3%B3n+ATX+500W&qid=1702378260&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=l-link+fuente+de+alimentaci%C3%B3n+atx+500w%2Caps%2C80&sr=8-4",
          ebay: "https://www.ebay.es/itm/304934689716?hash=item46ff861bb4:g:GKYAAOSwfvVkXg0G&amdata=enc%3AAQAIAAAA4FPZXA%2FDjkCHgitmwFpaai2cVAMxSWIlhD8hVSZHu6wi4T%2BrHyCklwPC1OLp%2F0qt7187IdEMNEO5QSYZCFrehelRZjixpLCmujRVKaUEtRxleoFUqyLusTz8NnBRIRU4MUEtCAt56yymTWlPRzN34H6jp2oXnaiedNdTnXYXKeYuxG%2BwNKAw3kPORRwQOAtWRkpSljRXIQMmQgKV8%2FDJbdzvvDVvWmcLNb5hAJ1SXLDRpcaZbzRAjbWz2tAQLYL9ZO6vWAN5FFf9Yw9VSuAd42rkhNU5GwUIwpMzR4f6yzT4%7Ctkp%3ABk9SR_b7t9qLYw",
      },
      imagen: "fuente.jpg",
  },
  monitor: {
    marca: "AOC",
      nombre: "AOC 24B2XH 23.8 LED IPS FullHD 75Hz",
      gama: "Baja",
      precio: {
          segundaMano: 50.00,
          amazon: 79.90,
          ebay: 144.37,
      },
      link: {
          amazon: "https://www.amazon.es/AOC-24B2XH-Pulgadas-1920x1080-Flickerfree/dp/B0845VVRQ1/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20VHY00RDJQW4&keywords=AOC+24B2XH+23.8%22+LED+IPS+FullHD+75Hz&qid=1702374872&sprefix=aoc+24b2xh+23.8%22+led+ips+fullhd+75hz%2Caps%2C98&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.0fd54328-1d46-4534-bd0f-16141b40bb5b&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          ebay: "https://www.ebay.es/itm/134517595831?hash=item1f51df9eb7:g:1asAAOSwLdtkKuIP&amdata=enc%3AAQAIAAAA8JHU0BscxReYXRGiJwcWuNcQesnmwgPq%2BOHGE%2BCQn615smyQi8KPVDTJTAapsleJkPqE4KUJSB%2B7CjFeK1d%2FIXDXK3dRvoE7IcgUND6ZjhhGRLA5PLIh5SSp2uCagvRMYHQGVFQjzDIo3cqYlxLgAHp1OSPxOLTmM6Sb885WQvgFP3JUcmnz556PEPIm9tqGV%2BPiaI7tzTBc%2FbJWbpc9q1lR7lU%2FD0rF8z%2Fo7AqaAV7Okp6veL3GMAkMA%2FY8119jTkoZU%2FNboGXL0m549pHSJ4M4JKyhZbxTmB48qrlDfgw6KspmCnkvFwADjrM7du7LlQ%3D%3D%7Ctkp%3ABFBM_LmZ14tj",
      },
      imagen: "monitor.jpg",
  },
  caja: {
    marca: "Cooler Master",
      nombre: "Cooler Master MasterBox MB600L V2",
      gama: "Baja",
      precio: {
          amazon: 81.02,
          ebay: 106.99,
      },
      link: {
          amazon: "https://www.amazon.es/Cooler-Master-MasterBox-MB600L-Minimalista/dp/B08XQJCBCJ/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1365JFE4VZWJJ&keywords=Cooler+Master+MasterBox+MB600L+V2+ODD+USB+3.2&qid=1702377235&sprefix=cooler+master+masterbox+mb600l+v2+odd+usb+3.2%2Caps%2C142&sr=8-1",
          ebay: "https://www.ebay.es/itm/385691635765?hash=item59cd035035:g:IqEAAOSwa99ki8ut&amdata=enc%3AAQAIAAABABX%2ByfkY1FAs43%2BJLrt0LHajtXVY9quYAGncy%2FVEUF4n2Wm3NmSz4AmR6hpeSvC428b431%2BgClv7RXAYNbZmGSz%2B8%2BbPSt%2BpZftAFzZpQ18hqEXK9KU1h7pvk2jFb0m0%2F2gf98v0icVOzTpJvtuGnk56%2FMmc7lpQG%2FjlYO4SdQ3dG%2FguzrgySi%2BgAqznx3Jb3U5HZaI9tYACLC7baV3zJdR4Y4KJbZWuentRbJxt9Fv0svEYXBnlM5YCWf8CHzDHSBCF%2F800r1CafasRNgnKbQdaOhUpYScZyjshUhflFR5eH0ZqlN065Vz5b3jMk7vWs4pNz72Prur6F%2FwKD9kPANs%3D%7Ctkp%3ABk9SR5r8udmLYw",
      },
      imagen: "caja.jpg",
  },
};

const buildsGamaBaja = [
  buildGamaBaja,
  buildGamaBaja2,
];
const buildsGamaMedia = [
  buildGamaMedia,
  buildGamaMedia2,
];
const buildsGamaAlta = [
  buildGamaAlta,
  buildGamaAlta2,
];

const buildsParaGamers = [
  buildParaGamers,
  buildParaGamers2,
];
const buildsParaProfesionales = [
  buildParaProfesionales,
  buildParaProfesionales2,

];
const buildsParaEstudiantes = [
  buildParaEstudiantes,
  buildParaEstudiantes2,
];
const buildsParaUsoBasico = [
  buildParaUsoBasico,
  buildParaUsoBasico2,
]

module.exports = {
  buildsGamaBaja,
  buildsGamaMedia,
  buildsGamaAlta,
  buildsParaGamers,
  buildsParaProfesionales,
  buildsParaEstudiantes,
  buildsParaUsoBasico,
  emptyConfiguration,
  configuration,
  cpuList,
  placasList,
  ramList,
  cajaList,
  gpuList,
  disipadorList,
  discoList,
  monitorList,
  fuenteList,
  ratonList,
  tecladoList,
};
