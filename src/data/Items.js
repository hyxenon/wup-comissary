import book2 from "../assets/shop/book2.png";
import book3 from "../assets/shop/book3.png";
import joggingPants from "../assets/shop/joggingPants.png";
import mensPolo from "../assets/shop/menspolo.jpg";
import womensNurse from "../assets/shop/nurseUniform1.jpg";
import womensUniform from "../assets/shop/womenUniform1.png";
import uniform2 from '../assets/shop/uniform2.png';
import uniform1 from '../assets/shop/uniform1.png';
import book1 from '../assets/shop/book1.png';
import cbaSkirt from '../assets/hci/cba uniform/cbauniform1.jpeg';
import cbaMenTop from '../assets/hci/cba uniform/mencorporate.jpeg';
import cbaWomenTop from '../assets/hci/cba uniform/womentop.jpg';
import cbaMenBottom from '../assets/hci/cba uniform/menbottom.png';
import accountant1 from '../assets/hci/medtech/accountancy book/accountant1.jpg'
import accountant2 from '../assets/hci/medtech/accountancy book/accountant2.jpg'
import accountant3 from '../assets/hci/medtech/accountancy book/accountant3.jpeg'


import medtech1 from '../assets/hci/medtech/medtech1.jpg'
import medtech2 from '../assets/hci/medtech/medtech2.jpeg'
import medtech3 from '../assets/hci/medtech/medtech3.jpeg'
import medtech4 from '../assets/hci/medtech/medtech4.jpeg'

import minor1 from '../assets/hci/minors/minor1.jpeg'
import minor2 from '../assets/hci/minors/minor2.jpeg'
import minor3 from '../assets/hci/minors/minor3.png'
import minor4 from '../assets/hci/minors/minor4.png'

import nursing1 from '../assets/hci/nursing/nursing1.jpeg'
import nursing2 from '../assets/hci/nursing/nursing2.jpeg'
import nursing3 from '../assets/hci/nursing/nursing3.jpeg'
import nursing4 from '../assets/hci/nursing/nursing4.jpeg'
import nursing5 from '../assets/hci/nursing/nursing5.jpeg'

import pharmaMenPolo from '../assets/hci/pharma uniform/men polo p1.jpeg'


import blouseElem from '../assets/hci/uniform/blouseElem.jpeg'
import collegePoloMen from '../assets/hci/uniform/collegePoloMen.jpeg'
import collegeSKirt from '../assets/hci/uniform/collegeSKirt.jpeg'
import collegeWomenBlouse from '../assets/hci/uniform/collegeWomenBlouse.jpeg'
import menPantsElem from '../assets/hci/uniform/menPantsElem.jpeg'
import menTopElem from '../assets/hci/uniform/menTopElem.jpeg'
import pantsCollegeMen from '../assets/hci/uniform/pantsCollegeMen.jpeg'
import skirtElem from '../assets/hci/uniform/skirtElem.jpeg'


import lanyard from '../assets/lanyard.jpg'
import collegeTieAndPin from '../assets/college tie and pin.jpg'
import tie from '../assets/tie.jpg'

