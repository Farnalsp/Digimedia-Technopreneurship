import { Place } from '../types';

export const popularDestinations: Place[] = [
  {
    id: '1',
    name: 'Monumen Nasional (Monas)',
    location: 'Jakarta',
    image: 'https://storage.jakarta-tourism.go.id/public/images/article/8437415341664213099.jpg',
    description: 'Simbol kemerdekaan Indonesia yang megah'
  },
  {
    id: '2',
    name: 'Candi Borobudur',
    location: 'Yogyakarta',
    image: 'https://assets-a1.kompasiana.com/items/album/2021/04/28/tempat-wisata-sekitar-candi-borobudur-60893a04d541df5e5c65c512.jpg',
    description: 'Candi Buddha terbesar di dunia'
  },
  {
    id: '3',
    name: 'Candi Prambanan',
    location: 'Yogyakarta',
    image: 'https://q-xx.bstatic.com/xdata/images/landmark/608x352/237195.webp?k=0336bdf0bc5ab990cc9a3124474ecfb187c8ab200ed2c459f05a6b2d8b2fde6a&o=',
    description: 'Kompleks candi Hindu terbesar di Indonesia'
  },
  {
    id: '4',
    name: 'Danau Toba',
    location: 'Sumatera Utara',
    image: 'https://kwriu.kemdikbud.go.id/wp-content/uploads/2017/05/Danau-Toba-featured.jpg',
    description: 'Danau vulkanik terbesar di dunia'
  },
  {
    id: '5',
    name: 'Museum Sonobudoyo',
    location: 'Yogyakarta',
    image: 'https://radiostar.harianjogja.com/assets/2024/05/WhatsApp_Image_2022-02-11_at_13_26_31.jpeg',
    description: 'Museum budaya Jawa dengan koleksi artefak bersejarah'
  },
  {
    id: '6',
    name: 'Pulau Komodo',
    location: 'Nusa Tenggara Timur',
    image: 'https://www.imigrasikendari.com/wp-content/uploads/2024/03/pulau-komodo.jpg',
    description: 'Rumah bagi komodo, hewan purba yang langka'
  }
];

export const nearbyPlaces: Place[] = [
  {
    id: '1',
    name: 'Monumen Nasional',
    location: 'Jakarta Pusat',
    distance: 2.1,
    image: 'https://storage.jakarta-tourism.go.id/public/images/article/8437415341664213099.jpg'
  },
  {
    id: '2',
    name: 'Kota Tua Jakarta',
    location: 'Jakarta Barat',
    distance: 3.5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjHPrA7nvR-We6g0N7eJQxcKf59f4eZ6DK9AFUm_siTFYerxH20CCA7WPtVPxGaZX6h0&usqp=CAU'
  },
  {
    id: '3',
    name: 'Ancol Dreamland',
    location: 'Jakarta Utara',
    distance: 4.2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ZGOe5_UEPgap4QIvXFmR9dqfRT7LMDYBCQ&s'
  },
  {
    id: '4',
    name: 'Taman Mini Indonesia Indah',
    location: 'Jakarta Timur',
    distance: 5.8,
    image: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/activities/r6tztd5vryfphrtmifxq/TiketTamanMiniIndonesiaIndah-KlookIndonesia.jpg'
  },
  {
    id: '5',
    name: 'Ragunan Zoo',
    location: 'Jakarta Selatan',
    distance: 6.3,
    image: 'https://www.arina.id/images/post/16_9/taman-margasatwa-ragunan-antaranews_1734892134.webp'
  }
];