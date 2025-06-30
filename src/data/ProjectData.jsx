import image1 from "./../assets/sam.jpg";
import image2 from "./../assets/sam2.jpg";
import image3 from "./../assets/sam3.jpg";
import image4 from "./../assets/sam4.png";
import image5 from "./../assets/sam5.jpg";
import image6 from "./../assets/sam6.jpg";
import image7 from "./../assets/sam7.jpg";
import image8 from "./../assets/sam8.jpg";
import image9 from "./../assets/sam9.jpg";

const ApartmentsData = [
  {
    id: 1,
    name: "მშენებარე ბინა თბილისში",
    description: "თანამედროვე ბინა ქალაქის ცენტრში მშენებლობის პროცესში, შესაფერისი ინვესტიციისთვის.",
    background: image1,
    price: {
      perMonth: 1800,
      perYear: 21600,
    },
    city: "tbilisi",
    rooms: 2,
    area: 75,
    sold: false,
    coments: [
      {
        opinion: "მომეწონა ადგილმდებარეობა და პროექტის დიზაინი.",
        rating: 4,
      },
    ],
    num: 577337744, 
  },
  {
    id: 2,
    name: "ახალი პროექტი ვაკეში",
    description: "ელეგანტური ბინა პრესტიჟულ ვაკეში, მშვიდი უბნის მახლობლად.",
    background: image2,
    price: {
      perMonth: 2500,
      perYear: 30000,
    },
    city: "tbilisi",
    rooms: 3,
    area: 90,
    sold: false,
    coments: [
      {
        opinion: "ძალიან კარგი ადგილმდებარეობა და მყუდრო გარემო.",
        rating: 5,
      },
    ],
    num:56694759

  },
  {
    id: 3,
    name: "ელიტური კორპუსი ბათუმში",
    description: "შავ ზღვასთან ახლოს მდებარე პრემიუმ კლასის ბინა.",
    background: image3,
    price: {
      perMonth: 2700,
      perYear: 32400,
    },
    city: "batumi",
    rooms: 2,
    area: 80,
    sold: true,
    coments: [
      {
        opinion: "საუკეთესო ხედები ზღვაზე!",
        rating: 5,
      },
    ],
    num: 56684396

  },
  {
    id: 4,
    name: "ბინები ავლაბარში",
    description: "ახალი საცხოვრებელი კომპლექსი ისტორიულ ავლაბარში.",
    background: image4,
    price: {
      perMonth: 1600,
      perYear: 19200,
    },
    city: "tbilisi",
    rooms: 2,
    area: 70,
    sold: false,
    coments: [
      {
        opinion: "მშვენიერი ინფრასტრუქტურა და კულტურული გარემო.",
        rating: 4,
      },
    ],
    num:  577937493

  },
  {
    id: 5,
    name: "ახალი კორპუსი საბურთალოზე",
    description: "თანამედროვე დიზაინით განახლებული კორპუსი საბურთალოს ცენტრში.",
    background: image5,
    price: {
      perMonth: 2200,
      perYear: 26400,
    },
    city: "tbilisi",
    rooms: 3,
    area: 85,
    sold: true,
    coments: [
      {
        opinion: "საკმაოდ დიდი სივრცე და კარგი ნათება.",
        rating: 4,
      },
    ],
    num: 577493829
    
  },
  {
    id: 6,
    name: "საცხოვრებელი ბლოკი გლდანში",
    description: "ეკონომ კლასის ბინები განვითარებად უბანში.",
    background: image6,
    price: {
      perMonth: 1200,
      perYear: 14400,
    },
    city: "tbilisi",
    rooms: 2,
    area: 65,
    sold: false,
    coments: [
      {
        opinion: "მისაღები ფასი და კარგია ახალგაზრდებისთვის.",
        rating: 3,
      },
    ],
    num: 56773920
  },
  {
    id: 7,
    name: "პრემიუმ ბინები ისანში",
    description: "სრულად აღჭურვილი პრემიუმ ბინები ისნის ცენტრში.",
    background: image7,
    price: {
      perMonth: 2600,
      perYear: 31200,
    },
    city: "tbilisi",
    rooms: 3,
    area: 95,
    sold: false,
    coments: [
      {
        opinion: "ძვირი, მაგრამ ნამდვილად ღირს.",
        rating: 5,
      },
    ],
    num:  577390472

  },
  {
    id: 8,
    name: "პროექტი დიდ დიღომში",
    description: "ახალი საცხოვრებელი ბლოკი მზარდ უბანში, იდეალურია ოჯახებისთვის.",
    background: image8,
    price: {
      perMonth: 1700,
      perYear: 20400,
    },
    city: "tbilisi",
    rooms: 3,
    area: 80,
    sold: false,
    coments: [
      {
        opinion: "კარგი გარემო და ინფრასტრუქტურა.",
        rating: 4,
      },
    ], num: 57793924
  },
  {
    id: 9,
    name: "ახალი საცხოვრებელი კორპუსი",
    description: "საერთო საცხოვრებელი ბლოკი თბილისის შემოგარენში, მისაღები ფასით.",
    background: image9,
    price: {
      perMonth: 1500,
      perYear: 18000,
    },
    city: "tbilisi",
    rooms: 2,
    area: 70,
    sold: true,
    coments: [
      {
        opinion: "ღირებულების შესაბამისად კარგი ვარიანტია.",
        rating: 4,
      },
    ],
    num:   577393843
    
  },
];

export default ApartmentsData;