const items = [
  {
    id: 1,
    category: "books",
    title: "Health Assessment in Nursing Sixth Edition",
    price: 500,
    img: book2,
  },
  {
    id: 2,
    category: "books",
    title: "Maternal & Child Health Nursing Eight Edition Volume 1",
    price: 500,
    img: book3,
  },
  {
    id: 3,
    category: "uniform",
    title: "PE Jogging Pants",
    price: 250,
    img: joggingPants,
  },
  {
    id: 4,
    category: "uniform",
    title: "Men's Polo Uniform",
    price: 300,
    img: mensPolo,
  },
  {
    id: 5,
    category: "uniform",
    title: "Women's Nurse Uniform",
    price: 300,
    img: womensNurse,
  },
  {
    id: 6,
    category: "uniform",
    title: "Women's Polo Uniform",
    price: 300,
    img: womensUniform,
  },
  {
    id: 7,
    category: "uniform",
    title: "Department Uniform",
    price: 300,
    img: uniform2,
  },
  {
    id: 8,
    category: "uniform",
    title: "PE Uniform Shirt",
    price: 300,
    img: uniform1,
  },
  {
    id: 9,
    category: "books",
    title: "Anatomy & Physiology Laboratory Manual",
    price: 700,
    img: book1,
  },
  {
    id: 10,
    category: "uniform",
    title: "CBA Women's Skirt",
    price: 700,
    img: cbaSkirt,
  },
  {
    id: 11,
    category: "uniform",
    title: "CBA Mens Top",
    price: 700,
    img: cbaMenTop,
  },
  {
    id: 12,
    category: "uniform",
    title: "CBA Women's Top",
    price: 700,
    img: cbaWomenTop,
  },
  {
    id: 13,
    category: "uniform",
    title: "CBA Men's Bottom",
    price: 700,
    img: cbaMenBottom,
  },
  {
    id: 14,
    category: "books",
    title: "Financial ACcounting & Reporting(fundamentals)",
    price: 700,
    img: accountant1,
  },
  {
    id: 15,
    category: "books",
    title: "Conceptual Framework & Accounting Standards 2020 Edition",
    price: 700,
    img: accountant2,
  },
  {
    id: 16,
    category: "books",
    title: "Introduction To Meetings, Incentives, Conferences And Events Management(MICE)",
    price: 700,
    img: accountant3,
  },
  {
    id: 17,
    category: "books",
    title: "Clinical Immunology Serology Third Edition",
    price: 700,
    img: medtech1,
  },
  {
    id: 18,
    category: "books",
    title: "Urinalysis and Body Fluids Fifth Edition",
    price: 700,
    img: medtech2,
  },
  {
    id: 19,
    category: "books",
    title: "The Phlebotomy Fourth Edition",
    price: 700,
    img: medtech3,
  },
  {
    id: 20,
    category: "books",
    title: "Urinalysis and Body Fluids Fourth Edition",
    price: 700,
    img: medtech4,
  },
  {
    id: 21,
    category: "books",
    title: "Science, Technology, and Society",
    price: 700,
    img: minor1,
  },
  {
    id: 22,
    category: "books",
    title: "Purposive Communication",
    price: 700,
    img: minor2,
  },
  {
    id: 23,
    category: "books",
    title: "Art Appreciation",
    price: 700,
    img: minor3,
  },
  {
    id: 24,
    category: "books",
    title: "Understanding The Self",
    price: 700,
    img: minor4,
  },
  {
    id: 25,
    category: "books",
    title: "Fundamentals of Nursing Eight Edition",
    price: 700,
    img: nursing1,
  },
  {
    id: 26,
    category: "books",
    title: "Notes On Nursing",
    price: 700,
    img: nursing2,
  },
  {
    id: 27,
    category: "books",
    title: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing 15 Edition Volume 1",
    price: 700,
    img: nursing3,
  },
  {
    id: 28,
    category: "books",
    title: "Comprehensive Guide for Nursing Competitive Exam",
    price: 700,
    img: nursing4,
  },
  {
    id: 29,
    category: "books",
    title: "Medical-Surgical Nursing",
    price: 700,
    img: nursing5,
  },
  {
    id: 30,
    category: "uniform",
    title: "Pharma Men's Polo",
    price: 700,
    img: pharmaMenPolo,
  },
  {
    id: 31,
    category: "uniform",
    title: "Women's Top Elementary",
    price: 700,
    img: blouseElem,
  },
  {
    id: 32,
    category: "uniform",
    title: "Men's Polo College",
    price: 700,
    img: collegePoloMen,
  },
  {
    id: 33,
    category: "uniform",
    title: "Women's Skirt College",
    price: 700,
    img: collegeSKirt,
  },
  {
    id: 34,
    category: "uniform",
    title: "Women's Blouse College",
    price: 700,
    img: collegeWomenBlouse,
  },
  {
    id: 35,
    category: "uniform",
    title: "Men's Pants Elementary",
    price: 700,
    img: menPantsElem,
  },
  {
    id: 36,
    category: "uniform",
    title: "Men's Polo Elementary",
    price: 700,
    img: menTopElem,
  },
  {
    id: 37,
    category: "uniform",
    title: "Men's Pants College",
    price: 700,
    img: pantsCollegeMen,
  },
  {
    id: 38,
    category: "uniform",
    title: "Women's Skirt Elementary",
    price: 700,
    img: skirtElem,
  },
  {
    id: 38,
    category: "others",
    title: "Lanyard",
    price: 80,
    img: lanyard,
  },
  {
    id: 38,
    category: "others",
    title: "SHS ribbon",
    price: 100,
    img: tie,
  },
  {
    id: 38,
    category: "others",
    title: "College ribbon and pin",
    price: 100,
    img: collegeTieAndPin,
  },
 
  
];

export default items;
