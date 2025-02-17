import express from "express";
import axios from "axios";

import { serverStart, formatDate } from "./utils/tools.js";
import {
  PORT,
  VIEWS_DIR,
  PUBLIC_DIR,
  BASE_URL,
  IMAGE_BASE_URL,
  REQ_OPTIONS,
} from "./config/constants.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", VIEWS_DIR);

app.use(express.static(PUBLIC_DIR));

app.get("/", (_req, res) => {
  res.render("index");
});

app.get("/movies", (_req, res) => {
  const movies = [
    {
      adult: false,
      backdrop_path: "/cdsjxSR55VS80IiJfrQ9i9pWqrp.jpg",
      belongs_to_collection: {
        id: 131292,
        name: "Homem de Ferro: Coleção",
        poster_path: "/kOhdPgiKCgnZixjpTxBag5Sxr4J.jpg",
        backdrop_path: "/rI8zOWkRQJdlAyQ6WJOSlYK6JxZ.jpg",
      },
      budget: 140000000,
      genres: [
        { id: 28, name: "Ação" },
        { id: 878, name: "Ficção científica" },
        { id: 12, name: "Aventura" },
      ],
      homepage: "",
      id: 1726,
      imdb_id: "tt0371746",
      origin_country: ["US"],
      original_language: "en",
      original_title: "Iron Man",
      overview:
        "Tony Stark é um industrial bilionário, que também é um brilhante inventor. Ao ser sequestrado ele é obrigado por terroristas a construir uma arma devastadora mas, ao invés disto, constrói uma armadura de alta tecnologia que permite que fuja de seu cativeiro. A partir de então ele passa a usá-la para combater o crime, sob o alter ego do Homem de Ferro.",
      popularity: 101.468,
      poster_path: "/6yObhDNEsAmFyMVfWNL64wQGyzj.jpg",
      production_companies: [
        {
          id: 420,
          logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
          name: "Marvel Studios",
          origin_country: "US",
        },
        {
          id: 7505,
          logo_path: "/837VMM4wOkODc1idNxGT0KQJlej.png",
          name: "Marvel Entertainment",
          origin_country: "US",
        },
        {
          id: 7297,
          logo_path: "/l29JYQVZbTcjZXoz4CUYFpKRmM3.png",
          name: "Fairview Entertainment",
          origin_country: "US",
        },
      ],
      production_countries: [
        { iso_3166_1: "US", name: "United States of America" },
      ],
      release_date: "2008-04-30",
      revenue: 585174222,
      runtime: 126,
      spoken_languages: [
        { english_name: "English", iso_639_1: "en", name: "English" },
        { english_name: "Persian", iso_639_1: "fa", name: "فارسی" },
        { english_name: "Urdu", iso_639_1: "ur", name: "اردو" },
        { english_name: "Arabic", iso_639_1: "ar", name: "العربية" },
      ],
      status: "Released",
      tagline: "Heróis não nascem. Eles são construídos.",
      title: "Homem de Ferro",
      video: false,
      vote_average: 7.648,
      vote_count: 26644,
    },
    {
      adult: false,
      backdrop_path: "/jPu8yiadqgzwFPGKJmGo637ASVP.jpg",
      belongs_to_collection: null,
      budget: 150000000,
      genres: [
        { id: 878, name: "Ficção científica" },
        { id: 28, name: "Ação" },
        { id: 12, name: "Aventura" },
      ],
      homepage: "",
      id: 1724,
      imdb_id: "tt0800080",
      origin_country: ["US"],
      original_language: "en",
      original_title: "The Incredible Hulk",
      overview:
        "Vivendo escondido e longe de Betty Ross, a mulher que ama, o cientista Bruce Banner busca um meio de retirar a radiação gama que está em seu sangue. Ao mesmo tempo ele precisa fugir da perseguição do general Ross, seu grande inimigo, e da máquina militar que tenta capturá-lo, na intenção de explorar o poder que faz com que Banner se transforme no Hulk.",
      popularity: 82.72,
      poster_path: "/pA6dp7I97HoTcZ30xKLxkYj59w2.jpg",
      production_companies: [
        {
          id: 420,
          logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
          name: "Marvel Studios",
          origin_country: "US",
        },
        {
          id: 11533,
          logo_path: "/tWM9pmzVYxok4GbQIttxdcml1yT.png",
          name: "Valhalla Motion Pictures",
          origin_country: "US",
        },
        {
          id: 7505,
          logo_path: "/837VMM4wOkODc1idNxGT0KQJlej.png",
          name: "Marvel Entertainment",
          origin_country: "US",
        },
      ],
      production_countries: [
        { iso_3166_1: "US", name: "United States of America" },
      ],
      release_date: "2008-06-12",
      revenue: 264770996,
      runtime: 120,
      spoken_languages: [
        { english_name: "Portuguese", iso_639_1: "pt", name: "Português" },
        { english_name: "Spanish", iso_639_1: "es", name: "Español" },
        { english_name: "English", iso_639_1: "en", name: "English" },
      ],
      status: "Released",
      tagline: "Nossa única esperança será algo incrível.",
      title: "O Incrível Hulk",
      video: false,
      vote_average: 6.2,
      vote_count: 11898,
    },
    {
      adult: false,
      backdrop_path: "/7lmBufEG7P7Y1HClYK3gCxYrkgS.jpg",
      belongs_to_collection: {
        id: 131292,
        name: "Homem de Ferro: Coleção",
        poster_path: "/kOhdPgiKCgnZixjpTxBag5Sxr4J.jpg",
        backdrop_path: "/rI8zOWkRQJdlAyQ6WJOSlYK6JxZ.jpg",
      },
      budget: 200000000,
      genres: [
        { id: 12, name: "Aventura" },
        { id: 28, name: "Ação" },
        { id: 878, name: "Ficção científica" },
      ],
      homepage: "",
      id: 10138,
      imdb_id: "tt1228705",
      origin_country: ["US"],
      original_language: "en",
      original_title: "Iron Man 2",
      overview:
        "Em um mundo ciente da existência do Homem de Ferro, o inventor bilionário Tony Stark sofre pressão de todos os lados para compartilhar sua tecnologia com as forças armadas. Ele resiste para divulgar os segredos de sua inigualável armadura, com medo de que estas informações caiam nas mãos erradas.",
      popularity: 85.903,
      poster_path: "/vzROjQbgKWMVf2EldXipCcjpuBL.jpg",
      production_companies: [
        {
          id: 420,
          logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
          name: "Marvel Studios",
          origin_country: "US",
        },
        {
          id: 7297,
          logo_path: "/l29JYQVZbTcjZXoz4CUYFpKRmM3.png",
          name: "Fairview Entertainment",
          origin_country: "US",
        },
        {
          id: 7505,
          logo_path: "/837VMM4wOkODc1idNxGT0KQJlej.png",
          name: "Marvel Entertainment",
          origin_country: "US",
        },
      ],
      production_countries: [
        { iso_3166_1: "US", name: "United States of America" },
      ],
      release_date: "2010-04-28",
      revenue: 623933331,
      runtime: 124,
      spoken_languages: [
        { english_name: "English", iso_639_1: "en", name: "English" },
        { english_name: "Russian", iso_639_1: "ru", name: "Pусский" },
        { english_name: "French", iso_639_1: "fr", name: "Français" },
      ],
      status: "Released",
      tagline:
        "Não é a armadura que faz o herói, mas o homem dentro da armadura.",
      title: "Homem de Ferro 2",
      video: false,
      vote_average: 6.843,
      vote_count: 21189,
    },
    {
      adult: false,
      backdrop_path: "/cDJ61O1STtbWNBwefuqVrRe3d7l.jpg",
      belongs_to_collection: {
        id: 131296,
        name: "Thor: Coleção",
        poster_path: "/uTa1QeqQkVKrUJClzyD91QBU5Re.jpg",
        backdrop_path: "/3KL8UNKFWgIKXzLHjwY0uwgjzYl.jpg",
      },
      budget: 150000000,
      genres: [
        { id: 12, name: "Aventura" },
        { id: 14, name: "Fantasia" },
        { id: 28, name: "Ação" },
      ],
      homepage: "",
      id: 10195,
      imdb_id: "tt0800369",
      origin_country: ["US"],
      original_language: "en",
      original_title: "Thor",
      overview:
        "Como filho de Odin, rei dos deuses nórdicos, Thor logo herdará o trono de Asgard de seu idoso pai. Porém, no dia de sua coroação, Thor reage com brutalidade quando os inimigos dos deuses entram no palácio violando o tratado. Como punição, Odin manda Thor para a Terra. Enquanto seu irmão Loki conspira em Asgard, Thor, agora sem seus poderes, enfrenta sua maior ameaça..",
      popularity: 71.598,
      poster_path: "/aEV9QmgBqjRTdjsvdCgdK89tavQ.jpg",
      production_companies: [
        {
          id: 420,
          logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
          name: "Marvel Studios",
          origin_country: "US",
        },
        {
          id: 7505,
          logo_path: "/837VMM4wOkODc1idNxGT0KQJlej.png",
          name: "Marvel Entertainment",
          origin_country: "US",
        },
      ],
      production_countries: [
        { iso_3166_1: "US", name: "United States of America" },
      ],
      release_date: "2011-04-21",
      revenue: 449326618,
      runtime: 115,
      spoken_languages: [
        { english_name: "English", iso_639_1: "en", name: "English" },
      ],
      status: "Released",
      tagline: "A coragem é imortal.",
      title: "Thor",
      video: false,
      vote_average: 6.8,
      vote_count: 21313,
    },
    {
      adult: false,
      backdrop_path: "/yFuKvT4Vm3sKHdFY4eG6I4ldAnn.jpg",
      belongs_to_collection: {
        id: 131295,
        name: "Capitão América: Coleção",
        poster_path: "/9Az8phwtTIQ4THpizQ54Xa6dB7x.jpg",
        backdrop_path: "/7kVucUYqz8fZkOmFtA8opDwJFXM.jpg",
      },
      budget: 140000000,
      genres: [
        { id: 28, name: "Ação" },
        { id: 12, name: "Aventura" },
        { id: 878, name: "Ficção científica" },
      ],
      homepage: "",
      id: 1771,
      imdb_id: "tt0458339",
      origin_country: ["US"],
      original_language: "en",
      original_title: "Captain America: The First Avenger",
      overview:
        "Durante a Segunda Guerra Mundial, Steve Rogers é um homem doente, do Brooklyn, que se transforma no super soldado Capitão América para ajudar nos esforços de guerra. Rogers deve parar o Caveira Vermelha, o implacável chefe de armas de Adolf Hitler e líder de uma organização que pretende usar um misterioso mecanismo de incalculáveis poderes para dominar o mundo.",
      popularity: 83.959,
      poster_path: "/f976JQnjMhCTa1yLXz7UH1pV4DG.jpg",
      production_companies: [
        {
          id: 420,
          logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
          name: "Marvel Studios",
          origin_country: "US",
        },
        {
          id: 7505,
          logo_path: "/837VMM4wOkODc1idNxGT0KQJlej.png",
          name: "Marvel Entertainment",
          origin_country: "US",
        },
      ],
      production_countries: [
        { iso_3166_1: "US", name: "United States of America" },
      ],
      release_date: "2011-07-22",
      revenue: 370569774,
      runtime: 124,
      spoken_languages: [
        { english_name: "French", iso_639_1: "fr", name: "Français" },
        { english_name: "Norwegian", iso_639_1: "no", name: "Norsk" },
        { english_name: "English", iso_639_1: "en", name: "English" },
      ],
      status: "Released",
      tagline: "Quando patriotas se tornam heróis!",
      title: "Capitão América: O Primeiro Vingador",
      video: false,
      vote_average: 7,
      vote_count: 21594,
    },
    {
      adult: false,
      backdrop_path: "/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg",
      belongs_to_collection: {
        id: 86311,
        name: "Os Vingadores: Coleção",
        poster_path: "/gXyeDg4vLlhcFBxtoAaC03FRGbD.jpg",
        backdrop_path: "/zuW6fOiusv4X9nnW3paHGfXcSll.jpg",
      },
      budget: 220000000,
      genres: [
        { id: 878, name: "Ficção científica" },
        { id: 28, name: "Ação" },
        { id: 12, name: "Aventura" },
      ],
      homepage: "",
      id: 24428,
      imdb_id: "tt0848228",
      origin_country: ["US"],
      original_language: "en",
      original_title: "The Avengers",
      overview:
        "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.",
      popularity: 160.551,
      poster_path: "/j9hwS307Zlc5mQTbAnwV75vXG0H.jpg",
      production_companies: [
        {
          id: 420,
          logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
          name: "Marvel Studios",
          origin_country: "US",
        },
      ],
      production_countries: [
        { iso_3166_1: "US", name: "United States of America" },
      ],
      release_date: "2012-04-25",
      revenue: 1518815515,
      runtime: 143,
      spoken_languages: [
        { english_name: "English", iso_639_1: "en", name: "English" },
        { english_name: "Hindi", iso_639_1: "hi", name: "हिन्दी" },
        { english_name: "Russian", iso_639_1: "ru", name: "Pусский" },
      ],
      status: "Released",
      tagline: "Os maiores heróis da terra juntos.",
      title: "Os Vingadores: The Avengers",
      video: false,
      vote_average: 7.728,
      vote_count: 31190,
    },
    {
      adult: false,
      backdrop_path: "/iVped1djsF0tvGkvnHbzsE3ZPTF.jpg",
      belongs_to_collection: {
        id: 131292,
        name: "Homem de Ferro: Coleção",
        poster_path: "/kOhdPgiKCgnZixjpTxBag5Sxr4J.jpg",
        backdrop_path: "/rI8zOWkRQJdlAyQ6WJOSlYK6JxZ.jpg",
      },
      budget: 200000000,
      genres: [
        {
          id: 28,
          name: "Ação",
        },
        {
          id: 12,
          name: "Aventura",
        },
        {
          id: 878,
          name: "Ficção científica",
        },
      ],
      homepage: "",
      id: 68721,
      imdb_id: "tt1300854",
      origin_country: ["US"],
      original_language: "en",
      original_title: "Iron Man 3",
      overview:
        "Depois de um inimigo reduzir o mundo de Tony Stark a destroços, o Homem de Ferro precisa aprender a confiar em seus instintos para proteger aqueles que ama, especialmente sua namorada, e lutar contra seu maior medo: o fracasso.",
      popularity: 56.022,
      poster_path: "/yzL3IlELFTRnRLdGqRv33SecqtD.jpg",
      production_companies: [
        {
          id: 420,
          logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
          name: "Marvel Studios",
          origin_country: "US",
        },
      ],
      production_countries: [
        {
          iso_3166_1: "US",
          name: "United States of America",
        },
      ],
      release_date: "2013-04-18",
      revenue: 1215577205,
      runtime: 130,
      spoken_languages: [
        {
          english_name: "English",
          iso_639_1: "en",
          name: "English",
        },
      ],
      status: "Released",
      tagline: "Liberte o poder por trás da armadura.",
      title: "Homem de Ferro 3",
      video: false,
      vote_average: 6.9,
      vote_count: 22340,
    },
  ];
  const config = {
    movieDb: movies,
    imageBaseUrl: IMAGE_BASE_URL,
    dateFormatter: formatDate,
  };

  // for await (const { id, name } of database) {
  //   const url = `${BASE_URL}/${id}?language=pt-BR`;

  //   try {
  //     const response = await axios.get(url, REQ_OPTIONS);
  //     const result = response.data;
  //     movies.push(result);
  //     console.log(result);

  //     console.log(`Fetched movie => ${result.title}`);
  //   } catch (error) {
  //     console.error(`Error fetching movie ${name} => ${error}`);
  //   }
  // }

  res.status(200).render("movies", config);
});

app.listen(PORT, (error) => serverStart(error, PORT));
