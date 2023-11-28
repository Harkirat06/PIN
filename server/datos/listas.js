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
];

const placasList = [
  {
    marca: "Asus",
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    tipoRam: "DDR5",
    gama: "Alta",
    numeroM2: 2,
    numeroSata: 2,
    precio: {
      amazon: 150,
      ebay: 200,
    },
    imagen: "placa.jpg",
    link: {
      amazon: "https://www.amazon.es",
      ebay: "https://www.ebay.es",
    },
  },
  {
    marca: "Asus",
    nombre: "ASUS PRIME Z790-V",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    tipoRam: "DDR5",
    gama: "Alta",
    numeroM2: 2,
    numeroSata: 2,
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
  {
    marca: "Asus",
    nombre: "ASUS TUF GAMING Z790 PLUS WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    tipoRam: "DDR5",
    gama: "Media",
    numeroM2: 1,
    numeroSata: 2,
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
  {
    marca: "MSI",
    nombre: "MSI MAG Z790 TOMAHAWK WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1200",
    tipoRam: "DDR5",
    gama: "Baja",
    numeroM2: 1,
    numeroSata: 2,
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
];

const gpuList = [
  {
    marca: "MSI",
    nombre: "MSI GeForce RTX 3060 VENTUS 2X OC LHR 12GB GDDR6",
    consumo: 170,
    potenciaRecomendada: 550,
    gama: "Media",
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
  {
    marca: "AMD",
    nombre: "Sapphire Pulse AMD Radeon RX 6700 XT 12GB GDDR6",
    consumo: 230,
    potenciaRecomendada: 650,
    gama: "Media",
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
  {
    marca: "Gigabyte",
    nombre: "Gigabyte GeForce RTX 4070 Windforce OC 12 GB GDDR6X DLSS3",
    consumo: null,
    potenciaRecomendada: 750,
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
];

const ramList = [
  {
    marca: "Corsair",
    nombre: "Corsair Vengeance LPX DDR4 3200MHz PC4-25600 32GB 2x16GB CL16",
    tipo: "DDR4",
    capacidad: 32, //gb
    gama: "Alta",
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
  {
    marca: "Kingston",
    nombre: "Kingston FURY Beast DDR4 3200 MHz 16GB 2x8GB CL16",
    tipo: "DDR4",
    capacidad: 16,
    gama: "BajaMedia",
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
  {
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
  {
    marca: "Corsair",
    nombre:
      "Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra",
    tipo: "DDR5",
    capacidad: 32,
    gama: "Premium",
    precio: {
      segundaMano: 100,
      amazon: 200,
      ebay: 200,
    },
    imagen: "ram.jpg",
    link: {
      amazon: "https://www.amazon.es",
      ebay: "https://www.ebay.es",
    },
  },
];

const discoList = [
  {
    marca: "Samsung",
    nombre: "Samsung 870 QVO SSD 1TB SATA3",
    capacidad: 1, //tb
    tecnologia: "Sata",
    gama: "Alta",
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
    marca: "Seagate",
    nombre: "Seagate BarraCuda 3.5 2TB SATA 3",
    capacidad: 2,
    tecnologia: "Sata",
    gama: "Alta",
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
];

const monitorList = [
  {
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
  {
    marca: "AOC",
    nombre: "AOC 24B2XHM2 23.8 LED FullHD",
    gama: "Baja",
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
  {
    marca: "LG",
    nombre: "LG 27GR95QE-B 26.5 OLED QHD 240Hz G-Sync/FreeSync Premium",
    gama: "Premium",
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
];

const disipadorList = [
  {
    marca: "Tempest",
    nombre: "Tempest Cooler 4Pipes 120mm Ventilador CPU Negro",
    tipo: "Ventilador",
    gama: "Baja",
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
  {
    marca: "Forgeon",
    nombre: "Forgeon Cooler 4Pipes 120mm Ventilador CPU Negro",
    tipo: "Ventilador",
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
  {
    marca: "Forgeon",
    nombre: "Forgeon Cooler 4Pipes 120mm Ventilador CPU Negro",
    tipo: "Ventilador",
    gama: "Alta",
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
];

const cajaList = [
  {
    marca: "Forgeon",
    nombre: "Forgeon Mithril ARGB Mesh Torre ATX Negra",
    gama: "Media",
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
  {
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
  {
    marca: "Nox",
    nombre: "Nox Hummer Void USB 3.0 Negro",
    gama: "Baja",
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
];

const fuenteList = [
  {
    marca: "Tempest",
    nombre: "Tempest PSU PRO 650W 80+ Bronze Fuente de Alimentación",
    potencia: "650", //W
    ochetaplus: true,
    gama: "Media",
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
  {
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
  {
    marca: "Tempest",
    nombre: "Tempest PSU PRO 650W 80+ Bronze Fuente de Alimentación",
    potencia: "750",
    ochetaplus: false,
    gama: "Baja",
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
];

const ratonList = [
  {
    marca: "Tempest",
    nombre: "Tempest X8 Keeper RGB Ratón Gaming 10.000 DPI Negro",
    gama: "Media",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "raton.jpg",
    link: {
      amazon: "https://www.amazon.es",
      ebay: "https://www.ebay.es",
    },
  },
  {
    marca: "Forgeon",
    nombre: "Forgeon Vendetta Ratón Gaming RGB 16000DPI Negro",
    gama: "Baja",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "raton.jpg",
    link: {
      amazon: "https://www.amazon.es",
      ebay: "https://www.ebay.es",
    },
  },
  {
    marca: "Newskill",
    nombre: "Newskill Eos Ivory Ratón Gaming Professional RGB 16000DPI Blanco",
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "raton.jpg",
    link: {
      amazon: "https://www.amazon.es",
      ebay: "https://www.ebay.es",
    },
  },
];

const tecladoList = [
  {
    marca: "Tempest",
    nombre: "Tempest Cataclysm Combo 3 en 1 Gaming Teclado",
    gama: "Media",
    mecanico: false,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "teclado.jpg",
    link: {
      amazon: "https://www.amazon.es",
      ebay: "https://www.ebay.es",
    },
  },
  {
    marca: "Forgeon",
    nombre: "Forgeon Clutch Teclado Gaming RGB 60% Switch Blue",
    gama: "Baja",
    mecanico: true,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "teclado.jpg",
    link: {
      amazon: "https://www.amazon.es",
      ebay: "https://www.ebay.es",
    },
  },
  {
    marca: "Newskill",
    nombre: "Newskill Suiko Teclado Mecánico Gaming Full RGB Switch Kailh Blue",
    gama: "Alta",
    mecanico: true,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "teclado.jpg",
    link: {
      amazon: "https://www.amazon.es",
      ebay: "https://www.ebay.es",
    },
  },
];

const buildGamaBaja = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Baja",
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Baja",
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
    gama: "Baja",
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
      gama: "Baja",
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
      gama: "Baja",
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
    gama: "Baja",
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
    gama: "Baja",
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
    gama: "BajaMedia",
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
    gama: "Baja",
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
    gama: "Baja",
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

const buildGamaBaja1 = {
  placas: {
    nombre: "ASUS PRIME Z790-P",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Baja",
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Baja",
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
    gama: "Baja",
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
      gama: "Baja",
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
      gama: "Baja",
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
    gama: "Baja",
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
    gama: "Baja",
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
    gama: "BajaMedia",
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
    gama: "Baja",
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
    gama: "Baja",
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

const buildGamaBaja2 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Baja",
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Baja",
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
    gama: "Baja",
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
      gama: "Baja",
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
      gama: "Baja",
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
      gama: "Baja",
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
      imagen: "hdd.jpg",
      link: {
        amazon: "https://www.amazon.es",
        ebay: "https://www.ebay.es",
      },
    },
  ],
  gpu: {
    marca: "Gigabyte",
    nombre: "Gigabyte GeForce RTX 4070 Windforce OC 12 GB GDDR6X DLSS3",
    gama: "Baja",
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
    gama: "Baja",
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
    gama: "BajaMedia",
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
    gama: "Baja",
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
    gama: "Baja",
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

const buildGamaBaja3 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Baja",
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Baja",
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
    gama: "Baja",
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
      gama: "Baja",
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
      gama: "Baja",
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
    gama: "Baja",
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
    gama: "Baja",
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
    gama: "BajaMedia",
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
    gama: "Baja",
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
    gama: "Baja",
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

const buildGamaMedia = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Media",
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
    consumo: 253,
    tipoRam: "DDR4",
    ventilador: false,
    gpu: true,
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
      gama: "Media",
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
      gama: "Media",
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
      imagen: "ssd.jpg",
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
    gama: "Media",
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
    gama: "MediaAlta",
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
    gama: "Media",
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
    gama: "MediaAlta",
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

const buildGamaMedia1 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Media",
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
    consumo: 253,
    tipoRam: "DDR4",
    ventilador: false,
    gpu: true,
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
      gama: "Media",
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
      gama: "Media",
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
    gama: "Media",
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
    gama: "MediaAlta",
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
    gama: "Media",
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
    gama: "MediaAlta",
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

const buildGamaMedia2 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Media",
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
    consumo: 253,
    tipoRam: "DDR4",
    ventilador: false,
    gpu: true,
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
      gama: "Media",
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
      gama: "Media",
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
    gama: "Media",
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
    gama: "MediaAlta",
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
    gama: "Media",
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
    gama: "MediaAlta",
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

const buildGamaMedia3 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Media",
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
    consumo: 253,
    tipoRam: "DDR4",
    ventilador: false,
    gpu: true,
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
      gama: "Media",
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
      gama: "Media",
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
      imagen: "ssd.jpg",
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
      gama: "Media",
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
    gama: "Media",
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
    gama: "MediaAlta",
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
    gama: "Media",
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
    gama: "MediaAlta",
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

const buildGamaAlta = {
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
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
    gama: "Alta",
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
      gama: "Alta",
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
    {
      marca: "Seagate",
      nombre: "Seagate BarraCuda 3.5 2TB SATA 3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: "Alta",
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
    marca: "AMD",
    nombre: "Sapphire Pulse AMD Radeon RX 6700 XT 12GB GDDR6",
    consumo: 230,
    potenciaRecomendada: 650,
    gama: "Media",
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
    gama: "Alta",
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
    gama: "Alta",
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

const buildGamaAlta1 = {
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
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
    gama: "Alta",
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
      gama: "Alta",
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
      gama: "Alta",
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
    marca: "AMD",
    nombre: "Sapphire Pulse AMD Radeon RX 6700 XT 12GB GDDR6",
    consumo: 230,
    potenciaRecomendada: 650,
    gama: "Media",
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
    gama: "Alta",
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
    gama: "Alta",
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

const buildGamaAlta2 = {
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
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
    gama: "Alta",
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
      gama: "Alta",
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
    {
      marca: "Seagate",
      nombre: "Seagate BarraCuda 3.5 2TB SATA 3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: "Alta",
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
    marca: "AMD",
    nombre: "Sapphire Pulse AMD Radeon RX 6700 XT 12GB GDDR6",
    consumo: 230,
    potenciaRecomendada: 650,
    gama: "Media",
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
    gama: "Alta",
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
    gama: "Alta",
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

const buildGamaAlta3 = {
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
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
    gama: "Alta",
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
      gama: "Alta",
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
      gama: "Alta",
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
  ],
  gpu: {
    marca: "AMD",
    nombre: "Sapphire Pulse AMD Radeon RX 6700 XT 12GB GDDR6",
    consumo: 230,
    potenciaRecomendada: 650,
    gama: "Media",
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
    gama: "Alta",
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
    gama: "Alta",
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

const buildParaGamers = {
  placas: {
    marca: "MSI",
    nombre: "MSI MAG Z790 TOMAHAWK WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1200",
    tipoRam: "DDR5",
    gama: "Baja",
    numeroM2: 1,
    numeroSata: 2,
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Baja",
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
    gama: "Baja",
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
      gama: "Baja",
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
      gama: "Baja",
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
    gama: "Baja",
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
    gama: "Baja",
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
    gama: "BajaMedia",
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
    gama: "Baja",
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
    gama: "Baja",
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

const buildParaGamers2 = {
  placas: {
    marca: "MSI",
    nombre: "MSI MAG Z790 TOMAHAWK WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1200",
    tipoRam: "DDR5",
    gama: "Baja",
    numeroM2: 1,
    numeroSata: 2,
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Baja",
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
    gama: "Baja",
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
      gama: "Baja",
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
      gama: "Baja",
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
    gama: "Baja",
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
    gama: "Baja",
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
    gama: "BajaMedia",
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
    gama: "Baja",
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
    gama: "Baja",
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

const buildParaGamers3 = {
  placas: {
    marca: "MSI",
    nombre: "MSI MAG Z790 TOMAHAWK WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1200",
    tipoRam: "DDR5",
    gama: "Baja",
    numeroM2: 1,
    numeroSata: 2,
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Baja",
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
    gama: "Baja",
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
      gama: "Baja",
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
      gama: "Baja",
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
    gama: "Baja",
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
    gama: "Baja",
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
    gama: "BajaMedia",
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
    gama: "Baja",
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
    gama: "Baja",
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

const buildParaGamers4 = {
  placas: {
    marca: "MSI",
    nombre: "MSI MAG Z790 TOMAHAWK WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1200",
    tipoRam: "DDR5",
    gama: "Baja",
    numeroM2: 1,
    numeroSata: 2,
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Baja",
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
    gama: "Baja",
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
      gama: "Baja",
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
      gama: "Baja",
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
    gama: "Baja",
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
    gama: "Baja",
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
    gama: "BajaMedia",
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
    gama: "Baja",
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
    gama: "Baja",
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

const buildParaProfesionales = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Baja",
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Baja",
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
    marca: "Kingston",
    nombre: "Kingston FURY Beast DDR4 3200 MHz 16GB 2x8GB CL16",
    tipo: "DDR4",
    capacidad: 16,
    gama: "BajaMedia",
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
      gama: "Baja",
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
      gama: "Baja",
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
    gama: "Baja",
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
    gama: "Baja",
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
    gama: "BajaMedia",
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
    gama: "Baja",
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
    gama: "Baja",
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

const buildParaProfesionales2 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Baja",
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Baja",
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
    marca: "Kingston",
    nombre: "Kingston FURY Beast DDR4 3200 MHz 16GB 2x8GB CL16",
    tipo: "DDR4",
    capacidad: 16,
    gama: "BajaMedia",
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
      gama: "Baja",
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
      gama: "Baja",
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
    gama: "Baja",
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
    gama: "Baja",
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
    gama: "BajaMedia",
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
    gama: "Baja",
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
    gama: "Baja",
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

const buildParaProfesionales3 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Baja",
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Baja",
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
    marca: "Kingston",
    nombre: "Kingston FURY Beast DDR4 3200 MHz 16GB 2x8GB CL16",
    tipo: "DDR4",
    capacidad: 16,
    gama: "BajaMedia",
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
      gama: "Baja",
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
      gama: "Baja",
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
    gama: "Baja",
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
    gama: "Baja",
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
    gama: "BajaMedia",
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
    gama: "Baja",
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
    gama: "Baja",
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

const buildParaProfesionales4 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Baja",
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Baja",
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
    marca: "Kingston",
    nombre: "Kingston FURY Beast DDR4 3200 MHz 16GB 2x8GB CL16",
    tipo: "DDR4",
    capacidad: 16,
    gama: "BajaMedia",
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
      gama: "Baja",
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
      gama: "Baja",
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
    gama: "Baja",
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
    gama: "Baja",
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
    gama: "BajaMedia",
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
    gama: "Baja",
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
    gama: "Baja",
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

const buildParaEstudiantes = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Baja",
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Baja",
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
    gama: "Baja",
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
      gama: "Baja",
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
      gama: "Baja",
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
    gama: "Baja",
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
    gama: "Baja",
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
    gama: "BajaMedia",
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
    gama: "Baja",
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
    nombre: "Forgeon Cooler 4Pipes 120mm Ventilador CPU Negro",
    tipo: "Ventilador",
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

const buildParaEstudiantes2 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Baja",
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Baja",
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
    gama: "Baja",
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
      gama: "Baja",
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
      gama: "Baja",
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
    gama: "Baja",
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
    gama: "Baja",
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
    gama: "BajaMedia",
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
    gama: "Baja",
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
    nombre: "Forgeon Cooler 4Pipes 120mm Ventilador CPU Negro",
    tipo: "Ventilador",
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

const buildParaEstudiantes3 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Baja",
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Baja",
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
    gama: "Baja",
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
      gama: "Baja",
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
      gama: "Baja",
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
    gama: "Baja",
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
    gama: "Baja",
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
    gama: "BajaMedia",
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
    gama: "Baja",
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
    nombre: "Forgeon Cooler 4Pipes 120mm Ventilador CPU Negro",
    tipo: "Ventilador",
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

const buildParaEstudiantes4 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Baja",
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Baja",
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
    gama: "Baja",
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
      gama: "Baja",
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
      gama: "Baja",
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
    gama: "Baja",
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
    gama: "Baja",
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
    gama: "BajaMedia",
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
    gama: "Baja",
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
    nombre: "Forgeon Cooler 4Pipes 120mm Ventilador CPU Negro",
    tipo: "Ventilador",
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

const buildParaUsoBasico = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Baja",
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Baja",
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
    gama: "Baja",
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
      gama: "Baja",
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
      gama: "Baja",
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
    consumo: null,
    potenciaRecomendada: 750,
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
    gama: "Baja",
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
    gama: "BajaMedia",
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
    gama: "Baja",
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
    gama: "Baja",
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

const buildParaUsoBasico2 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Baja",
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Baja",
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
    gama: "Baja",
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
      gama: "Baja",
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
      gama: "Baja",
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
    consumo: null,
    potenciaRecomendada: 750,
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
    gama: "Baja",
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
    gama: "BajaMedia",
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
    gama: "Baja",
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
    gama: "Baja",
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

const buildParaUsoBasico3 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Baja",
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Baja",
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
    gama: "Baja",
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
      gama: "Baja",
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
      gama: "Baja",
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
    consumo: null,
    potenciaRecomendada: 750,
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
    gama: "Baja",
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
    gama: "BajaMedia",
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
    gama: "Baja",
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
    gama: "Baja",
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

const buildParaUsoBasico4 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Baja",
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
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Baja",
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
    gama: "Baja",
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
      gama: "Baja",
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
      gama: "Baja",
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
    consumo: null,
    potenciaRecomendada: 750,
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
    gama: "Baja",
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
    gama: "BajaMedia",
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
    gama: "Baja",
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
    gama: "Baja",
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

const buildsGamaBaja = [
  buildGamaBaja,
  buildGamaBaja1,
  buildGamaBaja2,
  buildGamaBaja3,
];
const buildsGamaMedia = [
  buildGamaMedia,
  buildGamaMedia1,
  buildGamaMedia2,
  buildGamaMedia3,
];
const buildsGamaAlta = [
  buildGamaAlta,
  buildGamaAlta1,
  buildGamaAlta2,
  buildGamaAlta3,
];

const buildsParaGamers = [
  buildParaGamers,
  buildParaGamers2,
  buildParaGamers3,
  buildParaGamers4,
];
const buildsParaProfesionales = [
  buildParaProfesionales,
  buildParaProfesionales2,
  buildParaProfesionales3,
  buildParaProfesionales4,
];
const buildsParaEstudiantes = [
  buildParaEstudiantes,
  buildParaEstudiantes2,
  buildParaEstudiantes3,
  buildParaEstudiantes4,
];
const buildsParaUsoBasico = [
  buildParaUsoBasico,
  buildParaUsoBasico2,
  buildParaUsoBasico3,
  buildParaUsoBasico4,
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
